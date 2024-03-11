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
    graphql: {
      url: process.env.API_GRAPHQL_URL,
      wsUrl: process.env.API_GRAPHQL_WS_URL,
    },
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
  log: {
    level: (process.env.LOG_LEVEL as LogLevel) || LogLevel.INFO,
  },
})
