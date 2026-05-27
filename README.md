# AIC Kanzinwa CYDC — Revamped Website

**AIC Kanzinwa Child and Youth Development Centre**
Compassion International Partner — KE0759
Kanzinwa Village, Kitui County, Kenya

---

## Project Structure

```
aickanzinwa-website/
├── index.html       — Home page
├── about.html       — About Us (history, three-in-one model, awards, strategy 2026-2030)
├── gallery.html     — Photo Gallery (12 images, lightbox, filter bar)
├── blog.html        — News & Blog (all 11 real posts + sidebar)
├── team.html        — Meet Our Team (all 7 staff with real photos)
├── contact.html     — Contact Us (professional form, map, FAQ accordion)
├── images/
│   └── logo.jpg     — Official AIC Kanzinwa CYDC logo (also used as favicon)
├── css/
│   └── styles.css   — Complete design system
├── js/
│   └── main.js      — All JavaScript (nav, WhatsApp, lightbox, FAQ, scroll animations)
└── README.md
```

---

## Pages & Key Features

| Page | Key Content |
|---|---|
| **Home** | Hero with stats, impact counters, 6 programme cards, impact section, 3 latest posts, partners bar |
| **About Us** | Church history (1958), three-in-one model, timeline (1958–2026), updated vision/mission, 8 values, 8 awards, Strategic Plan 2026-2030, 4 development pillars |
| **Gallery** | 12-image grid, filter bar, click-to-lightbox, ESC key closes |
| **Blog** | All 11 real posts with excerpts linked to live site, recent posts sidebar, category sidebar, WhatsApp/email widget |
| **Meet Our Team** | All 7 real staff — Pastor Peter Musyoka (Patron), Joshua Mutisya (Director), Fidelis Kaluki (Health Worker), Daudi Ngunga (Accountant), Agnes Kivara (Chair), Magdaline Kanini (Treasurer), Agnes Wayua (Secretary) |
| **Contact Us** | Quick info strip, two-column layout, dark info panel (phone/email/WhatsApp/address), professional icon-led form, Google Maps embed, 6-item FAQ accordion |

---

## Navigation (all pages)

Home | About Us | Gallery | Blog | Meet Our Team | Contact Us

---

## Contact Details

- **Phone / WhatsApp:** +254 736 363 349
- **Email:** info@aickanzinwacdc.org
- **Address:** Kanzinwa Village, Mbarani Sub-location, Mumoni Sub-county, Kitui County, Kenya
- **Compassion Partner Code:** KE0759

---

## Design System

**Colours:** Deep Forest Green `#1B4332` (primary) · Warm Gold `#B5862A` (accent) · Cream `#FAFAF7` (background)
**Fonts:** Cormorant Garamond (headings) + Nunito Sans (body) — Google Fonts CDN
**Icons:** Font Awesome 6 Free — cdnjs.cloudflare.com
**Images:** Unsplash CDN (require internet) · Team photos from live site

---

## Special Features

- **Real CYDC logo** used as navbar brand, footer logo, favicon, and WhatsApp popup avatar on all pages
- **WhatsApp floating button** — pulsing bottom-right on every page, opens popup with Chat + Call options
- **Quick contact strip** on contact page — phone, email, address, hours at a glance
- **FAQ accordion** — 6 questions, opens one at a time
- **Gallery lightbox** — full-screen view, ESC key, click outside to close
- **Scroll animations** — IntersectionObserver fade-ins with stagger delays
- **Animated stat counters** — trigger on scroll into view
- **Mobile hamburger menu** — locks body scroll when open
- **Active nav highlight** — per-page automatic detection

---

## Deployment

1. Upload all files to any web host maintaining folder structure
2. Open `index.html` in any browser — works fully offline (except CDN fonts/icons/Unsplash images)
3. To activate the contact form: connect to Formspree, Netlify Forms, or EmailJS
4. Replace Unsplash image URLs with your own hosted images for full offline support

---

## Real Team (May 2026)

| Name | Role |
|---|---|
| Pastor Peter Musyoka | Project Patron & Lead Pastor |
| Joshua K. Mutisya | Project Director |
| Fidelis Kaluki | Health Worker & Social Worker (added May 2026) |
| Daudi Maanda Ngunga | Project Accountant |
| Agnes Kamene Kivara | Project Chairperson |
| Magdaline Kanini | Project Treasurer |
| Agnes Wayua | Project Secretary |

---

*Built with purpose — releasing children from poverty in Jesus' Name.*
