import { PostNode } from '@/types'

interface State {
  posts: PostNode[]
}

type Action =
  | { type: 'before' | 'after' | 'replace'; posts: PostNode[] }
  | { type: 'clear' }

export const postsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'before':
      return { posts: [...action.posts, ...state.posts] }

    case 'after':
      return { posts: [...state.posts, ...action.posts] }

    case 'replace':
      return { posts: [...action.posts] }

    case 'clear':
      return { posts: [] }

    default:
      throw new Error()
  }
}
