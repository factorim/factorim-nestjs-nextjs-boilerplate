import { Field, InputType } from '@nestjs/graphql'
import { UserRole } from '@prisma/client'

@InputType()
export class UpdateUserData {
  @Field({ nullable: true })
  email?: string

  @Field({ nullable: true })
  name?: string

  @Field(() => [UserRole], { nullable: true })
  roles?: UserRole[]
}
