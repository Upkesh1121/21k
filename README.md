# 21K — Luxury Streetwear

**21K** is a premium e-commerce website for a luxury streetwear brand, built with a cinematic dark aesthetic that rivals Fear of God, Represent, and Off-White.

## About the Brand

21K is built on a single premise: that luxury and street culture are not opposites — they are the same hunger expressed differently. The name references 21,000 hours of craft — the equivalent of a decade of dedicated practice that should inform every garment.

## Key Technologies

- **Framework**: TanStack Start (React 19, SSR)
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Checkout**: Stripe (via Netlify serverless functions)
- **Typography**: Bebas Neue (display), DM Sans (body), Cormorant Garamond (editorial)
- **Deployment**: Netlify

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Featured Collection, Philosophy, Drop Countdown, Lookbook, Testimonials, Newsletter |
| `/shop` | Full product catalog with category/collection filters and sort |
| `/products/:id` | Product detail — Gallery, size selection, cart integration, related items |
| `/lookbook` | Editorial image gallery with lightbox |
| `/about` | Brand philosophy, manifesto, tenets, and timeline |
| `/contact` | Contact form with enquiry categories |
| `/cart` | Cart management with Stripe checkout |
| `/checkout/success` | Post-payment confirmation |
| `/checkout/cancel` | Cancelled checkout recovery |

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs on port 3000. For full Netlify feature emulation (functions, environment variables):

```bash
netlify dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `STRIPE_SECRET_KEY` | Stripe secret key for checkout |
| `SITE_URL` | Production URL for Stripe redirect (defaults to localhost) |

## Design System

The 21K design system uses:
- **Ink**: `#080808` — primary background
- **Gold**: `#b8965a` — brand accent
- **Surface**: `#111111` — card/panel backgrounds
- **Border**: `#1e1e1e` — subtle dividers

Custom CSS classes for animations, hover states, grain overlay, and cursor effects are defined in `src/styles.css`.
