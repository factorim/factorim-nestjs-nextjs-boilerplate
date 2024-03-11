import { GoogleTagManager } from '@next/third-parties/google'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import log from 'loglevel'
import { PublicEnvScript } from 'next-runtime-env'
import { unstable_noStore as noStore } from 'next/cache'

const ClientProviders = dynamic(
  () => import('@/components/providers/ClientProviders'),
  {
    ssr: false,
  },
)
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { config } from '@/config/configClient'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  if (config.env === 'development') {
    log.setLevel('debug')
  } else {
    log.setLevel('info')
  }
  noStore()

  return (
    <html
      lang="en"
      dir={'/locales/en/translation.json'}
      suppressHydrationWarning
    >
      <head>
        <PublicEnvScript />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <GoogleTagManager gtmId={config.googleTagManagerId} />
        <ClientProviders>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            pauseOnFocusLoss={false}
          />

          {children}
        </ClientProviders>
      </body>
    </html>
  )
}

export default RootLayout
