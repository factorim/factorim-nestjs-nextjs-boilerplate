import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { DEFAULT_TAKE } from '@/constants/display'
import { PaginationOffsetArgs, UserFilter } from '@/types'
import { updateFilterParams, updatePaginationOffsetParams } from '@/utils/url'

interface UserStoreState {
  pathname: string
  filters: UserFilter
  pagination: PaginationOffsetArgs
  defaultPagination: PaginationOffsetArgs
  itemsPerPage: number
}

interface UserStoreActions {
  getUrl: (defaultPathname?: string) => string
  setQueryParams: (
    pathname: string,
    pagination: PaginationOffsetArgs,
    filters?: UserFilter,
  ) => void
  setItemsPerPage: (takeValue: number) => void
}

type UserStore = UserStoreState & UserStoreActions

export const useUserStore = create<UserStore>()(
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
      setItemsPerPage: (takeValue) => set({ itemsPerPage: takeValue }),
    }),
    {
      name: 'factorim-user',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ itemsPerPage: state.itemsPerPage }),
    },
  ),
)
