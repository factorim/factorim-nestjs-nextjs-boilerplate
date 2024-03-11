import { Module } from '@nestjs/common'

import { EmailValidationResolver } from './emailValidation.resolver'
import { EmailValidationService } from './emailValidation.service'

@Module({
  imports: [],
  providers: [EmailValidationResolver, EmailValidationService],
  exports: [EmailValidationService],
})
export class EmailValidationModule {}
