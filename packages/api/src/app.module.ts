import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { PrismaModule } from 'nestjs-prisma'
import winston from 'winston'
import { utilities, WinstonModule } from 'nest-winston'

import config from 'src/config/config'
import { Environment, LogConfig } from './config/config.interface'
import { configValidator } from 'src/config/config.validator'
import { loggingMiddleware } from 'src/middlewares/logging.middleware'
import { AppController } from 'src/modules/app/app.controller'
import { AppService } from 'src/modules/app/app.service'
import { AuthModule } from 'src/modules/auth/auth.module'
import { GqlConfigService } from 'src/graphql/graphql.service'
import { EmailValidationModule } from './modules/emailValidation/emailValidation.module'
import { EmailTemplateModule } from './modules/emailTemplate/emailTemplate.module'
import { PostModule } from 'src/modules/post/post.module'
import { ProfileModule } from './modules/profile/profile.module'
import { PubSubModule } from './modules/pubSub/pubSub.module'
import { HealthModule } from 'src/modules/health/health.module'
import { UserModule } from 'src/modules/user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: configValidator,
    }),
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const name = configService.get<string>('name')
        const env = configService.get<Environment>('env')
        const logConfig = configService.get<LogConfig>('log')
        return {
          transports: [
            new winston.transports.Console({
              level: logConfig.level,
              format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.ms(),
                env !== Environment.PRODUCTION
                  ? utilities.format.nestLike(name, {
                      colors: true,
                      prettyPrint: true,
                    })
                  : winston.format.json(),
              ),
            }),
          ],
        }
      },
    }),
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: () => {
        return {
          middlewares: [loggingMiddleware()],
          explicitConnect: false,
        }
      },
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    AuthModule,
    EmailValidationModule,
    EmailTemplateModule,
    HealthModule,
    PostModule,
    ProfileModule,
    PubSubModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
