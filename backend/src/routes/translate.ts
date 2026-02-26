import express from 'express'
import { TranslateController } from '../controllers/translateController.js'

const router = express.Router()

router.post('/', TranslateController.translate)

export default router