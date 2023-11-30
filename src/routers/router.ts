import express from 'express'
import * as usershandlers from '../handlers/usersHandlers'

const router = express.Router()

router.route('/signup').post(usershandlers.signup)

router.route('/login').post(usershandlers.login)

export default router
