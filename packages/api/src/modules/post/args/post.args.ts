import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class PostArgs {
  @Field({ nullable: true })
  id?: string
}
