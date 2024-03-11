import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import {
  PaginationCursorArgs,
  PostFilter,
  PostsCursorConnection,
} from '@/types'
import { PostService } from '@/services'

type UsePostsCursorArgs = {
  pagination: PaginationCursorArgs
  filters: PostFilter
}

export const usePostsCursor = ({ pagination, filters }: UsePostsCursorArgs) => {
  const { data, error, ...queryResponse } = useQuery<
    PostsCursorConnection,
    ClientError
  >({
    queryKey: ['postsCursor', pagination, filters],
    queryFn: () => PostService.getPostsCursor(pagination, filters),
    enabled: pagination.cursor !== null,
  })

  const posts = data?.edges || []
  const pageInfo = data?.pageInfo || {
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: '',
    endCursor: '',
  }
  const totalCount = data?.totalCount || 0
  const errors = error?.response?.errors || null

  return {
    posts,
    pageInfo,
    totalCount,
    data,
    errors,
    ...queryResponse,
  }
}
