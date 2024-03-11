import Image from 'next/image'
import { createAvatar } from '@dicebear/core'
import { identicon } from '@dicebear/collection'

type AvatarProps = {
  seed: string
}

const Avatar: React.FC<AvatarProps> = ({ seed }) => {
  const avatar = createAvatar(identicon, {
    seed,
  })

  const svg = avatar.toDataUriSync()

  return (
    <div className="w-full text-center text-4xl">
      <Image
        src={svg}
        alt="avatar"
        className="rounded-full"
        width={64}
        height={64}
      />
    </div>
  )
}

export default Avatar
