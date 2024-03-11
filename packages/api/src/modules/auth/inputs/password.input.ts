import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ResetPasswordRequestData {
  @Field()
  @IsEmail()
  email: string
}

@InputType()
export class ResetPasswordData {
  @Field()
  token: string

  @Field()
  @IsString()
  @MinLength(6)
  @MaxLength(40)
  password: string
}

@InputType()
export class ChangePasswordData {
  @Field()
  password: string

  @Field()
  @IsString()
  @MinLength(6)
  @MaxLength(40)
  newPassword: string
}
