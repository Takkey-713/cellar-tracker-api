import { prisma } from '../../globals/prismadb'
import { WineUpdateSchema } from '../../shemas/wineSchema'

export const updateWine = async (wineId: number, updateData: WineUpdateSchema) => {
  const result = await prisma.wine.update({
    where: {
      id: wineId,
    },
    data: {
      name: updateData.name,
      district: updateData.district,
      varietyId: updateData.varietyId,
      categoryId: updateData.categoryId,
      description: updateData.description,
      quantityInStock: updateData.quantityInStock,
      unitPrice: updateData.unitPrice,
      supplier: updateData.supplier,
      image: updateData.image,
    },
  })
  return result
}
