import { Field, InputType } from '@nestjs/graphql'
import { Lang } from '@prisma/client'

@InputType()
export class UpdateProfileData {
  @Field({ nullable: true })
  name?: string

  @Field(() => Lang, { nullable: true })
  lang?: Lang

  @Field({ nullable: true })
  theme?: string
}
