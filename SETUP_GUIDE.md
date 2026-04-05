# 🚀 Azeel Technologies — Complete SEO Setup Guide
## sitemap.xml + robots.txt + Full Technical SEO Checklist
### Written by experience: treat this as your 30-year SEO Bible

---

## 📦 WHAT'S IN THIS PACKAGE

| File | Purpose |
|---|---|
| `sitemap.xml` | Tells Google/Bing exactly which pages exist and how important they are |
| `robots.txt` | Controls which bots can crawl which pages |
| `SETUP_GUIDE.md` | This guide — step-by-step deployment + SEO master plan |

---

## PART 1 — WHERE TO UPLOAD THE FILES

### ✅ sitemap.xml
**Upload to:** `https://www.azeeltechnologies.com/sitemap.xml`
- Must be accessible at the **root** of your domain
- File path on server: `/public_html/sitemap.xml` (or `/var/www/html/sitemap.xml`)

### ✅ robots.txt
**Upload to:** `https://www.azeeltechnologies.com/robots.txt`
- Must be accessible at the **root** of your domain
- File path on server: `/public_html/robots.txt`
- ⚠️ There can only be ONE robots.txt per domain — place it at root

### 📁 Typical cPanel / FTP Structure
```
public_html/
├── sitemap.xml        ← upload here
├── robots.txt         ← upload here
├── index.html
├── assets/
└── ...
```

---

## PART 2 — HOW TO UPLOAD (Step-by-Step)

### Method A: cPanel File Manager (Easiest)
1. Log in to your hosting cPanel
2. Click **File Manager**
3. Navigate to `public_html/`
4. Click **Upload** in the top toolbar
5. Upload both `sitemap.xml` and `robots.txt`
6. Verify by visiting the URLs in your browser

### Method B: FTP / SFTP (FileZilla)
1. Open FileZilla
2. Connect with your host credentials (host, username, password, port 21 or 22)
3. In the right panel, navigate to `public_html/`
4. Drag and drop `sitemap.xml` and `robots.txt` from your computer
5. Done ✅

### Method C: Git Deploy (If using GitHub repo)
Since your code is on GitHub (`alokxyadav/azeeltechnologies-website`):
1. Place `sitemap.xml` and `robots.txt` in the root of your repo
2. Commit and push:
   ```bash
   git add sitemap.xml robots.txt
   git commit -m "feat: add SEO sitemap and robots.txt"
   git push origin main
   ```
3. Your CI/CD pipeline (Netlify / Vercel / GitHub Pages) will deploy automatically

### Method D: Netlify / Vercel (Static Hosting)
- Place both files in the `public/` or root folder of your project
- They will be served automatically at the root URL

---

## PART 3 — SUBMIT SITEMAP TO SEARCH ENGINES

### 🔵 Google Search Console (MOST IMPORTANT)
1. Go to: https://search.google.com/search-console
2. Add property: `https://www.azeeltechnologies.com`
3. Verify ownership (HTML tag, DNS record, or Google Analytics)
4. Go to **Sitemaps** (left sidebar)
5. Enter: `sitemap.xml` and click **Submit**
6. Check back in 24–48 hours for indexing status

### 🟠 Bing Webmaster Tools
1. Go to: https://www.bing.com/webmasters
2. Add your site and verify
3. Go to **Sitemaps** → **Submit Sitemap**
4. Enter: `https://www.azeeltechnologies.com/sitemap.xml`

### Direct URL Ping (Optional bonus)
Paste these URLs in your browser to ping search engines immediately:
```
https://www.google.com/ping?sitemap=https://www.azeeltechnologies.com/sitemap.xml
https://www.bing.com/ping?sitemap=https://www.azeeltechnologies.com/sitemap.xml
```

---

## PART 4 — VERIFY EVERYTHING IS WORKING

### Check robots.txt
Visit: `https://www.azeeltechnologies.com/robots.txt`
→ You should see the plain text file contents.

### Check sitemap.xml
Visit: `https://www.azeeltechnologies.com/sitemap.xml`
→ You should see formatted XML in your browser.

### Google's Robots Tester
1. Go to Google Search Console
2. Tools → **robots.txt Tester**
3. Test individual URLs to ensure they're allowed

### Validate sitemap.xml
- https://www.xml-sitemaps.com/validate-xml-sitemap.html
- https://search.google.com/search-console/sitemaps

---

## PART 5 — SITEMAP MAINTENANCE (CRITICAL!)

