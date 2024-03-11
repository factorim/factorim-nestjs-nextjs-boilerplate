import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdatePostData {
  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  content?: string

  @Field({ nullable: true })
  enabled?: boolean
}
