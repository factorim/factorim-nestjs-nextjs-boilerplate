import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { UserRole } from '@prisma/client'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      'roles',
      [context.getHandler(), context.getClass()],
    )
    if (!requiredRoles) {
      return true
    }

    const user = GqlExecutionContext.create(context).getContext().req.user
    return requiredRoles.some((role) => user?.roles?.includes(role))
  }
}
