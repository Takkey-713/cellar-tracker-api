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

export const wineFetchSchema = z.object({
  userId: z.string(),
  page: z.string(),
  perPage: z.string(),
})

export const wineCreateSchema = z.object({
  userId: z.number(),
  ...commonFields,
})

export const wineUpdateSchema = z.object(commonFields)

export type WineFetchSchema = z.infer<typeof wineFetchSchema>
export type WineInsertSchema = z.infer<typeof wineCreateSchema>
export type WineUpdateSchema = z.infer<typeof wineUpdateSchema>
