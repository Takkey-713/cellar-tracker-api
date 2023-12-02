import express from 'express'
import validateRequest from '../middleware/validateRequest'
import { userSchema, userLoginSchema } from '../shemas/userSchema'
import { wineInsertSchema, wineUpdateSchema } from './../shemas/wineSchema'
import * as usersHandlers from '../handlers/usersHandlers'
import * as winesHandlers from '../handlers/winesHandler'

const router = express.Router()

router.post('/signup', validateRequest(userSchema), usersHandlers.signup)

router.post('/login', validateRequest(userLoginSchema), usersHandlers.login)

router.get('/wines', winesHandlers.fetch)

router.post('/wines', validateRequest(wineInsertSchema), winesHandlers.insert)

router.patch('/wines/:id', validateRequest(wineUpdateSchema), winesHandlers.update)

export default router
