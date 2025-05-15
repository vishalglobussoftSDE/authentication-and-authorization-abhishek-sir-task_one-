import express from 'express';
import { getSelfProfile, updateProfile } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/me' , getSelfProfile);
router.patch('/update' ,updateProfile);

export default router;