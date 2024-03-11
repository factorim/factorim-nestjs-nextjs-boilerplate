import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { MdClear, MdClearAll, MdOutlineSearch } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { EmailValidationFilter } from '@/types'
import { clearParams, updateUrlWithFilters } from '@/utils/url'
import { SelectInput } from '@/components/widgets/forms'
import { getDisplayOptions } from '@/utils/display'
import { yesNoConfig } from '@/constants/display'

type EmailValidationFilterFormValues = {
  keyword: string
  checked: string
  claimed: string
}

type FieldName = keyof EmailValidationFilterFormValues

type EmailValidationMenuFormProps = {
  filters: EmailValidationFilter
}

const EmailValidationMenuForm: React.FC<EmailValidationMenuFormProps> = ({
  filters,
}) => {
  const { t } = useTranslation()
  const { register, watch, reset } = useForm<EmailValidationFilterFormValues>()
  const watchFields = watch(['keyword', 'checked', 'claimed'])

  const handleChange = (name: FieldName, value: string) => {
    const updatedFilters = { ...filters }

    if (!value) {
      updatedFilters[name] = undefined
    } else if (name === 'checked' || name === 'claimed') {
      updatedFilters[name] = value === 'true'
    } else {
      updatedFilters[name] = value
    }

    updateUrlWithFilters(updatedFilters)
  }

  const handleClearFilters = () => {
    clearParams()
  }

  useEffect(() => {
    reset({
      keyword: filters.keyword || '',
      checked: filters.checked?.toString() || '',
      claimed: filters.claimed?.toString() || '',
    })
  }, [filters, reset])

  return (
    <div className="flex justify-between">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-row gap-8"
      >
        <div className="form-control relative">
          <div className="join">
            <label
              className={classNames('input flex items-center gap-2 join-item', {
                'input-secondary': watchFields[0] && watchFields[0] !== '',
              })}
            >
              <MdOutlineSearch className="text-2xl" />
              <input
                {...register('keyword')}
                onChange={(e) => handleChange('keyword', e.target.value)}
                type="text"
                placeholder={t('email.label.searchEmailValidation')}
                className="grow"
              />
            </label>
            <button
              className="btn btn-ghost join-item rounded-r-full"
              disabled={watchFields[0] === ''}
              onClick={() => {
                handleChange('keyword', '')
              }}
            >
              <MdClear />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <label className="label">{t('email.label.checked')}</label>
          <SelectInput
            value={watchFields[1]}
            onChange={(value) => handleChange('checked', value)}
            options={getDisplayOptions(yesNoConfig)}
          />
        </div>
        <div className="flex flex-row gap-2">
          <label className="label">{t('email.label.claimed')}</label>
          <SelectInput
            value={watchFields[2]}
            onChange={(value) => handleChange('claimed', value)}
            options={getDisplayOptions(yesNoConfig)}
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="tooltip" data-tip="Clear filters">
            <button className="btn" onClick={handleClearFilters}>
              <MdClearAll />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EmailValidationMenuForm
