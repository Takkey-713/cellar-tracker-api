import jwt from 'jsonwebtoken'
import { User } from '../../models/user'

export const userJwt = (user: User) => {
  const secretKey = process.env.JWT_SECRET_KEY || 'oLq4EgnpXKZS+8uPfn4eEZL4eIA8FI72nniCr4MmO5w='
  const payload = {
    id: user.id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
  }
  return jwt.sign(payload, secretKey, { expiresIn: '24h' })
}
