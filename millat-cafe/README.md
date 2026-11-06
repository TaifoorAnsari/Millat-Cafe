# Millat Cafe

A mobile-first, frontend-only cafe website built with React 18, Vite, Tailwind CSS, React Router, Framer Motion, Lucide and React Helmet Async.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, preview it with `npm run preview`, and check code with `npm run lint`.

## Edit cafe details

Update `src/data/siteConfig.js` for the address, phone, WhatsApp number, email, social links, hours, maps and default SEO. The placeholder contact details are marked with a TODO. Menu items live in `src/data/menu.js`; gallery entries and reviews live beside it.

## Replace images

The demo uses optimized Unsplash URLs with explicit dimensions and responsive query parameters. For production, replace them with licensed local AVIF/WebP files in `public/images/`. Aim for an under-220KB hero and under-100KB cards. Keep width/height or `aspect-ratio` values to avoid layout shift. The hero is eagerly preloaded; below-fold images are lazy-loaded.

## Deploy

Upload the `dist/` folder to Netlify, Vercel, Cloudflare Pages or any static host. Configure an SPA fallback to `/index.html` so routes such as `/menu` work on direct visits. Brotli/gzip compression should be enabled by the host.

The contact and newsletter forms are intentionally frontend-only. Connect the marked submit handler TODO to your preferred email or form service before launch.
