import { prisma } from '../../globals/prismadb'

export const getAllWineList = async (userId: number) => {
  const result = await prisma.wine.findMany({
    where: {
      userId: Number(userId),
    },
  })
  return result
}
