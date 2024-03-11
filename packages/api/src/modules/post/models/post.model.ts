import { Field, ObjectType } from '@nestjs/graphql'
import { registerEnumType } from '@nestjs/graphql'

import { BaseModel } from 'src/common/abstracts/base.model'
import { User } from 'src/modules/user/models/user.model'

export enum PostEventType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
}

registerEnumType(PostEventType, {
  name: 'PostEventType',
  description: 'Post Event types',
})

@ObjectType()
export class Post extends BaseModel {
  @Field({ description: 'Post title.' })
  title: string

  @Field({ description: 'Post content.' })
  content: string

  @Field({ description: 'Post enabled.' })
  enabled: boolean

  @Field(() => User, { description: 'Post author.' })
  author?: User
}

@ObjectType()
export class PostEvent {
  @Field(() => PostEventType, { description: 'Event type.', nullable: true })
  type?: PostEventType

  @Field(() => Post, { description: 'Event Post.', nullable: true })
  post?: Post
}
