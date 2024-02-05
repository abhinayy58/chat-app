import express from 'express';
import message from '../controller/message.controller.js'
import protectRoute from '../middleware/protectRoute.js';
 const router = express.Router()

 router.get('/:id',protectRoute,message.getMessage)
 router.post("/send/:id",protectRoute,message.sendMessage)




 export default router