import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class EmailValidationArgs {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  token?: string
}
