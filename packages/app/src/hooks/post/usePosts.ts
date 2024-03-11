import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import { PaginationOffsetArgs, PostConnection, PostFilter } from '@/types'
import { PostService } from '@/services'

type UsePostsArgs = {
  pagination: PaginationOffsetArgs
  filters: PostFilter
}

export const usePosts = ({ pagination, filters }: UsePostsArgs) => {
  const { data, error, ...queryResponse } = useQuery<
    PostConnection,
    ClientError
  >({
    queryKey: ['posts', pagination, filters],
    queryFn: () => PostService.getPosts(pagination, filters),
  })

  const posts = data?.posts || []
  const totalCount = data?.totalCount || 0
  const errors = error?.response?.errors || null

  return { posts, totalCount, data, errors, ...queryResponse }
}
