import { Logger } from '@nestjs/common'
import { Prisma } from '@prisma/client'

export function loggingMiddleware(): Prisma.Middleware {
  const logger = new Logger('loggingMiddleware')

  return async (params, next) => {
    const before = Date.now()
    const result = await next(params)
    const after = Date.now()

    // console.log('loggingMiddleware', params)

    logger.debug({
      message: 'Prisma Query',
      query: `${params.model}.${params.action}`,
      args: params.args,
      queryTime: `${after - before}ms`,
    })

    return result
  }
}
