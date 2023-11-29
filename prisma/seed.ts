import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const categories = [
  { name: '赤ワイン' },
  { name: '白ワイン' },
  { name: 'ロゼワイン' },
  { name: 'スパークリングワイン' },
]

const varieties = [
  { name: 'ピノ・ノワール' },
  { name: 'シャルドネ' },
  { name: 'カベルネ・ソーヴィニヨン' },
  { name: 'メルロ' },
  { name: 'カベルネ・フラン' },
  { name: 'シラー' },
  { name: 'ピノ・ムニエ' },
  { name: 'ソーヴィニヨン・ブラン' },
  { name: 'グルナッシュ' },
  { name: 'プティ・ヴェルド' },
  { name: 'サンジョヴェーゼ' },
  { name: 'リースリング' },
  { name: 'ヴィオニエ' },
  { name: 'ゲヴェルツトラミネール' },
  { name: 'カベルネ・フラン' },
  { name: 'シュナン・ブラン' },
  { name: 'サンジョヴェーゼ' },
  { name: 'ネッビオーロ' },
  { name: 'モスカート' },
  { name: 'ピノ・ブラン' },
]

const seedData = async () => {
  const categoryPromises = categories.map((category) => {
    return prisma.category.create({
      data: category,
    })
  })

  const varietyPromises = varieties.map((variety) => {
    return prisma.variety.create({
      data: variety,
    })
  })

  await Promise.all([...categoryPromises, ...varietyPromises])

  seedData()
    .catch((error) => {
      console.error('Seederエラー:', error)
    })
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    .finally(async () => {
      await prisma.$disconnect()
    })
}

void seedData()
