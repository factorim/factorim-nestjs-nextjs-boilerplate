import { Injectable, Logger } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { map } from 'rxjs/operators'

import { GoogleOauthTokenInfo } from './models/google.model'

@Injectable()
export class GoogleService {
  private readonly logger = new Logger(GoogleService.name)

  constructor(private readonly httpService: HttpService) {}

  async oauth2TokenInfo(tokenId: string): Promise<GoogleOauthTokenInfo> {
    const variables = {
      id_token: tokenId,
    }

    try {
      const observable = this.httpService
        .post('tokeninfo', variables)
        .pipe(map((res) => res.data))
      return await lastValueFrom(observable)
    } catch (error) {
      throw new Error(error.response.data.error)
    }
  }
}
