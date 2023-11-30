import express from 'express'
import { signup } from '../controllers/usersController'

const router = express.Router()

router.route('/signup').post(signup)

export default router
