import { Config, Environment, LogLevel } from './config.interface'
import * as pack from '../../package.json'

const convertToName = (inputString: string): string => {
  return inputString
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const name = convertToName(pack.name)

export default (): Config => ({
  env: (process.env.NODE_ENV as Environment) || Environment.PRODUCTION,
  name,
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  version: pack.version,
  api: {
    key: process.env.API_KEY,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: `${name} Swagger`,
    description: `${name} Swagger definitions`,
    version: pack.version,
    path: 'docs',
  },
  graphql: {
    playgroundEnabled: process.env.GRAPHQL_PLAYGROUND === 'true',
    debug: process.env.GRAPHQL_DEBUG === 'true',
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: process.env.JWT_EXPIRES_IN,
    refreshIn: process.env.JWT_REFRESH_IN,
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    bcryptSaltOrRound: 10,
  },
  app: {
    url: process.env.APP_URL,
  },
  email: {
    sendgridApiKey: process.env.EMAIL_SENDGRID_API_KEY,
    contact: process.env.EMAIL_CONTACT,
    noReply: process.env.EMAIL_NO_REPLY,
    validationExpiration: +process.env.EMAIL_VALIDATION_EXPIRATION || 15,
  },
  cache: {
    ttl: +process.env.CACHE_TTL || 3600,
  },
  log: {
    level: (process.env.LOG_LEVEL as LogLevel) || LogLevel.INFO,
  },
})
