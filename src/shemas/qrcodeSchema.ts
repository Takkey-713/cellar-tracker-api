import { z } from 'zod'

export const qrcodeSchema = z.object({
  userId: z.number(),
  count: z
    .number()
    .min(1, { message: 'Count must be at least 1' })
    .max(50, { message: 'Count must not exceed 50' }),
})

export type QrcodeInsertSchema = z.infer<typeof qrcodeSchema>
