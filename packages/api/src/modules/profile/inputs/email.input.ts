import { IsEmail } from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ChangeEmailRequestData {
  @Field()
  @IsEmail()
  email: string
}

@InputType()
export class ChangeEmailData {
  @Field()
  token: string

  @Field()
  code: string
}
