import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class UserArgs {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  email: string
}
