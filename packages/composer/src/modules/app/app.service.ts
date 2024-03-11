import { Injectable, Logger } from '@nestjs/common'

import { OpenaiService } from 'src/modules/openai/openai.service'
import { Post } from 'src/modules/openai/interfaces/post.interface'
import { ApiPostService } from 'src/modules/api/services/post.service'
import {
  CreatePostData,
  CreatePostRelation,
} from 'src/modules/api/inputs/post.input'
import { ApiUserService } from 'src/modules/api/services/user.service'

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)

  constructor(
    private readonly openaiService: OpenaiService,
    private readonly apiPostService: ApiPostService,
    private readonly apiUserService: ApiUserService,
  ) {}

  async generateNews(): Promise<Post> {
    const post = await this.openaiService.generateNews(
      'Can you write a very short random article? With a clear title tag and content tag please.',
    )

    try {
      const users = await this.apiUserService.get()
      if (!users?.users) {
        this.logger.error('No users found')
        throw new Error('No users found')
      }

      const data: CreatePostData = {
        title: post.title,
        content: post.content,
      }

      const relation: CreatePostRelation = {
        userId: users.users[0].id,
      }

      await this.apiPostService.create(data, relation)
    } catch (error) {
      this.logger.error(error)
    }

    return post
  }
}
