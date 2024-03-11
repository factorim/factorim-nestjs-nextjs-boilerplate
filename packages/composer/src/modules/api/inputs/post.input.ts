import { Field, InputType } from '@nestjs/graphql'

// Create

@InputType()
export class CreatePostData {
  @Field()
  title: string

  @Field()
  content: string
}

@InputType()
export class CreatePostRelation {
  @Field()
  userId: string
}

export interface CreatePostMutation {
  data: CreatePostData
  relation: CreatePostRelation
}
