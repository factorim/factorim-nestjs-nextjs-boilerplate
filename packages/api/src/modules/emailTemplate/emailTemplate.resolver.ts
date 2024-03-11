import { Logger, NotFoundException, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserRole } from '@prisma/client'

import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard'
import { RolesGuard } from 'src/modules/auth/guards/roles.guard'
import { Roles } from 'src/modules/auth/decorators/roles.decorator'
import { PaginationOffsetArgs } from 'src/common/pagination/offset'
import { EmailTemplateArgs } from './args/emailTemplate.args'
import { EmailTemplate } from './models/emailTemplate.model'
import { CreateEmailTemplateData } from './inputs/emailTemplate.create'
import { UpdateEmailTemplateData } from './inputs/emailTemplate.update'
import { EmailTemplateOffsetConnection } from './models/emailTemplate.connection'
import { EmailTemplateService } from './emailTemplate.service'

@Resolver(() => EmailTemplate)
export class EmailTemplateResolver {
  private readonly logger = new Logger(EmailTemplateResolver.name)

  constructor(private emailTemplateService: EmailTemplateService) {}

  // Queries

  @Query(() => EmailTemplateOffsetConnection)
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async emailTemplates(@Args() args: PaginationOffsetArgs) {
    try {
      return await this.emailTemplateService.findMany(args)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Query(() => Number)
  async countEmailTemplates() {
    try {
      return await this.emailTemplateService.count()
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Query(() => EmailTemplate)
  async emailTemplate(@Args() args: EmailTemplateArgs) {
    try {
      return await this.emailTemplateService.find(args)
    } catch (error) {
      if (error.name === 'NotFoundError') {
        throw new NotFoundException()
      } else {
        this.logger.error(error)
        return error
      }
    }
  }

  // Mutations

  @Mutation(() => EmailTemplate)
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async createEmailTemplate(@Args('data') data: CreateEmailTemplateData) {
    try {
      const emailTemplateCreated = await this.emailTemplateService.create(data)
      return emailTemplateCreated
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Mutation(() => EmailTemplate)
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async updateEmailTemplate(
    @Args('id', { type: () => String }) id: string,
    @Args('data') data: UpdateEmailTemplateData,
  ) {
    try {
      const emailTemplateUpdated = await this.emailTemplateService.update(
        id,
        data,
      )
      return emailTemplateUpdated
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Mutation(() => EmailTemplate)
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async deleteEmailTemplate(@Args('id', { type: () => String }) id: string) {
    try {
      return await this.emailTemplateService.delete(id)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Mutation(() => EmailTemplate)
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async duplicateEmailTemplate(@Args('id', { type: () => String }) id: string) {
    try {
      return await this.emailTemplateService.duplicate(id)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }
}
