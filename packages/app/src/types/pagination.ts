// Pagination Offset

export type PaginationOffsetArgs = {
  page: number
  take: number
}

// Pagination Cursor

export type PageInfo = {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
}

export enum CursorDirection {
  PREVIOUS = 'previous',
  NEXT = 'next',
}

export type PaginationCursorArgs = {
  take: number
  direction: CursorDirection
  cursor: string | null
}
