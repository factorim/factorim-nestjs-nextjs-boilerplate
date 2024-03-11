import { gql } from 'graphql-request'

import { getGraphQLClient } from '@/lib/graphqlClient'
import {
  CreateEmailTemplateMutation,
  CreateEmailTemplateResponse,
  DeleteEmailTemplateResponse,
  EmailTemplate,
  EmailTemplateConnection,
  EmailTemplateFilter,
  EmailTemplateResponse,
  EmailTemplatesResponse,
  PaginationOffsetArgs,
  UpdateEmailTemplateMutation,
  UpdateEmailTemplateResponse,
} from '@/types'

const getEmailTemplate = async (id: string): Promise<EmailTemplate> => {
  const query = gql`
    query emailTemplate($id: String!) {
      emailTemplate(id: $id) {
        id
        type
        subject
        html
        design
        lang
        createdAt
      }
    }
  `

  const variables = {
    id,
  }

  const graphQLClient = await getGraphQLClient()
  const data: EmailTemplateResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.emailTemplate
}

const getEmailTemplates = async (
  pagination: PaginationOffsetArgs,
  filters: EmailTemplateFilter,
): Promise<EmailTemplateConnection> => {
  const query = gql`
    query emailTemplates($skip: Int!, $take: Int!) {
      emailTemplates(skip: $skip, take: $take) {
        emailTemplates {
          id
          type
          subject
          html
          design
          lang
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
  const data: EmailTemplatesResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.emailTemplates
}

const createEmailTemplate = async (
  mutation: CreateEmailTemplateMutation,
): Promise<EmailTemplate> => {
  const query = gql`
    mutation createEmailTemplate($data: CreateEmailTemplateData!) {
      createEmailTemplate(data: $data) {
        id
      }
    }
  `

  const variables = {
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: CreateEmailTemplateResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.createEmailTemplate
}

const updateEmailTemplate = async (
  mutation: UpdateEmailTemplateMutation,
): Promise<EmailTemplate> => {
  const query = gql`
    mutation updateEmailTemplate(
      $id: String!
      $data: UpdateEmailTemplateData!
    ) {
      updateEmailTemplate(id: $id, data: $data) {
        id
      }
    }
  `

  const variables = {
    id: mutation.id,
    data: mutation.data,
  }

  const graphQLClient = await getGraphQLClient()
  const data: UpdateEmailTemplateResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.updateEmailTemplate
}

const deleteEmailTemplate = async (id: string): Promise<EmailTemplate> => {
  const query = gql`
    mutation deleteEmailTemplate($id: String!) {
      deleteEmailTemplate(id: $id) {
        id
      }
    }
  `

  const variables = {
    id,
  }

  const graphQLClient = await getGraphQLClient()
  const data: DeleteEmailTemplateResponse = await graphQLClient.request(
    query,
    variables,
  )
  return data.deleteEmailTemplate
}

export const EmailTemplateService = {
  getEmailTemplate,
  getEmailTemplates,
  createEmailTemplate,
  updateEmailTemplate,
  deleteEmailTemplate,
}
