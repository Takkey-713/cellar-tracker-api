import { prisma } from '../../globals/prismadb'
import { WineInsertSchema } from '../../shemas/wineSchema'

export const createWine = async (wine: WineInsertSchema) => {
  const result = await prisma.wine.create({
    data: {
      name: wine.name,
      district: wine.district,
      varietyId: wine.varietyId,
      categoryId: wine.categoryId,
      userId: wine.userId,
      description: wine.description,
      quantityInStock: wine.quantityInStock,
      unitPrice: wine.unitPrice,
      supplier: wine.supplier,
      image: wine.image,
    },
  })
  return result
}
