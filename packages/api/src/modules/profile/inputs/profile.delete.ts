import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class DeleteProfileData {
  @Field()
  token: string

  @Field()
  code: string
}
