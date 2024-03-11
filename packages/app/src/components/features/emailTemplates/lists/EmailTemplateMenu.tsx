import Link from 'next/link'
import { MdOutlineAdd } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

type EmailTemplateMenuProps = Record<string, never>

const EmailTemplateMenu: React.FC<EmailTemplateMenuProps> = () => {
  const { t } = useTranslation()

  return (
    <div className="flex justify-end">
      <Link
        href={`/admin/email-templates/create`}
        className="btn btn-outline btn-primary"
      >
        <MdOutlineAdd className="text-xl" />{' '}
        {t('email.action.newEmailTemplate')}
      </Link>
    </div>
  )
}

export default EmailTemplateMenu
