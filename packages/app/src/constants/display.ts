import { DisplayConfig } from '@/types'

export type PaginationTakeOption = 5 | 10 | 25 | 50 | 100

export const PAGINATION_OPTIONS: PaginationTakeOption[] = [5, 10, 25, 50, 100]

export const DEFAULT_TAKE: PaginationTakeOption = 25

export const SUCCESS_MESSAGE_DURATION = 5000 // milliseconds

export const yesNoConfig: DisplayConfig = {
  true: { label: 'common.label.yes', bgColor: 'green' },
  false: { label: 'common.label.no', bgColor: 'red' },
}

export const enabledDisabledConfig: DisplayConfig = {
  true: { label: 'common.label.enabled', bgColor: 'green' },
  false: { label: 'common.label.disabled', bgColor: 'red' },
}

export const userStatusConfig: DisplayConfig = {
  ACTIVE: { label: 'user.label.active', bgColor: 'green' },
  INACTIVE: { label: 'user.label.inactive', bgColor: 'gray' },
  SUSPENDED: { label: 'user.label.suspended', bgColor: 'red' },
  PENDING: { label: 'user.label.pending', bgColor: 'blue' },
}

export const emailTemplateTypeConfig: DisplayConfig = {
  SIGN_UP: { label: 'user.label.signUp' },
  RESET_PASSWORD: { label: 'user.label.resetPassword' },
  CHANGE_EMAIL: { label: 'user.label.changeEmail' },
  DELETE_ACCOUNT: { label: 'user.label.deleteProfile' },
}
