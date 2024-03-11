import { Controller, Get } from '@nestjs/common'

import { Post } from 'src/modules/openai/interfaces/post.interface'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  generateNews(): Promise<Post> {
    return this.appService.generateNews()
  }
}
