import Joi from 'joi'

export const configClientSchema = Joi.object({
  env: Joi.string().valid('production', 'development', 'test').required(),
  name: Joi.string().required(),
  version: Joi.string().required(),
  langs: Joi.array().required(),
  themes: Joi.array().required(),
  api: Joi.object({
    graphql: Joi.object({
      url: Joi.string().required(),
      wsUrl: Joi.string().required(),
    }).required(),
  }).required(),
  auth: Joi.object({
    jwtRefreshIn: Joi.number().required(),
  }).required(),
  social: Joi.object({
    github: Joi.string().required(),
    twitter: Joi.string().required(),
  }).required(),
  googleTagManagerId: Joi.string().required(),
})

export const configServerSchema = Joi.object({
  env: Joi.string().valid('production', 'development', 'test').required(),
  api: Joi.object({
    graphql: Joi.object({
      url: Joi.string().required(),
      wsUrl: Joi.string().required(),
    }).required(),
  }).required(),
  auth: Joi.object({
    secret: Joi.string().required(),
    sessionMaxAge: Joi.number().required(),
    googleClientId: Joi.string().required(),
    googleClientSecret: Joi.string().required(),
  }).required(),
})
