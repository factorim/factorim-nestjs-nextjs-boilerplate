import { useTranslation } from 'react-i18next'

import { PaginationOffsetArgs } from '@/types'
import { useEmailTemplates, useEmailTemplateStore } from '@/hooks'
import { getIndex } from '@/utils/list'
import { LoadingOverlay } from '@/components/widgets/ui'
import { PaginationOffset } from '@/components/widgets/pagination'
import EmailTemplateItem from './EmailTemplateItem'

type EmailTemplateListProps = {
  pagination: PaginationOffsetArgs
}

const EmailTemplateList: React.FC<EmailTemplateListProps> = ({
  pagination,
}) => {
  const { t } = useTranslation()
  const filters = {}

  const { emailTemplates, totalCount, isLoading } = useEmailTemplates({
    pagination,
    filters,
  })

  const setItemsPerPage = useEmailTemplateStore(
    (state) => state.setItemsPerPage,
  )

  return (
    <div className="flex flex-col gap-8">
      <div className="relative overflow-x-auto min-h-40">
        <LoadingOverlay isLoading={isLoading} />
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="w-10">{t('common.label.index')}</th>
              <th>{t('email.label.subject')}</th>
              <th>{t('common.label.type')}</th>
              <th>{t('common.label.lang')}</th>
              <th>{t('common.label.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {emailTemplates.map((emailTemplate, index: number) => (
              <EmailTemplateItem
                key={index}
                index={getIndex(pagination.page, pagination.take, index)}
                emailTemplate={emailTemplate}
              />
            ))}
            {!isLoading && emailTemplates.length === 0 && (
              <tr className="h-32">
                <td colSpan={5} className="text-center">
                  {t('email.error.noEmailTemplateFound')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <PaginationOffset
        pagination={pagination}
        total={totalCount}
        setItemsPerPage={(take: number) => setItemsPerPage(take)}
      />
    </div>
  )
}

export default EmailTemplateList
