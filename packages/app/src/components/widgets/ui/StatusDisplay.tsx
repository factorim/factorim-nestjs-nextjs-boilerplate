import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { DisplayConfig } from '@/types'

type StatusDisplayProps = {
  enumValue: string | number | boolean
  config: DisplayConfig
  className?: string
  responsive?: boolean
}

export const StatusDisplay: React.FC<StatusDisplayProps> = ({
  enumValue,
  config,
  className,
  responsive = true,
}) => {
  const { t } = useTranslation()
  // Convert enumValue to string if it's boolean
  const key = typeof enumValue === 'boolean' ? enumValue.toString() : enumValue

  const displayProps = config[key]

  if (!displayProps) {
    return <></>
  }

  let color = ''
  switch (displayProps.bgColor) {
    case 'red':
      color = 'bg-red-500'
      break
    case 'green':
      color = 'bg-green-400'
      break
    case 'blue':
      color = 'bg-blue-500'
      break
  }

  return (
    <div className={classNames('flex items-center', className)}>
      <div className={classNames('h-2.5 w-2.5 rounded-full mr-2', color)}></div>
      <span
        className={classNames('', {
          'hidden 2xl:inline': responsive,
        })}
      >
        {t(displayProps.label)}
      </span>
    </div>
  )
}
