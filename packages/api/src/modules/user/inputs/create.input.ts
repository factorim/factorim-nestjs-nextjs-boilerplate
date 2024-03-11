import { Field, InputType } from '@nestjs/graphql'
import { UserRole } from '@prisma/client'

@InputType()
export class CreateUserData {
  @Field()
  email: string

  @Field()
  password: string

  @Field()
  name: string

  @Field(() => [UserRole], { nullable: true })
  roles?: UserRole[]
}
