# GitHub Pages Deployment Guide

This document provides detailed instructions for deploying the Ashok Portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Repository access to `deven065/Ashok-Portfolio.github.io`

## Automatic Deployment

The repository is configured with GitHub Actions for automatic deployment.

### Step 1: Enable GitHub Pages

1. Navigate to your repository on GitHub
2. Click on **Settings** (gear icon)
3. In the left sidebar, click on **Pages**
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
   - No other configuration needed

### Step 2: Trigger Deployment

The workflow automatically triggers when:
- Code is pushed to the `main` branch
- Manually triggered via "Actions" tab → "Deploy to GitHub Pages" → "Run workflow"

### Step 3: Access Your Site

Once deployed, your portfolio will be available at:
```
https://deven065.github.io/Ashok-Portfolio.github.io/
```

## Configuration Details

### Next.js Configuration (`next.config.ts`)

The project uses the following configuration for GitHub Pages:

```typescript
const nextConfig: NextConfig = {
  output: 'export',        // Enable static export
  images: {
    unoptimized: true,     // Required for static export
  },
};
```

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

The workflow performs:
1. Checkout the code
2. Setup Node.js environment
3. Install dependencies with `npm ci`
4. Build the project with `npm run build`
5. Upload the `out/` directory as a Pages artifact
6. Deploy to GitHub Pages

### Build Output

- The static files are generated in the `out/` directory
- `.nojekyll` file prevents Jekyll processing
- All assets are optimized for production

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the project locally:
   ```bash
   npm install
   npm run build
   ```

2. The static files in `out/` can be deployed to any static hosting service

## Troubleshooting

### Build Fails in GitHub Actions

- Check the Actions tab for error logs
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility (requires Node 18+)

### Site Not Updating

- Check if the workflow completed successfully
- Clear browser cache
- Wait a few minutes for GitHub Pages to propagate changes

### 404 Errors

- Ensure GitHub Pages source is set to "GitHub Actions"
- Verify the workflow ran successfully
- Check that the `out/` directory contains `index.html`

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
