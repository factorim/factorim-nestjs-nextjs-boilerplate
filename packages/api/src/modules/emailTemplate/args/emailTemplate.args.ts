import { ArgsType, Field } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@ArgsType()
export class EmailTemplateArgs {
  @Field()
  @IsNotEmpty()
  id: string
}
