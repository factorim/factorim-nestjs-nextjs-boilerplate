import { Field, InputType } from '@nestjs/graphql'
import { UserStatus } from '@prisma/client'

@InputType()
export class UserFilterInput {
  @Field({ nullable: true })
  keyword: string

  @Field(() => UserStatus, { nullable: true })
  status: UserStatus
}
