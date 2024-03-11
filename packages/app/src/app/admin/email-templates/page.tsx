'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { Title } from '@/components/widgets/typography'
import EmailTemplateList from '@/components/features/emailTemplates/lists/EmailTemplateList'
import { MetaTitle } from '@/components/widgets/ui'
import EmailTemplateMenu from '@/components/features/emailTemplates/lists/EmailTemplateMenu'
import { parsePaginationOffset } from '@/utils/url'
import { useEmailTemplateStore } from '@/hooks'

const title = 'navigation.emailTemplates'

const EmailTemplatesPage: React.FC = () => {
  const { t } = useTranslation()
  const pathname = usePathname()
  const itemsPerPage = useEmailTemplateStore((state) => state.itemsPerPage)
  const searchParams = useSearchParams()

  const pagination = parsePaginationOffset(searchParams, itemsPerPage)

  // Store query
  const setQueryParams = useEmailTemplateStore((state) => state.setQueryParams)
  useEffect(() => {
    setQueryParams(pathname, pagination)
  }, [pathname, pagination, setQueryParams])

  return (
    <main className="flex-1 overflow-y-auto p-4">
      <MetaTitle title={t(title)} />
      <Title title={t(title)} />
      <div className="flex flex-col gap-8">
        <EmailTemplateMenu />
        <EmailTemplateList pagination={pagination} />
      </div>
    </main>
  )
}
export default EmailTemplatesPage
