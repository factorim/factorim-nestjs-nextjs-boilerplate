import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

type SelectInputProps = {
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string }>
  isLoading?: boolean
  className?: string
}

export const SelectInput: React.FC<SelectInputProps> = ({
  value,
  onChange,
  options,
  className,
}) => {
  const { t } = useTranslation()

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={classNames(
        'select select-bordered w-full max-w-xs',
        className,
        {
          'select-secondary': value !== undefined && value !== '',
        },
      )}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {t(option.label)}
        </option>
      ))}
    </select>
  )
}
