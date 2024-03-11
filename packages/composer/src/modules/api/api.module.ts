import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { ApiConfig } from 'src/config/config.interface'
import { ApiPostService } from './services/post.service'
import { ApiUserService } from './services/user.service'
import { ApiService } from './api.service'

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get<ApiConfig>('api').graphql.url,
        timeout: 5000,
        maxRedirects: 3,
        headers: {
          accept: 'application/json',
          'X-API-KEY': configService.get<ApiConfig>('api').key,
        },
        // timeout: parseInt(configService.get('http.timeout')),
        // maxRedirects: configService.get('http.maxRedirects'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [ApiService, ApiPostService, ApiUserService],
  exports: [ApiService, ApiPostService, ApiUserService],
})
export class ApiModule {}
