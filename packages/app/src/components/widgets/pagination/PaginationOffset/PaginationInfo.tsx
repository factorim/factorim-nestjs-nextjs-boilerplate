import { useTranslation } from 'react-i18next'

type PaginationInfoProps = {
  page: number
  take: number
  total: number
}

export const PaginationInfo: React.FC<PaginationInfoProps> = ({
  page = 0,
  take = 0,
  total = 0,
}) => {
  const { t } = useTranslation()

  const from = total ? (page - 1) * take + 1 : 0
  const to = from + take > total ? total : (page - 1) * take + take

  return (
    <div className="text-sm mb-5">
      <span className="font-medium text-accent">
        {from} - {to}
      </span>{' '}
      {t('pagination.label.of')}{' '}
      <span className="font-medium text-accent">{total} </span>
      {t('pagination.label.results')}
    </div>
  )
}
