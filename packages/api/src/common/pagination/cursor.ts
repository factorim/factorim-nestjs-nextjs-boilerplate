import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql'
import { Type } from '@nestjs/common'

@ArgsType()
export class PaginationCursorArgs {
  @Field({ nullable: true })
  after?: string

  @Field({ nullable: true })
  before?: string

  @Field({ nullable: true })
  first?: number

  @Field({ nullable: true })
  last?: number
}

@ObjectType()
export class PageInfo {
  @Field(() => String, { nullable: true })
  endCursor?: string

  @Field(() => Boolean)
  hasNextPage: boolean

  @Field(() => Boolean)
  hasPreviousPage: boolean

  @Field(() => String, { nullable: true })
  startCursor?: string
}

export default function CursorConnection<TItem>(TItemClass: Type<TItem>) {
  @ObjectType(`${TItemClass.name}Edge`)
  abstract class EdgeType {
    @Field(() => String)
    cursor: string

    @Field(() => TItemClass)
    node: TItem
  }

  // `isAbstract` decorator option is mandatory to prevent registering in schema
  @ObjectType({ isAbstract: true })
  abstract class CursorConnectionType {
    @Field(() => [EdgeType], { nullable: true })
    edges: Array<EdgeType>

    @Field(() => PageInfo)
    pageInfo: PageInfo

    @Field(() => Int)
    totalCount: number
  }
  return CursorConnectionType
}
