import Link from 'next/link'
import { MdEdit } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { EmailTemplate } from '@/types'

type EmailTemplateItemProps = {
  emailTemplate: EmailTemplate
  index: number
}

const EmailTemplateItem: React.FC<EmailTemplateItemProps> = ({
  emailTemplate,
  index,
}) => {
  const { t } = useTranslation()

  return (
    <tr className="hover">
      <td className="text-xs">{index}</td>
      <th className="font-medium">{emailTemplate.subject}</th>
      <td>{emailTemplate.type}</td>
      <td>{emailTemplate.lang}</td>
      <td>
        <Link
          href={`/admin/email-templates/${emailTemplate.id}`}
          className="btn btn-outline btn-sm flex flex-nowrap w-fit"
        >
          <MdEdit className="text-md" />
          {t('common.action.edit')}
        </Link>
      </td>
    </tr>
  )
}

export default EmailTemplateItem
