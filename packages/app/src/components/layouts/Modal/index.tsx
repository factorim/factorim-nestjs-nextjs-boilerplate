'use client'

import classNames from 'classnames'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { ModalContext } from '@/contexts'

type ModalProps = Record<string, never>

const Modal: React.FC<ModalProps> = () => {
  const { t } = useTranslation()
  const { ref, modalContent, options } = useContext(ModalContext)

  const width = options?.width ? options.width : 'w-[750px]'

  return (
    <dialog ref={ref} className="modal">
      <div className={classNames('modal-box', width)}>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {modalContent}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>{t('common.action.close')}</button>
      </form>
    </dialog>
  )
}

export default Modal
