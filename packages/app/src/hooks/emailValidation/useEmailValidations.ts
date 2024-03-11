import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import {
  EmailValidationCursorConnection,
  EmailValidationFilter,
  PaginationCursorArgs,
} from '@/types'
import { EmailValidationService } from '@/services'

type UseEmailValidationsArgs = {
  pagination: PaginationCursorArgs
  filters: EmailValidationFilter
}

export const useEmailValidations = ({
  pagination,
  filters,
}: UseEmailValidationsArgs) => {
  const { data, error, ...queryResponse } = useQuery<
    EmailValidationCursorConnection,
    ClientError
  >({
    queryKey: ['emailValidations', pagination, filters],
    queryFn: () =>
      EmailValidationService.getEmailValidations(pagination, filters),
  })

  const emailValidations = data?.edges || []
  const pageInfo = data?.pageInfo || {
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: '',
    endCursor: '',
  }
  const totalCount = data?.totalCount || 0
  const errors = error?.response?.errors || null

  return {
    emailValidations,
    totalCount,
    pageInfo,
    data,
    errors,
    ...queryResponse,
  }
}
