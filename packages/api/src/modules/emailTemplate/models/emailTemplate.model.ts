import { Field, ObjectType } from '@nestjs/graphql'
import { GraphQLJSONObject } from 'graphql-scalars'
import { EmailType, Lang, Prisma } from '@prisma/client'

import { BaseModel } from 'src/common/abstracts/base.model'

@ObjectType()
export class EmailTemplate extends BaseModel {
  @Field(() => EmailType, { description: 'Email Template type.' })
  type: EmailType

  @Field({ description: 'Email Template subject.' })
  subject: string

  @Field({ description: 'Email Template HTML.' })
  html: string

  @Field(() => GraphQLJSONObject, {
    description: 'Email Template design JSON.',
  })
  design: Prisma.JsonValue

  @Field(() => Lang, { description: 'Email Template lang.' })
  lang: Lang
}
