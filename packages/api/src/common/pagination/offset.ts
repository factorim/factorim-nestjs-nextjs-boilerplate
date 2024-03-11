import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql'

@ArgsType()
export class PaginationOffsetArgs {
  @Field({ nullable: true, defaultValue: 0 })
  skip: number

  @Field({ nullable: true })
  take: number
}

export default function OffsetConnection() {
  @ObjectType({ isAbstract: true }) // Marked as abstract
  abstract class OffsetConnectionType {
    @Field(() => Int)
    totalCount: number
  }

  return OffsetConnectionType
}
