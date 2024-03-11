import { MdCheckCircleOutline } from 'react-icons/md'

import { emailTemplateVariables } from '@/constants/email'
import { EmailTemplateVariable } from '@/types'
import classNames from 'classnames'

type TemplateVariablesProps = {
  variables: EmailTemplateVariable[]
}

export const TemplateVariables: React.FC<TemplateVariablesProps> = ({
  variables,
}) => {
  const copyVariable = (variable: string) => {
    navigator.clipboard.writeText(variable)
  }

  const isVariableUsed = (variable: string) => {
    return variables.some((v) => v.variable === variable)
  }

  return (
    <div className="mb-5 space-x-4">
      {emailTemplateVariables.map((variable, index) => (
        <div key={index} className="tooltip" data-tip={variable.description}>
          <div
            className={classNames('badge  gap-2 cursor-pointer', {
              'badge-info': isVariableUsed(variable.variable),
            })}
            onClick={() => copyVariable(variable.variable)}
          >
            <MdCheckCircleOutline className="text-md mr-2" />
            {variable.variable}
          </div>
        </div>
      ))}
    </div>
  )
}
