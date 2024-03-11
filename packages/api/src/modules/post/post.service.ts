import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { Prisma } from '@prisma/client'
import { PubSub } from 'graphql-subscriptions'
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'

import { User } from 'src/modules/user/models/user.model'
import { CreatePostData, CreatePostRelation } from './inputs/post.create'
import { UpdatePostData } from './inputs/post.update'
import { PostArgs } from './args/post.args'
import {
  PostCursorConnection,
  PostOffsetConnection,
} from './models/post.connection'
import { Post, PostEventType } from './models/post.model'
import { PostFilterInput } from './args/post.filter'
import { PaginationOffsetArgs } from 'src/common/pagination/offset'
import { PaginationCursorArgs } from 'src/common/pagination/cursor'

@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
    @Inject('PUB_SUB') private pubSub: PubSub,
  ) {}

  private buildFilterConditions(
    filters: PostFilterInput,
  ): Prisma.PostWhereInput {
    const whereClause: Prisma.PostWhereInput = {}

    if (filters?.keyword !== undefined) {
      whereClause.title = {
        contains: filters.keyword,
        mode: 'insensitive',
      }
    }
    if (filters?.enabled !== undefined) {
      whereClause.enabled = filters.enabled
    }

    return whereClause
  }

  async findMany(
    pagination: PaginationOffsetArgs,
    filters: PostFilterInput,
  ): Promise<PostOffsetConnection> {
    const whereClause = this.buildFilterConditions(filters)

    const [posts, totalCount] = await this.prisma.$transaction([
      this.prisma.post.findMany({
        where: whereClause,
        skip: pagination.skip ? pagination.skip : undefined,
        take: pagination.take ? pagination.take : undefined,
        orderBy: { ['title']: 'asc' },
      }),
      this.prisma.post.count({ where: whereClause }),
    ])

    const postOffsetConnection: PostOffsetConnection = {
      posts,
      totalCount,
    }
    return postOffsetConnection
  }

  async findManyCursor(
    pagination: PaginationCursorArgs,
    filters: PostFilterInput,
  ): Promise<PostCursorConnection> {
    const { first, last, before, after } = pagination
    const whereClause = this.buildFilterConditions(filters)

    const connection = await findManyCursorConnection(
      (args) =>
        this.prisma.post.findMany({
          where: whereClause,
          orderBy: { ['createdAt']: 'desc' },
          ...args,
        }),
      () =>
        this.prisma.post.count({
          where: whereClause,
        }),
      { first, last, before, after },
    )
    return connection
  }

  async findManyByUser(
    userId: string,
    pagination: PaginationOffsetArgs,
    filters: PostFilterInput,
  ): Promise<PostOffsetConnection> {
    const whereClause = this.buildFilterConditions(filters)

    const [posts, totalCount] = await this.prisma.$transaction([
      this.prisma.post.findMany({
        where: {
          authorId: userId,
          ...whereClause,
        },
        skip: pagination.skip ? pagination.skip : undefined,
        take: pagination.take ? pagination.take : undefined,
        orderBy: { ['createdAt']: 'desc' },
      }),
      this.prisma.post.count({
        where: {
          authorId: userId,
          ...whereClause,
        },
      }),
    ])

    const postOffsetConnection: PostOffsetConnection = {
      posts,
      totalCount,
    }
    return postOffsetConnection
  }

  count(): Promise<number> {
    return this.prisma.post.count()
  }

  find(args: PostArgs): Promise<Post> {
    const whereQuery = {}
    if (args.id) {
      whereQuery['id'] = args.id
    } else {
      throw new Error('Missing id or key')
    }
    return this.prisma.post.findFirst({
      where: whereQuery,
    })
  }

  findByUser(userId: string, args: PostArgs): Promise<Post> {
    const whereQuery = {}
    if (args.id) {
      whereQuery['id'] = args.id
    } else {
      throw new Error('Missing id or key')
    }
    return this.prisma.post.findFirst({
      where: {
        authorId: userId,
        ...whereQuery,
      },
    })
  }

  async create(
    createPostData: CreatePostData,
    createPostRelation: CreatePostRelation,
  ): Promise<Post> {
    const postCreated = await this.prisma.post.create({
      data: {
        ...createPostData,
        author: {
          connect: {
            id: createPostRelation.userId,
          },
        },
      },
    })

    this.pubSub.publish('postEvent', {
      postEvent: {
        type: PostEventType.CREATED,
        post: postCreated,
      },
    })
    return postCreated
  }

  async update(id: string, updatePostData: UpdatePostData): Promise<Post> {
    const postUpdated = await this.prisma.post.update({
      data: {
        ...updatePostData,
      },
      where: {
        id,
      },
    })

    this.pubSub.publish('postEvent', {
      postEvent: {
        type: PostEventType.UPDATED,
        post: postUpdated,
      },
    })
    return postUpdated
  }

  async delete(id: string): Promise<Post> {
    const postDeleted = await this.prisma.post.delete({
      where: {
        id,
      },
    })

    this.pubSub.publish('postEvent', {
      postEvent: {
        type: PostEventType.DELETED,
        post: postDeleted,
      },
    })
    return postDeleted
  }

  authorResolver(id: string): Promise<User> {
    return this.prisma.post.findUnique({ where: { id } }).author()
  }
}
