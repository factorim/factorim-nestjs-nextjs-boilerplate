export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface Config {
  env: Environment
  name: string
  version: string
  langs: string[]
  themes: Theme[]
  api: ApiConfig
  auth: AuthConfig
  social: SocialConfig
  googleTagManagerId: string
}

export interface ConfigServer {
  env: Environment
  api: ApiConfig
  auth: AuthServerConfig
}

export interface ApiConfig {
  graphql: {
    url: string
    wsUrl: string
  }
}

export interface AuthConfig {
  jwtRefreshIn: number
}

export interface AuthServerConfig {
  secret: string
  sessionMaxAge: number
  googleClientId: string
  googleClientSecret: string
}

export interface SocialConfig {
  github: string
  twitter: string
}
