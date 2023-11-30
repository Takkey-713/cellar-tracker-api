import express from 'express'
import { signup } from '../controllers/usersController'
import { login } from '../controllers/usersController'

const router = express.Router()

router.route('/signup').post(signup)

router.route('/login').post(login)

export default router
