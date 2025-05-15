import express from 'express';
import multer from 'multer';
import { storage } from '../config/cloudinary.js';
import { getSelfProfile, updateProfile } from '../controllers/user.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();
const upload = multer({ storage });

// GET self profile (requires auth)
router.get('/me', auth, getSelfProfile);

// PATCH update profile with optional profile image
router.patch('/update', auth, upload.single('profileImage'), updateProfile);

export default router;
