# GitHub Copilot Instructions for SL Cosmetica

## Project Overview

SL Cosmetica is a clinical luxury skincare e-commerce platform showcasing MTRX's CBD-enhanced dermocosmetic products. This is a **monorepo** containing both frontend (React/TypeScript) and backend (Node.js/Express) applications.

**Target Market**: Latin America (Brazil, Mexico, Colombia, Chile, Peru, Argentina)  
**Deployment**: Frontend on GitHub Pages, Backend on Render

## Technology Stack

### Frontend
- **Framework**: React 19.0.0 with TypeScript 5.7.2
- **Build Tool**: Vite 7.2.6
- **Styling**: Tailwind CSS v4.1.11
- **UI Components**: Shadcn/ui v4, Radix UI
- **3D Graphics**: Three.js
- **Data Visualization**: Recharts, D3.js
- **Animation**: Framer Motion
- **Icons**: Phosphor Icons, Lucide React
- **State Management**: React Hooks, Context API
- **AI Integration**: OpenAI GPT-4 via Spark SDK

### Backend
- **Runtime**: Node.js with Express
- **Database**: PostgreSQL
- **Authentication**: JWT tokens with bcrypt (12 salt rounds)
- **Security**: Helmet, CORS, Rate Limiting
- **Validation**: Zod

## Project Structure

```
sl-cosmetica-website/
├── src/                   # Frontend React application
│   ├── components/        # React components
│   │   └── ui/           # Shadcn UI components
│   ├── lib/              # Utilities and API clients
│   └── assets/           # Images and static files
├── backend/              # Backend Express API
│   └── src/
│       ├── config/       # Database and app configuration
│       ├── models/       # Data access layer
│       ├── controllers/  # Business logic
│       ├── middleware/   # Auth, validation, error handling
│       ├── routes/       # API routes
│       └── scripts/      # Database migrations
├── scripts/              # Build and optimization scripts
└── .github/              # GitHub workflows and configs
```

## Coding Standards

### TypeScript

- **Strict Mode**: Use strict TypeScript settings (`strictNullChecks: true`)
- **Type Safety**: Avoid `any` types - use `unknown` or proper typing instead
- **Unused Variables**: Prefix with `_` if intentionally unused (e.g., `_unusedParam`)
- **Explicit Any**: The `@typescript-eslint/no-explicit-any` rule is set to 'warn'
- **Path Aliases**: Use `@/*` for importing from `src/` (e.g., `import { api } from '@/lib/api'`)

### React

- **Version**: React 19.0.0 with modern hooks
- **Components**: Use functional components with hooks
- **Hooks Rules**: Follow React Hooks best practices (enforced by eslint-plugin-react-hooks)
- **Component Exports**: Prefer default exports for components; constant exports are allowed
- **Refresh**: Components should be compatible with React Refresh

### Styling

- **CSS Framework**: Tailwind CSS v4 (use utility classes)
- **Design System**: Use Shadcn/ui components from `src/components/ui/`
- **Theming**: Dark mode support via `next-themes`
- **Responsive**: Mobile-first design approach
- **Color Palette**: Dark slate navigation with teal and purple gradients
- **Typography**: Playfair Display for elegance, sans-serif for readability

### Code Quality

- **Linting**: Run `npm run lint` before committing
- **ESLint Config**: Follow the rules in `eslint.config.js`
- **File Organization**: Group related files together, use index files for exports
- **Naming Conventions**:
  - Components: PascalCase (e.g., `AIPharmacist.tsx`)
  - Functions/Variables: camelCase (e.g., `fetchUserData`)
  - Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
  - Types/Interfaces: PascalCase (e.g., `UserProfile`)

## Security Guidelines

- **Never commit secrets**: Use environment variables for API keys, DB credentials, JWT secrets
- **Password Hashing**: Always use bcrypt with 12 salt rounds (already configured)
- **JWT Security**: Tokens expire after 7 days (configurable via JWT_EXPIRES_IN)
- **Input Validation**: Use Zod schemas for all user inputs
- **CORS**: Backend has CORS configured for specific origins only
- **Rate Limiting**: API endpoints are rate-limited to prevent abuse
- **XSS Protection**: Use Helmet.js for security headers
- **SQL Injection**: Use parameterized queries only (no string concatenation)

## Monorepo Guidelines

### Frontend Development
- **Location**: `/src` directory
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Deploy**: `npm run deploy` (GitHub Pages)

