import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { ConfigService } from '@nestjs/config'

import { EmailValidationModule } from 'src/modules/emailValidation/emailValidation.module'
import { GoogleModule } from 'src/modules/google/google.module'
import { SecurityConfig } from 'src/config/config.interface'
import { PasswordService } from './services/password.service'
import { JwtAuthGuard } from './guards/jwt.guard'
import { AuthService } from './services/auth.service'
import { AuthResolver } from './auth.resolver'
import { JwtStrategy } from './strategies/jwt.strategy'
import { ApiKeyStrategy } from './strategies/apikey.strategy'
import { SignInService } from './services/signin.service'
import { SignUpService } from './services/signup.service'

@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>('security')
        return {
          secret: securityConfig.accessSecret,
          signOptions: {
            expiresIn: securityConfig.expiresIn,
          },
        }
      },
      inject: [ConfigService],
    }),
    EmailValidationModule,
    GoogleModule,
  ],
  providers: [
    AuthService,
    PasswordService,
    SignInService,
    SignUpService,
    AuthResolver,
    JwtStrategy,
    JwtAuthGuard,
    ApiKeyStrategy,
  ],
  exports: [JwtAuthGuard],
})
export class AuthModule {}
