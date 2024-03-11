import {
  IsEmail,
  IsString,
  MaxLength,
  // Matches,
  MinLength,
} from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'
import { Lang } from '@prisma/client'

@InputType()
export class SignUpRequestData {
  @Field()
  @IsEmail()
  email: string

  @Field(() => Lang)
  lang: Lang
}

@InputType()
export class SignUpData {
  @Field()
  token: string

  @Field()
  code: string

  @Field()
  name: string

  @Field()
  @IsString()
  @MinLength(6)
  @MaxLength(40)
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message: 'password too weak',
  // })
  password: string
}