### Every time you add a new page:
1. Add a new `<url>` block to `sitemap.xml`
2. Update the `<lastmod>` date to today
3. Re-upload the file
4. Ping Google: `https://www.google.com/ping?sitemap=https://www.azeeltechnologies.com/sitemap.xml`

### Every time you update a page:
1. Update `<lastmod>` for that specific URL
2. Re-upload

### For blog posts specifically:
Add each post with:
```xml
<url>
  <loc>https://www.azeeltechnologies.com/blog/YOUR-POST-SLUG/</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

---

## PART 6 — FULL ON-PAGE SEO CHECKLIST

### 🔖 Meta Tags (Every page must have these in `<head>`)
```html
<!-- Primary Meta Tags -->
<title>Web Development Company India | AI & Digital Marketing — Azeel Technologies</title>
<meta name="description" content="Azeel Technologies delivers AI automation, web development, mobile apps, SEO & digital marketing solutions that drive real business growth. Get started today.">
<meta name="keywords" content="web development, AI automation, mobile app development, SEO, digital marketing, UI/UX design, Google Ads, Meta Ads, content creation">
<meta name="robots" content="index, follow">
<meta name="author" content="Azeel Technologies">
<link rel="canonical" href="https://www.azeeltechnologies.com/" />

<!-- Open Graph (Facebook, LinkedIn, WhatsApp previews) -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.azeeltechnologies.com/">
<meta property="og:title" content="Azeel Technologies — AI, IT Services & Digital Marketing">
<meta property="og:description" content="Transform your vision into intelligent digital solutions with AI innovation, advanced IT expertise, and strategic marketing.">
<meta property="og:image" content="https://www.azeeltechnologies.com/assets/images/og-home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Azeel Technologies">
<meta property="og:locale" content="en_IN">

<!-- Twitter/X Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@azeeltech">
<meta name="twitter:creator" content="@azeeltech">
<meta name="twitter:title" content="Azeel Technologies — AI, IT Services & Digital Marketing">
<meta name="twitter:description" content="Transform your vision into intelligent digital solutions.">
<meta name="twitter:image" content="https://www.azeeltechnologies.com/assets/images/og-home.jpg">
```

### 📊 Schema / Structured Data (JSON-LD — put before </body>)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Azeel Technologies",
  "url": "https://www.azeeltechnologies.com",
  "logo": "https://www.azeeltechnologies.com/assets/images/logo.png",
  "description": "AI, IT Services & Digital Marketing Company helping businesses build, scale, and lead the digital future.",
  "foundingDate": "2023",
  "areaServed": "IN",
  "sameAs": [
    "https://www.linkedin.com/company/azeeltechnologies",
    "https://www.instagram.com/azeel_technologies/",
    "https://x.com/azeeltech",
    "https://github.com/alokxyadav/azeeltechnologies-website"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"],
    "url": "https://www.azeeltechnologies.com/contact/"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Web Development"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Mobile App Development"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI & Automation"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "SEO Services"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Digital Marketing"}}
    ]
  }
}
</script>
```

---

## PART 7 — TECHNICAL SEO CHECKLIST

