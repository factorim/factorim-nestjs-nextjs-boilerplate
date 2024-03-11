import { Field, InputType } from '@nestjs/graphql'
import { GraphQLJSONObject } from 'graphql-scalars'
import { EmailType, Lang, Prisma } from '@prisma/client'

@InputType()
export class UpdateEmailTemplateData {
  @Field(() => EmailType, { nullable: true })
  type?: EmailType

  @Field({ nullable: true })
  subject?: string

  @Field({ nullable: true })
  html?: string

  @Field(() => GraphQLJSONObject, { nullable: true })
  design?: Prisma.JsonValue

  @Field(() => Lang, { nullable: true })
  lang?: Lang
}
