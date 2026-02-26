# Quick Start: Push to GitHub

## TL;DR - 5 Steps to Push Your Code

```bash
# 1. Create new repo on GitHub.com named "Website-SL-Cosmetica"
#    (Don't initialize with README)

# 2. Navigate to project directory
cd /workspaces/spark-template

# 3. Update remote URL (replace YOUR_USERNAME)
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/Website-SL-Cosmetica.git

# 4. Stage and commit all changes
git add .
git commit -m "Initial commit: SL Cosmetica Platform"

# 5. Push to GitHub
git push -u origin main
```

**Done!** 🎉 Visit your repository at `https://github.com/YOUR_USERNAME/Website-SL-Cosmetica`

---

## Using GitHub CLI (Fastest Method)

If you have [GitHub CLI](https://cli.github.com/) installed:

```bash
gh auth login
gh repo create Website-SL-Cosmetica --public --source=. --remote=origin --push
```

---

For detailed instructions, troubleshooting, and deployment options, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
