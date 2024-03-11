import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { ConfigService } from '@nestjs/config'

import { GoogleService } from './google.service'

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [],
      useFactory: async () => ({
        baseURL: 'https://oauth2.googleapis.com/',
        timeout: 5000,
        maxRedirects: 3,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [GoogleService],
  exports: [GoogleService],
})
export class GoogleModule {}
