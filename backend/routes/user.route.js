import express from 'express'
import getUserDetail from '../controller/user.controller.js'
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router()

router.get('/', protectRoute ,getUserDetail)

export default router