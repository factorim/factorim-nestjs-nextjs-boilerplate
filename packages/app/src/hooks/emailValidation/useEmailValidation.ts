import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import { EmailValidation, EmailValidationQueryArgs } from '@/types'
import { EmailValidationService } from '@/services'

export const useEmailValidation = ({ id, token }: EmailValidationQueryArgs) => {
  const {
    data: emailValidation,
    error,
    ...queryResponse
  } = useQuery<EmailValidation, ClientError>({
    queryKey: ['emailValidation', id],
    queryFn: () =>
      EmailValidationService.getEmailValidation({
        id,
        token,
      }),
  })

  const errors = error?.response?.errors || null

  return { emailValidation, errors, ...queryResponse }
}
