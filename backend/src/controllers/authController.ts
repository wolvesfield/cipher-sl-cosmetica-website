import { Request, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import { UserModel } from '../models/User.js';
import { z } from 'zod';

const JWT_SECRET: string = process.env.JWT_SECRET || 'fallback-secret-change-in-production';
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || '7d';

// Validation schemas
const registerSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(1, 'First name required'),
  lastName: z.string().min(1, 'Last name required'),
  phone: z.string().optional()
});

const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password required')
});

export class AuthController {
  // Register new user
  static async register(req: Request, res: Response) {
    try {
      const validatedData = registerSchema.parse(req.body);

      // Check if user exists
      const existingUser = await UserModel.findByEmail(validatedData.email);
      if (existingUser) {
        return res.status(409).json({
          error: 'An account with this email already exists'
        });
      }

      // Create user
      const user = await UserModel.create(validatedData);

      // Generate JWT
      const signOptions: SignOptions = { expiresIn: JWT_EXPIRES_IN as any };
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        signOptions
      );

      // Remove sensitive data before sending
      res.status(201).json({
        message: 'Account created successfully',
        token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          createdAt: user.createdAt,
          addresses: user.addresses,
          preferences: user.preferences
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: error.errors[0].message
        });
      }

      console.error('Registration error:', error);
      res.status(500).json({ error: 'Failed to create account' });
    }
  }

  // Login
  static async login(req: Request, res: Response) {
    try {
      const validatedData = loginSchema.parse(req.body);

      // Verify credentials
      const isValid = await UserModel.verifyPassword(
        validatedData.email,
        validatedData.password
      );

      if (!isValid) {
        return res.status(401).json({
          error: 'Invalid email or password'
        });
      }

      // Get user
      const user = await UserModel.findByEmail(validatedData.email);
      if (!user) {
        return res.status(401).json({
          error: 'Invalid email or password'
        });
      }

      // Get full user details
      const userWithDetails = await UserModel.getWithDetails(user.id);

      // Generate JWT
      const signOptions: SignOptions = { expiresIn: JWT_EXPIRES_IN as any };
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        signOptions
      );

      res.json({
        message: 'Signed in successfully',
        token,
        user: userWithDetails
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: error.errors[0].message
        });
      }

      console.error('Login error:', error);
      res.status(500).json({ error: 'Failed to sign in' });
    }
  }

  // Get current user
  static async getMe(req: Request, res: Response) {
    try {
      const userId = (req as any).userId; // Set by auth middleware

      const user = await UserModel.getWithDetails(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json({ user });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(500).json({ error: 'Failed to get user data' });
    }
  }

  // Update profile
  static async updateProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).userId;
      const { firstName, lastName, phone, preferences } = req.body;

      // Update user fields
      if (firstName || lastName || phone !== undefined) {
        await UserModel.updateProfile(userId, { firstName, lastName, phone });
      }

      // Update preferences
      if (preferences) {
        await UserModel.updatePreferences(userId, preferences);
      }

      // Get updated user
      const user = await UserModel.getWithDetails(userId);

      res.json({
        message: 'Profile updated successfully',
        user
      });
    } catch (error) {
      console.error('Update profile error:', error);
      res.status(500).json({ error: 'Failed to update profile' });
    }
  }

  // Add address
  static async addAddress(req: Request, res: Response) {
    try {
      const userId = (req as any).userId;
      const addressData = req.body;

      const address = await UserModel.addAddress(userId, addressData);

      res.status(201).json({
        message: 'Address added successfully',
        address
      });
    } catch (error) {
      console.error('Add address error:', error);
      res.status(500).json({ error: 'Failed to add address' });
    }
  }

  // Set default address
  static async setDefaultAddress(req: Request, res: Response) {
    try {
      const userId = (req as any).userId;
      const { addressId } = req.params;

      await UserModel.setDefaultAddress(userId, addressId);

      res.json({ message: 'Default address updated' });
    } catch (error) {
      console.error('Set default address error:', error);
      res.status(500).json({ error: 'Failed to update default address' });
    }
  }

  // Delete address
  static async deleteAddress(req: Request, res: Response) {
    try {
      const userId = (req as any).userId;
      const { addressId } = req.params;

      await UserModel.deleteAddress(userId, addressId);

      res.json({ message: 'Address deleted successfully' });
    } catch (error) {
      console.error('Delete address error:', error);
      res.status(500).json({ error: 'Failed to delete address' });
    }
  }
}
