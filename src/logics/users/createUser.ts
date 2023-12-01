import { prisma } from '../../globals/prismadb'
import { hashedPassword } from './hashedPassword'
import { UserSchema } from '../../shemas/userSchema'

export const createUser = async (user: UserSchema) => {
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
