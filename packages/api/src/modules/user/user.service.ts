import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'
import { Prisma, UserStatus } from '@prisma/client'

import { PaginationOffsetArgs } from 'src/common/pagination/offset'
import { UserOffsetConnection } from './models/connection.model'
import { UpdateUserData } from './inputs/update.input'
import { CreateUserData } from './inputs/create.input'
import { UserArgs } from './args/user.args'
import { User } from './models/user.model'
import { UserFilterInput } from './args/user.filter'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  private buildFilterConditions(
    filters: UserFilterInput,
  ): Prisma.UserWhereInput {
    const whereClause: Prisma.UserWhereInput = {}
    if (filters?.keyword !== undefined) {
      whereClause.email = {
        contains: filters.keyword,
        mode: 'insensitive',
      }
    }
    if (filters?.status !== undefined) {
      whereClause.status = filters.status as UserStatus
    }

    return whereClause
  }

  async findMany(
    pagination: PaginationOffsetArgs,
    filters: UserFilterInput,
  ): Promise<UserOffsetConnection> {
    const whereClause = this.buildFilterConditions(filters)

    const [users, totalCount] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where: whereClause,
        skip: pagination.skip ? pagination.skip : undefined,
        take: pagination.take ? pagination.take : undefined,
      }),
      this.prisma.user.count({ where: whereClause }),
    ])

    const userConnection: UserOffsetConnection = {
      users,
      totalCount,
    }
    return userConnection
  }

  count(filters: UserFilterInput): Promise<number> {
    const whereClause = this.buildFilterConditions(filters)
    return this.prisma.user.count({
      where: {
        ...whereClause,
      },
    })
  }

  find(args: UserArgs): Promise<User> {
    const whereQuery = {}
    if (args.id) {
      whereQuery['id'] = args.id
    } else {
      throw new Error('Missing id or key')
    }
    return this.prisma.user.findFirst({
      where: whereQuery,
    })
  }

  create(createUserData: CreateUserData): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...createUserData,
      },
    })
  }

  update(id: string, updateUserData: UpdateUserData): Promise<User> {
    return this.prisma.user.update({
      data: {
        ...updateUserData,
      },
      where: {
        id,
      },
    })
  }

  delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    })
  }
}
