import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { EmailType, Lang } from '@prisma/client'

import { BaseModel } from 'src/common/abstracts/base.model'

export enum EmailValidationEventType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
}

registerEnumType(EmailValidationEventType, {
  name: 'EmailValidationEventType',
  description: 'EmailValidation Event types',
})

@ObjectType()
export class EmailValidation extends BaseModel {
  @Field(() => EmailType, { description: 'Email Validation type.' })
  type: EmailType

  @Field({ description: 'Email Validation token.' })
  token: string

  @Field({ description: 'Email Validation email.' })
  email: string

  @Field({ description: 'Email Validation code.' })
  code?: string

  @Field({ description: 'Email Validation checked.' })
  checked: number

  @Field({ description: 'Email Validation claimed.' })
  claimed: boolean

  @Field(() => Lang, { description: 'Email Validation lang.' })
  lang: Lang
}

@ObjectType()
export class EmailValidationEvent {
  @Field(() => EmailValidationEventType, {
    description: 'Event type.',
    nullable: true,
  })
  type?: EmailValidationEventType

  @Field(() => EmailValidation, {
    description: 'Event EmailValidation.',
    nullable: true,
  })
  emailValidation?: EmailValidation
}
