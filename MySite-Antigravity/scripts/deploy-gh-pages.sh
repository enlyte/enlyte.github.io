#!/bin/bash

# deploy-gh-pages.sh
# ------------------
# A script to build the Next.js static site and deploy it to the 'gh-pages' branch.
#
# Usage: ./scripts/deploy-gh-pages.sh
#
# Prerequisites:
# - npm install has been run
# - You have SSH access configured for GitHub (or you will be prompted for credentials)
# - You must run this from the project root directory

# 1. Configuration
# ----------------
PROJECT_ROOT=$(pwd)
BUILD_DIR="out"
REMOTE_URL="git@github.com:enlyte/enlyte.github.io.git" # Hardcoded based on your repo
BRANCH="gh-pages"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Deployment Process...${NC}"

# Check if we are in the project root by looking for package.json
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found. Please run this script from the project root directory.${NC}"
    exit 1
fi

# 2. Build the Static Site
# ------------------------
echo -e "${GREEN}Building the project...${NC}"
npm run build

# Check if build succeeded
if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed. Aborting deployment.${NC}"
    exit 1
fi

# Check if output directory exists
if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}Error: Build directory '$BUILD_DIR' not found after build.${NC}"
    exit 1
fi

# Ensure CNAME is present (Next.js copies from public/, but good to verify)
if [ ! -f "$BUILD_DIR/CNAME" ]; then
    echo -e "${RED}Warning: CNAME file not found in build output. Custom domain settings might be lost.${NC}"
fi

# 3. Prepare the Deployment
# -------------------------
echo -e "${GREEN}Preparing deployment in '$BUILD_DIR'...${NC}"
cd "$BUILD_DIR" || exit

# Initialize a fresh git repo in the build folder
# We do this every time to ensure a clean state (no history/bloat)
rm -rf .git
git init
git checkout -b "$BRANCH"

# Add all files
git add -A

# Commit
git commit -m "Deploy Static Site: $(date)"

# Add the remote
# Note: We suppress the error if it already exists (though git init usually clears it)
git remote add origin "$REMOTE_URL"

# 4. Push to GitHub
# -----------------
echo -e "${GREEN}Pushing to GitHub Pages...${NC}"
echo "You may be prompted for your SSH key passphrase or GitHub credentials."

# Force push to overwrite the remote branch
git push -f origin "$BRANCH"

if [ $? -ne 0 ]; then
    echo -e "${RED}Push failed. Please check your internet connection or git credentials.${NC}"
    # Cleanup before exiting
    cd "$PROJECT_ROOT"
    exit 1
fi

# 5. Cleanup
# ----------
echo -e "${GREEN}Cleaning up...${NC}"
# Remove the .git folder from 'out' so it doesn't confuse the main repo
rm -rf .git

# Go back to root
cd "$PROJECT_ROOT"

echo -e "${GREEN}Deployment Complete! Your site should be live shortly.${NC}"
