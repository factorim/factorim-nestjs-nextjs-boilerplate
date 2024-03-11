import { PageInfo, User } from '.'

export type Post = {
  id: string
  title: string
  content: string
  enabled: boolean
  createdAt: string
  updatedAt: string
  author: User
}

export type PostConnection = {
  posts: Post[]
  totalCount: number
}

export type PostNode = {
  node: Post
}

export type PostsCursorConnection = {
  edges: PostNode[]
  totalCount: number
  pageInfo: PageInfo
}

// Query
// ------

export type PostFilter = {
  keyword?: string
  enabled?: boolean
}

export type PostCursorQuery = {
  first?: number | null
  after?: string | null
  last?: number | null
  before?: string | null
  filters: PostFilter
}

export type PostsResponse = {
  posts: PostConnection
}

export type UserPostResponse = {
  userPost: Post
}

export type UserPostsResponse = {
  userPosts: PostConnection
}

export type PostsCursorResponse = {
  postsCursor: PostsCursorConnection
}

// Create
// ------

// Form

export type CreatePostFormValues = {
  title: string
  content: string
  enabled: boolean
}

// Mutation

export type CreatePostData = {
  title: string
  content: string
  enabled: boolean
}

export type CreatePostMutation = {
  data: CreatePostData
}

// Response

export type CreatePostResponse = {
  createPost: Post
}

// Update
// ------

// Form

export type UpdatePostFormValues = {
  title: string
  content: string
  enabled: boolean
}

// Mutation

export type UpdatePostData = {
  title?: string
  content?: string
  enabled?: boolean
}

export type UpdatePostMutation = {
  id: string
  data: UpdatePostData
}

// Response

export type UpdatePostResponse = {
  updatePost: Post
}

// Delete
// ------

// Response

export type DeletePostResponse = {
  deletePost: Post
}
