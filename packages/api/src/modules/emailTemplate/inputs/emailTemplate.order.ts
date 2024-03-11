import { InputType, registerEnumType } from '@nestjs/graphql'

import { Order } from 'src/common/order/order'

export enum EmailTemplateOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  subject = 'subject',
}

registerEnumType(EmailTemplateOrderField, {
  name: 'EmailTemplateOrderField',
  description: 'Properties by which email templates can be ordered.',
})

@InputType()
export class EmailTemplateOrderInput extends Order {
  field: EmailTemplateOrderField
}
