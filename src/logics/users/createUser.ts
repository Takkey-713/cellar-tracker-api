import { prisma } from '../../../globals/prismadb'
import { hashedPassword } from './hashedPassword'
import { User } from '../../models/user'

export const createUser = async (user: User) => {
  const hashedPwd = await hashedPassword(user.password)
  const result = await prisma.user.create({
    data: {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      password: hashedPwd,
    },
  })
  return result
}
