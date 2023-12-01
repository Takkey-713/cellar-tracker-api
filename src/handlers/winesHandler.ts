import { Request, Response } from 'express'
import { WineSchema } from '../shemas/wineSchema'
import { createWine } from '../logics/wines/createWine'
import { updateWine } from '../logics/wines/updateWine'

interface WineRequest extends Request {
  body: WineSchema
}

export const insert = async (req: WineRequest, res: Response) => {
  try {
    const wine = req.body
    const result = await createWine(wine)
    return res.status(200).json({ data: result })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}

export const update = async (req: WineRequest, res: Response) => {
  try {
    const wineId = parseInt(req.params.id, 10)
    const updateData = req.body
    const result = await updateWine(wineId, updateData)
    return res.status(200).json({ data: result })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}
