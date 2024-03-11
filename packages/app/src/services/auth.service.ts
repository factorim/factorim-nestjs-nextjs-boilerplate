import { gql } from 'graphql-request'

import { getGraphQLClient } from '@/lib/graphqlClient'
import {
  ChangePasswordMutation,
  ChangePasswordResponse,
  RefreshTokenResponse,
  ResetPasswordMutation,
  ResetPasswordRequestMutation,
  ResetPasswordRequestResponse,
  ResetPasswordResponse,
  SignIn,
  SignInGoogleResponse,
  SignInResponse,
  SignUp,
  SignUpMutation,
  SignUpRequest,
  SignUpRequestMutation,
  SignUpRequestResponse,
  SignUpResponse,
  Token,
} from '@/types'

// Sign in

const signin = async (auth: SignIn): Promise<Token> => {
  const query = gql`
    mutation signin($data: SignInData!) {
      signin(data: $data) {
        accessToken
        accessTokenExp
        refreshToken
      }
    }
  `

  const variables = {
    data: { email: auth.email, password: auth.password },
  }

  const graphQLClient = await getGraphQLClient()
  const data: SignInResponse = await graphQLClient.request(query, variables)
  return data.signin
}

const signinGoogle = async (idToken: string): Promise<Token> => {
  const query = gql`
    mutation signinGoogle($idToken: String!) {
      signinGoogle(idToken: $idToken) {
        accessToken
        accessTokenExp
        refreshToken
      }
    }
  `

  const variables = {
    idToken,
  }

  const graphQLClient = await getGraphQLClient()
  const data: SignInGoogleResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.signinGoogle
}

// Refresh token

const refreshToken = async (token: string): Promise<Token> => {
  const query = gql`
    mutation refreshToken($token: JWT!) {
      refreshToken(token: $token) {
        accessToken
        accessTokenExp
        refreshToken
      }
    }
  `

  const variables = {
    token,
  }

  const graphQLClient = await getGraphQLClient()
  const data: RefreshTokenResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.refreshToken
}

// Password

const resetPasswordRequest = async (
  mutation: ResetPasswordRequestMutation,
): Promise<SignUpRequest> => {
  const query = gql`
    mutation resetPasswordRequest($data: ResetPasswordRequestData!) {
      resetPasswordRequest(data: $data)
    }
  `

  const variables = {
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: ResetPasswordRequestResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.resetPasswordRequest
}

const resetPassword = async (
  mutation: ResetPasswordMutation,
): Promise<boolean> => {
  const query = gql`
    mutation resetPassword($data: ResetPasswordData!) {
      resetPassword(data: $data)
    }
  `

  const variables = {
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: ResetPasswordResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.resetPassword
}

const changePassword = async (
  mutation: ChangePasswordMutation,
): Promise<boolean> => {
  const query = gql`
    mutation changePassword($data: ChangePasswordData!) {
      changePassword(data: $data)
    }
  `

  const variables = {
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: ChangePasswordResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.changePassword
}

// Sign up

const signupRequest = async (
  mutation: SignUpRequestMutation,
): Promise<SignUpRequest> => {
  const query = gql`
    mutation signupRequest($data: SignUpRequestData!) {
      signupRequest(data: $data) {
        email
        token
      }
    }
  `

  const variables = {
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: SignUpRequestResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.signupRequest
}

const signup = async (mutation: SignUpMutation): Promise<SignUp> => {
  const query = gql`
    mutation signup($data: SignUpData!) {
      signup(data: $data) {
        accessToken
        refreshToken
      }
    }
  `

  const variables = {
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: SignUpResponse = await graphQLClient.request(query, variables)
  return data.signup
}

export const AuthService = {
  signin,
  signinGoogle,
  refreshToken,
  resetPasswordRequest,
  resetPassword,
  changePassword,
  signupRequest,
  signup,
}
