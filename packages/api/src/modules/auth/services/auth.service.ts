import { Injectable, Logger, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { User } from '@prisma/client'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

import { Token, TokenPayload } from '../models/token.model'
import { ApiConfig, SecurityConfig } from 'src/config/config.interface'

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name)

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  validateUser(userId: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: userId } })
  }

  validateApiKey(apiKey: string) {
    const apiConfig = this.configService.get<ApiConfig>('api')
    return apiConfig.key === apiKey
  }

  generateTokens(payload: TokenPayload): Token {
    const accessToken = this.generateAccessToken(payload)
    const refreshToken = this.generateRefreshToken(payload)

    const decoded = this.jwtService.decode(accessToken) as { exp: number }
    return {
      accessToken,
      accessTokenExp: decoded.exp,
      refreshToken,
    }
  }

  private generateAccessToken(payload: TokenPayload): string {
    return this.jwtService.sign(payload)
  }

  private generateRefreshToken(payload: TokenPayload): string {
    const securityConfig = this.configService.get<SecurityConfig>('security')
    return this.jwtService.sign(payload, {
      secret: this.configService.get<SecurityConfig>('security').refreshSecret,
      expiresIn: securityConfig.refreshIn,
    })
  }

  refreshToken(token: string) {
    try {
      const { id, email, name, roles } = this.jwtService.verify(token, {
        secret:
          this.configService.get<SecurityConfig>('security').refreshSecret,
      })

      return this.generateTokens({
        id,
        email,
        name,
        roles,
      })
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
}
