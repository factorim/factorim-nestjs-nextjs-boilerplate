import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class ApiService {
  private readonly logger = new Logger(ApiService.name)

  constructor(private readonly httpService: HttpService) {}

  async execute(operation: string, variables: object | null = null) {
    const observable = this.httpService
      .post(null, {
        query: operation,
        variables,
      })
      .pipe(map((response) => response.data))

    const result = await lastValueFrom(observable)

    if (result.errors) {
      this.logger.error({
        msg: 'GraphQL operation failed',
        error: result.errors,
      })
      throw new BadRequestException('GraphQL operation failed')
    }

    return result.data
  }
}
