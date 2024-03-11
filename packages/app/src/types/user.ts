export type User = {
  id: string
  auth: UserAuth
  email: string
  name: string
  roles: UserRole[]
  lang: string
  theme: string
  status: UserStatus
  createdAt: string
  updatedAt: string
}

export enum UserAuth {
  CREDENTIALS = 'CREDENTIALS',
  GOOGLE = 'GOOGLE',
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
  PENDING = 'PENDING',
}

export type UserConnection = {
  users: User[]
  totalCount: number
}

// Query
// ------

export type UserFilter = {
  keyword?: string
  status?: string
}

export type MeResponse = {
  me: User
}

export type UserResponse = {
  user: User
}

export type UsersResponse = {
  users: UserConnection
}

// Create
// ------

// Form

export type CreateUserFormValues = {
  email: string
}

// Mutation

export type CreateUserData = {
  email: string
}

export type UserCreateUserMutation = {
  data: CreateUserData
}

// Response

export type CreateUserResponse = {
  createUser: User
}

// Update
// ------

// Form

export type UpdateUserFormValues = {
  id: string
  status: string
}

// Mutation

export type UpdateUserData = {
  status: string
}

export type UpdateUserMutation = {
  id: string
  data: UpdateUserData
}

// Response

export type UpdateUserResponse = {
  updateUser: User
}

// Delete
// ------

// Response

export type DeleteUserResponse = {
  deleteUser: User
}
