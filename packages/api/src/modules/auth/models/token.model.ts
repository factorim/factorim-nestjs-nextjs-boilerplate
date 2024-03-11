import { Field, ObjectType } from '@nestjs/graphql'
import { GraphQLJWT } from 'graphql-scalars'

@ObjectType()
export class Token {
  @Field(() => GraphQLJWT, { description: 'JWT access token' })
  accessToken: string

  @Field({ description: 'JWT access token expiration date' })
  accessTokenExp: number

  @Field(() => GraphQLJWT, { description: 'JWT refresh token' })
  refreshToken: string
}

export interface TokenPayload {
  id: string
  email: string
  name: string
  roles: string[]
}
