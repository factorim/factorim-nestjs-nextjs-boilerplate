import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import {
  EmailTemplateConnection,
  EmailTemplateFilter,
  PaginationOffsetArgs,
} from '@/types'
import { EmailTemplateService } from '@/services'

type UseEmailTemplatesArgs = {
  pagination: PaginationOffsetArgs
  filters: EmailTemplateFilter
}

export const useEmailTemplates = ({
  pagination,
  filters,
}: UseEmailTemplatesArgs) => {
  const { data, error, ...queryResponse } = useQuery<
    EmailTemplateConnection,
    ClientError
  >({
    queryKey: ['emailTemplates', pagination, filters],
    queryFn: () => EmailTemplateService.getEmailTemplates(pagination, filters),
  })

  const emailTemplates = data?.emailTemplates || []
  const totalCount = data?.totalCount || 0
  const errors = error?.response?.errors || null

  return { emailTemplates, totalCount, data, errors, ...queryResponse }
}
