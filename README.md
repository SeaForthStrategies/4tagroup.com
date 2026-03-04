# The Fortier Group Website

A modern Next.js 14 website for The Fortier Group — an air traffic control training, consulting, and quality assurance company.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** DM Sans (body) + Syne (headings) via next/font

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/4tagroup.com.git
   cd 4tagroup.com
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Copy the environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Update the environment variables in `.env.local`

5. Start the development server:
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/src
  /app                    # Next.js App Router pages
    /about               # About page
    /services            # Services page
    /employees           # Password-protected employee portal
    /contact             # Contact page
    layout.tsx           # Root layout with nav + footer
    page.tsx             # Home page
    globals.css          # Global styles + Tailwind config
  /components
    /ui                  # Reusable UI components
    /sections            # Page section components
  /lib
    constants.ts         # All text copy (centralized)
    metadata.ts          # SEO metadata per page
/public
  robots.txt
  sitemap.xml
```

## Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm start` — Start production server
- `pnpm lint` — Run ESLint

## Security Features

- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy (camera, microphone, geolocation disabled)
- HSTS (Strict-Transport-Security)
- Form input sanitization
- Honeypot spam prevention on contact form

## Employee Portal

The employee portal uses a simple client-side password check for demonstration purposes.

**Important:** This is NOT secure for production. For production deployment, implement proper authentication using:
- NextAuth.js with credentials provider
- Server-side session validation
- Encrypted password storage
- Rate limiting on login attempts

Development password: `demo123`

## Adding Images

Image placeholders are in place throughout the site. When adding real images:

1. Use only royalty-free sources (Unsplash, Pexels, public domain)
2. Use `next/image` component for optimization
3. Provide proper `width` and `height` attributes
4. Add descriptive `alt` text

## Performance Targets

- Lighthouse Performance: 95+
- No layout shift (CLS)
- Lazy loading for below-fold content
- Font preloading via next/font

## License

Copyright © The Fortier Group. All rights reserved.

Sources:
<a href="https://stocksnap.io/photo/pilot-travel-DSMUSKQHIT">Photo</a> by <a href="https://stocksnap.io/author/worldtravel">World Travel Adventures</a> on <a href="https://stocksnap.io">StockSnap</a>
<a href="https://stocksnap.io/photo/airplane-cockpit-BSCERTTCQO">Photo</a> by <a href="https://stocksnap.io/author/worldtravel">World Travel Adventures</a> on <a href="https://stocksnap.io">StockSnap</a>
<a href="https://stocksnap.io/photo/airport-terminal-CTIWBOSEN7">Photo</a> by <a href="https://stocksnap.io/author/mattmoloney">Matt Moloney</a> on <a href="https://stocksnap.io">StockSnap</a>
<a href="https://stocksnap.io/photo/airplane-airline-6FI8W1L305">Photo</a> by <a href="https://stocksnap.io/author/29351">Jakob Owens</a> on <a href="https://stocksnap.io">StockSnap</a>
<a href="https://stocksnap.io/photo/people-men-KAUU1CKET4">Photo</a> by <a href="https://stocksnap.io/author/4298">Rob Bye</a> on <a href="https://stocksnap.io">StockSnap</a>
Photo by <a href="https://unsplash.com/@thizisruby?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ruby Khoesial</a> on <a href="https://unsplash.com/photos/a-tall-white-tower-with-a-sky-background-ciUcYX0eXnQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@j_heel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Johannes Heel</a> on <a href="https://unsplash.com/photos/a-large-air-plane-flying-over-a-runway-XmLULwMRxcU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@zhpix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pascal Meier</a> on <a href="https://unsplash.com/photos/white-biplane-UYiesSO4FiM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@__menglong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bao Menglong</a> on <a href="https://unsplash.com/photos/white-airplane--FhoJYnw-cg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  