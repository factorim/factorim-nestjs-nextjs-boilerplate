import { useQuery } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'

import { EmailTemplate } from '@/types'
import { EmailTemplateService } from '@/services'

export const useEmailTemplate = (id: string) => {
  const {
    data: emailTemplate,
    error,
    ...queryResponse
  } = useQuery<EmailTemplate, ClientError>({
    queryKey: ['emailTemplate', id],
    queryFn: () => EmailTemplateService.getEmailTemplate(id),
  })

  const errors = error?.response?.errors || null

  return { emailTemplate, errors, ...queryResponse }
}
