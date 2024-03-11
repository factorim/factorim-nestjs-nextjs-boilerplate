import { Session } from 'next-auth'
import { zxcvbn, zxcvbnOptions, ZxcvbnResult } from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en'
import log from 'loglevel'

import { UserRole } from '@/types'
import { AuthService } from '@/services/auth.service'
import { shouldRefreshToken } from './jwt'

export const hasRole = (
  session: Session | null,
  requiredRoles: UserRole[],
): boolean => {
  const userRoles: UserRole[] = session?.user?.roles || []
  return requiredRoles.some((role) => userRoles.includes(role))
}

export const refreshTokenIfNeeded = async (
  accessToken: string,
  refreshToken: string,
): Promise<{ accessToken: string; refreshToken: string }> => {
  if (shouldRefreshToken(accessToken)) {
    try {
      log.debug('Access Token expired or about to expire. Refreshing...')
      const data = await AuthService.refreshToken(refreshToken as string)
      if (!data) throw new Error('Something went wrong refreshing token')
      return { accessToken: data.accessToken, refreshToken: data.refreshToken }
    } catch (error) {
      log.error(error)
      throw new Error('Failed to refresh token')
    }
  } else {
    log.debug('Access Token valid.')
    return {
      accessToken,
      refreshToken,
    }
  }
}

export const checkPasswordStrength = (password: string): ZxcvbnResult => {
  const options = {
    translations: zxcvbnEnPackage.translations,
    graphs: zxcvbnCommonPackage.adjacencyGraphs,
    dictionary: {
      ...zxcvbnCommonPackage.dictionary,
      ...zxcvbnEnPackage.dictionary,
    },
  }

  zxcvbnOptions.setOptions(options)
  return zxcvbn(password)
}
