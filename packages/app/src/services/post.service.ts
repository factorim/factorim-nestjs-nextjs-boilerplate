import { gql } from 'graphql-request'

import { getGraphQLClient } from '@/lib/graphqlClient'
import {
  CreatePostMutation,
  CreatePostResponse,
  CursorDirection,
  DeletePostResponse,
  PaginationCursorArgs,
  PaginationOffsetArgs,
  Post,
  PostConnection,
  PostCursorQuery,
  PostFilter,
  PostsCursorConnection,
  PostsCursorResponse,
  PostsResponse,
  UpdatePostMutation,
  UpdatePostResponse,
  UserPostResponse,
  UserPostsResponse,
} from '@/types'

const getPosts = async (
  pagination: PaginationOffsetArgs,
  filters: PostFilter,
): Promise<PostConnection> => {
  const query = gql`
    query posts($skip: Int!, $take: Int!, $filters: PostFilterInput) {
      posts(skip: $skip, take: $take, filters: $filters) {
        posts {
          id
          title
          content
          enabled
          createdAt
          author {
            id
            email
            name
          }
        }
        totalCount
      }
    }
  `

  const { page, take } = pagination
  const variables = {
    skip: (page - 1) * take,
    take,
    filters,
  }

  const graphQLClient = await getGraphQLClient()
  const data: PostsResponse = await graphQLClient.request(query, variables)
  return data.posts
}

const getPostsCursor = async (
  pagination: PaginationCursorArgs,
  filters: PostFilter,
): Promise<PostsCursorConnection> => {
  const query = gql`
    query postsCursor(
      $first: Int
      $after: String
      $last: Int
      $before: String
      $filters: PostFilterInput
    ) {
      postsCursor(
        first: $first
        after: $after
        last: $last
        before: $before
        filters: $filters
      ) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            title
            content
            createdAt
            author {
              id
              email
              name
            }
          }
        }
      }
    }
  `

  const variables: PostCursorQuery = {
    first: null,
    after: null,
    last: null,
    before: null,
    filters,
  }

  const { take, direction, cursor } = pagination
  if (direction === CursorDirection.NEXT) {
    variables.first = take
    variables.after = cursor
  } else {
    variables.last = take
    variables.before = cursor
  }

  const graphQLClient = await getGraphQLClient()
  const data: PostsCursorResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.postsCursor
}

const getUserPost = async (id: string): Promise<Post> => {
  const query = gql`
    query userPost($id: String!) {
      userPost(id: $id) {
        id
        title
        content
        enabled
        createdAt
        updatedAt
      }
    }
  `

  const variables = {
    id,
  }

  const graphQLClient = await getGraphQLClient()
  const data: UserPostResponse = await graphQLClient.request(query, variables)
  return data.userPost
}

const getUserPosts = async (
  pagination: PaginationOffsetArgs,
  filters: PostFilter,
): Promise<PostConnection> => {
  const query = gql`
    query userPosts($skip: Int!, $take: Int!, $filters: PostFilterInput) {
      userPosts(skip: $skip, take: $take, filters: $filters) {
        posts {
          id
          title
          content
          enabled
          createdAt
        }
        totalCount
      }
    }
  `

  const { page, take } = pagination
  const variables = {
    skip: (page - 1) * take,
    take,
    filters,
  }

  const graphQLClient = await getGraphQLClient()
  const data: UserPostsResponse = await graphQLClient.request(query, variables)
  return data.userPosts
}

const createPost = async (mutation: CreatePostMutation): Promise<Post> => {
  const query = gql`
    mutation createPost($data: CreatePostData!) {
      createPost(data: $data) {
        id
      }
    }
  `

  const variables = {
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: CreatePostResponse = await graphQLClient.request(query, variables)
  return data.createPost
}

const updatePost = async (mutation: UpdatePostMutation): Promise<Post> => {
  const query = gql`
    mutation updatePost($id: String!, $data: UpdatePostData!) {
      updatePost(id: $id, data: $data) {
        id
      }
    }
  `

  const variables = {
    id: mutation.id,
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: UpdatePostResponse = await graphQLClient.request(query, variables)
  return data.updatePost
}

const deletePost = async (id: string): Promise<Post> => {
  const query = gql`
    mutation deletePost($id: String!) {
      deletePost(id: $id) {
        id
      }
    }
  `

  const variables = {
    id,
  }

  const graphQLClient = await getGraphQLClient()
  const data: DeletePostResponse = await graphQLClient.request(query, variables)
  return data.deletePost
}

export const PostService = {
  getPosts,
  getPostsCursor,
  getUserPost,
  getUserPosts,
  createPost,
  updatePost,
  deletePost,
}
