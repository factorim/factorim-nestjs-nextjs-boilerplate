export interface JwtDto {
  id: string

  email: string

  roles: string[]

  /**
   * Issued at
   */
  iat: number

  /**
   * Expiration time
   */
  exp: number
}
