import { PAGINATION_OPTIONS, PaginationTakeOption } from '@/constants/display'
import {
  CursorDirection,
  PaginationCursorArgs,
  PaginationOffsetArgs,
} from '@/types'
import { ReadonlyURLSearchParams } from 'next/navigation'

export type FilterValue = string | boolean | undefined
export type GenericFilter = Record<string, FilterValue>

const setOrRemoveQueryParam = (
  url: string,
  key: string,
  value?: string | number,
) => {
  const urlObj = new URL(url, window.location.origin) // Ensure a base for relative URLs
  if (value !== undefined) {
    urlObj.searchParams.set(key, value.toString())
  } else {
    urlObj.searchParams.delete(key)
  }
  return urlObj.href
}

export const updatePaginationOffsetParams = (
  url: string,
  pagination: PaginationOffsetArgs,
  defaultPagination?: PaginationOffsetArgs,
) => {
  url = setOrRemoveQueryParam(
    url,
    'page',
    pagination.page !== defaultPagination?.page ? pagination.page : undefined,
  )

  url = setOrRemoveQueryParam(
    url,
    'take',
    pagination.take !== defaultPagination?.take ? pagination.take : undefined,
  )

  return url
}

export const updatePaginationCursorParams = (
  url: string,
  pagination: PaginationCursorArgs,
  defaultPagination?: PaginationCursorArgs,
) => {
  url = setOrRemoveQueryParam(
    url,
    'take',
    pagination.take !== defaultPagination?.take ? pagination.take : undefined,
  )
  url = setOrRemoveQueryParam(
    url,
    'direction',
    pagination.direction !== defaultPagination?.direction
      ? pagination.direction
      : undefined,
  )
  url = setOrRemoveQueryParam(
    url,
    'cursor',
    pagination.cursor !== defaultPagination?.cursor
      ? (pagination.cursor as string)
      : undefined,
  )

  return url
}

export const updateFilterParams = (url: string, filters?: GenericFilter) => {
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      url = setOrRemoveQueryParam(
        url,
        key,
        value !== undefined
          ? typeof value === 'boolean'
            ? String(value)
            : value
          : undefined,
      )
    })
  }
  return url
}

export const updateUrlWithFilters = <T extends GenericFilter>(
  filters: T,
): URL => {
  const url = new URL(window.location.href)
  const urlUpdated = updateFilterParams(url.href, filters)
  window.history.pushState({}, '', urlUpdated)
  return url
}

export const clearUrlParams = () => {
  const url = new URL(window.location.href)
  window.history.pushState({}, document.title, url.pathname)
}

export const parsePaginationOffset = (
  searchParams: ReadonlyURLSearchParams,
  takePosts: number,
): PaginationOffsetArgs => {
  const page = parseInt(searchParams.get('page') as string) || 1
  let take = parseInt(searchParams.get('take') as string) || takePosts
  // Force take from PAGINATION_OPTIONS
  if (!PAGINATION_OPTIONS.includes(take as PaginationTakeOption)) {
    take = takePosts
    const url = new URL(window.location.href)
    url.searchParams.set('take', takePosts.toString())
    window.history.pushState({}, '', url.toString())
  }
  return { page, take }
}

export const parsePaginationCursor = (
  searchParams: ReadonlyURLSearchParams,
  takePosts: number,
): PaginationCursorArgs => {
  let take = parseInt(searchParams.get('take') as string) || takePosts
  const direction =
    (searchParams.get('direction') as CursorDirection) || CursorDirection.NEXT
  const cursor = (searchParams.get('cursor') as string) || ''
  // Force take from PAGINATION_OPTIONS
  if (!PAGINATION_OPTIONS.includes(take as PaginationTakeOption)) {
    take = takePosts
    const url = new URL(window.location.href)
    url.searchParams.set('take', takePosts.toString())
    window.history.pushState({}, '', url.toString())
  }
  return {
    take,
    direction,
    cursor,
  }
}

export const parseFilterParams = <T extends GenericFilter>(
  searchParams: ReadonlyURLSearchParams,
  filterStructure: T,
): T => {
  const parsedFilters: GenericFilter = {}

  Object.keys(filterStructure).forEach((key) => {
    const value = searchParams.get(key)
    if (value !== null) {
      if (value === 'true' || value === 'false') {
        parsedFilters[key] = value === 'true'
      } else {
        parsedFilters[key] = value
      }
    } else {
      parsedFilters[key] = undefined
    }
  })

  return parsedFilters as T
}

export const clearParams = (): URL => {
  const url = new URL(window.location.href)
  url.search = ''
  window.history.pushState({}, '', url.toString())
  return url
}
