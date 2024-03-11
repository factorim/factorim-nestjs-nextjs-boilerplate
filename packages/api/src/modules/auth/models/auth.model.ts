import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class SignUpRequest {
  @Field({ description: 'SignUpRequest email.' })
  email: string

  @Field({ description: 'SignUpRequest token.' })
  token: string
}
