import { prisma } from '../../globals/prismadb'

export const getWineList = async (userId: number, page: number, perPage: number) => {
  const skip = (page - 1) * perPage
  const wineList = await prisma.wine.findMany({
    where: {
      userId: Number(userId),
    },
    include: {
      qrcode: true,
    },
    skip: skip,
    take: perPage,
  })
  return wineList
}
