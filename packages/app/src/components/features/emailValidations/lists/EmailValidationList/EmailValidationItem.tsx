import { useContext } from 'react'
import { MdCheck, MdClose, MdOutlineNotes } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { EmailValidation } from '@/types'
import { ModalContext } from '@/contexts/ModalContext'
import EmailValidationView from '../../views/EmailValidationView'

type EmailValidationItemProps = {
  emailValidation: EmailValidation
}

const EmailValidationItem: React.FC<EmailValidationItemProps> = ({
  emailValidation,
}) => {
  const { t } = useTranslation()
  const { handleShow } = useContext(ModalContext)

  return (
    <tr className="hover">
      <th className="font-medium">{emailValidation.email}</th>
      <td>{emailValidation.type}</td>
      <td>{emailValidation.token}</td>
      <td>{emailValidation.code}</td>
      <td>{emailValidation.checked}</td>
      <td>
        {emailValidation.claimed ? (
          <MdCheck className="text-xl" />
        ) : (
          <MdClose className="text-xl" />
        )}
      </td>
      <td>{emailValidation.lang}</td>
      <td>
        <div className="space-x-4">
          <button
            className="btn btn-outline btn-sm flex flex-nowrap w-fit"
            onClick={() =>
              handleShow(<EmailValidationView id={emailValidation.id} />)
            }
          >
            <MdOutlineNotes className="text-md" />
            {t('common.action.view')}
          </button>
        </div>
      </td>
    </tr>
  )
}

export default EmailValidationItem
