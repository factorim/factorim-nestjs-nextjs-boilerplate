import { registerEnumType } from '@nestjs/graphql'
import { EmailType, Lang, UserAuth, UserRole, UserStatus } from '@prisma/client'

registerEnumType(EmailType, {
  name: 'EmailType',
  description: 'Email Validation type',
})

registerEnumType(Lang, {
  name: 'Lang',
  description: 'Supported languages',
})

registerEnumType(UserAuth, {
  name: 'UserAuth',
  description: 'User Auth',
})

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'User role',
})

registerEnumType(UserStatus, {
  name: 'UserStatus',
  description: 'User status',
})
