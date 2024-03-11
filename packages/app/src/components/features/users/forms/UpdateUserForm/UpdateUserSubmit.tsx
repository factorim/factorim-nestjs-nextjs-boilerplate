'use client'

import { useContext } from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import { ModalContext } from '@/contexts'

type UserModalUpdateProps = {
  showSuccess: boolean
  isLoading: boolean
  isEnabled: boolean
}

const UpdateUserSubmit: React.FC<UserModalUpdateProps> = ({
  showSuccess,
  isLoading,
  isEnabled,
}) => {
  const { t } = useTranslation()
  const { handleClose } = useContext(ModalContext)

  return (
    <div className="space-x-4">
      <span
        className={classNames(
          'transition-opacity ease-in duration-500 text-success ml-2 self-center',
          {
            'opacity-100': showSuccess,
            'opacity-0': !showSuccess,
          },
        )}
      >
        {t('common.message.updated')}
      </span>
      <button
        className="btn btn-ghost"
        disabled={isLoading}
        onClick={(e) => {
          e.preventDefault()
          handleClose()
        }}
      >
        {t('common.action.cancel')}
      </button>
      <button type="submit" className="btn btn-accent" disabled={!isEnabled}>
        <span
          className={classNames({
            'loading loading-spinner': isLoading,
            hidden: !isLoading,
          })}
        ></span>
        {t('common.action.submit')}
      </button>
    </div>
  )
}

export default UpdateUserSubmit
