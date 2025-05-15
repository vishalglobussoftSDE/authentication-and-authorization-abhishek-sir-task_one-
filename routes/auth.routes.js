import express from 'express';
import { login, signup,forgotPassword,logout ,resetPassword } from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/logout', logout);

export default router;