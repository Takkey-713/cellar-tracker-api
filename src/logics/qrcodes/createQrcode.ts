import { prisma } from '../../globals/prismadb'

interface QrTexts {
  userId: number
  text: string
}

export const createQrcode = async (qrTexts: QrTexts[]) => {
  await prisma.qrcode.createMany({
    data: qrTexts.map((qrText) => ({
      userId: qrText.userId,
      text: qrText.text,
    })),
  })
}
