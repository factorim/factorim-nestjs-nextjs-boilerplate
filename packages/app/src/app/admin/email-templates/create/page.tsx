'use client'

import { useEffect, useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { useEmailTemplateStore } from '@/hooks'
import { MetaTitle } from '@/components/widgets/ui'
import CreateEmailTemplateForm from '@/components/features/emailTemplates/forms/CreateEmailTemplateForm'

const title = 'navigation.emailTemplate'

type CreateEmailTemplatePageProps = Record<string, never>

const AdminCreateEmailTemplatePage: React.FC<
  CreateEmailTemplatePageProps
> = () => {
  const { t } = useTranslation()
  const [backUrl, setBackUrl] = useState<string>('')
  const getUrl = useEmailTemplateStore((state) => state.getUrl)

  useEffect(() => {
    const backUrl = getUrl('/admin/email-templates')
    setBackUrl(backUrl)
  }, [getUrl])

  return (
    <main className="flex-1 p-4">
      <MetaTitle title={t(title)} />
      <Link href={backUrl} className="btn btn-ghost btn-sm">
        <MdArrowBack
          width={28}
          height={28}
          className="text-2xl text-gray-400 hover:text-gray-200"
        />
        <span>{t(title)}</span>
      </Link>
      <CreateEmailTemplateForm />
    </main>
  )
}

export default AdminCreateEmailTemplatePage
