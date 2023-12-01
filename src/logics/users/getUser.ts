import bcrypt from 'bcryptjs'
import { prisma } from '../../globals/prismadb'
import { AuthenticationException } from '../../exceptions/AuthenticationException'
import { UserNotFoundException } from '../../exceptions/UserNotFoundException'

export const getUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    throw new UserNotFoundException('ユーザーが見つかりません')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new AuthenticationException('メールアドレスとパスワードが一致しません')
  }

  return user
}
