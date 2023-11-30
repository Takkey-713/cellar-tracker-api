import bcrypt from 'bcryptjs'
import { prisma } from '../../../globals/prismadb'
import { NotFoundError, AuthenticationError } from '../../utils/errors'

export const getUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    throw new NotFoundError('ユーザーが見つかりません')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new AuthenticationError('メールアドレスとパスワードが一致しません')
  }

  return user
}
