# AI Solutions Agency Website

Static single-page site built with React 18, plain CSS and Vite. No backend, no UI libraries.

## Commands
```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the build
```

## Configure your business
Edit `src/data/siteConfig.js` (agency name, email, WhatsApp number, social/privacy URLs, services, location).
Also update `<title>` and meta tags in `index.html` (they are static for SEO; the title updates at runtime from the config).
- **WhatsApp:** digits only with country code (e.g. `91XXXXXXXXXX`). Left empty, the button is hidden.
- **Social/privacy links:** empty values render as plain text, so there are no broken links.
- **Projects:** edit `src/data/projects.js`. These are labelled *Concept Project*; keep them honest.

## Contact form limitation
The site is static, so the form **cannot send messages itself**. On submit it validates, then opens the visitor's email app with a prefilled message addressed to `siteConfig.email`. For real submissions, swap the `mailto` code in `src/components/Contact.jsx` (`submit`) for a form service such as Formspree, Web3Forms or Netlify Forms.

## Deploy
Upload `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages; `base` is `./`). Build command: `npm run build`, output: `dist`.
For OG sharing previews, add an absolute `og:image` and `og:url` after you know your domain.
