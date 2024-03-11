import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import { AdminStatsResponse } from '@/types'
import { StatsService } from '@/services'

export const useAdminStats = () => {
  const {
    data: stats,
    error,
    ...queryResponse
  } = useQuery<AdminStatsResponse, ClientError>({
    queryKey: ['adminStats'],
    queryFn: () => StatsService.getAdminStats(),
  })

  const errors = error?.response?.errors || null

  return { stats, errors, ...queryResponse }
}
