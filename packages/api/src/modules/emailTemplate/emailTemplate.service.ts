import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'

import { PaginationOffsetArgs } from 'src/common/pagination/offset'
import { CreateEmailTemplateData } from './inputs/emailTemplate.create'
import { UpdateEmailTemplateData } from './inputs/emailTemplate.update'
import { EmailTemplateArgs } from './args/emailTemplate.args'
import { EmailTemplateOffsetConnection } from './models/emailTemplate.connection'

@Injectable()
export class EmailTemplateService {
  constructor(private prisma: PrismaService) {}

  async findMany(
    args: PaginationOffsetArgs,
  ): Promise<EmailTemplateOffsetConnection> {
    const [emailTemplates, totalCount] = await this.prisma.$transaction([
      this.prisma.emailTemplate.findMany({
        skip: args.skip ? args.skip : undefined,
        take: args.take ? args.take : undefined,
        orderBy: [
          {
            type: 'asc',
          },
          // {
          //   lang: 'asc',
          // },
        ],
      }),
      this.prisma.emailTemplate.count(),
    ])

    const emailTemplateConnection: EmailTemplateOffsetConnection = {
      emailTemplates,
      totalCount,
    }
    return emailTemplateConnection
  }

  count() {
    return this.prisma.emailTemplate.count()
  }

  find(args: EmailTemplateArgs) {
    return this.prisma.emailTemplate.findFirstOrThrow({
      where: { id: args.id },
    })
  }

  create(createEmailTemplateData: CreateEmailTemplateData) {
    return this.prisma.emailTemplate.create({
      data: {
        ...createEmailTemplateData,
      },
    })
  }

  update(id: string, updateEmailTemplateData: UpdateEmailTemplateData) {
    return this.prisma.emailTemplate.update({
      data: {
        ...updateEmailTemplateData,
      },
      where: {
        id,
      },
    })
  }

  async delete(id: string) {
    return this.prisma.emailTemplate.delete({
      where: {
        id,
      },
    })
  }

  async duplicate(id: string) {
    const emailTemplateExists =
      await this.prisma.emailTemplate.findFirstOrThrow({
        where: { id },
      })

    const createEmailTemplateData: CreateEmailTemplateData = {
      type: emailTemplateExists.type,
      subject: emailTemplateExists.subject,
      html: emailTemplateExists.html,
      design: emailTemplateExists.design,
      lang: emailTemplateExists.lang,
    }

    return this.prisma.emailTemplate.create({
      data: {
        ...createEmailTemplateData,
      },
    })
  }
}
