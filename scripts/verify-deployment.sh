#!/bin/bash
# Post-Deployment Verification Script
# Run this script after merging to main to verify the deployment

set -e

echo "🔍 SL Cosmetica - Deployment Verification"
echo "=========================================="
echo ""

GITHUB_PAGES_URL="https://wolvesfield.github.io/sl-cosmetica-website/"
BACKEND_API_URL="https://sl-cosmetica-backend.onrender.com/api"

echo "1. Checking if GitHub Pages site is accessible..."
if curl -s -o /dev/null -w "%{http_code}" "$GITHUB_PAGES_URL" | grep -q "200"; then
    echo "   ✅ GitHub Pages is accessible"
else
    echo "   ❌ GitHub Pages is not accessible"
    echo "   🔧 Check: https://github.com/wolvesfield/sl-cosmetica-website/actions"
fi

echo ""
echo "2. Checking backend API health..."
HEALTH_CHECK=$(curl -s "${BACKEND_API_URL%/api}/health")
if echo "$HEALTH_CHECK" | grep -q "ok"; then
    echo "   ✅ Backend API is healthy"
    echo "   Response: $HEALTH_CHECK"
else
    echo "   ❌ Backend API health check failed"
fi

echo ""
echo "3. Testing rate limit headers..."
RESPONSE=$(curl -s -I "$BACKEND_API_URL/auth/login" 2>&1)
if echo "$RESPONSE" | grep -q "RateLimit"; then
    echo "   ✅ Rate limit headers are present"
    echo "$RESPONSE" | grep "RateLimit"
else
    echo "   ⚠️  Rate limit headers not found (may need backend restart)"
fi

echo ""
echo "📋 Deployment Status Summary"
echo "----------------------------"
echo "Frontend URL: $GITHUB_PAGES_URL"
echo "Backend API:  $BACKEND_API_URL"
echo ""
echo "Next steps:"
echo "1. Visit the GitHub Pages URL in your browser"
echo "2. Test the website functionality"
echo "3. Verify no 429 errors occur during normal usage"
echo "4. Check GitHub Actions for deployment status:"
echo "   https://github.com/wolvesfield/sl-cosmetica-website/actions"
echo ""
echo "✅ Verification complete!"
