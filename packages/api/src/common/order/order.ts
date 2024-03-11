import { Field, InputType } from '@nestjs/graphql'
import { OrderDirection } from './orderDirection'

@InputType({ isAbstract: true })
export abstract class Order {
  @Field(() => OrderDirection, { defaultValue: OrderDirection.asc })
  direction: OrderDirection
}
