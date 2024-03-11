import { InternalServerErrorException, Logger, UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { AuthService } from './services/auth.service'
import { SignInService } from './services/signin.service'
import { SignUpService } from './services/signup.service'
import { UserEntity } from 'src/modules/user/decorators/user.decorator'
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard'
import { SignUpRequest } from './models/auth.model'
import { Token } from './models/token.model'
import { SignInData } from './inputs/signin.input'
import { RefreshTokenData } from './inputs/refreshToken.input'
import { User } from 'src/modules/user/models/user.model'
import { SignUpData, SignUpRequestData } from './inputs/signup.input'
import {
  ChangePasswordData,
  ResetPasswordData,
  ResetPasswordRequestData,
} from './inputs/password.input'
import { PasswordService } from './services/password.service'

@Resolver(() => Token)
export class AuthResolver {
  private readonly logger = new Logger(AuthResolver.name)

  constructor(
    private readonly authService: AuthService,
    private readonly signInService: SignInService,
    private readonly signUpService: SignUpService,
    private readonly passwordService: PasswordService,
  ) {}

  // Mutations

  @Mutation(() => Token)
  async signin(@Args('data') { email, password }: SignInData) {
    const { accessToken, accessTokenExp, refreshToken } =
      await this.signInService.signin(email.toLowerCase(), password)

    return {
      accessToken,
      accessTokenExp,
      refreshToken,
    }
  }

  @Mutation(() => Token)
  async signinGoogle(@Args('idToken', { type: () => String }) idToken: string) {
    try {
      const { accessToken, accessTokenExp, refreshToken } =
        await this.signInService.signinGoogle(idToken)

      return {
        accessToken,
        accessTokenExp,
        refreshToken,
      }
    } catch (error) {
      this.logger.error('Error in signinGoogle:', error.message)
      throw new InternalServerErrorException(
        `An error occurred during Google sign-in ${error.message}`,
      )
    }
  }

  @Mutation(() => Token)
  async refreshToken(@Args() { token }: RefreshTokenData) {
    return this.authService.refreshToken(token)
  }

  @Mutation(() => SignUpRequest)
  async signupRequest(@Args('data') data: SignUpRequestData) {
    try {
      const signUpRequest = await this.signUpService.signupRequest(data)
      return signUpRequest
    } catch (error) {
      this.logger.error('Signup error', error)
      // Conflict
      if (error.response?.statusCode === 409) {
        return error
      }
      throw new InternalServerErrorException()
    }
  }

  @Mutation(() => Token)
  async signup(@Args('data') data: SignUpData) {
    try {
      const { accessToken, refreshToken } =
        await this.signUpService.signup(data)

      return {
        accessToken,
        refreshToken,
      }
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Mutation(() => String)
  async resetPasswordRequest(@Args('data') data: ResetPasswordRequestData) {
    const token = await this.passwordService.resetPasswordRequest(data)
    return token
  }

  @Mutation(() => Boolean)
  async resetPassword(@Args('data') data: ResetPasswordData) {
    await this.passwordService.resetPassword(data)
    return true
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async changePassword(
    @UserEntity() user: User,
    @Args('data') data: ChangePasswordData,
  ) {
    try {
      await this.passwordService.changePassword(user.id, user.password, data)
      return true
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }
}
