import Image from 'next/image'

import { config } from '@/config/configClient'
import image from '@/images/logos/factorim-logo.png'

type LoadingProps = Record<string, never>

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="min-h-screen flex w-full items-center justify-center">
      <div className="p-4 flex flex-col space-y-4">
        <Image
          src={image}
          alt={`${config.name} Logo`}
          width="64"
          height="64"
          className="mx-auto"
          priority
        />
        <div className="flex flex-row">
          <span className="text-xl">Loading</span>
          <div className="mt-[10px]">
            <span className="loading loading-dots loading-xs"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
