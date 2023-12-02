import { Request, Response } from 'express'
import { QrcodeInsertSchema } from '../shemas/qrcodeSchema'
import { factoryQrText } from '../logics/qrcodes/factoryQrText'
import { createQrcode } from '..//logics/qrcodes/createQrcode'

interface QrcodeInsetRequest extends Request {
  body: QrcodeInsertSchema
}

export const create = async (req: QrcodeInsetRequest, res: Response) => {
  const { userId, count } = req.body
  const qrTexts = factoryQrText(userId, count)
  try {
    await createQrcode(qrTexts)
    return res.status(200).json({ message: 'QRコードの生成に成功しました' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'サーバーエラーが発生しました' })
  }
}
