'use client'

import { useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { Title } from '@/components/widgets/typography'
import EmailValidationList from '@/components/features/emailValidations/lists/EmailValidationList'
import { MetaTitle } from '@/components/widgets/ui'
import { EmailValidationFilter } from '@/types'
import { parseFilterParams, parsePaginationCursor } from '@/utils/url'
import { DEFAULT_TAKE } from '@/constants/display'

const title = 'navigation.emailValidations'

const AdminEmailValidationsPage: React.FC = () => {
  const { t } = useTranslation()
  const searchParams = useSearchParams()

  const pagination = parsePaginationCursor(searchParams, DEFAULT_TAKE)
  const filterStructure: EmailValidationFilter = {
    keyword: undefined,
    checked: undefined,
    claimed: undefined,
  }
  const filters = parseFilterParams(searchParams, filterStructure)

  return (
    <main className="flex-1 overflow-y-auto p-4">
      <MetaTitle title={t(title)} />
      <Title title={t(title)} />
      <EmailValidationList pagination={pagination} filters={filters} />
    </main>
  )
}

export default AdminEmailValidationsPage
