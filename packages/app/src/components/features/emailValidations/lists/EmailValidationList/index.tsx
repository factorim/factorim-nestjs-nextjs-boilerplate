import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import {
  CursorDirection,
  EmailValidationFilter,
  PaginationCursorArgs,
} from '@/types'
import { useEmailValidations, useEmailValidationSubscription } from '@/hooks'
import { LoadingOverlay } from '@/components/widgets/ui'
import { PaginationCursor } from '@/components/widgets/pagination'
import EmailValidationMenuForm from '../EmailValidationMenuForm'
import EmailValidationItem from './EmailValidationItem'
import { updatePaginationCursorParams } from '@/utils/url'
import { DEFAULT_TAKE } from '@/constants/display'

type EmailValidationListProps = {
  pagination: PaginationCursorArgs
  filters: EmailValidationFilter
}

const EmailValidationList: React.FC<EmailValidationListProps> = ({
  pagination,
  filters,
}) => {
  const { t } = useTranslation()
  const { emailValidations, totalCount, pageInfo, isLoading, refetch } =
    useEmailValidations({
      pagination,
      filters,
    })

  const event = useEmailValidationSubscription()

  const handlePrevious = () => {
    const url = new URL(window.location.href)
    const updatedUrl = updatePaginationCursorParams(url.href, {
      take: pagination.take,
      direction: CursorDirection.PREVIOUS,
      cursor: pageInfo.startCursor,
    })
    window.history.pushState({}, '', updatedUrl)
  }

  const handleNext = () => {
    const url = new URL(window.location.href)
    const updatedUrl = updatePaginationCursorParams(
      url.href,
      {
        take: pagination.take,
        direction: CursorDirection.NEXT,
        cursor: pageInfo.endCursor,
      },
      {
        take: DEFAULT_TAKE,
        direction: CursorDirection.PREVIOUS,
        cursor: pageInfo.startCursor,
      },
    )
    window.history.pushState({}, '', updatedUrl)
  }

  useEffect(() => {
    refetch()
  }, [event, refetch])

  useEffect(() => {
    if (
      !pageInfo.hasPreviousPage &&
      pagination.direction === CursorDirection.PREVIOUS
    ) {
      const url = new URL(window.location.href)
      const updatedUrl = updatePaginationCursorParams(
        url.href,
        {
          take: pagination.take,
          direction: CursorDirection.PREVIOUS,
          cursor: pageInfo.startCursor,
        },
        {
          take: DEFAULT_TAKE,
          direction: CursorDirection.PREVIOUS,
          cursor: pageInfo.startCursor,
        },
      )
      window.history.pushState({}, '', updatedUrl)
    }
  }, [pageInfo, pagination])

  return (
    <div className="flex flex-col gap-8">
      <EmailValidationMenuForm filters={filters} />
      <div className="relative overflow-x-auto min-h-40">
        <LoadingOverlay isLoading={isLoading} />
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>{t('user.label.email')}</th>
              <th>{t('common.label.type')}</th>
              <th>{t('email.label.token')}</th>
              <th>{t('email.label.code')}</th>
              <th>{t('email.label.checked')}</th>
              <th>{t('email.label.claimed')}</th>
              <th>{t('common.label.lang')}</th>
              <th>{t('common.label.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {emailValidations.map((emailValidation, index: number) => (
              <EmailValidationItem
                key={index}
                emailValidation={emailValidation.node}
              />
            ))}
            {!isLoading && emailValidations.length === 0 && (
              <tr className="h-32">
                <td colSpan={8} className="text-center">
                  {t('email.message.noEmailValidationsFound')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <PaginationCursor
        pagination={pagination}
        pageInfo={pageInfo}
        total={totalCount}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  )
}

export default EmailValidationList
