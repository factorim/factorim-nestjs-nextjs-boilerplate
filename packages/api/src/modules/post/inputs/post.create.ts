import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreatePostData {
  @Field()
  title: string

  @Field()
  content: string

  @Field({ nullable: true })
  enabled?: boolean
}

@InputType()
export class CreatePostRelation {
  @Field({ nullable: true })
  userId?: string
}
