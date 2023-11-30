import { Request } from 'express'

export interface User {
  id?: number
  firstname: string
  lastname: string
  password: string
  email: string
  createdAt?: Date
  updatedAt?: Date
}

export interface RequestWithUser extends Request {
  body: {
    user: User
  }
}
