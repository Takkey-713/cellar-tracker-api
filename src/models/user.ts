export interface User {
  id?: number
  firstname: string
  lastname: string
  password: string | null
  email: string
  createdAt?: Date
  updatedAt?: Date
}
