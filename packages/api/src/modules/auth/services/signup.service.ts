import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { EmailType, Prisma, UserRole } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

import { EmailValidationService } from 'src/modules/emailValidation/emailValidation.service'
import { AuthService } from './auth.service'
import { PasswordService } from './password.service'
import { SignUpData, SignUpRequestData } from '../inputs/signup.input'
import { Token } from '../models/token.model'

const emailActionLimit = 5

@Injectable()
export class SignUpService {
  private readonly logger = new Logger(SignUpService.name)

  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly authService: AuthService,
    private readonly emailValidationService: EmailValidationService,
  ) {}

  async signupRequest(signUpRequestData: SignUpRequestData) {
    const userExists = await this.prisma.user.findFirst({
      where: { email: signUpRequestData.email },
    })
    if (userExists) {
      throw new ConflictException('User already exists')
    }

    const emailActionCreated = await this.emailValidationService.create({
      type: EmailType.SIGN_UP,
      token: uuidv4(),
      email: signUpRequestData.email.toLowerCase(),
      lang: signUpRequestData.lang,
      code: Math.floor(100000 + Math.random() * 900000).toString(),
    })

    await this.emailValidationService.sendSignupRequest(emailActionCreated)
    return {
      email: signUpRequestData.email,
      token: emailActionCreated.token,
    }
  }

  async signup(signUpData: SignUpData): Promise<Token> {
    console.log('signUpData', signUpData)

    const action = await this.emailValidationService.find({
      token: signUpData.token,
    })

    await this.emailValidationService.checked(action.id)

    if (!action) {
      throw new NotFoundException('Token not found')
    } else if (action.claimed) {
      throw new ConflictException('Token already claimed')
    } else if (action.checked >= emailActionLimit) {
      throw new ConflictException('Too many attempts')
    } else if (signUpData.code !== action.code) {
      throw new UnauthorizedException('Invalid code')
    }

    const hashedPassword = await this.passwordService.hashPassword(
      signUpData.password,
    )

    try {
      const user = await this.prisma.user.create({
        data: {
          email: action.email,
          name: signUpData.name,
          password: hashedPassword,
          roles: [UserRole.USER],
          lang: action.lang,
        },
      })

      await this.emailValidationService.claim(action.id)

      const { accessToken, accessTokenExp, refreshToken } =
        this.authService.generateTokens({
          id: user.id,
          email: user.email,
          name: user.name,
          roles: user.roles,
        })
      return {
        accessToken,
        accessTokenExp,
        refreshToken,
      }
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException(`Email ${action.email} already used.`)
      }
      throw new Error(e)
    }
  }
}
