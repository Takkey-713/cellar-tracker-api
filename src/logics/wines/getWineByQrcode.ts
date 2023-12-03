import { prisma } from '../../globals/prismadb'

export const getWineByQrcode = async (qrcode: string) => {
  const result = await prisma.wine.findUnique({
    where: { qrcode: qrcode },
  })
  return result
}
