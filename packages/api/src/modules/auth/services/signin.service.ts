import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { UserAuth, UserStatus } from '@prisma/client'

import { GoogleService } from 'src/modules/google/google.service'
import { PasswordService } from './password.service'
import { AuthService } from './auth.service'
import { Token } from '../models/token.model'

@Injectable()
export class SignInService {
  private readonly logger = new Logger(SignInService.name)

  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly authService: AuthService,
    private readonly googleService: GoogleService,
  ) {}

  async signin(email: string, password: string): Promise<Token> {
    const user = await this.prisma.user.findUnique({
      where: { email, auth: UserAuth.CREDENTIALS },
    })

    if (!user) {
      throw new NotFoundException('User not found')
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password,
    )

    if (!passwordValid) {
      throw new BadRequestException('Invalid password')
    }

    return this.authService.generateTokens({
      id: user.id,
      email: user.email,
      name: user.name,
      roles: user.roles,
    })
  }

  async signinGoogle(idToken: string): Promise<Token> {
    const tokenInfo = await this.googleService.oauth2TokenInfo(idToken)
    if (!tokenInfo.email) {
      throw new BadRequestException('Invalid token')
    }
    const user = await this.prisma.user.findUnique({
      where: { email: tokenInfo.email },
    })

    if (user) {
      return this.authService.generateTokens({
        id: user.id,
        email: user.email,
        name: user.name,
        roles: user.roles,
      })
    }

    const createdUser = await this.prisma.user.create({
      data: {
        auth: UserAuth.GOOGLE,
        email: tokenInfo.email,
        status: UserStatus.ACTIVE,
      },
    })

    this.logger.log({ message: 'New user created', userId: createdUser.id })
    return this.authService.generateTokens({
      id: user.id,
      email: user.email,
      name: user.name,
      roles: user.roles,
    })
  }
}
