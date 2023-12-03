import express from 'express'
import validateRequest from '../middleware/validateRequest'
import { userSchema, userLoginSchema } from '../shemas/userSchema'
import { wineCreateSchema, wineUpdateSchema } from './../shemas/wineSchema'
import * as usersHandlers from '../handlers/usersHandlers'
import * as winesHandlers from '../handlers/winesHandler'

const router = express.Router()

router.post('/signup', validateRequest(userSchema), usersHandlers.signup)

router.post('/login', validateRequest(userLoginSchema), usersHandlers.login)

router.get('/wines', winesHandlers.fetch)

router.post('/wines', validateRequest(wineCreateSchema), winesHandlers.create)

router.get('/wines/:id', winesHandlers.edit)

router.patch('/wines/:id', validateRequest(wineUpdateSchema), winesHandlers.update)

export default router
