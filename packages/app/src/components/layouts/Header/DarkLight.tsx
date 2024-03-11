import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { Swap } from 'react-daisyui'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import classNames from 'classnames'

import { Theme } from '@/types'

type DarkLightProps = Record<string, never>

const DarkLight: React.FC<DarkLightProps> = () => {
  const initializedRef = useRef(false)
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (!initializedRef.current) {
      setIsDarkMode(theme === Theme.DARK)
      initializedRef.current = true
    }
  }, [theme])

  const handleThemeChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    if (isDarkMode) {
      setTheme(target.checked ? Theme.LIGHT : Theme.DARK)
    } else {
      setTheme(target.checked ? Theme.DARK : Theme.LIGHT)
    }
  }

  return (
    <Swap
      className={classNames('transition-opacity duration-500', {
        'opacity-100': isDarkMode !== undefined,
        'opacity-0': isDarkMode === undefined,
      })}
      flip={true}
      onElement={
        isDarkMode ? (
          <MdDarkMode className="text-2xl" />
        ) : (
          <MdLightMode className="text-2xl" />
        )
      }
      offElement={
        isDarkMode ? (
          <MdLightMode className="text-2xl" />
        ) : (
          <MdDarkMode className="text-2xl" />
        )
      }
      onClick={handleThemeChange}
    />
  )
}

export default DarkLight
