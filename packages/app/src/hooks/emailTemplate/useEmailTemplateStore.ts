import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { DEFAULT_TAKE } from '@/constants/display'
import { EmailTemplateFilter, PaginationOffsetArgs } from '@/types'
import { updateFilterParams, updatePaginationOffsetParams } from '@/utils/url'

interface EmailTemplateStoreState {
  pathname: string
  filters: EmailTemplateFilter
  pagination: PaginationOffsetArgs
  defaultPagination: PaginationOffsetArgs
  itemsPerPage: number
}

interface EmailTemplateStoreActions {
  getUrl: (defaultPathname?: string) => string
  setQueryParams: (
    pathname: string,
    pagination: PaginationOffsetArgs,
    filters?: EmailTemplateFilter,
  ) => void
  setItemsPerPage: (takeValue: number) => void
}

type EmailTemplateStore = EmailTemplateStoreState & EmailTemplateStoreActions

export const useEmailTemplateStore = create<EmailTemplateStore>()(
  persist(
    (set, get) => ({
      // Initial state
      pathname: '',
      filters: {},
      defaultPagination: {
        page: 1,
        take: DEFAULT_TAKE,
      },
      pagination: {
        page: 1,
        take: DEFAULT_TAKE,
      },
      itemsPerPage: DEFAULT_TAKE,

      // Actions
      getUrl: (defaultPathname = '') => {
        const { pathname, filters, pagination, defaultPagination } = get()
        let url = pathname === '' ? defaultPathname : pathname
        url = updatePaginationOffsetParams(url, pagination, defaultPagination)
        url = updateFilterParams(url, filters)
        return url
      },
      setQueryParams: (pathname, pagination, filters) => {
        set(() => ({ pathname, pagination, filters }))
      },
      setItemsPerPage: (take) => {
        set({ itemsPerPage: take })
      },
    }),
    {
      name: 'factorim-email-template',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ itemsPerPage: state.itemsPerPage }),
    },
  ),
)
