# Deployment Guide

Complete guide for deploying Sri Padmavati Venkateswara Swami Temple website to production.

## Pre-Deployment Checklist

- [ ] All tests passing
- [ ] No linting errors (`npm run lint`)
- [ ] TypeScript strict checks passing (`npm run type-check`)
- [ ] Environment variables configured
- [ ] Build completes successfully
- [ ] Performance metrics acceptable
- [ ] SEO tags verified
- [ ] Analytics configured
- [ ] Security headers configured
- [ ] CORS policies configured

## Build Optimization

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Build Optimizations

The build includes:

- Minified JavaScript and CSS
- Tree-shaking of unused code
- Vendor bundle splitting
- Lazy loading setup
- Source maps for debugging

## Deployment Platforms

### Vercel (Recommended)

**Advantages:**
- Zero-config deployment
- Automatic preview deployments
- Built-in analytics
- Edge middleware support
- Automatic CI/CD

**Setup:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Configuration:** Create `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "env": {
    "VITE_API_URL": "@api_url",
    "VITE_CONTACT_EMAIL": "@contact_email"
  }
}
```

### Netlify

**Setup:**

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Connect to Netlify
netlify init

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

**Configuration:** Create `netlify.toml`

```toml
[build]
command = "npm run build"
publish = "dist"

[build.environment]
NODE_VERSION = "18"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

### GitHub Pages

**Setup:**

```bash
# Update package.json
# "homepage": "https://username.github.io/repo"

# Deploy
npm run build
git subtree push --prefix dist origin gh-pages
```

### AWS S3 + CloudFront

**Setup:**

```bash
# Build project
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name/

# Invalidate CloudFront
aws cloudfront create-invalidation \
  --distribution-id YOUR_DIST_ID \
  --paths "/*"
```

**CloudFront Configuration:**
- Origin: S3 bucket
- Default root object: `index.html`
- Error pages: Route all errors to `index.html` (status 200)
- Viewer policy: Redirect HTTP to HTTPS
- Cache behavior: Set appropriate TTLs

### Firebase Hosting

**Setup:**

```bash
# Install Firebase CLI
npm i -g firebase-tools

# Initialize Firebase
firebase init

# Build project
npm run build

# Deploy
firebase deploy
```

**firebase.json:**

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Environment Configuration

### Production Environment Variables

Create `.env.production` (or configure in deployment platform):

```env
VITE_API_URL=https://api.srivenkateswara.org
VITE_API_TIMEOUT=30000
VITE_CONTACT_EMAIL=info@srivenkateswara.org
VITE_CONTACT_PHONE=+1 (234) 567-890
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NEWSLETTER=true
VITE_ENVIRONMENT=production
```

## Security Configuration

### HTTPS

- Enforce HTTPS redirect
- Set HSTS header (recommended: 1 year)

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### Content Security Policy

```
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self' https://api.srivenkateswara.org;
  frame-ancestors 'none';
```

### CORS Configuration

```
Access-Control-Allow-Origin: https://srivenkateswara.org
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

## Performance Monitoring

### Web Vitals

Monitor Core Web Vitals:
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

### Tools

- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://www.webpagetest.org)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Analytics & Monitoring

### Google Analytics Setup

```typescript
// In src/main.tsx or a separate analytics file
if (import.meta.env.VITE_ENABLE_ANALYTICS) {
  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
}
```

### Error Tracking

Consider using:
- [Sentry](https://sentry.io)
- [Rollbar](https://rollbar.com)
- [Bugsnag](https://www.bugsnag.com)

## Backup & Recovery

### Database Backups

- Schedule daily backups
- Store backups in multiple locations
- Test restore procedures regularly

### Code Backups

- Maintain git repository with all commits
- Tag releases: `git tag -a v1.0.0 -m "Release version 1.0.0"`
- Push tags to remote: `git push origin --tags`

## Rollback Procedure

### Quick Rollback

```bash
# Vercel
vercel rollback

# Netlify
netlify deploy --prod --alias main

# Manual rollback
git revert <commit-hash>
npm run build
# Deploy again
```

## Post-Deployment

### Verify Deployment

- [ ] Website loads without errors
- [ ] All pages accessible
- [ ] Links working correctly
- [ ] Images loading properly
- [ ] Forms submitting successfully
- [ ] Mobile responsive design working
- [ ] Performance acceptable

### Health Checks

```bash
# Test API endpoints
curl https://srivenkateswara.org
curl https://srivenkateswara.org/about
curl https://srivenkateswara.org/api/events

# Check SSL certificate
openssl s_client -connect srivenkateswara.org:443

# Test responsiveness
# Use Chrome DevTools > Device Emulation
```

### Monitoring Setup

- Set up uptime monitoring
- Configure alert notifications
- Monitor error logs
- Track performance metrics
- Review analytics

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run type-check

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        if: github.event_name == 'push' && github.ref == 'refs/heads/main'
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Troubleshooting Deployment

### Build Fails

```bash
# Check Node version
node --version

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Build again
npm run build
```

### 404 Errors on Routes

- Ensure SPA routing is configured
- Check `index.html` rewrite rules
- Verify deployment platform settings

### Blank Page

- Check browser console for errors
- Verify API endpoints are accessible
- Check environment variables
- Review build output

### Slow Performance

- Check bundle size: `npm run build` and review `dist/`
- Enable compression on server
- Optimize images
- Configure caching headers
- Use CDN

## Monitoring & Maintenance

### Daily

- Check uptime monitoring alerts
- Review error logs
- Monitor traffic patterns

### Weekly

- Review analytics
- Check performance metrics
- Test critical user paths
- Update dependencies (if needed)

### Monthly

- Security audit
- Performance optimization review
- Backup verification
- Disaster recovery test

## Emergency Procedures

### Website Down

1. Check deployment status
2. Review error logs
3. Rollback to last known good version
4. Investigate root cause
5. Deploy fix

### Data Loss

1. Restore from latest backup
2. Verify data integrity
3. Notify stakeholders
4. Update status page

---

**Last Updated**: December 2025
**Contact**: Deployment Team
