import { z } from 'zod'

const emailField = z
  .string()
  .min(1, { message: 'メールアドレスは入力必須です' })
  .email({ message: 'メールアドレスの形式が正しくありません' })

const passwordField = z.string().min(1, { message: 'パスワードは入力必須です' })

export const userSchema = z.object({
  firstname: z.string().min(1, { message: 'FirstName is required' }),
  lastname: z.string().min(1, { message: 'LastName is required' }),
  password: passwordField,
  email: emailField,
})

export const userLoginSchema = z.object({
  password: passwordField,
  email: emailField,
})

export type UserSchema = z.infer<typeof userSchema>
export type UserLoginSchema = z.infer<typeof userLoginSchema>
