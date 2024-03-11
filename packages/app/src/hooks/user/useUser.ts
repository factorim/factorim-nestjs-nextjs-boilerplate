import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import { User } from '@/types'
import { UserService } from '@/services'

export const useUser = (id: string) => {
  const {
    data: user,
    error,
    ...queryResponse
  } = useQuery<User, ClientError>({
    queryKey: ['user', id],
    queryFn: () => UserService.getUser(id),
  })

  const errors = error?.response?.errors || null

  return { user, errors, ...queryResponse }
}
