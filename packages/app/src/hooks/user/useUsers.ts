import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import { PaginationOffsetArgs, UserConnection, UserFilter } from '@/types'
import { UserService } from '@/services'

type UseUsersArgs = {
  pagination: PaginationOffsetArgs
  filters: UserFilter
}

export const useUsers = ({ pagination, filters }: UseUsersArgs) => {
  const { data, error, ...queryResponse } = useQuery<
    UserConnection,
    ClientError
  >({
    queryKey: ['users', pagination, filters],
    queryFn: () => UserService.getUsers(pagination, filters),
  })

  const users = data?.users || []
  const totalCount = data?.totalCount || 0
  const errors = error?.response?.errors || null

  return { users, totalCount, data, errors, ...queryResponse }
}
