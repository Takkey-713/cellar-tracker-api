import { prisma } from '../../globals/prismadb'

export const removeWine = async (wineId: number) => {
  await prisma.wine.delete({
    where: {
      id: wineId,
    },
  })
}
