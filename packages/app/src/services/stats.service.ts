import { gql } from 'graphql-request'

import { getGraphQLClient } from '@/lib/graphqlClient'
import { AdminStats, AdminStatsResponse } from '@/types'

const getAdminStats = async (): Promise<AdminStats> => {
  const query = gql`
    query {
      countPosts
      countUsers
    }
  `

  const graphQLClient = await getGraphQLClient()
  const data: AdminStatsResponse = await graphQLClient.request(query)
  return data
}

export const StatsService = {
  getAdminStats,
}
