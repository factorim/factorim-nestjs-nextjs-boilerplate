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
  log: LogConfig
}

export interface ApiConfig {
  key: string
  graphql: {
    url: string
    wsUrl: string
  }
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

export interface LogConfig {
  level: LogLevel
}
