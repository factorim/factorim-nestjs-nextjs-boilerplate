import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { ModalContext } from '@/contexts'

type SubmitButtonProps = {
  isLoading: boolean
  isEnabled: boolean
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  isLoading,
  isEnabled,
}) => {
  const { t } = useTranslation()
  const { handleClose } = useContext(ModalContext)

  return (
    <div className="space-x-5 flex justify-end mt-4">
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
