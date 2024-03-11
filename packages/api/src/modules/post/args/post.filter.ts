import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class PostFilterInput {
  @Field({ nullable: true })
  keyword: string

  @Field({ nullable: true })
  enabled: boolean
}
