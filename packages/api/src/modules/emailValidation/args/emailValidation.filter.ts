import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class EmailValidationFilterInput {
  @Field({ nullable: true })
  keyword: string

  @Field({ nullable: true })
  checked: boolean

  @Field({ nullable: true })
  claimed: boolean
}
