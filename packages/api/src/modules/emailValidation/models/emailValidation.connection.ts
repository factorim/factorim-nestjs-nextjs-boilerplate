import { ObjectType } from '@nestjs/graphql'
import CursorConnection from 'src/common/pagination/cursor'

import { EmailValidation } from './emailValidation.model'

@ObjectType()
export class EmailValidationCursorConnection extends CursorConnection(
  EmailValidation,
) {}
