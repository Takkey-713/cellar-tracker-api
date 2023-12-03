import { prisma } from '../../globals/prismadb'
import { generateUniqueQrcode } from './generateUniqueQrcode'
import { WineInsertSchema } from '../../shemas/wineSchema'

export const createWine = async (data: WineInsertSchema) => {
  const uniqueQrcode = await generateUniqueQrcode()
  const result = await prisma.wine.create({
    data: {
      name: data.name,
      district: data.district,
      varietyId: data.varietyId,
      categoryId: data.categoryId,
      userId: data.userId,
      description: data.description,
      quantityInStock: data.quantityInStock,
      unitPrice: data.unitPrice,
      supplier: data.supplier,
      image: data.image,
      qrcode: uniqueQrcode,
    },
  })
  return result
}
