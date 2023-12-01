import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'

const validateRequest =
  (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('zod error')
        return res.status(400).json({ message: error.errors[0]['message'] })
      }
      return res.status(500).json({ message: 'サーバーエラーが発生しました' })
    }
  }

export default validateRequest
