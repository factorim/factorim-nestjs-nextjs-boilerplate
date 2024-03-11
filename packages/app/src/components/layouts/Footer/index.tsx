import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import { config } from '@/config/configClient'
import factorimLogo from '@/images/logos/factorim-logo.png'

type FooterProps = Record<string, never>

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer items-center p-4 bg-base-300 text-base-content">
      <aside className="items-center grid-flow-col">
        <Image
          src={factorimLogo}
          alt={`${config.name} Logo`}
          width="36"
          height="36"
          className="mx-auto"
          priority
        />
        <p>
          {config.name} © {new Date().getFullYear()} -{' '}
          {t('info.footer.allRightReserved')}
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href={config.social.github} passHref target={'_blank'}>
          <FaGithub className="text-3xl" />
        </Link>
        <Link href={config.social.twitter} passHref target={'_blank'}>
          <FaTwitter className="text-3xl" />
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
