import express from 'express';
import { AuthController } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

// Protected routes
router.get('/me', authenticateToken, AuthController.getMe);
router.put('/profile', authenticateToken, AuthController.updateProfile);
router.post('/addresses', authenticateToken, AuthController.addAddress);
router.put('/addresses/:addressId/default', authenticateToken, AuthController.setDefaultAddress);
router.delete('/addresses/:addressId', authenticateToken, AuthController.deleteAddress);

export default router;
