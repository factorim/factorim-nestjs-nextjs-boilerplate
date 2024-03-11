import { Logger, UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard'
import { User } from 'src/modules/user/models/user.model'
import { ProfileService } from './profile.service'
import { UserEntity } from 'src/modules/user/decorators/user.decorator'
import { DeleteProfileData } from './inputs/profile.delete'
import { UpdateProfileData } from './inputs/profile.update'
import { ChangeEmailData, ChangeEmailRequestData } from './inputs/email.input'

@Resolver()
export class ProfileResolver {
  private readonly logger = new Logger(ProfileResolver.name)

  constructor(private profileService: ProfileService) {}

  // Mutations

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async updateProfile(
    @UserEntity() user: User,
    @Args('data') data: UpdateProfileData,
  ) {
    try {
      await this.profileService.update(user.id, data)
      return true
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  async changeEmailRequest(
    @UserEntity() user: User,
    @Args('data') data: ChangeEmailRequestData,
  ) {
    const token = await this.profileService.changeEmailRequest(data)
    return token
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async changeEmail(
    @UserEntity() user: User,
    @Args('data') data: ChangeEmailData,
  ) {
    try {
      await this.profileService.changeEmail(user.id, data)
      return true
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  async deleteProfileRequest(@UserEntity() user: User) {
    try {
      return await this.profileService.requestDelete(user)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async deleteProfile(
    @UserEntity() user: User,
    @Args('data') data: DeleteProfileData,
  ) {
    try {
      return await this.profileService.delete(user.id, data)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }
}
