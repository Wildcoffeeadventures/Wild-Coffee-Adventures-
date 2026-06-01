# Wild Coffee Adventures Website - Complete Documentation

## 🎉 Your Website is Now Complete!

Welcome to the Wild Coffee Adventures website! This guide will help you manage and update your site.

---

## 📁 Website Structure

```
Wild-Coffee-Adventures-/
├── index.html              # Main website (HOME PAGE)
├── thank-you.html          # Quote submission confirmation page
├── joke-generator.html     # Fun joke generator app
├── styles.css              # Main website styling
├── script.js               # Main website functionality
├── joke-styles.css         # Joke generator styling
├── joke-script.js          # Joke generator functionality
├── README.md               # This file
└── images/                 # Your photos go here
    ├── hero.jpg            # Main banner (REQUIRED)
    ├── fishing.jpg         # Fishing tours (REQUIRED)
    ├── wildcoast.jpg       # Landscape (REQUIRED)
    ├── holeinthewall.jpg   # Landmark (REQUIRED)
    ├── horseriding.jpg     # Horse riding (REQUIRED)
    └── sunset.jpg          # Scenic sunset (REQUIRED)
```

---

## 🖼️ IMAGES NEEDED - UPLOAD NOW!

You need to upload **5 images** to the `/images` folder:

| Filename | Purpose | Size | Format |
|----------|---------|------|--------|
| **hero.jpg** | Main banner background | 1920x1080 | JPG/PNG |
| **fishing.jpg** | Fishing activity photo | 1200x900 | JPG/PNG |
| **wildcoast.jpg** | Coastal landscape | 1200x900 | JPG/PNG |
| **holeinthewall.jpg** | Hole in the Wall landmark | 1200x900 | JPG/PNG |
| **horseriding.jpg** | Horse riding activity | 1200x900 | JPG/PNG |
| **sunset.jpg** | Sunset/scenic view | 1200x900 | JPG/PNG |

**How to upload:**
1. Go to: https://github.com/Wildcoffeeadventures/Wild-Coffee-Adventures-/tree/main/images
2. Click **Add file** → **Upload files**
3. Select your 6 photos
4. Commit changes

---

## 🌐 LIVE WEBSITE

Your website is now live at:
**https://Wildcoffeeadventures.github.io/Wild-Coffee-Adventures-**

---

## 📄 Website Pages

### 1. **Home Page** (index.html)
**Sections:**
- ✅ Hero Banner with CTA buttons
- ✅ 8 Activities showcase with icons
- ✅ 5-image gallery (auto-updates when images uploaded)
- ✅ Quote request form (emails to your inbox)
- ✅ Contact information
- ✅ WhatsApp button
- ✅ Mobile responsive menu

**Features:**
- Beautiful gradient design
- Smooth animations
- Touch-friendly buttons
- Fast loading
- SEO optimized

### 2. **Thank You Page** (thank-you.html)
- Displays after quote submission
- Professional confirmation message
- Automatic redirect happens via form

### 3. **Joke Generator** (joke-generator.html)
- Random joke fetcher
- 3 joke categories
- Copy to clipboard feature
- Beautiful purple gradient UI
- **URL:** `/joke-generator.html`

---

## 📧 FORMS & EMAIL SETUP

### Quote Request Form
- **Sends to:** wildcoffeeadvent@gmail.com
- **CC:** gerberschalk94@gmail.com
- **Provider:** FormSubmit.co (FREE)
- **Response page:** thank-you.html
- **Fields:** Name, Email, Phone, Dates, Activity, Preferences

**Form works automatically - no setup needed!**

---

## 🎨 CUSTOMIZATION

### Change Colors
Edit `styles.css`:
```css
--primary: #0b4f6c;     /* Teal/Blue */
--accent: #ff9800;      /* Orange */
--whatsapp: #25D366;    /* Green */
```

### Change Contact Information
Edit `index.html`:
- **Phone:** +27 64 435 9315
- **Email:** wildcoffeeadvent@gmail.com
- **Location:** Hole in the Wall, Coffee Bay, Wild Coast, Eastern Cape, South Africa

### Add/Remove Activities
Edit the Activities section in `index.html` to modify the 8 activity cards.

---

## 📱 RESPONSIVE FEATURES

