import { z } from 'zod'

const commonFields = {
  name: z.string().min(1, { message: 'Name is required' }),
  district: z.string().min(1, { message: 'District is required' }),
  varietyId: z.number(),
  categoryId: z.number(),
  description: z.string().nullable(),
  quantityInStock: z.number(),
  unitPrice: z.number(),
  supplier: z.string().min(1, { message: 'Supplier is required' }),
  image: z.string().nullable(),
}

export const wineSchema = z.object({
  userId: z.number(),
  ...commonFields,
})

export const wineUpdateSchema = z.object(commonFields)

export type WineSchema = z.infer<typeof wineSchema>
export type WineUpdateSchema = z.infer<typeof wineUpdateSchema>
