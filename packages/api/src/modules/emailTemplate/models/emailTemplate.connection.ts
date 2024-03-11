import { Field, ObjectType } from '@nestjs/graphql'

import { EmailTemplate } from './emailTemplate.model'
import OffsetConnection from 'src/common/pagination/offset'

@ObjectType()
export class EmailTemplateOffsetConnection extends OffsetConnection() {
  @Field(() => [EmailTemplate])
  emailTemplates: EmailTemplate[]
}
