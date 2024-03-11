'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { MdClear, MdClearAll, MdOutlineSearch } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { PostFilter } from '@/types'
import { clearParams, updateUrlWithFilters } from '@/utils/url'
import { SelectInput } from '@/components/widgets/forms'
import { yesNoConfig } from '@/constants/display'
import { getDisplayOptions } from '@/utils/display'

type PostFilterFormValues = {
  keyword: string
  enabled: string
}

type FieldName = keyof PostFilterFormValues

type PostMenuFormProps = {
  filters: PostFilter
}

export const PostMenuForm: React.FC<PostMenuFormProps> = ({ filters }) => {
  const { t } = useTranslation()
  const { register, watch, reset } = useForm<PostFilterFormValues>()
  const watchFields = watch(['keyword', 'enabled'])

  const handleChange = (name: FieldName, value: string) => {
    const updatedFilters = { ...filters }

    if (!value) {
      updatedFilters[name] = undefined
    } else if (name === 'enabled') {
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
      enabled: filters.enabled?.toString() || '',
    })
  }, [filters, reset])

  return (
    <div className="flex justify-start">
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
                placeholder={t('post.label.searchPost')}
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
          <label className="label">{t('common.label.enabled')}</label>
          <SelectInput
            value={watchFields[1]}
            onChange={(value) => handleChange('enabled', value)}
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
