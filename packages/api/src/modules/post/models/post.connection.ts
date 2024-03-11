import { Field, ObjectType } from '@nestjs/graphql'
import CursorConnection from 'src/common/pagination/cursor'

import { Post } from './post.model'
import OffsetConnection from 'src/common/pagination/offset'

@ObjectType()
export class PostOffsetConnection extends OffsetConnection() {
  @Field(() => [Post])
  posts: Post[]
}

@ObjectType()
export class PostCursorConnection extends CursorConnection(Post) {}
