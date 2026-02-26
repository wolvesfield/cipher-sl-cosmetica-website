import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error('Error:', err);

  // PostgreSQL unique constraint violation
  if ((err as any).code === '23505') {
    return res.status(409).json({
      error: 'A record with this value already exists'
    });
  }

  // PostgreSQL foreign key violation
  if ((err as any).code === '23503') {
    return res.status(400).json({
      error: 'Invalid reference to related data'
    });
  }

  res.status(500).json({
    error: 'Internal server error'
  });
}