### Speed & Core Web Vitals
- [ ] Compress all images (use WebP format)
- [ ] Enable GZIP/Brotli compression on server
- [ ] Enable browser caching (via `.htaccess` or hosting settings)
- [ ] Use a CDN (Cloudflare free tier is excellent)
- [ ] Minify CSS, JS, HTML
- [ ] Lazy-load images below the fold
- [ ] Target LCP < 2.5s, FID < 100ms, CLS < 0.1 (test at https://pagespeed.web.dev)

### HTTPS & Security
- [ ] Force HTTPS (301 redirect from http:// to https://)
- [ ] Add HSTS header
- [ ] Check SSL certificate is valid (no mixed content warnings)

### Mobile SEO
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` in every page
- [ ] Test on: https://search.google.com/test/mobile-friendly
- [ ] All tap targets ≥ 48px, text ≥ 16px

### URL Structure (must follow these rules)
- ✅ Use lowercase: `/services/web-development/` NOT `/Services/WebDevelopment/`
- ✅ Use hyphens: `/mobile-app-development/` NOT `/mobile_app_development/`
- ✅ Include trailing slash consistently
- ✅ No index.html in URLs — use clean URLs
- ❌ No query strings in public pages: `/page?id=5` is bad for SEO

### Canonical Tags
- Every page must have: `<link rel="canonical" href="FULL-URL-OF-THIS-PAGE">`
- Prevents duplicate content penalties

### 404 Handling
- Create a custom 404 page with navigation links back to main pages
- Monitor 404 errors in Google Search Console regularly

---

## PART 8 — LINK BUILDING CHECKLIST

### Social Profiles to Claim & Optimize (Already live — optimize them)
| Platform | URL | Action |
|---|---|---|
| LinkedIn | https://www.linkedin.com/company/azeeltechnologies | Add all services, logo, banner, description with keywords |
| Instagram | https://www.instagram.com/azeel_technologies/ | Bio with website link, consistent posting schedule |
| X/Twitter | https://x.com/azeeltech | Pin a key tweet, link in bio, engage with #webdev #SEO #AItools |
| GitHub | https://github.com/alokxyadav/azeeltechnologies-website | Add website URL, description, topics/tags |

### Free High-Authority Directories to List On
1. **Google Business Profile** — https://business.google.com (most important for local SEO)
2. **Clutch.co** — https://clutch.co (IT companies directory, very high authority)
3. **GoodFirms** — https://www.goodfirms.co
4. **DesignRush** — https://www.designrush.com
5. **Crunchbase** — https://www.crunchbase.com
6. **AngelList/Wellfound** — https://wellfound.com
7. **IndiaMART** — https://www.indiamart.com (for India-based leads)
8. **Justdial** — https://www.justdial.com
9. **Sulekha** — https://www.sulekha.com
10. **TechBehemoths** — https://techbehemoths.com

---

## PART 9 — GOOGLE BUSINESS PROFILE SETUP

This is FREE and drives enormous local SEO value:

1. Go to: https://business.google.com
2. Search for "Azeel Technologies" — claim if exists, create if not
3. Fill in:
   - **Business name:** Azeel Technologies
   - **Category:** Internet Marketing Service / Software Company
   - **Website:** https://www.azeeltechnologies.com
   - **Phone:** Your number
   - **Description:** (copy from your website meta description)
   - **Services:** List all your services with descriptions
4. Add photos: Logo, team, office (even remote workspace works)
5. Ask clients to leave Google Reviews — this is GOLD for local rankings

---

## PART 10 — MONITORING & ANALYTICS

### Must-Have Tools (All Free)
| Tool | URL | What It Does |
|---|---|---|
| Google Search Console | https://search.google.com/search-console | Monitor indexing, keywords, errors |
| Google Analytics 4 | https://analytics.google.com | Traffic, user behavior, conversions |
| Google PageSpeed | https://pagespeed.web.dev | Core Web Vitals |
| Bing Webmaster | https://www.bing.com/webmasters | Bing indexing + SEO tools |
| Cloudflare | https://www.cloudflare.com | Free CDN + security + analytics |

### Weekly SEO Routine
- [ ] Check Google Search Console for crawl errors
- [ ] Check for new 404 errors
- [ ] Review top queries — are you ranking for the right terms?
- [ ] Check Core Web Vitals report

### Monthly SEO Routine
- [ ] Update `<lastmod>` dates on modified pages in sitemap.xml
- [ ] Publish at least 2 blog posts targeting service-related keywords
- [ ] Build 2–3 new backlinks (directories, guest posts, PR)
- [ ] Review and refresh underperforming pages

---

## 📋 QUICK SUMMARY — DO THIS TODAY

```
Priority 1 (Do RIGHT NOW):
  ☐ Upload sitemap.xml to website root
  ☐ Upload robots.txt to website root
  ☐ Verify both at https://www.azeeltechnologies.com/sitemap.xml
                and https://www.azeeltechnologies.com/robots.txt

Priority 2 (This week):
  ☐ Add site to Google Search Console → submit sitemap
  ☐ Add site to Bing Webmaster Tools → submit sitemap
  ☐ Set up Google Analytics 4
  ☐ Set up Google Business Profile
  ☐ Add JSON-LD Schema to every page
  ☐ Add Open Graph + Twitter Card meta tags to every page
  ☐ Add canonical tags to every page

Priority 3 (This month):
  ☐ Create individual service pages for all 12 services
  ☐ Create a Blog section and publish 4 articles
  ☐ List on Clutch, GoodFirms, Crunchbase
  ☐ Optimize all LinkedIn, Instagram, X, GitHub profiles
  ☐ Run PageSpeed test and fix issues scoring under 90
```

---

*Package prepared for: www.azeeltechnologies.com*
*Date: April 2025*
*GitHub: https://github.com/alokxyadav/azeeltechnologies-website*
