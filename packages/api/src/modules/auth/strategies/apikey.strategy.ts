import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import Strategy from 'passport-headerapikey'

import { AuthService } from '../services/auth.service'

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
  constructor(private readonly authService: AuthService) {
    super({ header: 'X-API-KEY', prefix: '' }, true, async (apiKey, done) => {
      return this.validate(apiKey, done)
    })
  }

  public validate = async (
    apiKey: string,
    done: (error: Error, data) => object,
  ) => {
    const valid = this.authService.validateApiKey(apiKey)
    if (valid) {
      done(null, true)
    } else {
      done(new UnauthorizedException(), null)
    }
  }
}
