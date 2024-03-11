import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import { EmailValidation } from '@/types'
import { EmailValidationService } from '@/services'

export const useUserEmailValidation = (token: string) => {
  const {
    data: userEmailValidation,
    error,
    ...queryResponse
  } = useQuery<EmailValidation, ClientError>({
    queryKey: ['userEmailValidation', token],
    queryFn: () => EmailValidationService.getUserEmailValidation(token),
    retry: false,
  })

  const errors = error?.response?.errors || null

  return { userEmailValidation, errors, ...queryResponse }
}
