import { Module } from '@nestjs/common'
import { EmailValidationModule } from 'src/modules/emailValidation/emailValidation.module'

import { ProfileResolver } from './profile.resolver'
import { ProfileService } from './profile.service'

@Module({
  imports: [EmailValidationModule],
  providers: [ProfileResolver, ProfileService],
})
export class ProfileModule {}
