import { useEffect } from 'react'

import { config } from '@/config/configClient'

type TitleComponentProps = {
  title: string
}

export const MetaTitle: React.FC<TitleComponentProps> = ({ title }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = `${title} - ${config.name}`
    }
  }, [title])

  return null
}
