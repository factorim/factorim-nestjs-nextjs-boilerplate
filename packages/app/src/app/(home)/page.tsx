'use client'

import Link from 'next/link'
import { MetaTitle } from '@/components/widgets/ui'
import { HomePostList } from '@/components/features/posts/lists'
import { useTranslation } from 'react-i18next'

const title = 'navigation.home'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <main className="flex-1 overflow-y-auto p-4">
      <MetaTitle title={t(title)} />
      <div className="hero h-96 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-2xl font-bold">{t('info.home.title')}</h1>
            <p className="py-6">{t('info.home.content')}</p>
            <Link href="/signin" passHref className="btn btn-primary">
              {t('info.home.getStarted')}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <HomePostList />
      </div>
    </main>
  )
}

export default HomePage
