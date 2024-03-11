import { Inject, Logger, NotFoundException, UseGuards } from '@nestjs/common'
import { Args, Query, Resolver, Subscription } from '@nestjs/graphql'
import { UserRole } from '@prisma/client'
import { PubSub } from 'graphql-subscriptions'

import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard'
import { RolesGuard } from 'src/modules/auth/guards/roles.guard'
import { Roles } from 'src/modules/auth/decorators/roles.decorator'
import { EmailValidationArgs } from './args/emailValidation.args'
import {
  EmailValidation,
  EmailValidationEvent,
} from './models/emailValidation.model'
import { EmailValidationCursorConnection } from './models/emailValidation.connection'
import { EmailValidationService } from './emailValidation.service'
import { PaginationCursorArgs } from 'src/common/pagination/cursor'
import { EmailValidationFilterInput } from './args/emailValidation.filter'

@Resolver(() => EmailValidation)
export class EmailValidationResolver {
  private readonly logger = new Logger(EmailValidationResolver.name)

  constructor(
    private emailValidationService: EmailValidationService,
    @Inject('PUB_SUB') private pubSub: PubSub,
  ) {}

  // Queries

  @Query(() => EmailValidationCursorConnection)
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async emailValidations(
    @Args() pagination: PaginationCursorArgs,
    @Args('filters', { nullable: true }) filters: EmailValidationFilterInput,
  ) {
    try {
      return await this.emailValidationService.findMany(pagination, filters)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Query(() => EmailValidation, { nullable: true })
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async emailValidation(@Args() args: EmailValidationArgs) {
    try {
      return await this.emailValidationService.find(args)
    } catch (error) {
      if (error.name === 'NotFoundError') {
        throw new NotFoundException()
      } else {
        this.logger.error(error)
        return error
      }
    }
  }

  @Query(() => EmailValidation, { nullable: true })
  async userEmailValidation(
    @Args('token', { type: () => String }) token: string,
  ) {
    try {
      return await this.emailValidationService.findForUser(token)
    } catch (error) {
      if (error.name === 'NotFoundError') {
        throw new NotFoundException()
      } else {
        this.logger.error(error)
        return error
      }
    }
  }

  // Subscriptions

  @Subscription(() => EmailValidationEvent)
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  emailValidationEvent() {
    return this.pubSub.asyncIterator('emailValidationEvent')
  }
}
