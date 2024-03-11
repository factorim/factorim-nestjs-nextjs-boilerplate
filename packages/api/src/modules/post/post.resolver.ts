import {
  HttpException,
  HttpStatus,
  Inject,
  Logger,
  NotFoundException,
  UseGuards,
} from '@nestjs/common'
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { UserRole } from '@prisma/client'

import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard'
import { RolesGuard } from 'src/modules/auth/guards/roles.guard'
import { PaginationCursorArgs } from 'src/common/pagination/cursor'
import { PaginationOffsetArgs } from 'src/common/pagination/offset'
import { UserEntity } from 'src/modules/user/decorators/user.decorator'
import { Roles } from 'src/modules/auth/decorators/roles.decorator'
import { User } from 'src/modules/user/models/user.model'
import { Post, PostEvent } from './models/post.model'
import { PostArgs } from './args/post.args'
import { CreatePostData, CreatePostRelation } from './inputs/post.create'
import { UpdatePostData } from './inputs/post.update'
import {
  PostCursorConnection,
  PostOffsetConnection,
} from './models/post.connection'
import { PostService } from './post.service'
import { PostFilterInput } from './args/post.filter'
import { ApiKeyAuthGuard } from '../auth/guards/apikey.guard'

@Resolver(() => Post)
export class PostResolver {
  private readonly logger = new Logger(PostResolver.name)

  constructor(
    private postService: PostService,
    @Inject('PUB_SUB') private pubSub: PubSub,
  ) {}

  // Queries

  @Query(() => PostOffsetConnection)
  async posts(
    @Args() pagination: PaginationOffsetArgs,
    @Args('filters', { nullable: true }) filters: PostFilterInput,
  ) {
    try {
      return await this.postService.findMany(pagination, filters)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Query(() => PostCursorConnection)
  async postsCursor(
    @Args() pagination: PaginationCursorArgs,
    @Args('filters', { nullable: true }) filters: PostFilterInput,
  ) {
    try {
      return await this.postService.findManyCursor(pagination, filters)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Query(() => PostOffsetConnection)
  @UseGuards(JwtAuthGuard)
  async userPosts(
    @UserEntity() user: User,
    @Args() pagination: PaginationOffsetArgs,
    @Args('filters', { nullable: true }) filters: PostFilterInput,
  ) {
    try {
      return await this.postService.findManyByUser(user.id, pagination, filters)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Query(() => Number)
  async countPosts() {
    try {
      return await this.postService.count()
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Query(() => Post)
  async post(@Args() args: PostArgs) {
    try {
      return await this.postService.find(args)
    } catch (error) {
      if (error.name === 'NotFoundError') {
        throw new NotFoundException()
      } else {
        this.logger.error(error)
        return error
      }
    }
  }

  @Query(() => Post)
  @UseGuards(JwtAuthGuard)
  async userPost(@UserEntity() user: User, @Args() args: PostArgs) {
    try {
      return await this.postService.findByUser(user.id, args)
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

  @Mutation(() => Post)
  @Roles(UserRole.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async createPost(
    @UserEntity() user: User,
    @Args('data') data: CreatePostData,
  ) {
    try {
      const relation: CreatePostRelation = {
        userId: user.id,
      }
      return await this.postService.create(data, relation)
    } catch (error) {
      this.logger.error({
        message: error.message,
        stack: error.stack,
      })
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Mutation(() => Post)
  @UseGuards(ApiKeyAuthGuard)
  async createPostService(
    @Args('data') data: CreatePostData,
    @Args('relation', { nullable: true }) relation: CreatePostRelation,
  ) {
    try {
      return await this.postService.create(data, relation)
    } catch (error) {
      this.logger.error({
        message: error.message,
        stack: error.stack,
      })
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Mutation(() => Post)
  @Roles(UserRole.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async updatePost(
    @UserEntity() user: User,
    @Args('id', { type: () => String }) id: string,
    @Args('data') data: UpdatePostData,
  ) {
    try {
      return await this.postService.update(id, data)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Mutation(() => Post)
  @Roles(UserRole.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async deletePost(@Args('id', { type: () => String }) id: string) {
    try {
      return await this.postService.delete(id)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  // Resolvers

  @ResolveField('author')
  author(@Parent() post: Post) {
    return this.postService.authorResolver(post.id)
  }

  // Subscriptions

  @Subscription(() => PostEvent, {
    filter: (payload, context) => {
      const authUserId = context.req.user.id
      const payloadUserId = payload.postEvent.post.authorId

      if (authUserId !== payloadUserId) {
        return false
      }
      return true
    },
  })
  @UseGuards(JwtAuthGuard)
  postEvent() {
    return this.pubSub.asyncIterator('postEvent')
  }
}
