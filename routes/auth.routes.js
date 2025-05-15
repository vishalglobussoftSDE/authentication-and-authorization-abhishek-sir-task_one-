import express from 'express';
import {
  login,
  signup,
  forgotPassword,
  logout,
  resetPassword,
} from '../controllers/auth.controller.js';

import { validate } from '../middlewares/validate.middleware.js';
import {
  loginSchema,
  signupSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from '../validators/auth.validators.js';

const router = express.Router();

router.post('/login', validate(loginSchema), login);
router.post('/signup', validate(signupSchema), signup);
router.post('/forgot-password', validate(forgotPasswordSchema), forgotPassword);
router.post('/reset-password', validate(resetPasswordSchema), resetPassword);
router.post('/logout', logout); // No validation required

export default router;
