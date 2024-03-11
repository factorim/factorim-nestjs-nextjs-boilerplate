import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

type ConfirmButtonProps = {
  title: string
  type?: string
  handleConfirm: () => void
  isLink?: boolean
}

export const ConfirmButton = ({
  title,
  type,
  handleConfirm,
  isLink = false,
}: ConfirmButtonProps) => {
  const { t } = useTranslation()
  const [openConfirm, setOpenConfirm] = useState<boolean>(false)

  const handleRequestDelete = () => {
    setOpenConfirm(true)
  }

  const handleConfirmDelete = () => {
    handleConfirm()
  }

  const getButtonClass = () => {
    switch (type) {
      case 'alert':
        return {
          link: 'btn btn-outline btn-error',
          button: 'btn btn-error',
        }
      default:
        return {
          link: 'btn btn-outline btn-xs',
          button: 'btn',
        }
    }
  }

  return (
    <div>
      {!openConfirm ? (
        isLink ? (
          <a
            onClick={() => handleRequestDelete()}
            className={getButtonClass().link}
          >
            {title}
          </a>
        ) : (
          <button
            onClick={() => handleRequestDelete()}
            className={getButtonClass().button}
          >
            {title}
          </button>
        )
      ) : (
        <span className="space-x-4">
          <button
            type="submit"
            className={classNames('btn btn-error', {})}
            onClick={(e) => {
              e.preventDefault()
              handleConfirmDelete()
            }}
          >
            {t('common.action.yes')}
          </button>
          <button
            type="submit"
            className="btn btn-ghost"
            onClick={() => setOpenConfirm(false)}
          >
            {t('common.action.no')}
          </button>
        </span>
      )}
    </div>
  )
}
