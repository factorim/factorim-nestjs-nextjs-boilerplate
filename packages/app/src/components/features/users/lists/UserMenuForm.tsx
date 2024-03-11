'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { MdClear, MdClearAll, MdOutlineSearch } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { UserFilter } from '@/types'
import { SelectInput } from '@/components/widgets/forms'
import { clearParams, updateUrlWithFilters } from '@/utils/url'
import { getDisplayOptions } from '@/utils/display'
import { userStatusConfig } from '@/constants/display'

type UserFilterFormValues = {
  keyword: string
  status: string
}

type FieldName = keyof UserFilterFormValues

type UserMenuFormProps = {
  filters: UserFilter
}

const UserMenuForm: React.FC<UserMenuFormProps> = ({ filters }) => {
  const { t } = useTranslation()
  const { register, watch, reset } = useForm<UserFilterFormValues>()
  const watchFields = watch(['keyword', 'status'])

  const handleChange = (name: FieldName, value: string) => {
    const updatedFilters = { ...filters }

    if (!value) {
      updatedFilters[name] = undefined
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
      status: filters.status || '',
    })
  }, [filters, reset])

  return (
    <div className="flex justify-start">
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-row gap-8"
        >
          <div className="form-control relative">
            <div className="join">
              <label
                className={classNames(
                  'input flex items-center gap-2 join-item',
                  {
                    'input-secondary': watchFields[0] && watchFields[0] !== '',
                  },
                )}
              >
                <MdOutlineSearch className="text-2xl" />
                <input
                  {...register('keyword')}
                  onChange={(e) => handleChange('keyword', e.target.value)}
                  type="text"
                  placeholder={t('user.label.searchUser')}
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
            <label className="label">{t('common.label.status')}</label>
            <SelectInput
              value={watchFields[1]}
              onChange={(value) => handleChange('status', value)}
              options={getDisplayOptions(userStatusConfig)}
            />
          </div>
          <div className="flex flex-row gap-2">
            <div className="tooltip" data-tip={t('common.action.clearFilters')}>
              <button className="btn" onClick={handleClearFilters}>
                <MdClearAll />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserMenuForm
