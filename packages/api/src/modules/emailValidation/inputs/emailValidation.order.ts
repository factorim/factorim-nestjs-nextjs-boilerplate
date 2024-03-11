import { InputType, registerEnumType } from '@nestjs/graphql'

import { Order } from 'src/common/order/order'

export enum EmailValidationOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  name = 'name',
}

registerEnumType(EmailValidationOrderField, {
  name: 'EmailValidationOrderField',
  description: 'Properties by which email templates can be ordered.',
})

@InputType()
export class EmailValidationOrderInput extends Order {
  field: EmailValidationOrderField
}
