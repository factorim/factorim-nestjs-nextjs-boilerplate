import { Modal } from 'react-daisyui'
import { useTranslation } from 'react-i18next'

import { useEmailValidation } from '@/hooks'

type EmailValidationViewProps = {
  id: string
}

const EmailValidationView: React.FC<EmailValidationViewProps> = ({ id }) => {
  const { t } = useTranslation()
  const { emailValidation } = useEmailValidation({ id })

  return (
    <div>
      <Modal.Header className="font-bold">
        {t('email.label.emailValidation')}
      </Modal.Header>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row">
          <label className="w-32 font-bold">{t('common.label.type')}:</label>
          <div>{emailValidation?.type}</div>
        </div>
        <div className="flex flex-row">
          <label className="w-32 font-bold">
            Token{t('email.label.token')}::
          </label>
          <div>{emailValidation?.token}</div>
        </div>
        <div className="flex flex-row">
          <label className="w-32 font-bold">
            Email{t('user.label.email')}::
          </label>
          <div>{emailValidation?.email}</div>
        </div>
        <div className="flex flex-row">
          <label className="w-32 font-bold">{t('email.label.code')}::</label>
          <div>{emailValidation?.code}</div>
        </div>
        <div className="flex flex-row">
          <label className="w-32 font-bold">{t('email.label.checked')}::</label>
          <div>{emailValidation?.checked}</div>
        </div>
        <div className="flex flex-row">
          <label className="w-32 font-bold">{t('common.label.lang')}::</label>
          <div>{emailValidation?.lang}</div>
        </div>
        <div className="flex flex-row">
          <label className="w-32 font-bold">
            {t('common.label.createdAt')}::
          </label>
          <div>{emailValidation?.createdAt}</div>
        </div>
        <div className="flex flex-row">
          <label className="w-32 font-bold">
            {t('common.label.updatedAt')}::
          </label>
          <div>{emailValidation?.updatedAt}</div>
        </div>
      </div>
    </div>
  )
}

export default EmailValidationView
