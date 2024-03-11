import Joi from 'joi'

export const configValidator = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development')
    .required(),
  PORT: Joi.number().default(3000).required(),
  API_KEY: Joi.string().required(),
  GRAPHQL_PLAYGROUND: Joi.boolean()
    .truthy('true')
    .falsy('false')
    .default(false),
  GRAPHQL_DEBUG: Joi.boolean().truthy('true').falsy('false').default(false),
  JWT_EXPIRES_IN: Joi.string().required(),
  JWT_REFRESH_IN: Joi.string().required(),
  JWT_ACCESS_SECRET: Joi.string().required(),
  JWT_REFRESH_SECRET: Joi.string().required(),
  APP_URL: Joi.string().required(),
  EMAIL_SENDGRID_API_KEY: Joi.string().required(),
  EMAIL_CONTACT: Joi.string().email().required(),
  EMAIL_NO_REPLY: Joi.string().email().required(),
  CACHE_TTL: Joi.number().default(3600),
  LOG_LEVEL: Joi.string()
    .valid('debug', 'info', 'warn', 'error', 'fatal')
    .default('info'),
})
