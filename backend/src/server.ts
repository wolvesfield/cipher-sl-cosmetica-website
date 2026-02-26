import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import authRoutes from './routes/auth.js';
import translateRoutes from './routes/translate.js';
import { errorHandler } from './middleware/errorHandler.js';
import { testConnection } from './config/database.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3001;

app.set('trust proxy', 1);

// Security middleware — allow Google Translate external scripts/styles
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://translate.google.com", "https://translate.googleapis.com", "https://translate-pa.googleapis.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://translate.googleapis.com", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "blob:", "https:", "http:"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
      connectSrc: ["'self'", "https://translate.googleapis.com", "https://translate-pa.googleapis.com", "https://translate.google.com"],
      frameSrc: ["'self'", "https://translate.google.com"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// CORS configuration - allow all origins in development (Vite proxy handles routing)
app.use(cors({
  origin: true,
  credentials: true
}));

// Rate limiting - More permissive for production use
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Max 1000 requests per window (increased from 100)
  message: 'Too many requests, please try again later',
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});
app.use('/api/', limiter);

// Stricter rate limit for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50, // Max 50 login/register attempts per 15 minutes (increased from 10)
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/translate', translateRoutes);

// Error handling
app.use(errorHandler);

if (isProduction) {
  const distPath = join(__dirname, '../../dist');
  const publicPath = join(distPath, 'public');
  const servePath = existsSync(publicPath) ? publicPath : distPath;
  app.use(express.static(servePath));
  app.get('*', (req, res) => {
    res.sendFile(join(servePath, 'index.html'));
  });
} else {
  app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
  });
}

// Start server
async function startServer() {
  try {
    const dbConnected = await testConnection();
    if (!dbConnected) {
      throw new Error('Failed to connect to database');
    }

    const host = isProduction ? '0.0.0.0' : '127.0.0.1';
    app.listen(Number(PORT), host, () => {
      console.log(`✓ Server running on ${host}:${PORT}`);
      console.log(`✓ Environment: ${isProduction ? 'production' : 'development'}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
