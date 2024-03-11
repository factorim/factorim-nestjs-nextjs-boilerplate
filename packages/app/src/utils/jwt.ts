import { jwtDecode } from 'jwt-decode'

import { config } from '@/config/configClient'
import { JWT } from '@/types'

const REFRESH_THRESHOLD_FRACTION = 0.5 // 50% of the token lifespan

export const decodeJWT = (token: string | unknown): JWT => {
  if (!token || typeof token !== 'string') {
    throw new Error('Invalid token')
  }
  try {
    const decoded: JWT = jwtDecode(token)
    return decoded
  } catch (error) {
    throw error
  }
}

export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeJWT(token)
  const currentTime = Date.now() / 1000
  return decoded.exp < currentTime
}

export const shouldRefreshToken = (token: string): boolean => {
  const decoded = decodeJWT(token)
  const currentTime = Date.now() / 1000
  const timeUntilExpiration = decoded.exp - currentTime
  const refreshThreshold = Math.floor(
    config.auth.jwtRefreshIn * REFRESH_THRESHOLD_FRACTION,
  )
  return timeUntilExpiration <= refreshThreshold
}
