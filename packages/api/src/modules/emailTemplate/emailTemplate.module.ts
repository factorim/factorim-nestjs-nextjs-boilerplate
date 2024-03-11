import { Module } from '@nestjs/common'

import { EmailTemplateResolver } from './emailTemplate.resolver'
import { EmailTemplateService } from './emailTemplate.service'

@Module({
  imports: [],
  providers: [EmailTemplateResolver, EmailTemplateService],
})
export class EmailTemplateModule {}
