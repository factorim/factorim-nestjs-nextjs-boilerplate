import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { v4 as uuidv4 } from 'uuid'
import { EmailType } from '@prisma/client'

import { EmailValidationService } from 'src/modules/emailValidation/emailValidation.service'
import { User } from 'src/modules/user/models/user.model'
import { DeleteProfileData } from './inputs/profile.delete'
import { UpdateProfileData } from './inputs/profile.update'
import { ChangeEmailData, ChangeEmailRequestData } from './inputs/email.input'

@Injectable()
export class ProfileService {
  constructor(
    private prisma: PrismaService,
    private readonly emailValidationService: EmailValidationService,
  ) {}

  update(id: string, updateProfileData: UpdateProfileData) {
    return this.prisma.user.update({
      data: { ...updateProfileData },
      where: { id },
    })
  }

  // Email

  async changeEmailRequest(changeEmailData: ChangeEmailRequestData) {
    const emailActionCreated = await this.emailValidationService.create({
      type: EmailType.CHANGE_EMAIL,
      token: uuidv4(),
      email: changeEmailData.email.toLowerCase(),
      code: Math.floor(100000 + Math.random() * 900000).toString(),
    })

    await this.emailValidationService.sendChangeEmail(emailActionCreated)
    return emailActionCreated.token
  }

  async changeEmail(userId: string, changeEmailData: ChangeEmailData) {
    const action = await this.emailValidationService.find({
      token: changeEmailData.token,
    })
    await this.emailValidationService.checked(action.id)

    if (action.claimed) {
      throw new ConflictException('Token already claimed')
    } else if (changeEmailData.code !== action.code) {
      throw new UnauthorizedException('Invalid code')
    }

    await this.prisma.user.update({
      data: { email: action.email },
      where: { id: userId },
    })

    await this.emailValidationService.claim(action.id)
  }

  // Delete

  async requestDelete(user: User) {
    const emailValidationCreated = await this.emailValidationService.create({
      type: EmailType.DELETE_ACCOUNT,
      token: uuidv4(),
      email: user.email,
      lang: user.lang,
      code: Math.floor(100000 + Math.random() * 900000).toString(),
    })

    await this.emailValidationService.sendDeleteAccount(emailValidationCreated)
    return emailValidationCreated.token
  }

  async delete(userId: string, deleteProfileData: DeleteProfileData) {
    const action = await this.emailValidationService.find({
      token: deleteProfileData.token,
    })

    await this.emailValidationService.checked(action.id)

    if (!action) {
      throw new NotFoundException('Token not found')
    }
    if (action.claimed) {
      throw new ConflictException('Token already claimed')
    }
    if (deleteProfileData.code !== action.code) {
      throw new UnauthorizedException('Invalid code')
    }

    await this.prisma.user.delete({
      where: { id: userId },
    })

    await this.emailValidationService.claim(action.id)

    return true
  }
}
