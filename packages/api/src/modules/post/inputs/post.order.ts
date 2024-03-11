import { InputType, registerEnumType } from '@nestjs/graphql'

import { Order } from 'src/common/order/order'

export enum PostOrderField {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'title',
}

registerEnumType(PostOrderField, {
  name: 'PostOrderField',
  description: 'Properties by which post connections can be ordered.',
})

@InputType()
export class PostOrderInput extends Order {
  field: PostOrderField
}
