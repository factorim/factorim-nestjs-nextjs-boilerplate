import { Field, InputType } from '@nestjs/graphql'
import { GraphQLJSONObject } from 'graphql-scalars'
import { EmailType, Lang, Prisma } from '@prisma/client'

@InputType()
export class CreateEmailTemplateData {
  @Field(() => EmailType)
  type: EmailType

  @Field()
  subject: string

  @Field()
  html: string

  @Field(() => GraphQLJSONObject)
  design: Prisma.JsonValue

  @Field(() => Lang)
  lang?: Lang
}
