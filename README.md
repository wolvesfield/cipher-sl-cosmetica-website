# SL Cosmetica - Clinical Luxury Skincare Platform

> **Advanced MTRX Pharmaceutical Product Showcase**  
> A cutting-edge e-commerce platform combining clinical science with luxury aesthetics for the Latin American market.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.17-38bdf8.svg)

## 🌐 Live Demo

**Production URL**: [https://wolvesfield.github.io/sl-cosmetica-website/](https://wolvesfield.github.io/sl-cosmetica-website/)

Automatically deployed via GitHub Actions to GitHub Pages.

---

## 🌟 Overview

SL Cosmetica is a next-generation skincare e-commerce platform that merges pharmaceutical-grade precision with an immersive, futuristic user experience. Built for the LATAM market, it showcases MTRX's revolutionary CBD-enhanced dermocosmetic line through interactive 3D visualizations, AI-powered consultations, and clinical data transparency.

### ✨ Key Features

- **🤖 AI Pharmacist** - LLM-powered skincare consultant with real-time voice visualizer
- **🌌 Ingredient Constellation Map** - Interactive 3D visualization of product ingredient relationships
- **📸 Virtual Try-On** - Webcam-based AR preview of expected skin transformation results
- **⚖️ Product Comparison Tool** - Side-by-side analysis of formulas, ingredients, and clinical data
- **🔬 3D Product Viewer** - Rotating bottle models with photorealistic rendering
- **📊 Clinical Data Charts** - Animated visualization of efficacy studies and improvement metrics
- **🔍 Advanced Filtering** - Search by ingredient, skin concern, product category, and condition
- **📱 Mobile-First Design** - Optimized responsive experience across all devices

---

## 🎨 Design Philosophy

**Clinical Luxury** - Where medical-grade science meets premium aesthetics.

The platform employs a dramatic **dark slate navigation** with **vibrant teal and purple gradients**, creating a futuristic laboratory aesthetic. Every interaction reinforces credibility through:
- Clean geometric layouts with generous negative space
- Sophisticated serif typography (Playfair Display) for elegance
- Scientific data visualization for transparency
- Smooth animations that feel like advanced technology activating

---

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript, Vite |
| **Backend** | Node.js, Express, PostgreSQL |
| **Authentication** | JWT tokens, bcrypt (12 salt rounds) |
| **Styling** | Tailwind CSS v4, Framer Motion |
| **UI Components** | Shadcn/ui v4, Radix UI |
| **3D Graphics** | Three.js |
| **Data Visualization** | Recharts, D3.js |
| **AI Integration** | OpenAI GPT-4 (via Spark SDK) |
| **Icons** | Phosphor Icons, Lucide React |
| **State Management** | React Hooks, Spark KV Store |
| **Security** | Helmet, CORS, Rate Limiting, Zod Validation |
| **Image Optimization** | WebP conversion (91.7% size reduction) |

---

## 📁 Project Structure

**This is a monorepo containing both frontend and backend:**

```
sl-cosmetica-website/
├── src/                          # Frontend React application
│   ├── components/
│   │   ├── ui/                   # Shadcn UI components (40+)
│   │   ├── AIPharmacist.tsx      # LLM chatbot with voice visualizer
│   │   ├── ConstellationMap.tsx  # 3D ingredient visualization
│   │   ├── VirtualTryOn.tsx      # Webcam-based AR try-on
│   │   ├── ProductComparison.tsx # Formula comparison tool
│   │   ├── Bottle3DViewer.tsx    # Three.js product renderer
│   │   └── ...
│   ├── lib/
│   │   ├── types.ts              # TypeScript interfaces
│   │   ├── AppContext.tsx        # Global state management
│   │   ├── AuthContext.tsx       # Authentication context
│   │   └── api/
│   │       └── client.ts         # Backend API client
│   └── assets/
├── backend/                      # Backend Express API
│   ├── src/
│   │   ├── config/
│   │   │   └── database.ts       # PostgreSQL connection
│   │   ├── models/
│   │   │   └── User.ts           # User data access layer
│   │   ├── controllers/
│   │   │   └── authController.ts # Auth business logic
│   │   ├── middleware/
│   │   │   └── authMiddleware.ts # JWT verification
│   │   ├── routes/
│   │   │   └── auth.ts           # API routes
│   │   ├── scripts/
│   │   │   ├── schema.sql        # Database schema
│   │   │   └── migrate.ts        # Migration runner
│   │   └── server.ts             # Express app
│   └── package.json              # Backend dependencies
├── scripts/
│   └── optimize-images.js        # Image optimization
├── package.json                  # Frontend deps + monorepo scripts
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern browser with WebGL support
- PostgreSQL database (or use Render PostgreSQL)

### Installation

```bash
# Clone the repository
git clone https://github.com/wolvesfield/sl-cosmetica-website.git
cd sl-cosmetica-website

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Environment Setup

**Frontend** (`.env.local`):
```env
VITE_API_URL=http://localhost:3001/api
```

**Backend** (`backend/.env`):
```env
NODE_ENV=development
PORT=3001

DB_HOST=your-postgres-host
DB_PORT=5432
DB_NAME=your-database-name
DB_USER=your-database-user
DB_PASSWORD=your-database-password

JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=7d

FRONTEND_URL=http://localhost:5173
```

### Database Migration

Run the database migration to create tables:

```bash
npm run migrate
```

This creates:
- `users` - User accounts with bcrypt password hashing
- `user_addresses` - Delivery addresses
- `user_preferences` - User settings (language, currency, notifications)

### Start Development

```bash
# Option 1: Run frontend and backend separately
npm run dev                # Frontend at http://localhost:5000/sl-cosmetica-website/
npm run dev:backend        # Backend at http://localhost:3001

# Option 2: Run both together (requires concurrently)
npm run dev:all
```

### Available Scripts

**Frontend:**
- `npm run dev` - Start Vite dev server
- `npm run build` - Build production frontend
- `npm run optimize-images` - Convert images to WebP
- `npm run deploy` - Deploy to GitHub Pages

**Backend:**
- `npm run dev:backend` - Start backend dev server with watch mode
- `npm run build:backend` - Build backend TypeScript to JavaScript
- `npm run migrate` - Run database migrations

---

## 📋 Product Catalog

The platform showcases three product categories, all with anti-aging focus:

### 🧴 Anti-Aging Facial Creams
14 specialized formulas including:
- The Great Harmonizer (8.0% CBD Base)
- The Time Bender (CBD + Retinol)
- The Illuminator (CBD + Vitamin C)
- The Architect (CBD + Polypeptides)
- The Guardian (CBD + Ferulic Acid)
- The Spark (CBD + CoQ10)
- And 8 more advanced formulas

### 💪 Anti-Aging Body Care
- The Second Skin (4% CBD Body Lotion)

### 💇 Anti-Aging Hair & Scalp Care
- The Root of Power (CBD Shampoo)
- The Crown Jewel (CBD Conditioner)

---

## 🎯 Target Market

**Primary**: Latin America (Brazil, Mexico, Colombia, Chile, Peru, Argentina)  
**Demographic**: 18-35 year-old "prejuvenation" consumers  
**Secondary**: Male "BroBeauty" segment (growing 16%+ annually)

---

## 🔬 Innovation Highlights

### MTRX-CBD Technology
Proprietary pharmaceutical-grade CBD delivery system that:
- Reduces inflammation without irritation
- Allows higher active concentrations
- Enhances penetration of co-ingredients
- Provides universal barrier support

### Clinical Transparency
Every product features:
- Detailed ingredient percentage breakdowns
- Before/after clinical study results
- Mechanism of action explanations
- Scientific literature references

---

## 🌐 Deployment

### Automated GitHub Pages Deployment (Recommended)

The website automatically deploys to GitHub Pages via GitHub Actions whenever changes are pushed to the `main` branch.

**Live URL**: https://wolvesfield.github.io/sl-cosmetica-website/

For detailed deployment information:
- **[GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md)** - GitHub Pages deployment guide
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete deployment guide
- **[DEPLOYMENT_STEPS.md](./DEPLOYMENT_STEPS.md)** - Step-by-step checklist

### Frontend (GitHub Pages)

The frontend is automatically deployed via GitHub Actions. To manually deploy:

1. Update `.env.production` with your backend API URL (already configured):
```env
VITE_API_URL=https://sl-cosmetica-backend.onrender.com/api
```

2. Push changes to `main` branch - GitHub Actions handles the rest!

Alternatively, deploy manually:
```bash
npm run deploy
```

### Backend (Render)

1. Connect this GitHub repository to Render Web Service

2. Configure build settings:
   - **Build Command**: `cd backend && npm install && npm run build`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: Leave blank (monorepo supported)

3. Set environment variables in Render:
   - `NODE_ENV=production`
   - `PORT=10000`
   - Database credentials: `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`
   - `JWT_SECRET` (click "Generate Value")
   - `JWT_EXPIRES_IN=7d`
   - `FRONTEND_URL=https://wolvesfield.github.io/sl-cosmetica-website`

4. After deployment, run migration via Render Shell:
```bash
npm run migrate
```

For detailed deployment instructions:
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete deployment guide
- **[DEPLOYMENT_STEPS.md](./DEPLOYMENT_STEPS.md)** - Step-by-step checklist

---

## 📚 Documentation

- **[PRD.md](./PRD.md)** - Complete Product Requirements Document
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Step-by-step deployment instructions

---

## 🤝 Contributing

This is a commercial project developed for MTRX Pharmaceutical. Contributions are managed internally.

---

## 📄 License

The Spark Template files and resources from GitHub are licensed under the MIT License, Copyright GitHub, Inc.

---

## 🏢 Credits

**Developed by**: Wolvesfield Inc, Gen X Intel, and Legacy Foundation  
**© 2026 SL Cosmetica. All rights reserved.**

---

## 📞 Support

For technical issues or business inquiries, please contact the development team.

---

**Built with Spark Template** ⚡
