import { prisma } from '../../../globals/prismadb'

export const checkUserExists = async (email: string): Promise<boolean> => {
  const existingUser = await prisma.user.findUnique({ where: { email } })
  return !!existingUser
}
