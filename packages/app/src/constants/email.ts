import { EmailTemplateVariable } from '@/types'

export const emailTemplateVariables: EmailTemplateVariable[] = [
  {
    variable: '{{validation_code}}',
    description: 'The validation code',
  },
  {
    variable: '{{validation_link}}',
    description: 'The validation link',
  },
  {
    variable: '{{validation_expiration}}',
    description: 'The validation expiration',
  },
]
