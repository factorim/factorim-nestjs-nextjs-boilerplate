import {
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UseGuards,
} from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserRole } from '@prisma/client'

import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard'
import { RolesGuard } from 'src/modules/auth/guards/roles.guard'
import { UserEntity } from './decorators/user.decorator'
import { Roles } from 'src/modules/auth/decorators/roles.decorator'
import { UserService } from './user.service'
import { User } from './models/user.model'
import { UserArgs } from './args/user.args'
import { PaginationOffsetArgs } from 'src/common/pagination/offset'
import { UserOffsetConnection } from './models/connection.model'
import { CreateUserData } from './inputs/create.input'
import { UpdateUserData } from './inputs/update.input'
import { UserFilterInput } from './args/user.filter'
import { ApiKeyAuthGuard } from '../auth/guards/apikey.guard'

@Resolver(() => User)
export class UserResolver {
  private readonly logger = new Logger(UserResolver.name)

  constructor(private userService: UserService) {}

  // Queries

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  async me(@UserEntity() user: User): Promise<User> {
    return user
  }

  @Query(() => UserOffsetConnection)
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async users(
    @Args() pagination: PaginationOffsetArgs,
    @Args('filters', { nullable: true }) filters: UserFilterInput,
  ) {
    try {
      return await this.userService.findMany(pagination, filters)
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Query(() => UserOffsetConnection)
  @UseGuards(ApiKeyAuthGuard)
  async usersService(
    @Args() pagination: PaginationOffsetArgs,
    @Args('filters', { nullable: true }) filters: UserFilterInput,
  ) {
    try {
      return await this.userService.findMany(pagination, filters)
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Query(() => Number)
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async countUsers(
    @Args('filters', { nullable: true }) filters: UserFilterInput,
  ) {
    try {
      return await this.userService.count(filters)
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException()
    }
  }

  @Query(() => User)
  async user(@Args() args: UserArgs) {
    try {
      return await this.userService.find(args)
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

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserData) {
    try {
      return await this.userService.create(data)
    } catch (error) {
      this.logger.error({
        message: error.message,
        stack: error.stack,
      })
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => String }) id: string,
    @Args('data') data: UpdateUserData,
  ) {
    try {
      return await this.userService.update(id, data)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }

  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => String }) id: string) {
    try {
      return await this.userService.delete(id)
    } catch (error) {
      this.logger.error(error)
      return error
    }
  }
}
