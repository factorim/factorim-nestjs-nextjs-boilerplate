import { Field, InputType } from '@nestjs/graphql'
import { EmailType, Lang } from '@prisma/client'

@InputType()
export class CreateEmailValidationData {
  @Field(() => EmailType)
  type: EmailType

  @Field()
  token: string

  @Field()
  email: string

  @Field()
  code?: string

  // @Field(() => Lang)
  lang?: Lang
}
