import { prisma } from '../../globals/prismadb'
import crypto from 'crypto'

export const generateUniqueQrcode = async () => {
  let qrcode: string = ''
  let exists = true

  while (exists) {
    qrcode = crypto.randomBytes(20).toString('hex')

    const qrcodeExists = await prisma.wine.findUnique({
      where: { qrcode },
    })

    if (!qrcodeExists) {
      exists = false
    }
  }

  return qrcode
}
