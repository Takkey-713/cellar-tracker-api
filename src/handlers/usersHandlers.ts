import { Request, Response } from 'express'
import { createUser } from '../logics/users/createUser'
import { userJwt } from '../logics/users/userJwt'
import { checkUserExists } from '../logics/users/checkUserExists'
import { getUser } from '../logics/users/getUser'
import { AuthenticationException } from '../exceptions/AuthenticationException'
import { UserNotFoundException } from '../exceptions/UserNotFoundException'
import { UserSchema, UserLoginSchema } from '../shemas/userSchema'

interface UserRequest extends Request {
  body: UserSchema
}

interface RequestWithLogin extends Request {
  body: UserLoginSchema
}

export const signup = async (req: UserRequest, res: Response) => {
  try {
    const user = req.body
    const isExist = await checkUserExists(user.email)
    if (isExist) {
      return res.status(400).json({ message: 'ユーザーは既に存在します' })
    }
    const newUser = await createUser(user)
    const token = userJwt(newUser)
    const reuslt = {
      jwt: token,
    }
    return res.status(200).json(reuslt)
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
    const result = {
      jwt: token,
    }
    return res.status(200).json(result)
  } catch (error) {
    if (error instanceof UserNotFoundException) {
      return res.status(404).json({ message: error.message })
    }
    if (error instanceof AuthenticationException) {
      return res.status(401).json({ message: error.message })
    }
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}
