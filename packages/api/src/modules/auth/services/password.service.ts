import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { ConfigService } from '@nestjs/config'
import { EmailType } from '@prisma/client'
import { compare, hash } from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import { zxcvbn, zxcvbnOptions, ZxcvbnResult } from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en'

import { SecurityConfig } from 'src/config/config.interface'
import { EmailValidationService } from 'src/modules/emailValidation/emailValidation.service'
import {
  ChangePasswordData,
  ResetPasswordData,
  ResetPasswordRequestData,
} from '../inputs/password.input'
import {
  EMAIL_VALIDATION_LIMIT,
  PASSWORD_STRENGTH_LIMIT,
} from 'src/constants/limits'

@Injectable()
export class PasswordService {
  get bcryptSaltRounds(): string | number {
    const securityConfig = this.configService.get<SecurityConfig>('security')
    const saltOrRounds = securityConfig.bcryptSaltOrRound

    return Number.isInteger(Number(saltOrRounds))
      ? Number(saltOrRounds)
      : saltOrRounds
  }

  constructor(
    private configService: ConfigService,
    private readonly prisma: PrismaService,
    private readonly emailValidationService: EmailValidationService,
  ) {}

  validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword)
  }

  hashPassword(password: string): Promise<string> {
    return hash(password, this.bcryptSaltRounds)
  }

  checkPasswordStrength(password: string): ZxcvbnResult {
    const options = {
      translations: zxcvbnEnPackage.translations,
      graphs: zxcvbnCommonPackage.adjacencyGraphs,
      dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnEnPackage.dictionary,
      },
    }

    zxcvbnOptions.setOptions(options)
    return zxcvbn(password)
  }

  async resetPasswordRequest(resetPasswordInput: ResetPasswordRequestData) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { email: resetPasswordInput.email },
    })

    const emailActionCreated = await this.emailValidationService.create({
      type: EmailType.RESET_PASSWORD,
      token: uuidv4(),
      email: user.email.toLowerCase(),
      code: Math.floor(100000 + Math.random() * 900000).toString(),
      lang: user.lang,
    })

    await this.emailValidationService.sendResetPassword(emailActionCreated)
    return emailActionCreated.token
  }

  async resetPassword(resetPasswordInput: ResetPasswordData) {
    const action = await this.emailValidationService.find({
      token: resetPasswordInput.token,
    })

    await this.emailValidationService.checked(action.id)

    if (!action) {
      throw new NotFoundException('Action not found')
    } else if (action.claimed) {
      throw new ConflictException('Token already claimed')
    } else if (action.checked >= EMAIL_VALIDATION_LIMIT) {
      throw new ConflictException('Too many attempts')
    }

    // Check strength
    const pwdStrength = this.checkPasswordStrength(resetPasswordInput.password)
    if (pwdStrength.score < PASSWORD_STRENGTH_LIMIT) {
      throw new BadRequestException('Password too weak')
    }

    // Update user password
    const hashPassword = await this.hashPassword(resetPasswordInput.password)
    await this.prisma.user.update({
      data: {
        password: hashPassword,
      },
      where: {
        email: action.email,
      },
    })

    await this.emailValidationService.claim(action.id)
  }

  async changePassword(
    userId: string,
    userPassword: string,
    changePasswordData: ChangePasswordData,
  ) {
    // Check strength
    const pwdStrength = this.checkPasswordStrength(
      changePasswordData.newPassword,
    )
    if (pwdStrength.score < PASSWORD_STRENGTH_LIMIT) {
      throw new BadRequestException('Password too weak')
    }

    const hashedPassword = await this.hashPassword(
      changePasswordData.newPassword,
    )

    const passwordValid = await this.validatePassword(
      changePasswordData.password,
      userPassword,
    )

    if (!passwordValid) {
      throw new BadRequestException('Invalid password')
    }

    return this.prisma.user.update({
      data: {
        password: hashedPassword,
      },
      where: { id: userId },
    })
  }
}
