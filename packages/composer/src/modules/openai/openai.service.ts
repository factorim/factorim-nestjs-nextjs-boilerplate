import { Injectable, Logger } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import OpenAI from 'openai'
import { Post } from './interfaces/post.interface'

@Injectable()
export class OpenaiService {
  private readonly logger = new Logger(OpenaiService.name)

  constructor(private readonly httpService: HttpService) {}

  async generateNews(content: string): Promise<Post> {
    const openai = new OpenAI()
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content,
        },
      ],
      model: 'gpt-3.5-turbo',
    })

    const data = completion.choices[0].message.content

    const lines = data.trim().split('\n')

    const postTitle = lines[0].split(': ')[1] || lines[0]
    const postContent = lines.slice(2).join('\n')

    const post = {
      title: postTitle,
      content: postContent,
    }

    return post
  }
}
