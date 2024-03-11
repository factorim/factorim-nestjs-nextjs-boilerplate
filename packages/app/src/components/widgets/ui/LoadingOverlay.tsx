'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type LoadingOverlayProps = {
  isLoading: boolean
}

const DEFAULT_TIMEOUT = 500

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
}) => {
  const { t } = useTranslation()
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    let timerId: NodeJS.Timeout
    if (isLoading) {
      timerId = setTimeout(() => {
        setShowLoading(true)
      }, DEFAULT_TIMEOUT)
    } else {
      setShowLoading(false)
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [isLoading])

  return (
    <>
      {showLoading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-200 bg-opacity-20 flex justify-center items-center z-10">
          <span className="loading loading-spinner loading-lg opacity-50"></span>
          <span className="sr-only">{t('common.message.loading')}</span>
        </div>
      )}
    </>
  )
}
