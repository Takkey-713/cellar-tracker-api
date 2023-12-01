import express from 'express'
import validateRequest from '../middleware/validateRequest'
import { userSchema, userLoginSchema } from '../shemas/userSchema'
import * as usershandlers from '../handlers/usersHandlers'

const router = express.Router()

router.post('/signup', validateRequest(userSchema), usershandlers.signup)

router.post('/login', validateRequest(userLoginSchema), usershandlers.login)

export default router
