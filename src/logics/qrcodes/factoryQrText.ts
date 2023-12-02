import crypto from 'crypto'

export const factoryQrText = (userId: number, count: number) => {
  return Array.from({ length: count }, () => {
    const qrText = crypto.randomBytes(20).toString('hex')
    return { userId, text: qrText }
  })
}
