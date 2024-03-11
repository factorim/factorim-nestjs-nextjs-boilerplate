import { PageInfo } from '.'

export type EmailValidation = {
  id: string
  type: string
  token: string
  email: string
  code: string
  checked: number
  claimed: boolean
  lang: string
  createdAt: string
  updatedAt: string
}

export type EmailValidationNode = {
  node: EmailValidation
}

export type EmailValidationCursorConnection = {
  edges: EmailValidationNode[]
  totalCount: number
  pageInfo: PageInfo
}

export enum EmailValidationEventType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
}

export type EmailValidationEvent = {
  type: EmailValidationEventType
  emailValidation: EmailValidation
}

// Query
// ------

export type EmailValidationQueryArgs = {
  id?: string
  token?: string
}

export type EmailValidationFilter = {
  keyword?: string
  checked?: boolean
  claimed?: boolean
}

export type EmailValidationCursorQuery = {
  first?: number | null
  after?: string | null
  last?: number | null
  before?: string | null
  filters: EmailValidationFilter
}

export type UserEmailValidationResponse = {
  userEmailValidation: EmailValidation
}

export type EmailValidationResponse = {
  emailValidation: EmailValidation
}

export type EmailValidationsResponse = {
  emailValidations: EmailValidationCursorConnection
}

export type EmailValidationEventResponse = {
  data: {
    emailValidationEvent: EmailValidationEvent
  }
}
