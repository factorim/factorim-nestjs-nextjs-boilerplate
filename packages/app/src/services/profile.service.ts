import { gql } from 'graphql-request'

import { getGraphQLClient } from '@/lib/graphqlClient'
import {
  ChangeEmailMutation,
  ChangeEmailRequestMutation,
  ChangeEmailRequestResponse,
  ChangeEmailResponse,
  DeleteProfileMutation,
  DeleteProfileResponse,
  Profile,
  RequestDeleteProfileResponse,
  UpdateProfileMutation,
  UpdateProfileResponse,
} from '@/types'

const updateProfile = async (
  updateProfileMutation: UpdateProfileMutation,
): Promise<Profile> => {
  const query = gql`
    mutation updateProfile($data: UpdateProfileData!) {
      updateProfile(data: $data)
    }
  `

  const variables = {
    data: updateProfileMutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: UpdateProfileResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.updateProfile
}

const changeEmailRequest = async (
  mutation: ChangeEmailRequestMutation,
): Promise<string> => {
  const query = gql`
    mutation changeEmailRequest($data: ChangeEmailRequestData!) {
      changeEmailRequest(data: $data)
    }
  `

  const variables = {
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: ChangeEmailRequestResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.changeEmailRequest
}

const changeEmail = async (mutation: ChangeEmailMutation): Promise<string> => {
  const query = gql`
    mutation changeEmail($data: ChangeEmailData!) {
      changeEmail(data: $data)
    }
  `
  const variables = {
    data: mutation.data,
  }
  const graphQLClient = await getGraphQLClient()
  const data: ChangeEmailResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.changeEmail
}

const requestDeleteProfile = async (): Promise<string> => {
  const query = gql`
    mutation requestDeleteProfile {
      requestDeleteProfile
    }
  `

  const graphQLClient = await getGraphQLClient()
  const data: RequestDeleteProfileResponse = await graphQLClient.request(query)
  return data.requestDeleteProfile
}

const deleteProfile = async (
  mutation: DeleteProfileMutation,
): Promise<Profile> => {
  const query = gql`
    mutation deleteProfile($data: DeleteProfileData!) {
      deleteProfile(data: $data)
    }
  `

  const variables = {
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: DeleteProfileResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.deleteProfile
}

export const ProfileService = {
  updateProfile,
  changeEmailRequest,
  changeEmail,
  requestDeleteProfile,
  deleteProfile,
}
