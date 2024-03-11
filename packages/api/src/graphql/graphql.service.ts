import { ConfigService } from '@nestjs/config'
import { ApolloDriverConfig } from '@nestjs/apollo'
import { Injectable } from '@nestjs/common'
import { GqlOptionsFactory } from '@nestjs/graphql'

import './graphql.enums'
import { GraphqlConfig } from 'src/config/config.interface'

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private configService: ConfigService) {}
  createGqlOptions(): ApolloDriverConfig {
    const graphqlConfig = this.configService.get<GraphqlConfig>('graphql')
    return {
      // schema options
      autoSchemaFile: graphqlConfig.schemaDestination,
      sortSchema: graphqlConfig.sortSchema,
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
        },
        'subscriptions-transport-ws': {
          path: '/graphql',
          onConnect: (connectionParams) => {
            return {
              req: {
                headers: { authorization: connectionParams.Authorization },
              },
            }
          },
        },
      },
      includeStacktraceInErrorResponses: graphqlConfig.debug,
      playground: graphqlConfig.playgroundEnabled,
      // Error
      formatError: (error) => {
        return {
          message: error.message,
          code: error.extensions?.code || 'INTERNAL_SERVER_ERROR',
        }
      },
    }
  }
}
