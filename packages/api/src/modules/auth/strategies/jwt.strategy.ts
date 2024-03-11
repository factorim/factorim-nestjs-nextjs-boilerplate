import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { User } from '@prisma/client'

import { SecurityConfig } from 'src/config/config.interface'
import { AuthService } from '../services/auth.service'
import { JwtDto } from '../dtos/jwt.dto'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly authService: AuthService,
    readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<SecurityConfig>('security').accessSecret,
    })
  }

  async validate(payload: JwtDto): Promise<User> {
    const user = await this.authService.validateUser(payload.id)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
