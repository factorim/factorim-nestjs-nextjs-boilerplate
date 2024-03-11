import { configClientSchema } from './config.schema'
import { Config, Environment, Theme } from '@/types'
import { getRequiredEnvVar } from '@/utils/config'

const name = 'Factorim'

export const config: Config = {
  env: process.env.ENV
    ? (process.env.ENV as Environment)
    : Environment.PRODUCTION,
  name,
  version: process.env.version ? process.env.version : 'v0.0.0',
  langs: ['en', 'fr'],
  themes: [Theme.DARK, Theme.LIGHT],
  api: {
    graphql: {
      url: getRequiredEnvVar('NEXT_PUBLIC_API_GRAPHQL_URL', '#'),
      wsUrl: getRequiredEnvVar('NEXT_PUBLIC_API_GRAPHQL_WS_URL', '#'),
    },
  },
  auth: {
    jwtRefreshIn: parseInt(
      getRequiredEnvVar('NEXT_PUBLIC_AUTH_JWT_REFRESH_IN', 60),
    ),
  },
  social: {
    github: getRequiredEnvVar('NEXT_PUBLIC_SOCIAL_GITHUB_URL', '#'),
    twitter: getRequiredEnvVar('NEXT_PUBLIC_SOCIAL_TWITTER_URL', '#'),
  },
  googleTagManagerId: getRequiredEnvVar(
    'NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID',
    '',
  ),
}

export const getClientConfiguration = async (): Promise<Config> => {
  return config
}

// Schema validation
getClientConfiguration().then((config) => {
  const validationResult = configClientSchema.validate(config)

  if (validationResult.error) {
    throw new Error(`Invalid config: ${validationResult.error.message}`)
  }
})

export default getClientConfiguration
