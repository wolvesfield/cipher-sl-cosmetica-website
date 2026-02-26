# 🚀 Deployment Checklist for farhannabil

## ✅ Status: Ready to Deploy!

**Local Testing**: ✅ Complete
**Backend Built**: ✅ Ready
**Frontend Built**: ✅ Ready
**Database Migrated**: ✅ Tables created

---

## 📦 STEP 1: Deploy Backend to Render

### 1.1 Create GitHub Repository (DO THIS FIRST)

**Go to**: https://github.com/new

**Settings**:
- Repository name: `sl-cosmetica-backend`
- Description: "Backend API for SL Cosmetica"
- Visibility: **Private** ✅
- **DO NOT** check: README, .gitignore, or license
- Click: "Create repository"

### 1.2 Push to GitHub

After creating the repo, run:

```bash
cd /c/Users/arcan/sl-cosmetica-backend
git push -u origin main
```

### 1.3 Deploy on Render

**Go to**: https://dashboard.render.com/

1. **Click**: "New +" → "Web Service"
2. **Connect**: GitHub account (if first time)
3. **Select**: `farhannabil/sl-cosmetica-backend`
4. **Configure**:
   - Name: `sl-cosmetica-backend`
   - Region: `Oregon`
   - Branch: `main`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Instance Type: `Free`

5. **Click "Advanced"** and add these Environment Variables:

```
NODE_ENV = production
PORT = 10000
DB_HOST = dpg-d649gnvpm1nc738kqmug-a.oregon-postgres.render.com
DB_PORT = 5432
DB_NAME = tvpremium
DB_USER = root
DB_PASSWORD = yrr51XwlC7JxRLHhp3BhjVnIyTKWbLF0
JWT_SECRET = (click "Generate Value" button)
JWT_EXPIRES_IN = 7d
FRONTEND_URL = https://farhannabil.github.io/sl-cosmetica-website
```

6. **Click**: "Create Web Service"
7. **Wait**: ~5 minutes for deployment
8. **Copy**: Your backend URL (will be like `https://sl-cosmetica-backend-xxxx.onrender.com`)

### 1.4 Run Database Migration

After deployment succeeds:

1. **Go to**: Render Dashboard → sl-cosmetica-backend → **Shell** tab
2. **Run**: `npm run migrate`
3. **Verify**: Should see "✓ Migration completed successfully"

### 1.5 Test Backend

```bash
# Replace with your actual backend URL
curl https://YOUR-BACKEND-URL.onrender.com/health
```

Should return: `{"status":"ok","timestamp":"..."}`

---

## 📤 STEP 2: Deploy Frontend to GitHub Pages

### 2.1 Update Production Environment

**Edit**: `c:\Users\arcan\sl-cosmetica-website\.env.production`

Replace with your **actual Render backend URL**:

```env
VITE_API_URL=https://YOUR-BACKEND-URL.onrender.com/api
```

### 2.2 Deploy to GitHub Pages

```bash
cd /c/Users/arcan/sl-cosmetica-website
npm run deploy
```

This will:
- Build the production frontend
- Create `gh-pages` branch
- Push to GitHub Pages

### 2.3 Enable GitHub Pages

1. **Go to**: https://github.com/farhannabil/sl-cosmetica-website/settings/pages
2. **Source**: Select `gh-pages` branch, `/ (root)` folder
3. **Click**: "Save"
4. **Wait**: 2-3 minutes for deployment

**Your site URL**: https://farhannabil.github.io/sl-cosmetica-website

---

## 🔧 STEP 3: Update CORS

After frontend is deployed:

1. **Go to**: Render Dashboard → sl-cosmetica-backend → **Environment**
2. **Update**: `FRONTEND_URL` to `https://farhannabil.github.io/sl-cosmetica-website`
3. **Save**: Service will auto-redeploy (~2 minutes)

---

## ✅ STEP 4: Verify Production

1. **Open**: https://farhannabil.github.io/sl-cosmetica-website
2. **Test**:
   - New logo appears ✅
   - Click "Sign In/Sign Up"
   - Register new account
   - Should auto-login ✅
   - Name appears in header ✅
   - Refresh page → stays logged in ✅

---

## 📝 Quick Reference

**Backend**: Ready to push
**Frontend**: Ready to deploy
**Your GitHub**: farhannabil

**Next Action**: Create backend repo on GitHub, then run `git push -u origin main`

---

Let me know when you've:
✅ Created the GitHub repo
✅ Pushed the backend

Then I'll help with the Render deployment!
