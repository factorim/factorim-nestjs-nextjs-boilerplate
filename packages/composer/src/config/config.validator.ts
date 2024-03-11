import Joi from 'joi'

export const configValidator = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development')
    .required(),
  PORT: Joi.number().default(3000).required(),
  API_KEY: Joi.string().required(),
  API_GRAPHQL_URL: Joi.string().uri().required(),
  API_GRAPHQL_WS_URL: Joi.string().uri().required(),
  LOG_LEVEL: Joi.string()
    .valid('debug', 'info', 'warn', 'error', 'fatal')
    .default('info'),
})
