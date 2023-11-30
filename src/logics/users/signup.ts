// import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
// import { prisma } from 'globals/prismadb'
import { User } from 'src/models/user'

export const signUp = async (user: User) => {
  const hashedPassword = await bcrypt.hash(user.password, 10)
  console.log(hashedPassword)
  // const res: User = await prisma.user.create({
  //   data: {
  //     email: email,
  //     firstname: firstname,
  //     lastname: lastname,
  //     password: hashedPassword,
  //   },
  // })
  // return res
}
