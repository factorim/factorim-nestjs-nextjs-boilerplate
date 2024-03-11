import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { OpenaiService } from './openai.service'

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        baseURL: 'https://api.openai.com/v4/completions',
        timeout: 5000,
        maxRedirects: 3,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer `,
          'Content-Type': 'application/json',
        },
        // timeout: parseInt(configService.get('http.timeout')),
        // maxRedirects: configService.get('http.maxRedirects'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [OpenaiService],
  exports: [OpenaiService],
})
export class OpenaiModule {}
