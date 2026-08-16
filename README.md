# David Thiele — Official Site

Built with Astro, deployed on Cloudflare Pages. Replaces the previous WordPress site.

## Local Development

```bash
npm install
npm run dev
```

Site runs at http://localhost:4321

## Deploying Changes

```bash
git add .
git commit -m "Your change description"
git push
```

Cloudflare Pages auto-deploys in ~60 seconds.

## Pages

| URL | File |
|-----|------|
| / | src/pages/index.astro |
| /recordings | src/pages/recordings.astro |
| /hire-production-mixing-mastering | src/pages/hire-production-mixing-mastering.astro |
| /contact | src/pages/contact.astro |
| /404 | src/pages/404.astro |

## Music Library Embed

The Recordings page embeds the Disco.ac music library player (same one used on the old WordPress site):
`https://davidthiele.disco.ac/e/p/2930075`

To update the catalog, manage it in your Disco.ac dashboard — no code changes needed here.

## Design System

- Font pairing: Fraunces (display/serif) + Inter (body) — see `src/styles/global.css`
- Dark cinematic theme: near-black background, warm gold accent (`--accent: #D4A64A`)
- Reusable classes: `.sec`, `.s-title`, `.btn-gold`, `.btn-ghost`, `.t-grid` / `.t-card` (testimonials), `.credit-pill` (placement credits)

## Project Structure

```
davidthiele-site/
├── src/
│   ├── layouts/
│   │   └── Layout.astro      ← base layout (nav, footer, SEO)
│   ├── components/
│   │   ├── Nav.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── recordings.astro
│   │   ├── hire-production-mixing-mastering.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
└── public/
    ├── favicon.svg
    ├── robots.txt
    └── _redirects            ← legacy WordPress URL redirects
```
