import { useEffect, useReducer, useState } from 'react'
import { MdClear, MdRefresh } from 'react-icons/md'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { CursorDirection, PageInfo } from '@/types'
import { usePostsCursor } from '@/hooks'
import { postsReducer } from '@/reducers'
import PostItem from './HomePostItem'

const initialState = { posts: [] }

type HomePostListProps = Record<string, never>

const POST_LIMIT = 4

export const HomePostList: React.FC<HomePostListProps> = () => {
  const { t } = useTranslation()
  const { ref: refPrevious, inView: inViewPrevious } = useInView()
  const { ref: refNext, inView: inViewNext } = useInView()

  const [previousCursor, setPreviousCursor] = useState<PageInfo | null>(null)
  const [nextCursor, setNextCursor] = useState<PageInfo>({
    hasPreviousPage: false,
    hasNextPage: true,
    startCursor: '',
    endCursor: '',
  })
  const [state, dispatch] = useReducer(postsReducer, initialState)

  const filters = { enabled: true }

  // Previous
  const paginationPrevious = {
    take: POST_LIMIT,
    direction: CursorDirection.PREVIOUS,
    cursor: previousCursor?.startCursor || null,
  }
  const {
    data: previousData,
    isLoading: loadingPrevious,
    refetch: refetchPrevious,
  } = usePostsCursor({
    pagination: paginationPrevious,
    filters,
  })

  // Next
  const paginationNext = {
    take: POST_LIMIT,
    direction: CursorDirection.NEXT,
    cursor: nextCursor?.endCursor || '',
  }
  const { data: nextData, isLoading: loadingNext } = usePostsCursor({
    pagination: paginationNext,
    filters,
  })

  const handlePreviousPosts = async () => {
    refetchPrevious()
  }

  useEffect(() => {
    if (!previousData) return
    dispatch({ type: 'before', posts: previousData.edges })
  }, [previousData])

  useEffect(() => {
    if (!nextData) return
    dispatch({ type: 'after', posts: nextData.edges })
  }, [nextData])

  // Initialize first previous cursor
  useEffect(() => {
    !previousCursor &&
      nextData?.pageInfo.startCursor &&
      setPreviousCursor(nextData.pageInfo)
  }, [previousCursor, nextData, setPreviousCursor])

  // In view, refetch previous
  useEffect(() => {
    if (inViewPrevious) {
      refetchPrevious()
    }
  }, [inViewPrevious, refetchPrevious])

  // In view, refetch next
  useEffect(() => {
    if (inViewNext && !loadingNext && nextData?.pageInfo.hasNextPage) {
      setNextCursor(nextData.pageInfo)
    }
  }, [inViewNext, loadingNext, nextData, nextCursor])

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center pt-5">
        <button
          className="btn btn-circle btn-outline mx-auto"
          ref={refPrevious}
          onClick={handlePreviousPosts}
        >
          <MdRefresh
            className={classNames('text-4xl', {
              'animate-spin': loadingPrevious,
            })}
          />
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {state.posts.map((post, index: number) => (
          <PostItem key={index} post={post.node} />
        ))}
        {!loadingNext && state.posts.length === 0 && (
          <div className="text-center">{t('post.message.noPostsFound')}</div>
        )}
      </div>
      <div className="text-center pb-5">
        <button className="btn btn-circle btn-outline mx-auto" ref={refNext}>
          {!nextCursor.hasNextPage ? (
            <MdClear className="text-4xl" />
          ) : (
            <MdRefresh
              className={classNames('text-4xl', {
                'animate-spin': loadingNext,
              })}
            />
          )}
        </button>
      </div>
    </div>
  )
}
