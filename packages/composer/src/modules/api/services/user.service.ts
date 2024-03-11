import { Injectable, Logger } from '@nestjs/common'
import { gql } from 'graphql-request'

import { ApiService } from '../api.service'

@Injectable()
export class ApiUserService {
  private readonly logger = new Logger(ApiUserService.name)

  constructor(private readonly apiService: ApiService) {}

  async get() {
    const query = gql`
      query usersService {
        usersService {
          users {
            id
            email
            roles
          }
          totalCount
        }
      }
    `

    const data = await this.apiService.execute(query)
    return data.usersService
  }
}
