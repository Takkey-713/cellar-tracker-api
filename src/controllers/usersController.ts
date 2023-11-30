import { Request, Response } from 'express'
import { signUp } from './../logics/users/signup'
import { RequestWithUser } from '../models/user'

export const signup = (req: RequestWithUser, res: Response) => {
  const { user } = req.body
  signUp(user)
  return res.status(200).json({ message: 'sign up wip' })
}

export const getUser = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'get user wip' })
}
