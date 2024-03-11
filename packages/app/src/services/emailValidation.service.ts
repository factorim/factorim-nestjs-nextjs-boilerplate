import { gql } from 'graphql-request'

import { getGraphQLClient } from '@/lib/graphqlClient'
import {
  CursorDirection,
  EmailValidation,
  EmailValidationCursorConnection,
  EmailValidationCursorQuery,
  EmailValidationFilter,
  EmailValidationQueryArgs,
  EmailValidationResponse,
  EmailValidationsResponse,
  PaginationCursorArgs,
  UserEmailValidationResponse,
} from '@/types'

const getUserEmailValidation = async (
  token: string,
): Promise<EmailValidation> => {
  const query = gql`
    query userEmailValidation($token: String!) {
      userEmailValidation(token: $token) {
        id
        type
        token
        email
        code
        checked
        claimed
        lang
        createdAt
        updatedAt
      }
    }
  `

  const variables = {
    token,
  }

  const graphQLClient = await getGraphQLClient()
  const data: UserEmailValidationResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.userEmailValidation
}

const getEmailValidation = async ({
  id,
  token,
}: EmailValidationQueryArgs): Promise<EmailValidation> => {
  const query = gql`
    query emailValidation($id: String, $token: String) {
      emailValidation(id: $id, token: $token) {
        id
        type
        token
        email
        code
        checked
        claimed
        lang
        createdAt
        updatedAt
      }
    }
  `

  const variables = {
    id,
    token,
  }

  const graphQLClient = await getGraphQLClient()
  const data: EmailValidationResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.emailValidation
}

const getEmailValidations = async (
  pagination: PaginationCursorArgs,
  filters: EmailValidationFilter,
): Promise<EmailValidationCursorConnection> => {
  const query = gql`
    query emailValidations(
      $first: Int
      $after: String
      $last: Int
      $before: String
      $filters: EmailValidationFilterInput!
    ) {
      emailValidations(
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
            type
            token
            email
            code
            checked
            claimed
            lang
            createdAt
            updatedAt
          }
        }
      }
    }
  `

  const variables: EmailValidationCursorQuery = {
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
  const data: EmailValidationsResponse = await graphQLClient.request(
    query,
    variables,
  )

  return data.emailValidations
}

export const EmailValidationService = {
  getUserEmailValidation,
  getEmailValidation,
  getEmailValidations,
}
