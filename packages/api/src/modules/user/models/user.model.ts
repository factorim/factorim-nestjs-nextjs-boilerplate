import 'reflect-metadata'
import { Field, HideField, ObjectType } from '@nestjs/graphql'
import { Lang, UserAuth, UserRole, UserStatus } from '@prisma/client'
import { IsEmail } from 'class-validator'

import { BaseModel } from 'src/common/abstracts/base.model'

@ObjectType()
export class User extends BaseModel {
  @Field(() => UserAuth, { description: 'User Auth.' })
  auth: UserAuth

  @Field({ description: 'User email.' })
  @IsEmail()
  email: string

  @Field({ description: 'User password.' })
  @HideField()
  password: string

  @Field(() => String, { nullable: true, description: 'User name.' })
  name?: string

  @Field(() => [UserRole], { description: 'User roles.' })
  roles: UserRole[]

  @Field(() => Lang, { description: 'User lang.' })
  lang: Lang

  @Field({ description: 'User theme.' })
  theme: string

  @Field(() => UserStatus, { description: 'User status.' })
  status: UserStatus

  @Field(() => Date, { description: 'User last active at.' })
  lastActiveAt: Date
}
