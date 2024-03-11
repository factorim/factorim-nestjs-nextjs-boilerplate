import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { DEFAULT_TAKE } from '@/constants/display'
import { PaginationOffsetArgs, PostFilter } from '@/types'
import { updateFilterParams, updatePaginationOffsetParams } from '@/utils/url'

interface PostStoreState {
  pathname: string
  filters: PostFilter
  pagination: PaginationOffsetArgs
  defaultPagination: PaginationOffsetArgs
  itemsPerPage: number
}

interface PostStoreActions {
  getUrl: (defaultPathname?: string) => string
  setQueryParams: (
    pathname: string,
    pagination: PaginationOffsetArgs,
    filters?: PostFilter,
  ) => void
  setItemsPerPage: (takeValue: number) => void
}

type PostStore = PostStoreState & PostStoreActions

export const usePostStore = create<PostStore>()(
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
      name: 'factorim-post',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ itemsPerPage: state.itemsPerPage }),
    },
  ),
)
