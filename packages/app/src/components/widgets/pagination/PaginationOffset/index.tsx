import ReactPaginate from 'react-paginate'
import { useTranslation } from 'react-i18next'

import { PaginationInfo } from './PaginationInfo'
import { PaginationOffsetArgs } from '@/types'
import { PAGINATION_OPTIONS } from '@/constants/display'

interface PaginationEvent {
  selected: number
}

type PaginationProps = {
  pagination: PaginationOffsetArgs
  total: number
  rewriteUrl?: boolean
  setItemsPerPage?: (take: number) => void
}

export const PaginationOffset: React.FC<PaginationProps> = ({
  pagination: { page, take },
  rewriteUrl = true,
  total,
  setItemsPerPage,
}) => {
  const { t } = useTranslation()

  const handlePageClick = (event: PaginationEvent) => {
    const nextPage = event.selected + 1

    if (typeof window !== 'undefined' && rewriteUrl) {
      const url = new URL(window.location.href)
      url.searchParams.set('page', nextPage.toString())
      url.searchParams.set('take', take.toString())
      window.history.replaceState({}, '', url.toString())
    }
  }

  const handleChangeItems = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const take = parseInt(event.target.value)

    if (typeof window !== 'undefined' && rewriteUrl) {
      const url = new URL(window.location.href)
      url.searchParams.set('take', take.toString())
      window.history.replaceState({}, '', url.toString())
      setItemsPerPage && setItemsPerPage(take)
    }
  }

  const pageCount = Math.ceil(total / take) > 0 ? Math.ceil(total / take) : 1

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex justify-start pt-3">
        <PaginationInfo page={page} take={take} total={total} />
      </div>
      <div className="flex justify-center">
        <ReactPaginate
          forcePage={page - 1}
          className="btn-group mx-5 flex flex-row"
          breakLabel="..."
          nextLabel="»"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="«"
          // renderOnZeroPageCount={null}
          previousLinkClassName="btn hover:btn-ghost rounded-none rounded-l-lg"
          nextLinkClassName="btn hover:btn-ghost rounded-none rounded-r-lg"
          pageLinkClassName="btn hover:btn-ghost rounded-none"
          breakClassName="btn btn-disabled text-neutral-content"
          activeLinkClassName="btn btn-disabled bg-primary text-neutral-content"
        />
      </div>
      <div className="flex justify-end">
        <select
          className="select select-bordered"
          onChange={handleChangeItems}
          value={take}
        >
          {PAGINATION_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option} {t('pagination.label.perPage')}
            </option>
          ))}
        </select>
      </div>
      <div></div>
    </div>
  )
}
