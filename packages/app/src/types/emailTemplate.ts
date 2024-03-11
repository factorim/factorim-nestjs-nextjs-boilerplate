import { JSONTemplate } from 'state/types/index'

export type EmailTemplate = {
  id: string
  type: EmailTemplateType
  subject: string
  html: string
  design: JSONTemplate
  lang: string
  createdAt: string
  updatedAt: string
}

export enum EmailTemplateType {
  SIGN_UP = 'Sign Up',
  RESET_PASSWORD = 'Reset Password',
  CHANGE_EMAIL = 'Change Email',
  DELETE_ACCOUNT = 'Delete Profile',
}

export type EmailTemplateTypeElement = {
  key: string
  value: string
}

export type EmailTemplateConnection = {
  emailTemplates: EmailTemplate[]
  totalCount: number
}

export type EmailTemplateVariable = {
  variable: string
  description: string
}

// Query
// ------

export type EmailTemplateFilter = Record<string, never>

export type EmailTemplateResponse = {
  emailTemplate: EmailTemplate
}

export type EmailTemplatesResponse = {
  emailTemplates: EmailTemplateConnection
}

// Create
// ------

// Form

export type CreateEmailTemplateFormValues = {
  type: string
  subject: string
  html: string
  design: JSONTemplate
  lang: string
}

// Mutation

export type CreateEmailTemplateData = {
  type: EmailTemplateType
  subject: string
  html: string
  design: JSONTemplate
  lang: string
}

export type CreateEmailTemplateMutation = {
  data: CreateEmailTemplateData
}

// Response

export type CreateEmailTemplateResponse = {
  createEmailTemplate: EmailTemplate
}

// Update
// ------

// Form

export type UpdateEmailTemplateFormValues = {
  type: string
  subject: string
  html: string
  design: JSONTemplate
  lang: string
}

// Mutation

export type UpdateEmailTemplateData = {
  type: string
  subject: string
  html: string
  design: JSONTemplate
  lang: string
}

export type UpdateEmailTemplateMutation = {
  id: string
  data: UpdateEmailTemplateData
}

// Response

export type UpdateEmailTemplateResponse = {
  updateEmailTemplate: EmailTemplate
}

// Delete
// ------

// Response

export type DeleteEmailTemplateResponse = {
  deleteEmailTemplate: EmailTemplate
}
