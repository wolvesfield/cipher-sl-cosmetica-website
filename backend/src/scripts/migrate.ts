import { pool } from '../config/database.js';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function runMigration() {
  try {
    console.log('Running database migration...');

    const schemaSQL = await readFile(
      path.join(__dirname, 'schema.sql'),
      'utf-8'
    );

    await pool.query(schemaSQL);

    console.log('✓ Migration completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigration();
