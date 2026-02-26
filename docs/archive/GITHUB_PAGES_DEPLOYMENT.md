# GitHub Pages Deployment Guide

## 🌐 Deployed URL

**Production URL**: https://wolvesfield.github.io/sl-cosmetica-website/

The website is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch.

---

## 🚀 Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles automatic deployment:

1. **Trigger**: Runs on every push to `main` branch
2. **Build**: Compiles the React application with Vite
3. **Deploy**: Publishes to GitHub Pages on `gh-pages` branch

### Manual Deployment

You can also trigger deployment manually:
1. Go to the repository on GitHub
2. Click on "Actions" tab
3. Select "Build and Deploy to GitHub Pages" workflow
4. Click "Run workflow" button

---

## ⚙️ Configuration

### Environment Variables

The production build uses the following environment variable:
```bash
VITE_API_URL=https://sl-cosmetica-backend.onrender.com/api
```

This is configured in the GitHub Actions workflow and points to the backend API hosted on Render.

### Base URL

The application is configured with the correct base path for GitHub Pages:
```typescript
// vite.config.ts
base: '/sl-cosmetica-website/'
```

This ensures all assets and routes work correctly under the repository subdirectory.

---

## 🔧 Local Testing

To test the production build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

The preview server will run at `http://localhost:4173/sl-cosmetica-website/`

---

## 🐛 Troubleshooting

### 404 Errors

If you encounter 404 errors after deployment:
1. Verify the `base` path in `vite.config.ts` matches your repository name
2. Check that GitHub Pages is enabled in repository settings
3. Ensure the `gh-pages` branch exists

### Rate Limiting (429 Errors)

The backend API has the following rate limits:
- **General API**: 1000 requests per 15 minutes
- **Auth endpoints**: 50 requests per 15 minutes

These limits have been increased from previous values (100 and 10 respectively) to prevent "Too Many Requests" errors during normal usage.

If you still encounter rate limiting:
1. Check the `RateLimit-*` headers in the response
2. Implement request caching in the frontend
3. Consider increasing limits further in `backend/src/server.ts`

### Build Failures

If the GitHub Actions build fails:
1. Check the Actions tab for error logs
2. Verify all dependencies are correctly listed in `package.json`
3. Test the build locally: `npm run build`
4. Ensure environment variables are correctly set in the workflow

---

## 📊 Workflow Status

You can check the deployment status:
1. Go to the repository on GitHub
2. Click the "Actions" tab
3. View the latest workflow runs

A green checkmark (✓) means successful deployment.
A red X (✗) indicates a failed deployment - click to see logs.

---

## 🔐 Required Permissions

The GitHub Actions workflow requires the following permissions:
- `contents: write` - To push to gh-pages branch
- `pages: write` - To deploy to GitHub Pages
- `id-token: write` - For authentication

These are automatically configured in the workflow file.

---

## 📝 Deployment Checklist

When deploying to production:

- [ ] Backend API is deployed and accessible
- [ ] CORS is configured to allow the GitHub Pages URL
- [ ] Rate limiting is appropriately configured
- [ ] Environment variables are set correctly
- [ ] All tests pass locally
- [ ] Build succeeds locally
- [ ] GitHub Pages is enabled in repository settings
- [ ] Changes are pushed to `main` branch
- [ ] Workflow completes successfully
- [ ] Website loads correctly at the deployed URL

---

## 🆘 Support

For issues with deployment:
1. Check the Actions logs for detailed error messages
2. Verify the backend API is responding correctly
3. Test the build locally before pushing
4. Review the GitHub Pages documentation

---

**Last Updated**: February 18, 2026
