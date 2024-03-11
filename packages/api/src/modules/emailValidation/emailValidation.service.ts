import { ConflictException, Inject, Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { EmailValidation } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { Prisma } from '@prisma/client'
import sgMail from '@sendgrid/mail'
import { PubSub } from 'graphql-subscriptions'
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import { differenceInMinutes, formatDistance } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'

import type { AppConfig, EmailConfig } from 'src/config/config.interface'
import { EmailValidationArgs } from './args/emailValidation.args'
import { CreateEmailValidationData } from './inputs/emailValidation.create'
import { EmailValidationCursorConnection } from './models/emailValidation.connection'
import { EmailValidationEventType } from './models/emailValidation.model'
import { PaginationCursorArgs } from 'src/common/pagination/cursor'
import { EmailValidationFilterInput } from './args/emailValidation.filter'
import { EMAIL_VALIDATION_LIMIT } from 'src/constants/limits'

@Injectable()
export class EmailValidationService {
  private readonly logger = new Logger(EmailValidationService.name)
  private localeMap = {
    en: enUS,
    fr,
  }

  constructor(
    private readonly configService: ConfigService,
    private prisma: PrismaService,
    @Inject('PUB_SUB') private pubSub: PubSub,
  ) {}

  replaceVariables = (html: string, emailValidation: EmailValidation) => {
    const appConfig = this.configService.get<AppConfig>('app')
    const emailConfig = this.configService.get<EmailConfig>('email')
    const validationLink = new URL(
      `reset-password/${emailValidation.token}`,
      appConfig.url,
    )

    const locale = this.localeMap[emailValidation.lang] || enUS
    const expirationTime = this.formatDurationFromNow(
      emailConfig.validationExpiration,
      locale,
    )

    return html
      .replace(/{{validation_code}}/g, emailValidation.code)
      .replace(/{{validation_link}}/g, validationLink.href)
      .replace(/{{validation_expiration}}/g, expirationTime)
  }

  formatDurationFromNow(minutes, locale) {
    const now = new Date()
    const futureDate = new Date(now.getTime() + minutes * 60000)

    return formatDistance(now, futureDate, { locale: locale, addSuffix: false })
  }

  async sendSignupRequest(emailValidation: EmailValidation) {
    const emailConfig = this.configService.get<EmailConfig>('email')
    const fromEmail = emailConfig.noReply

    const template = await this.prisma.emailTemplate.findFirstOrThrow({
      where: {
        type: 'SIGN_UP',
        lang: emailValidation.lang,
      },
    })
    const html = this.replaceVariables(template.html, emailValidation)

    // Sendgrid
    try {
      const msg = {
        to: emailValidation.email,
        from: {
          email: fromEmail,
          name: 'Factorim',
        },
        subject: template.subject,
        html,
      }
      sgMail.setApiKey(emailConfig.sendgridApiKey)
      await sgMail.send(msg)
      this.logger.log({
        message: 'Email sign up sent',
        email: emailValidation.email,
      })
    } catch (error) {
      this.logger.error(`Error: ${error}`)
    }
  }

  async sendResetPassword(emailValidation: EmailValidation) {
    const emailConfig = this.configService.get<EmailConfig>('email')
    const fromEmail = emailConfig.noReply

    const template = await this.prisma.emailTemplate.findFirstOrThrow({
      where: {
        type: 'RESET_PASSWORD',
        lang: emailValidation.lang,
      },
    })
    const html = this.replaceVariables(template.html, emailValidation)

    // Sendgrid
    try {
      const msg = {
        to: emailValidation.email,
        from: fromEmail,
        subject: template.subject,
        html,
      }
      sgMail.setApiKey(emailConfig.sendgridApiKey)
      await sgMail.send(msg)
      this.logger.log({
        message: 'Email lost password sent',
        email: emailValidation.email,
      })
    } catch (error) {
      this.logger.error(`Error: ${error}`)
    }
  }

  async sendChangeEmail(emailValidation: EmailValidation) {
    const emailConfig = this.configService.get<EmailConfig>('email')
    const fromEmail = emailConfig.noReply

    const template = await this.prisma.emailTemplate.findFirstOrThrow({
      where: {
        type: 'CHANGE_EMAIL',
        lang: emailValidation.lang,
      },
    })
    const html = this.replaceVariables(template.html, emailValidation)

    // Sendgrid
    try {
      const msg = {
        to: emailValidation.email,
        from: fromEmail,
        subject: template.subject,
        html,
      }
      sgMail.setApiKey(emailConfig.sendgridApiKey)
      await sgMail.send(msg)
      this.logger.log({
        message: 'Email change email sent',
        email: emailValidation.email,
      })
    } catch (error) {
      this.logger.error(`Error: ${error}`)
    }
  }

  async sendDeleteAccount(emailValidation: EmailValidation) {
    const emailConfig = this.configService.get<EmailConfig>('email')
    const fromEmail = emailConfig.noReply

    const template = await this.prisma.emailTemplate.findFirstOrThrow({
      where: {
        type: 'DELETE_ACCOUNT',
        lang: emailValidation.lang,
      },
    })
    const html = this.replaceVariables(template.html, emailValidation)

    // Sendgrid
    try {
      const msg = {
        to: emailValidation.email,
        from: fromEmail,
        subject: template.subject,
        html,
      }
      sgMail.setApiKey(emailConfig.sendgridApiKey)
      await sgMail.send(msg)
      this.logger.log({
        message: 'Email change email sent',
        email: emailValidation.email,
      })
    } catch (error) {
      this.logger.error(`Error: ${error}`)
    }
  }

  private buildFilterConditions(
    filters: EmailValidationFilterInput,
  ): Prisma.EmailValidationWhereInput {
    const whereClause: Prisma.EmailValidationWhereInput = {}

    if (filters?.keyword !== undefined) {
      whereClause.email = {
        contains: filters.keyword,
        mode: 'insensitive',
      }
    }
    if (filters?.checked !== undefined) {
      whereClause.checked = filters.checked ? { gt: 0 } : { equals: 0 }
    }
    if (filters?.claimed !== undefined) {
      whereClause.claimed = filters.claimed
    }

    return whereClause
  }

  async findMany(
    pagination: PaginationCursorArgs,
    filters: EmailValidationFilterInput,
  ): Promise<EmailValidationCursorConnection> {
    const { first, last, before, after } = pagination
    const whereClause = this.buildFilterConditions(filters)

    const connection = await findManyCursorConnection(
      (args) =>
        this.prisma.emailValidation.findMany({
          where: whereClause,
          orderBy: { ['createdAt']: 'desc' },
          ...args,
        }),
      () =>
        this.prisma.emailValidation.count({
          where: whereClause,
        }),
      { first, last, before, after },
    )
    return connection
  }

  find(args: EmailValidationArgs) {
    return this.prisma.emailValidation.findFirstOrThrow({
      where: {
        ...(args.id ? { id: args.id } : {}),
        ...(args.token ? { token: args.token } : {}),
      },
    })
  }

  async findForUser(token: string) {
    const emailConfig = this.configService.get<EmailConfig>('email')

    const emailValidation = await this.prisma.emailValidation.findFirstOrThrow({
      where: { token },
    })

    const now = new Date()
    const createdAt = new Date(emailValidation.createdAt)

    if (emailValidation.claimed) {
      throw new ConflictException('Token already claimed')
    } else if (emailValidation.checked >= EMAIL_VALIDATION_LIMIT) {
      throw new ConflictException('Too many attempts')
    } else if (
      differenceInMinutes(now, createdAt) > emailConfig.validationExpiration
    ) {
      throw new ConflictException('Token expired')
    }

    return emailValidation
  }

  async create(createEmailValidationData: CreateEmailValidationData) {
    const emailValidationCreated = await this.prisma.emailValidation.create({
      data: {
        ...createEmailValidationData,
      },
    })
    this.pubSub.publish('emailValidationEvent', {
      emailValidationEvent: {
        type: EmailValidationEventType.CREATED,
        emailValidation: emailValidationCreated,
      },
    })
    return emailValidationCreated
  }

  async claim(id: string) {
    const emailValidationUpdated = await this.prisma.emailValidation.update({
      data: { claimed: true },
      where: { id },
    })

    this.pubSub.publish('emailValidationEvent', {
      emailValidationEvent: {
        type: EmailValidationEventType.UPDATED,
        emailValidation: emailValidationUpdated,
      },
    })
    return emailValidationUpdated
  }

  async checked(id: string) {
    const emailValidationUpdated = await this.prisma.emailValidation.update({
      data: { checked: { increment: 1 } },
      where: { id },
    })

    this.pubSub.publish('emailValidationEvent', {
      emailValidationEvent: {
        type: EmailValidationEventType.UPDATED,
        emailValidation: emailValidationUpdated,
      },
    })
    return emailValidationUpdated
  }
}
