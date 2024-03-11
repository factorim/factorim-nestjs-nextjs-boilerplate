import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'

import { HealthController } from './health.controller'
import { PrismaModule } from 'nestjs-prisma'

@Module({
  imports: [PrismaModule, TerminusModule],
  controllers: [HealthController],
})
export class HealthModule {}