### Backend Development
- **Location**: `/backend` directory
- **Dev Server**: `npm run dev:backend` (runs on port 3001)
- **Build**: `npm run build:backend`
- **Migrations**: `npm run migrate`

### Running Both Together
- **Combined**: `npm run dev:all` (requires concurrently)

## Environment Configuration

### Frontend (`.env.local`)
```env
VITE_API_URL=http://localhost:3001/api  # Development
# Or https://sl-cosmetica-backend.onrender.com/api for production
```

### Backend (`backend/.env`)
```env
NODE_ENV=development
PORT=3001
DB_HOST=...
DB_PORT=5432
DB_NAME=...
DB_USER=...
DB_PASSWORD=...
JWT_SECRET=...
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
```

## File Modification Rules

### DO Edit
- Components in `src/components/`
- Backend logic in `backend/src/`
- Styles and configs as needed
- Tests and documentation

### DO NOT Edit (unless explicitly required)
- Files in `dist/` (build artifacts)
- Files in `node_modules/` (dependencies)
- Lock files (`package-lock.json`) unless updating dependencies
- `.github/workflows/` files without careful review
- Database migration files that have already been applied

## Best Practices

### Component Development
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks (in `src/hooks/`)
- Use Shadcn/ui components from `src/components/ui/` when available
- Prefer composition over complex prop drilling
- Use Context for global state (see `AppContext.tsx`, `AuthContext.tsx`)

### API Integration
- Use the API client from `src/lib/api/client.ts`
- Handle loading and error states appropriately
- Use React Query for data fetching when beneficial
- Validate API responses with Zod schemas

### Performance
- Images are optimized via WebP conversion (91.7% size reduction achieved)
- Use lazy loading for routes and heavy components
- Optimize Three.js scenes and 3D assets
- Minimize re-renders with proper memoization

### Accessibility
- Use semantic HTML
- Include ARIA labels where needed
- Test with keyboard navigation
- Ensure color contrast meets WCAG standards

## Testing

- Currently, there is no dedicated test suite configured
- When adding tests in the future, place them adjacent to the code they test
- Use descriptive test names that explain the expected behavior

## Commands Reference

```bash
# Frontend
npm run dev              # Start Vite dev server
npm run build            # Production build
npm run lint             # Run ESLint
npm run optimize-images  # Convert images to WebP
npm run deploy           # Deploy to GitHub Pages

# Backend
npm run dev:backend      # Start backend with watch mode
npm run build:backend    # Build backend TypeScript
npm run migrate          # Run database migrations

# Both
npm run dev:all          # Run frontend and backend together
```

## Design System

### Color Scheme
- **Primary**: Teal and purple gradients
- **Navigation**: Dark slate
- **Background**: Clean whites and subtle grays
- **Accents**: Scientific/pharmaceutical aesthetic

### Animation
- Use Framer Motion for page transitions and interactions
- Animations should feel like "advanced technology activating"
- Maintain 60fps performance

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Sans-serif (readable, modern)
- **Spacing**: Generous negative space

## Common Patterns

### Authentication Flow
1. User submits credentials
2. Backend validates and returns JWT
3. Frontend stores token in AuthContext
4. Include token in Authorization header for API requests

### Product Display
- 3D bottle viewer using Three.js (`Bottle3DViewer.tsx`)
- Clinical data charts with Recharts
- Ingredient constellation map with D3.js
- Virtual try-on with webcam integration

### Internationalization
- Support for Spanish and Portuguese (LATAM markets)
- Currency conversion capabilities
- See `CURRENCY_CONVERSION.md` for details

## Known Issues & Limitations

- WebGL is required for 3D features
- AI Pharmacist requires OpenAI API access
- Backend requires PostgreSQL database
- Some features may not work on older browsers

## Additional Documentation

For more details, see:
- `README.md` - Project overview and setup
- `PRD.md` - Product Requirements Document
- `DEPLOYMENT_GUIDE.md` - Deployment instructions
- `SECURITY.md` - Security policies
- `CURRENCY_CONVERSION.md` - Currency handling
- `FONT_FALLBACK_SYSTEM.md` - Typography system

## Questions or Issues?

When uncertain about implementation details:
1. Check existing similar components for patterns
2. Refer to the PRD.md for feature specifications
3. Review documentation files for domain-specific guidance
4. Follow the established conventions in the codebase
