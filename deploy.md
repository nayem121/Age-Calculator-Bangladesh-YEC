# Deployment Guide for Age Calculator Bangladesh

## 🚀 Quick Deployment

### 1. Build the Application
```bash
npm run build
```

### 2. Static Export (Recommended)
```bash
npm run export
```

The built files will be in the `out` directory, ready for deployment.

## 🌐 Domain Configuration

The application is pre-configured for `agecalculator.yec.org.bd` with:

### DNS Settings
- A record: `agecalculator.yec.org.bd` → Your hosting IP
- CNAME record: `www.agecalculator.yec.org.bd` → `agecalculator.yec.org.bd`

### SSL Certificate
- Ensure SSL certificate is installed
- Force HTTPS redirect
- HSTS headers configured

## 📁 File Structure After Build
```
out/
├── index.html
├── en/
│   ├── index.html
│   └── ...
├── bn/
│   ├── index.html
│   └── ...
├── _next/
│   └── static/
├── sitemap.xml
├── robots.txt
├── manifest.json
└── favicon.ico
```

## 🔧 Hosting Providers

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Deploy

### Netlify
1. Connect your repository
2. Set build command: `npm run build && npm run export`
3. Set publish directory: `out`
4. Deploy

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to GitHub Actions
3. Use the provided workflow file
4. Deploy

### Apache/Nginx
1. Upload `out` directory contents to web root
2. Configure server to serve static files
3. Set up URL rewriting for SPA routing
4. Configure compression and caching

## ⚡ Performance Optimization

### 1. Enable Compression
```apache
# Apache .htaccess
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### 2. Set Cache Headers
```apache
# Cache static assets
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

### 3. Security Headers
```apache
# Security headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

## 📊 SEO Verification

### 1. Google Search Console
- Add property: `https://agecalculator.yec.org.bd`
- Submit sitemap: `https://agecalculator.yec.org.bd/sitemap.xml`
- Verify ownership

### 2. Bing Webmaster Tools
- Add site: `https://agecalculator.yec.org.bd`
- Submit sitemap
- Verify ownership

### 3. Test SEO
- Google PageSpeed Insights
- GTmetrix
- Lighthouse audit
- Mobile-friendly test

## 🔍 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Add tracking code to `src/app/layout.tsx`
3. Set up conversion tracking
4. Configure search console integration

### Google Search Console
1. Add property
2. Verify ownership
3. Submit sitemap
4. Monitor performance

## 🚨 Post-Deployment Checklist

- [ ] Site loads correctly on `https://agecalculator.yec.org.bd`
- [ ] Both English (`/en`) and Bengali (`/bn`) versions work
- [ ] SSL certificate is valid
- [ ] Mobile responsiveness verified
- [ ] Page speed optimized
- [ ] SEO meta tags present
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] Analytics tracking working
- [ ] Social media previews working

## 🔧 Troubleshooting

### Common Issues

1. **404 on refresh**: Configure server to serve `index.html` for all routes
2. **Images not loading**: Check file paths and permissions
3. **Slow loading**: Enable compression and caching
4. **SEO not working**: Verify meta tags and structured data

### Support
For deployment issues, contact: support@yec.org.bd

---

**Ready to launch! 🚀**
