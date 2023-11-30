import { Request, Response } from 'express'
import { signUp } from '../logics/users/signup'
import { userJwt } from '../logics/users/userJwt'
import { checkUserExists } from '../logics/users/checkUserExists'
import { RequestWithUser } from '../models/user'

export const signup = async (req: RequestWithUser, res: Response) => {
  try {
    const { user } = req.body
    const isExist = await checkUserExists(user.email)
    if (isExist) {
      return res.status(400).json({ message: 'ユーザーは既に存在します' })
    }
    const newUser = await signUp(user)
    const token = userJwt(newUser)
    return res.status(200).json({ token })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const getUser = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'get user wip' })
}
