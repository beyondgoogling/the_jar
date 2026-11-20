# The Growth Jar — Next.js

Landing page for The Growth Jar Experience, built with Next.js 14 (App Router).

## Run

    npm install
    npm run dev

Open http://localhost:3000.

## Edit content

All copy, prices, prompts and placeholders live in `data/content.js`.
Change one file and the whole page updates. Search for `[` to find every
placeholder you still need to fill in.

## Checkout links

In `data/content.js`, edit:

    packages.checkout = {
      journal:  "https://your-checkout-url",
      complete: "https://your-checkout-url"
    };

## Structure

- `app/layout.js` — fonts (next/font), metadata, `<html>` shell
- `app/page.js` — composes all sections
- `app/globals.css` — all styles
- `components/*.js` — one component per section
- `components/StickyBar.js` — the only client component (uses useEffect)
- `data/content.js` — single source of truth for copy

## Mobile

- Jar is hidden under 820px; `WeekPreview` replaces it.
- Sticky bar appears after the hero and hides over the packages section
  and near the page bottom.
- Full-width buttons, 52px min height, safe-area padding.

## Deploy

`npm run build` then deploy the folder to Vercel, Netlify, or any Node host.
Vercel deploys it with zero config if you push to GitHub.

## Before launching

Search `data/content.js` for `[` and fill every placeholder:

- prices, dates, founding-buyer offer
- page count, size, paper type, jar specs
- real sample prompts
- "Why I created it" paragraph
- testimonials
- shipping info, refund policy
- contact email / Instagram
- `meta.siteUrl`, `meta.ogImage`, and the `productSchema` values in `app/page.js`