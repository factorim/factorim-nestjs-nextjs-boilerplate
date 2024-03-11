'use client'

import { ThemeProvider } from 'next-themes'
import { I18nextProvider } from 'react-i18next'
import { SessionProvider } from 'next-auth/react'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { config } from '@/config/configClient'
import i18next from '@/config/i18n'
import log from 'loglevel'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      log.error(`Something went wrong: ${error.message}`)
    },
  }),
})

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  if (config.env === 'development') {
    log.setLevel('debug')
  } else {
    log.setLevel('info')
  }

  return (
    <SessionProvider refetchInterval={config.auth.jwtRefreshIn}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18next}>
          <ThemeProvider
            defaultTheme="dark"
            enableSystem={false}
            themes={config.themes}
          >
            {children}
          </ThemeProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default ClientProviders
