# 🚀 Deployment Instructions - wolvesfield

## 📦 STEP 1: Deploy Backend

### 1.1 Create Backend Repo on GitHub

**Go to**: https://github.com/new

- Repository name: `sl-cosmetica-backend`
- Visibility: **Private**
- DO NOT add README, .gitignore, or license
- Click "Create repository"

### 1.2 Push Backend Code

```bash
cd /c/Users/arcan/sl-cosmetica-backend
git push -u origin main
```

### 1.3 Deploy to Render

1. **Go to**: https://dashboard.render.com/
2. **New +** → **Web Service**
3. **Connect**: GitHub `wolvesfield/sl-cosmetica-backend`
4. **Configure**:
   - Name: `sl-cosmetica-backend`
   - Region: `Oregon`
   - Branch: `main`
   - Build: `npm install && npm run build`
   - Start: `npm start`
   - Instance: `Free`

5. **Environment Variables** (click Advanced):
```
NODE_ENV=production
PORT=10000
DB_HOST=dpg-d649gnvpm1nc738kqmug-a.oregon-postgres.render.com
DB_PORT=5432
DB_NAME=tvpremium
DB_USER=root
DB_PASSWORD=yrr51XwlC7JxRLHhp3BhjVnIyTKWbLF0
JWT_SECRET=(click Generate Value)
JWT_EXPIRES_IN=7d
FRONTEND_URL=https://wolvesfield.github.io/sl-cosmetica-website
```

6. **Create Web Service** → wait ~5 min

### 1.4 Run Database Migration

After deploy succeeds:
- Render Dashboard → Service → **Shell**
- Run: `npm run migrate`

### 1.5 Copy Backend URL

Your backend will be: `https://sl-cosmetica-backend-XXXX.onrender.com`

---

## 📤 STEP 2: Deploy Frontend

### 2.1 Update Production API URL

Edit: `c:\Users\arcan\sl-cosmetica-website\.env.production`

Replace with your actual backend URL:
```env
VITE_API_URL=https://YOUR-BACKEND-URL.onrender.com/api
```

### 2.2 Deploy to GitHub Pages

```bash
cd /c/Users/arcan/sl-cosmetica-website
npm run deploy
```

### 2.3 Enable GitHub Pages

1. Go to: https://github.com/wolvesfield/sl-cosmetica-website/settings/pages
2. Source: `gh-pages` branch, `/ (root)`
3. Save → wait 2-3 min

**Your site**: https://wolvesfield.github.io/sl-cosmetica-website

---

## 🔧 STEP 3: Update CORS

After frontend deploys:

1. Render → Backend → **Environment**
2. Update `FRONTEND_URL` to: `https://wolvesfield.github.io/sl-cosmetica-website`
3. Save (auto-redeploys)

---

## ✅ STEP 4: Test Production

**Open**: https://wolvesfield.github.io/sl-cosmetica-website

- Register new account
- Should auto-login ✅
- Refresh → stays logged in ✅

---

**Next**: Create backend repo, then tell me when pushed!
