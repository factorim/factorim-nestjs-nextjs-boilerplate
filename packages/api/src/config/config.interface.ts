export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test',
  PROVISION = 'provision',
}

export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  HTTP = 'http',
  VERBOSE = 'verbose',
  DEBUG = 'debug',
  SILLY = 'silly',
}

export interface Config {
  env: Environment
  name: string
  port: number
  version: string
  api: ApiConfig
  cors: CorsConfig
  swagger: SwaggerConfig
  graphql: GraphqlConfig
  security: SecurityConfig
  app: AppConfig
  email: EmailConfig
  cache: CacheConfig
  log: LogConfig
}

export interface ApiConfig {
  key: string
}

export interface CorsConfig {
  enabled: boolean
}

export interface SwaggerConfig {
  enabled: boolean
  title: string
  description: string
  version: string
  path: string
}

export interface GraphqlConfig {
  playgroundEnabled: boolean
  debug: boolean
  schemaDestination: string
  sortSchema: boolean
}

export interface SecurityConfig {
  expiresIn: string
  refreshIn: string
  accessSecret: string
  refreshSecret: string
  bcryptSaltOrRound: string | number
}

export interface AppConfig {
  url: string
}

export interface EmailConfig {
  sendgridApiKey: string
  contact: string
  noReply: string
  validationExpiration: number
}

export interface CacheConfig {
  ttl: number
}

export interface LogConfig {
  level: LogLevel
}
