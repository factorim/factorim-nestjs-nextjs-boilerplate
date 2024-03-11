import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import { User } from '@/types'
import { UserService } from '@/services'

export const useMe = () => {
  const {
    data: me,
    error,
    ...queryResponse
  } = useQuery<User, ClientError>({
    queryKey: ['me'],
    queryFn: () => UserService.getMe(),
  })

  const errors = error?.response?.errors || null

  return { me, errors, ...queryResponse }
}
