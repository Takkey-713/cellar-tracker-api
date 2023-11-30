import jwt from 'jsonwebtoken'
import { User } from '../../models/user'

export const userJwt = (user: User) => {
  const secretKey = process.env.JWT_SECRET_KEY as string
  const payload = {
    id: user.id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
  }
  return jwt.sign(payload, secretKey, { expiresIn: '24h' })
}
