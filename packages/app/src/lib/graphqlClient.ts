import { GraphQLClient } from 'graphql-request'
import { getSession } from 'next-auth/react'
import { config } from '@/config/configClient'

let graphQLClient: GraphQLClient

const initializeClient = async () => {
  let apiUrl = config.api.graphql.url

  if (typeof window === 'undefined') {
    // Server-side only
    const { configServer } = await import('@/config/configServer')
    apiUrl = configServer.api.graphql.url
  }

  graphQLClient = new GraphQLClient(apiUrl)

  if (typeof window === 'undefined') {
    // Server-side: Apply authorization token
    const session = await getSession()
    const token = session?.accessToken
    graphQLClient.setHeader('authorization', `Bearer ${token}`)
  }

  return graphQLClient
}

export const getGraphQLClient = async () => {
  if (!graphQLClient) {
    await initializeClient()
  }
  const session = await getSession()
  const token = session?.accessToken
  graphQLClient.setHeader('authorization', `Bearer ${token}`)
  return graphQLClient
}
