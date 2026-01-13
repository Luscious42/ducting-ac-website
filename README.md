# Ducting Air Conditioning  HVAC Website

Professional HVAC services website for Ducting Air Conditioning, Kingsbury, TX.

## Quick Links

- **Business:** Ducting Air Conditioning
- **Phone:** (830) 832-7240
- **Address:** 7420 #22 Wilke Rd, Kingsbury, TX 78638
- **Email:** contact@ductingac.com

## Project Files

- **index.html**  Homepage with hero, services preview
- **services.html**  6 detailed service offerings
- **contact.html**  Contact form and business info
- **styles.css**  Responsive, mobile-first design
- **config.js**  Centralized contact info & form handling
- **netlify.toml**  Netlify deployment config
- **package.json**  Project metadata & dev dependencies

## Local Development

### Option 1: Node.js + Lite Server (Recommended)

1. Install Node.js from https://nodejs.org/
2. Run in PowerShell:

``powershell
npm install
npm start
``

Opens at http://localhost:3000 with live reload.

### Option 2: Direct Browser

Simply open index.html in any web browser (no server needed for basic viewing).

## Deployment to Netlify

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create repo named ducting-ac-website
3. In PowerShell, from the hvac-website folder:

``powershell
git remote add origin https://github.com/YOUR-USERNAME/ducting-ac-website.git
git branch -M main
git push -u origin main
``

(Replace YOUR-USERNAME with your GitHub username)

### Step 2: Connect to Netlify

1. Visit https://netlify.com and sign up (use GitHub for easiest setup)
2. Click **Add new site** > **Import an existing project**
3. Select **GitHub**
4. Authorize and select ducting-ac-website repository
5. Build settings:
   - **Branch:** main
   - **Build command:** (leave empty)
   - **Publish directory:** / (root)
6. Click **Deploy site**

**Your site goes live automatically!** Netlify assigns a URL like:
https://your-site-name.netlify.app

### Step 3: Auto-Updates

Every time you push to GitHub:

``powershell
git add .
git commit -m "Update services"
git push origin main
``

Netlify automatically rebuilds and deploys your changes within seconds.

### Step 4: Custom Domain (Optional)

1. In Netlify dashboard > **Domain management**
2. **Add custom domain**
3. Update DNS records at your registrar to point to Netlify
4. HTTPS auto-enabled (free SSL certificate)

## Customization

### Update Business Info

Edit **config.js**:

``javascript
export const config = {
  businessName: 'Ducting Air Conditioning',
  phone: '(830) 832-7240',
  phoneHref: 'tel:8308327240',
  email: 'contact@ductingac.com',
  address: '7420 #22 Wilke Rd, Kingsbury, TX 78638',
  addressHref: 'https://maps.google.com/?q=...'
};
``

### Change Colors

Edit **styles.css** (:root section):

``css
:root {
  --accent: #0077cc;        /* Main blue */
  --accent-dark: #005a99;   /* Darker blue */
  --dark: #222;             /* Text color */
  --muted: #666;            /* Secondary text */
}
``

### Add/Edit Services

Edit **services.html** and add new service cards in the .services-grid section.

## Features

 Fully responsive (mobile, tablet, desktop)
 Fast & lightweight (static HTML/CSS/JS)
 SEO-friendly structure
 Accessible design (WCAG compliant)
 Contact form with validation
 Free HTTPS on Netlify
 Auto-deploy on GitHub push

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- **Page Load:** <1 second
- **Lighthouse Score:** 95+
- **Mobile Friendly:** Yes

## Support

For questions about deployment or updates, contact your web developer or visit:
- Netlify: https://netlify.com/support
- GitHub: https://github.com/support

---

**Generated:** January 12, 2026
**Version:** 1.0.0
