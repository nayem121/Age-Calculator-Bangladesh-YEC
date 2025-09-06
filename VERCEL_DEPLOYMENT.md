# 🚀 Vercel Free Hosting Deployment Guide

## 📋 Prerequisites

1. **GitHub Account** - For code repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Domain Setup** - Configure `agecalculator.yec.org.bd` to point to Vercel

## 🎯 Step-by-Step Deployment

### 1. Prepare Your Repository

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Age Calculator Bangladesh"

# Push to GitHub
git remote add origin https://github.com/your-username/age-calculator-bangladesh.git
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install`

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 3. Configure Custom Domain

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add custom domain: `agecalculator.yec.org.bd`
4. Configure DNS records as instructed by Vercel

### 4. DNS Configuration

Add these DNS records to your domain provider:

```
Type: CNAME
Name: agecalculator
Value: cname.vercel-dns.com
TTL: 300

Type: CNAME  
Name: www.agecalculator
Value: cname.vercel-dns.com
TTL: 300
```

## 🔧 Environment Variables

No environment variables needed for basic functionality, but you can add:

```env
NEXT_PUBLIC_SITE_URL=https://agecalculator.yec.org.bd
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📱 Android App Integration

The app is configured to promote your Android app:
- **Package ID**: `com.yec.agecalculatorbangladesh`
- **Play Store Link**: `https://play.google.com/store/apps/details?id=com.yec.agecalculatorbangladesh`
- **Promotion Banner**: Automatically shows on the website
- **Footer Link**: Download button in footer

## ⚡ Performance Optimizations

### Vercel Free Tier Limits
- **Bandwidth**: 100GB/month
- **Build Time**: 45 minutes/month
- **Function Executions**: 100GB-hours/month
- **Edge Functions**: 500,000 invocations/month

### Optimizations Applied
- ✅ Static generation where possible
- ✅ Image optimization
- ✅ Code splitting
- ✅ Bundle optimization
- ✅ Edge caching
- ✅ Compression enabled

## 🔍 SEO Configuration

### Automatic SEO Features
- ✅ Meta tags for all pages
- ✅ Open Graph images
- ✅ Twitter Card support
- ✅ Sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Structured data (JSON-LD)
- ✅ Canonical URLs
- ✅ Language alternates

### Keywords Optimized
- **Bengali**: বয়স ক্যালকুলেটর, জন্ম তারিখ দিয়ে বয়স বের করুন, বয়স নির্ণয় অ্যাপ
- **English**: age calculator, date of birth calculator, how old am I, DOB to age calculator
- **Local**: Bangla age calculator, Age Calculator BD, Bengali birthday calculator

## 📊 Monitoring & Analytics

### Google Analytics Setup
1. Create GA4 property
2. Add tracking code to `src/app/layout.tsx`
3. Configure conversion tracking

### Vercel Analytics
- Built-in analytics available
- Real-time performance monitoring
- Core Web Vitals tracking

## 🚨 Post-Deployment Checklist

- [ ] Site loads at `https://agecalculator.yec.org.bd`
- [ ] Both `/en` and `/bn` routes work
- [ ] SSL certificate is active
- [ ] Mobile responsiveness verified
- [ ] Page speed optimized (Lighthouse score 90+)
- [ ] SEO meta tags present
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Android app promotion visible
- [ ] Social media previews working
- [ ] Google Search Console verified
- [ ] Analytics tracking working

## 🔄 Continuous Deployment

### Automatic Deployments
- Push to `main` branch → Automatic production deployment
- Push to other branches → Preview deployment
- Pull requests → Preview deployment

### Manual Deployments
```bash
# Deploy specific branch
vercel --prod --target production

# Deploy with specific environment
vercel --prod --env production
```

## 💰 Cost Breakdown

### Vercel Free Tier
- **Hosting**: $0/month
- **Custom Domain**: $0/month
- **SSL Certificate**: $0/month
- **CDN**: $0/month
- **Analytics**: $0/month

### Total Monthly Cost: $0

## 🆘 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (18+ recommended)
   - Verify all dependencies installed
   - Check for TypeScript errors

2. **Domain Not Working**
   - Verify DNS propagation (can take 24-48 hours)
   - Check CNAME records
   - Ensure SSL certificate is active

3. **Performance Issues**
   - Check Vercel Analytics
   - Optimize images
   - Enable compression

### Support Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## 🎉 Success!

Your Age Calculator Bangladesh is now live at:
**https://agecalculator.yec.org.bd**

### Features Available
- ✅ Bilingual support (Bengali/English)
- ✅ Age calculation with precision
- ✅ Islamic calendar conversion
- ✅ Bengali calendar conversion
- ✅ Zodiac signs and personality
- ✅ Vaccination schedule
- ✅ Legal rights information
- ✅ Android app promotion
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ PWA ready

---

**Ready to help Bangladesh citizens calculate their age! 🇧🇩**
