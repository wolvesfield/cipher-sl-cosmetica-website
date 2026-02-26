#!/bin/bash

# ========================================
# SL Cosmetica - GitHub Sync Script
# ========================================
# This script syncs all 64 iterations of changes to GitHub
#
# Usage:
#   chmod +x sync-to-github.sh
#   ./sync-to-github.sh
# ========================================

set -e  # Exit on error

echo "🚀 SL Cosmetica - GitHub Sync Script"
echo "======================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if we're in the right directory
echo -e "${BLUE}📍 Step 1: Verifying directory...${NC}"
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: Not in project root directory${NC}"
    echo "Please run this script from /workspaces/spark-template"
    exit 1
fi
echo -e "${GREEN}✓ In correct directory${NC}"
echo ""

# Step 2: Check Git status
echo -e "${BLUE}📊 Step 2: Checking Git status...${NC}"
git status
echo ""

# Step 3: Show files that will be committed
echo -e "${BLUE}📝 Step 3: Files to be committed:${NC}"
git status --short
echo ""

# Ask for confirmation
echo -e "${YELLOW}⚠️  This will commit and push all changes to GitHub${NC}"
read -p "Do you want to continue? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Sync cancelled${NC}"
    exit 1
fi

# Step 4: Stage all changes
echo -e "${BLUE}📦 Step 4: Staging all changes...${NC}"
git add .
echo -e "${GREEN}✓ All changes staged${NC}"
echo ""

# Step 5: Create commit
echo -e "${BLUE}💾 Step 5: Creating commit...${NC}"
git commit -m "feat: sync all 64 iterations of SL Cosmetica updates

Major Updates:
- Updated all product images (Harmonizer, Paradox, Rainmaker, Crown Jewel, etc.)
- Enhanced MTRX-CBD technology descriptions across platform
- Implemented scroll memory and navigation improvements
- Fixed all product redirects and links
- Updated clinical performance metrics
- Removed deprecated sections (Ingredient Lens, Pigment Grid, Clinical sub-tabs)
- Implemented font fallback system for offline support
- Changed default language to English
- Added blur effect for Coming Soon products
- Updated Founder Vision content
- Fixed product card alignment issues
- Enhanced UX with scroll-to-top and scroll-back buttons

Bug Fixes:
- Fixed 429 URL errors
- Corrected product comparison scrolling
- Fixed button visibility in Acne section
- Resolved image synchronization issues
- Fixed all broken product links

Technical Improvements:
- Optimized asset loading
- Enhanced error handling
- Improved performance metrics
- Better accessibility support
- Comprehensive documentation

See CHANGELOG.md for complete details."

echo -e "${GREEN}✓ Commit created${NC}"
echo ""

# Step 6: Check for remote
echo -e "${BLUE}🔗 Step 6: Checking remote repository...${NC}"
if git remote -v | grep -q 'origin'; then
    echo -e "${GREEN}✓ Remote 'origin' found${NC}"
    git remote -v
    echo ""
    
    # Step 7: Push to GitHub
    echo -e "${BLUE}🚀 Step 7: Pushing to GitHub...${NC}"
    
    # Try to push
    if git push origin main; then
        echo -e "${GREEN}✓ Successfully pushed to GitHub!${NC}"
    else
        echo -e "${YELLOW}⚠️  Push failed. Trying 'master' branch...${NC}"
        if git push origin master; then
            echo -e "${GREEN}✓ Successfully pushed to GitHub!${NC}"
        else
            echo -e "${RED}❌ Push failed${NC}"
            echo "Possible solutions:"
            echo "1. Check your GitHub credentials"
            echo "2. Ensure you have push access to the repository"
            echo "3. Try: git push origin main --force (use with caution)"
            exit 1
        fi
    fi
else
    echo -e "${YELLOW}⚠️  No remote repository found${NC}"
    echo ""
    echo "You need to create a GitHub repository first."
    echo ""
    echo "Option 1 - Using GitHub CLI (fastest):"
    echo "  gh auth login"
    echo "  gh repo create SL-Cosmetica --public --source=. --remote=origin --push"
    echo ""
    echo "Option 2 - Manual setup:"
    echo "  1. Create repository on GitHub.com"
    echo "  2. Run: git remote add origin https://github.com/USERNAME/REPO.git"
    echo "  3. Run: git push -u origin main"
    echo ""
    exit 1
fi

echo ""
echo -e "${GREEN}======================================"
echo "✅ Sync Complete!"
echo "======================================${NC}"
echo ""
echo "Next steps:"
echo "1. Visit your GitHub repository to verify changes"
echo "2. Deploy to Vercel/Netlify (see DEPLOYMENT_GUIDE.md)"
echo "3. Review CHANGELOG.md for all changes"
echo ""
echo "Documentation:"
echo "- README.md - Project overview"
echo "- CHANGELOG.md - All 64 iterations documented"
echo "- DEPLOYMENT_GUIDE.md - Deploy to production"
echo "- SYNC_TO_GITHUB.md - Detailed sync instructions"
echo ""
echo -e "${BLUE}🎉 All 64 iterations are now on GitHub!${NC}"
