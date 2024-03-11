import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, MinLength } from 'class-validator'

@InputType()
export class ChangePasswordData {
  @Field()
  @IsNotEmpty()
  @MinLength(8)
  oldPassword: string

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  newPassword: string
}
