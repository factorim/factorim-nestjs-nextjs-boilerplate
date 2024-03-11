import { configServerSchema } from './config.schema'
import { ConfigServer, Environment } from '@/types'
import { getRequiredEnvVar } from '@/utils/config'

export const configServer: ConfigServer = {
  env: process.env.NODE_ENV as Environment,
  api: {
    graphql: {
      url: getRequiredEnvVar('API_INTERNAL_GRAPHQL_URL', '#'),
      wsUrl: getRequiredEnvVar('API_INTERNAL_GRAPHQL_WS_URL', '#'),
    },
  },
  auth: {
    secret: getRequiredEnvVar('AUTH_SECRET'),
    sessionMaxAge: parseInt(getRequiredEnvVar('AUTH_SESSION_MAX_AGE', 3600)),
    googleClientId: getRequiredEnvVar('AUTH_GOOGLE_CLIENT_ID'),
    googleClientSecret: getRequiredEnvVar('AUTH_GOOGLE_CLIENT_SECRET'),
  },
}

export const getServerConfiguration = async (): Promise<ConfigServer> => {
  return configServer
}

// Schema validation
getServerConfiguration().then((config) => {
  const validationResult = configServerSchema.validate(config)

  if (validationResult.error) {
    throw new Error(`Invalid config: ${validationResult.error.message}`)
  }
})

export default getServerConfiguration
