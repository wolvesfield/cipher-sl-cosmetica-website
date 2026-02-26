import { pool } from '../config/database.js';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SavedAddress {
  id: string;
  userId: string;
  label?: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
  createdAt: Date;
}

export interface UserPreferences {
  userId: string;
  newsletter: boolean;
  smsUpdates: boolean;
  language: 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr';
  currency: 'COP' | 'USD' | 'CAD' | 'BRL' | 'MXN';
}

export interface UserWithDetails extends User {
  addresses: SavedAddress[];
  preferences: UserPreferences;
}

export class UserModel {
  // Create new user with transaction
  static async create(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
  }): Promise<UserWithDetails> {
    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      // Hash password
      const passwordHash = await bcrypt.hash(data.password, SALT_ROUNDS);

      // Insert user
      const userResult = await client.query(
        `INSERT INTO users (email, password_hash, first_name, last_name, phone)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, email, first_name as "firstName", last_name as "lastName",
                   phone, created_at as "createdAt", updated_at as "updatedAt"`,
        [data.email.toLowerCase().trim(), passwordHash, data.firstName, data.lastName, data.phone]
      );

      const user = userResult.rows[0];

      // Insert default preferences
      await client.query(
        `INSERT INTO user_preferences (user_id, newsletter, sms_updates, language, currency)
         VALUES ($1, FALSE, FALSE, 'en', 'USD')`,
        [user.id]
      );

      await client.query('COMMIT');

      return {
        ...user,
        addresses: [],
        preferences: {
          userId: user.id,
          newsletter: false,
          smsUpdates: false,
          language: 'en',
          currency: 'USD'
        }
      };
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  // Find user by email
  static async findByEmail(email: string): Promise<User | null> {
    const result = await pool.query(
      `SELECT id, email, first_name as "firstName", last_name as "lastName",
              phone, created_at as "createdAt", updated_at as "updatedAt"
       FROM users
       WHERE email = $1`,
      [email.toLowerCase().trim()]
    );

    return result.rows[0] || null;
  }

  // Verify password
  static async verifyPassword(email: string, password: string): Promise<boolean> {
    const result = await pool.query(
      'SELECT password_hash FROM users WHERE email = $1',
      [email.toLowerCase().trim()]
    );

    if (result.rows.length === 0) {
      return false;
    }

    return bcrypt.compare(password, result.rows[0].password_hash);
  }

  // Get user with addresses and preferences
  static async getWithDetails(userId: string): Promise<UserWithDetails | null> {
    const client = await pool.connect();

    try {
      // Get user
      const userResult = await client.query(
        `SELECT id, email, first_name as "firstName", last_name as "lastName",
                phone, created_at as "createdAt", updated_at as "updatedAt"
         FROM users
         WHERE id = $1`,
        [userId]
      );

      if (userResult.rows.length === 0) {
        return null;
      }

      const user = userResult.rows[0];

      // Get addresses
      const addressesResult = await client.query(
        `SELECT id, user_id as "userId", label, first_name as "firstName",
                last_name as "lastName", address, city, state, postal_code as "postalCode",
                country, phone, is_default as "isDefault", created_at as "createdAt"
         FROM user_addresses
         WHERE user_id = $1
         ORDER BY is_default DESC, created_at DESC`,
        [userId]
      );

      // Get preferences
      const prefsResult = await client.query(
        `SELECT user_id as "userId", newsletter, sms_updates as "smsUpdates",
                language, currency
         FROM user_preferences
         WHERE user_id = $1`,
        [userId]
      );

      return {
        ...user,
        addresses: addressesResult.rows,
        preferences: prefsResult.rows[0] || {
          userId: user.id,
          newsletter: false,
          smsUpdates: false,
          language: 'en',
          currency: 'USD'
        }
      };
    } finally {
      client.release();
    }
  }

  // Update user profile
  static async updateProfile(userId: string, updates: {
    firstName?: string;
    lastName?: string;
    phone?: string;
  }): Promise<User> {
    const fields: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (updates.firstName) {
      fields.push(`first_name = $${paramIndex++}`);
      values.push(updates.firstName);
    }
    if (updates.lastName) {
      fields.push(`last_name = $${paramIndex++}`);
      values.push(updates.lastName);
    }
    if (updates.phone !== undefined) {
      fields.push(`phone = $${paramIndex++}`);
      values.push(updates.phone);
    }

    values.push(userId);

    const result = await pool.query(
      `UPDATE users
       SET ${fields.join(', ')}
       WHERE id = $${paramIndex}
       RETURNING id, email, first_name as "firstName", last_name as "lastName",
                 phone, created_at as "createdAt", updated_at as "updatedAt"`,
      values
    );

    return result.rows[0];
  }

  // Update preferences
  static async updatePreferences(userId: string, updates: {
    newsletter?: boolean;
    smsUpdates?: boolean;
    language?: 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr';
    currency?: 'COP' | 'USD' | 'CAD' | 'BRL' | 'MXN';
  }): Promise<UserPreferences> {
    const fields: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (updates.newsletter !== undefined) {
      fields.push(`newsletter = $${paramIndex++}`);
      values.push(updates.newsletter);
    }
    if (updates.smsUpdates !== undefined) {
      fields.push(`sms_updates = $${paramIndex++}`);
      values.push(updates.smsUpdates);
    }
    if (updates.language) {
      fields.push(`language = $${paramIndex++}`);
      values.push(updates.language);
    }
    if (updates.currency) {
      fields.push(`currency = $${paramIndex++}`);
      values.push(updates.currency);
    }

    values.push(userId);

    const result = await pool.query(
      `UPDATE user_preferences
       SET ${fields.join(', ')}
       WHERE user_id = $${paramIndex}
       RETURNING user_id as "userId", newsletter, sms_updates as "smsUpdates",
                 language, currency`,
      values
    );

    return result.rows[0];
  }

  // Add address
  static async addAddress(userId: string, address: Omit<SavedAddress, 'id' | 'userId' | 'createdAt' | 'isDefault'>): Promise<SavedAddress> {
    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      // Check if this is the first address (make it default)
      const countResult = await client.query(
        'SELECT COUNT(*) FROM user_addresses WHERE user_id = $1',
        [userId]
      );

      const isFirstAddress = parseInt(countResult.rows[0].count) === 0;

      const result = await client.query(
        `INSERT INTO user_addresses
         (user_id, label, first_name, last_name, address, city, state, postal_code, country, phone, is_default)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
         RETURNING id, user_id as "userId", label, first_name as "firstName", last_name as "lastName",
                   address, city, state, postal_code as "postalCode", country, phone,
                   is_default as "isDefault", created_at as "createdAt"`,
        [
          userId, address.label, address.firstName, address.lastName,
          address.address, address.city, address.state, address.postalCode,
          address.country, address.phone, isFirstAddress
        ]
      );

      await client.query('COMMIT');

      return result.rows[0];
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  // Set default address
  static async setDefaultAddress(userId: string, addressId: string): Promise<void> {
    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      // Remove default from all addresses
      await client.query(
        'UPDATE user_addresses SET is_default = FALSE WHERE user_id = $1',
        [userId]
      );

      // Set new default
      await client.query(
        'UPDATE user_addresses SET is_default = TRUE WHERE id = $1 AND user_id = $2',
        [addressId, userId]
      );

      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  // Delete address
  static async deleteAddress(userId: string, addressId: string): Promise<void> {
    await pool.query(
      'DELETE FROM user_addresses WHERE id = $1 AND user_id = $2',
      [addressId, userId]
    );
  }
}
