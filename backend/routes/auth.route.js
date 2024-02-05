import express from 'express';
import authController from '../controller/auth.controller.js';
const router = express.Router()

router.post('/signup',authController.signup)
router.post('/signin',authController.signin)
  router.post('/logout',authController.logout)


export default router 