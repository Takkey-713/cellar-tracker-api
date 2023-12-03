import { Request, Response } from 'express'
import { WineFetchSchema, WineInsertSchema, WineUpdateSchema } from '../shemas/wineSchema'
import { getWineList } from '../logics/wines/getWineList'
import { getWine } from '../logics/wines/getWine'
import { getWineByQrcode } from '../logics/wines/getWineByQrcode'
import { getAllWineList } from '../logics/wines/getAllWineList'
import { createWine } from '../logics/wines/createWine'
import { updateWine } from '../logics/wines/updateWine'
import { removeWine } from '../logics/wines/removeWine'
import { factoryPagination } from '../logics/utils/factoryPagination'

interface RequestWithFetch extends Request {
  query: WineFetchSchema
}

interface RequestWithInsert extends Request {
  body: WineInsertSchema
}

interface RequestWithUpdate extends Request {
  body: WineUpdateSchema
}

interface RequestWithQrcode extends Request {
  query: {
    qrcode: string
  }
}

export const fetch = async (req: RequestWithFetch, res: Response) => {
  const userId = Number(req.query.userId)
  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 10
  try {
    const wineList = await getWineList(userId, page, perPage)
    const allWines = await getAllWineList(userId)
    const pagination = factoryPagination(page, perPage, allWines.length)
    return res.status(200).json({
      item: wineList,
      pagination,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}

export const edit = async (req: Request, res: Response) => {
  const wineId = parseInt(req.params.id, 10)
  try {
    const result = await getWine(wineId)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}

export const create = async (req: RequestWithInsert, res: Response) => {
  try {
    const wine = req.body
    const result = await createWine(wine)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}

export const update = async (req: RequestWithUpdate, res: Response) => {
  try {
    const wineId = parseInt(req.params.id, 10)
    const updateData = req.body
    const result = await updateWine(wineId, updateData)
    return res.status(200).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}

export const readQrcode = async (req: RequestWithQrcode, res: Response) => {
  try {
    const qrCode = req.query.qrcode
    const result = await getWineByQrcode(qrCode)
    if (result) {
      return res.status(200).json(result)
    } else {
      res.status(404).json({ message: '該当のデータは存在しません' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}

export const remove = async (req: Request, res: Response) => {
  const wineId = parseInt(req.params.id, 10)
  try {
    await removeWine(wineId)
    return res.status(200).json({ message: 'データの削除に成功しました' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}
