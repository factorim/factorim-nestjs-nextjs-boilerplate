import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import { Post } from '@/types'
import { PostService } from '@/services'

export const useUserPost = (id: string) => {
  const {
    data: post,
    error,
    ...queryResponse
  } = useQuery<Post, ClientError>({
    queryKey: ['userPost', id],
    queryFn: () => PostService.getUserPost(id),
  })

  const errors = error?.response?.errors || null

  return { post, errors, ...queryResponse }
}
