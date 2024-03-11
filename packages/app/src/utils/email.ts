import { emailTemplateVariables } from '@/constants/email'
import { EmailTemplateVariable } from '@/types'

export const findVariables = (html: string): EmailTemplateVariable[] => {
  const variables = emailTemplateVariables.filter((variable) =>
    html.includes(variable.variable),
  )
  return variables
}
