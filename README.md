# AIC Kanzinwa CYDC — Website Revamp

**AIC Kanzinwa Child and Youth Development Centre**
Compassion International Partner — KE0759
Kanzinwa Village, Kitui County, Kenya

---

## Overview

This is the fully revamped, professional static website for AIC Kanzinwa Child and Youth Development Centre (CYDC). It replaces the outdated WordPress theme with a modern, responsive, ATS-quality design built on clean HTML5, CSS3, and vanilla JavaScript — with no frameworks required, no databases, and no CMS to maintain.

---

## Project Structure

```
aickanzinwa-website/
├── index.html          — Home page
├── about.html          — About Us (history, mission, vision, values, programmes)
├── volunteer.html      — Volunteer (roles, application form)
├── donate.html         — Donate (impact amounts, designation, donation form)
├── gallery.html        — Photo Gallery (12-image grid, lightbox)
├── blog.html           — News & Blog (all 11 posts, sidebar)
├── team.html           — Meet Our Team (all 7 staff with real photos)
├── contact.html        — Contact Us (form, FAQ accordion, social links)
├── css/
│   └── styles.css      — Global stylesheet (all components, responsive)
├── js/
│   └── main.js         — Shared JavaScript (nav, scroll, counter, lightbox, forms)
└── README.md           — This file
```

---

## Pages & Features

| Page | Key Features |
|---|---|
| **Home** | Hero with stats overlay, impact bar, about split, 6 programme cards, impact section, 3 latest news cards, mission quote strip, partners bar, CTA |
| **About Us** | History timeline (2008–2025), mission/vision cards, 8 core values grid, 4 development pillars, scripture quote block |
| **Volunteer** | 6 role cards, 4-step journey, full application form with area/type selectors |
| **Donate** | 5 impact tiers ($10–$500), fund progress bar, donation frequency tabs, amount selector grid, designation dropdown, trust badges |
| **Gallery** | 12-image responsive grid, click-to-lightbox, category filter bar, keyboard Escape closes lightbox |
| **News & Blog** | 11 real posts (image + excerpt + link to live site), categorised sidebar, recent posts thumbnails, donate widget |
| **Meet Our Team** | 7 team members with real profile photos from live site, bios, qualifications — Pastor Peter Musyoka (Patron), Joshua Mutisya (Director), Fidelis Kaluki (Health Worker), Daudi Ngunga (Accountant), Agnes Kivara (Chair), Magdaline Kanini (Treasurer), Agnes Wayua (Secretary) |
| **Contact Us** | Contact info cards, message form, subject dropdown, FAQ accordion (6 questions), social links, Google Maps redirect |

---

## Design System

**Theme Colours**
- Primary Green: `#1B4332` (deep forest — trust, growth, Kenya)
- Secondary Green: `#2D6A4F`
- Accent Gold: `#B5862A` (warmth, quality)
- Light Gold: `#E9C46A`
- Background: `#FAFAF7` (warm off-white)
- Dark: `#1A2B1F`

**Typography**
- Headings: `Cormorant Garamond` (elegant, editorial serif)
- Body: `Nunito Sans` (clean, readable sans-serif)
- Both loaded via Google Fonts CDN

**Icons**
- Font Awesome 6 Free via cdnjs.cloudflare.com

**Images**
- Profile photos: Loaded directly from the live site (aickanzinwacdc.org)
- Content images: Unsplash CDN (require internet connection)

---

## Responsiveness

| Breakpoint | Layout |
|---|---|
| > 1024px | Full desktop — multi-column grids, sticky sidebar |
| 768px–1024px | Tablet — 2-column grids, stacked footer |
| < 768px | Mobile — single column, hamburger menu, stacked forms |
| < 480px | Small mobile — single column everything, vertical CTA buttons |

---

## JavaScript Features

- Sticky navbar with scroll shadow effect
- Hamburger mobile menu with smooth open/close
- Active nav link highlighting per page
- IntersectionObserver scroll-triggered fade-in animations (`.animate` class)
- Counter animation for stats (`.counter` with `data-target`)
- Gallery lightbox (click, Escape key, click outside to close)
- Donate amount button selector grid
- Contact, Volunteer, and Donate form simulated submission with success feedback
- Smooth scroll for all hash anchor links
- FAQ accordion (contact page)

---

## How to Use

1. **Open locally** — Double-click `index.html` or open via any browser. All pages work offline except images (Unsplash) and Font Awesome icons (CDN).
2. **Deploy** — Upload all files to any web host (cPanel, Netlify, GitHub Pages, etc.) maintaining the folder structure.
3. **Update content** — All content is plain HTML. Edit pages directly in any text editor.
4. **Replace images** — Replace Unsplash URLs with your own hosted images for full offline support.
5. **Activate forms** — Connect the forms to a backend service (Formspree, Netlify Forms, EmailJS) by replacing the `id` and `action` attributes.

---

## Real Team Data (from live site — May 2026)

| Name | Role |
|---|---|
| Pastor Peter Musyoka | Project Patron & Lead Pastor |
| Joshua K. Mutisya | Project Director |
| Fidelis Kaluki | Project Health Worker & Social Worker |
| Daudi Maanda Ngunga | Project Accountant |
| Agnes Kamene Kivara | Project Chairperson |
| Magdaline Kanini | Project Treasurer |
| Agnes Wayua | Project Secretary |

---

## Contact

**Email:** ke759aickanzinwacdc@gmail.com
**Compassion International Partner Code:** KE0759
**Website:** https://aickanzinwacdc.org
**Church Website:** https://kanzinwacdc759.wixsite.com/my-site-1

---

*Built with purpose — releasing children from poverty in Jesus' Name.*
