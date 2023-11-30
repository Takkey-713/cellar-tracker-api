import { Request, Response } from 'express'
import { createUser } from '../logics/users/createUser'
import { userJwt } from '../logics/users/userJwt'
import { checkUserExists } from '../logics/users/checkUserExists'
import { getUser } from '../logics/users/getUser'
import { User } from '../models/user'
import { NotFoundError, AuthenticationError } from '../utils/errors'

interface RequestWithLogin extends Request {
  body: {
    email: string
    password: string
  }
}

interface RequestWithUser extends Request {
  body: {
    user: User
  }
}

export const signup = async (req: RequestWithUser, res: Response) => {
  try {
    const { user } = req.body
    const isExist = await checkUserExists(user.email)
    if (isExist) {
      return res.status(400).json({ message: 'ユーザーは既に存在します' })
    }
    const newUser = await createUser(user)
    const token = userJwt(newUser)
    return res.status(200).json({ token })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}

export const login = async (req: RequestWithLogin, res: Response) => {
  try {
    const { email, password } = req.body
    const loginUser = await getUser(email, password)
    const token = userJwt(loginUser)
    return res.status(200).json({ token })
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.status(404).json({ message: error.message })
    }
    if (error instanceof AuthenticationError) {
      return res.status(401).json({ message: error.message })
    }
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}