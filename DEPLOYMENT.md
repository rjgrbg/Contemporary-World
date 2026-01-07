# Deploying to Vercel

## Prerequisites
- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com) - free)

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? (Select your account)
   - Link to existing project? `N`
   - What's your project's name? (Press Enter for default)
   - In which directory is your code located? `./`
   - Want to override settings? `N`

5. **Deploy to production:**
```bash
vercel --prod
```

### Option 2: Deploy via GitHub (Recommended)

1. **Initialize Git (if not already done):**
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Create a GitHub repository:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., "lms-socsci")
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

4. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings
   - Click "Deploy"

5. **Done!** Your site will be live at: `https://your-project-name.vercel.app`

## Important Notes

- The `vercel.json` file is already configured
- Your files in the `files/` folder will be accessible
- Environment variables can be added in Vercel dashboard under Settings → Environment Variables
- Every push to `main` branch will auto-deploy

## Custom Domain (Optional)

1. Go to your project on Vercel
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

**If files don't download:**
- Check that files are in the `files/` folder
- Verify file paths in `public/materials.js`

**If pages don't load:**
- Check Vercel logs in the dashboard
- Ensure all routes are defined in `vercel.json`