✅ Mobile hamburger menu
✅ Flexible grid layouts
✅ Touch-friendly buttons
✅ Optimized images
✅ Readable fonts on all devices
✅ Full-width responsive design

**Tested on:**
- Desktop (1920px+)
- Tablet (768px-1919px)
- Mobile (320px-767px)

---

## 🚀 DEPLOYMENT STATUS

### GitHub Pages ✅ ACTIVE
- **URL:** https://Wildcoffeeadventures.github.io/Wild-Coffee-Adventures-
- **Branch:** main
- **Auto-deploys:** When you push changes
- **Wait time:** 1-3 minutes for updates to appear

### To Deploy Changes:
1. Edit files in GitHub
2. Commit changes
3. Wait 1-3 minutes
4. Refresh website

---

## 🔧 TECHNICAL DETAILS

### External APIs Used:
1. **FormSubmit.co** - Email form submissions
2. **Official Joke API** - Joke generator data

### No Backend Required:
- All static HTML/CSS/JS
- No database needed
- No server setup
- Works directly from GitHub Pages

### Browser Compatibility:
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

---

## 📊 ANALYTICS & TRACKING

To add Google Analytics:

1. Get your Google Analytics ID
2. Add to `<head>` in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

---

## 🆘 TROUBLESHOOTING

### Images Not Showing?
- ✓ Check filenames (case-sensitive)
- ✓ Verify files in `/images` folder
- ✓ Use JPG or PNG format
- ✓ Wait 5 minutes for GitHub cache

### Form Not Working?
- ✓ Check email addresses are correct
- ✓ Look in spam folder
- ✓ Test with WhatsApp instead
- ✓ Ensure internet connection

### Website Not Updating?
- ✓ Clear browser cache (Ctrl+F5)
- ✓ Wait 3 minutes for GitHub to rebuild
- ✓ Check file was committed
- ✓ Verify branch is set to "main"

---

## 📝 MAINTENANCE TIPS

### Regular Updates:
1. Add new photos to `/images` folder
2. Update activity descriptions
3. Keep contact info current
4. Monitor form submissions

### Performance:
- Compress images before uploading (TinyPNG.com)
- Keep file sizes under 500KB
- Test on mobile devices
- Check page speed regularly

### Security:
- Keep email addresses private
- Use HTTPS (GitHub Pages provides this)
- Don't share API keys
- Regular backups (GitHub has version history)

---

## 🎯 NEXT STEPS

### Immediate:
1. ✅ Upload 6 images to `/images` folder
2. ✅ Share website link with friends/family
3. ✅ Test quote form

### Short-term (Next week):
1. Update activity descriptions as needed
2. Add customer testimonials
3. Set up email forwarding

### Long-term:
1. Add blog section
2. Create booking system
3. Add customer reviews
4. Optimize for search engines (SEO)

---

## 📧 SUPPORT & HELP

**For issues:**
- Check GitHub repository
- Review error messages in browser console
- Test on different browsers
- Use WhatsApp for customer support

**For enhancements:**
- Request new features via GitHub Issues
- Fork repository to experiment
- Keep backups of customizations

---

## 📄 LEGAL & RIGHTS

- **Copyright:** © 2026 Wild Coffee Adventures
- **License:** All rights reserved
- **Contact:** wildcoffeeadvent@gmail.com
- **Location:** Hole in the Wall, Coffee Bay, Wild Coast, Eastern Cape, South Africa

---

## ✅ CHECKLIST - BEFORE GOING LIVE

- [ ] All 6 images uploaded to `/images`
- [ ] Website displays correctly on mobile
- [ ] All links work (Home, Activities, Gallery, Quote, Contact)
- [ ] Forms send emails correctly
- [ ] WhatsApp button works
- [ ] Contact information is accurate
- [ ] Shared link with team/family
- [ ] Tested quote submission
- [ ] Domain/URL shared on business cards

---

## 🎉 CONGRATULATIONS!

Your professional tourism website is now live! 

**Share it with the world:**
- 🌐 Website: https://Wildcoffeeadventures.github.io/Wild-Coffee-Adventures-
- 📱 WhatsApp: +27 64 435 9315
- 📧 Email: wildcoffeeadvent@gmail.com

**Happy adventuring!** 🏞️🐎🎣🌅

---

**Last Updated:** June 1, 2026
**Version:** 1.0 - Complete & Live
