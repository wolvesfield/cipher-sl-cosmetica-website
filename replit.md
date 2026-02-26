# SL Cosmetica - Clinical Luxury Skincare E-Commerce Platform

## Project Overview

A full-stack e-commerce web application for MTRX Pharmaceutical's CBD-enhanced dermocosmetic line targeting the Latin American market. The platform combines clinical pharmaceutical-grade precision with premium luxury aesthetics.

## Architecture

- **Frontend**: React 19 + TypeScript + Vite 7 + Tailwind CSS 4 + Shadcn/ui
- **Backend**: Node.js + Express 4 + TypeScript + PostgreSQL
- **Database**: Replit PostgreSQL (via DATABASE_URL environment variable)
- **Build**: Vite (Babel-based react plugin, SWC not compatible with Replit NixOS)

## Project Structure

```
/
├── src/                    # Frontend React app
│   ├── components/         # React components (UI, features, pages)
│   │   └── ui/             # Shadcn/ui primitives
│   ├── lib/                # Utilities, contexts, API client
│   │   ├── api/client.ts   # Backend API client (uses /api relative paths via Vite proxy)
│   │   ├── AuthContext.tsx  # Auth state: signUp, signIn, signOut, profile mgmt
│   │   ├── LanguageContext.tsx # i18n: 7-language translation, backend translate API
│   │   ├── AppContext.tsx   # Cart, currency, language sync, lt()/lta() safe text helpers
│   │   └── LoyaltyContext.tsx # Customer loyalty tiers/points
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # CSS theme files
│   └── App.tsx / main.tsx  # Entry points
├── backend/                # Express backend API
│   └── src/
│       ├── config/database.ts  # PostgreSQL pool (uses DATABASE_URL)
│       ├── controllers/    # Auth (register/login/profile) + Translation (Google Translate)
│       ├── middleware/      # JWT auth verification, error handling
│       ├── models/User.ts  # User CRUD, addresses, preferences (bcrypt, transactions)
│       ├── routes/          # /api/auth, /api/translate
│       └── scripts/         # DB migration (schema.sql + migrate.ts)
├── scripts/                # Image optimization scripts
├── vite.config.ts          # Vite config: port 5000, host 0.0.0.0, proxy /api -> 3001
└── package.json            # Root scripts + frontend deps
```

## Development Workflows

- **Start application** (`npm run dev`) - Frontend on port 5000 (webview)
- **Backend API** (`npm run dev:backend`) - Backend on port 3001 (console)

## Key Configuration Notes

- **Vite**: Uses `@vitejs/plugin-react` (Babel-based) instead of `@vitejs/plugin-react-swc` due to SWC native binary incompatibility with Replit NixOS
- **Vite base**: Set to `'/'` for production compatibility
- **Host**: Frontend on `0.0.0.0:5000`, backend on `127.0.0.1:3001` (dev), `0.0.0.0` (prod)
- **allowedHosts**: Set to `true` (boolean) for Replit proxy compatibility
- **API Routing**: Frontend uses relative `/api` paths; Vite dev proxy forwards to `http://127.0.0.1:3001`
- **Database**: Backend uses `DATABASE_URL` env var (Replit PostgreSQL) with fallback to individual PG* vars
- **Backend CORS**: Set to `origin: true` (allows all origins since Vite proxy handles routing)
- **Backend IPv4**: Must bind to `127.0.0.1` (not `localhost`) to ensure Vite proxy can connect (IPv4/IPv6 mismatch)
- **Backend trust proxy**: `app.set('trust proxy', 1)` required for rate limiter behind Replit proxy
- **DB Migration**: Run with `npm run migrate` (tsx src/scripts/migrate.ts in backend)

## Auth System

- JWT-based authentication (HS256, 7-day expiry)
- Bcrypt password hashing (12 salt rounds)
- Database tables: users, user_addresses, user_preferences
- Endpoints: register, login, getMe, updateProfile, addresses CRUD
- Frontend: AuthModal component with tabbed Sign In/Sign Up forms

## Translation System

- 7 languages: English (default), Spanish, French, German, Italian, Dutch, Polish
- Google Translate widget embedded in index.html, rendered in header via LanguageToggle component
- Widget's Google branding hidden via CSS; only the language dropdown `<select>` is visible
- LanguageContext provides `t()` for UI string keys and `resolveText()` for multilingual product data objects
- AppContext provides `lt()` and `lta()` safe text helpers that fallback to en/es when language key missing
- Product data has `{en: ..., es: ...}` objects; Google Translate handles other languages automatically on the page
- Components using `language` prop must define local `lt()` helper (IngredientJourney, MolecularViewer, ClinicalDataChart, ProductReviews)
- All `[language]` or `[lang]` access on translation objects MUST have `|| obj['en']` fallback to prevent crashes

## Deployment

- **Target**: Autoscale
- **Build**: `npm run build && mkdir -p dist/public && cp -r dist/assets dist/index.html dist/public/ && cd backend && npm run build`
- **Run**: `cd backend && NODE_ENV=production PORT=5000 node dist/server.js`
- Backend serves static frontend files from `dist/public` in production
- All API routes remain under `/api/*`

## Features

- AI Pharmacist chatbot (GPT-4 via Spark SDK)
- 3D product bottle viewer (Three.js)
- Ingredient constellation map
- Virtual try-on with AR effects
- Product comparison tool
- Before/after clinical sliders
- Multi-language (EN/ES/FR/DE/IT/NL/PL) with real-time translation via Google Translate
- Multi-currency (USD, BRL, MXN, COP, CAD)
- Subscription management
- JWT authentication with PostgreSQL backend
- Customer account with addresses and preferences
- 17 SKUs across 3 product categories

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string (auto-set by Replit)
- `JWT_SECRET` - JWT signing secret for auth (auto-generated)
- `JWT_EXPIRES_IN` - Token expiry (default: 7d)
- `PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGDATABASE` - Individual DB vars
- `BACKEND_URL` - Backend URL for Vite proxy (default: http://127.0.0.1:3001)
- `PORT` - Backend port (default: 3001)

## State Management

- **No useKV**: The `@github/spark/hooks` `useKV` has been fully replaced with `useLocalStorage` custom hook
- **useLocalStorage** (`src/hooks/use-local-storage.ts`): Drop-in replacement for useKV using browser localStorage
- Storage keys: `user-currency`, `sl-cart`, `loyalty-profile`, `user-subscriptions`, `scroll-history`
- Language state: Managed by Google Translate widget (cookies) + localStorage (`sl-language`)
