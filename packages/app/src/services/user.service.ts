import { gql } from 'graphql-request'

import { getGraphQLClient } from '@/lib/graphqlClient'
import {
  DeleteUserResponse,
  MeResponse,
  PaginationOffsetArgs,
  UpdateUserMutation,
  UpdateUserResponse,
  User,
  UserConnection,
  UserFilter,
  UserResponse,
  UsersResponse,
} from '@/types'

const getMe = async (): Promise<User> => {
  const query = gql`
    query {
      me {
        id
        auth
        email
        roles
      }
    }
  `

  const graphQLClient = await getGraphQLClient()
  const data: MeResponse = await graphQLClient.request(query)
  return data.me
}

const getUser = async (id: string): Promise<User> => {
  const query = gql`
    query user($id: String!) {
      user(id: $id) {
        id
        email
        status
        createdAt
      }
    }
  `

  const variables = {
    id,
  }

  const graphQLClient = await getGraphQLClient()
  const data: UserResponse = await graphQLClient.request(query, variables)
  return data.user
}

const getUsers = async (
  pagination: PaginationOffsetArgs,
  filters: UserFilter,
): Promise<UserConnection> => {
  const query = gql`
    query users($skip: Int!, $take: Int!, $filters: UserFilterInput) {
      users(skip: $skip, take: $take, filters: $filters) {
        users {
          id
          email
          roles
          lang
          theme
          status
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
  const data: UsersResponse = await graphQLClient.request(query, variables)
  return data.users
}

const updateUser = async (mutation: UpdateUserMutation): Promise<User> => {
  const query = gql`
    mutation updateUser($id: String!, $data: UpdateUserData!) {
      updateUser(id: $id, data: $data) {
        id
      }
    }
  `

  const variables = {
    id: mutation.id,
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: UpdateUserResponse = await graphQLClient.request(query, variables)
  return data.updateUser
}

const deleteUser = async (id: string): Promise<User> => {
  const query = gql`
    mutation deleteUser($id: String!) {
      deleteUser(id: $id) {
        id
      }
    }
  `

  const variables = {
    id,
  }

  const graphQLClient = await getGraphQLClient()
  const data: DeleteUserResponse = await graphQLClient.request(query, variables)
  return data.deleteUser
}

export const UserService = {
  getMe,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
}
