import { Field, ObjectType } from '@nestjs/graphql'

import { User } from './user.model'
import OffsetConnection from 'src/common/pagination/offset'

@ObjectType()
export class UserOffsetConnection extends OffsetConnection() {
  @Field(() => [User])
  users: User[]
}
