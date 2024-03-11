'use client'

import { useEffect, useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'

import { useEmailTemplateStore } from '@/hooks'
import { MetaTitle } from '@/components/widgets/ui'
import UpdateEmailTemplateForm from '@/components/features/emailTemplates/forms/UpdateEmailTemplateForm'

const title = 'Email Template'

type EmailTemplatePageProps = {
  params: { id: string }
}

const AdminUpdateEmailTemplatePage: React.FC<EmailTemplatePageProps> = ({
  params,
}) => {
  const [backUrl, setBackUrl] = useState<string>('')
  const getUrl = useEmailTemplateStore((state) => state.getUrl)

  useEffect(() => {
    const backUrl = getUrl('/admin/email-templates')
    setBackUrl(backUrl)
  }, [getUrl])

  return (
    <main className="flex-1 p-4">
      <MetaTitle title={title} />
      <Link href={backUrl} className="btn btn-ghost btn-sm">
        <MdArrowBack
          width={28}
          height={28}
          className="text-2xl text-gray-400 hover:text-gray-200"
        />
        <span>Email Templates</span>
      </Link>
      <UpdateEmailTemplateForm id={params.id} />
    </main>
  )
}

export default AdminUpdateEmailTemplatePage
