import { Injectable, Logger } from '@nestjs/common'
import { gql } from 'graphql-request'

import { CreatePostData, CreatePostRelation } from '../inputs/post.input'
import { ApiService } from '../api.service'

@Injectable()
export class ApiPostService {
  private readonly logger = new Logger(ApiPostService.name)

  constructor(private readonly apiService: ApiService) {}

  async create(data: CreatePostData, relation: CreatePostRelation) {
    const mutation = gql`
      mutation createPostService(
        $data: CreatePostData!
        $relation: CreatePostRelation!
      ) {
        createPostService(data: $data, relation: $relation) {
          id
        }
      }
    `

    const variables = {
      data,
      relation,
    }

    return this.apiService.execute(mutation, variables)
  }
}
