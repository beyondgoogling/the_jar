# The Growth Jar — landing page

A single-page pre-order site for *The Growth Jar Experience*.

## Files

- `index.html` — page markup
- `css/styles.css` — all styling
- `js/main.js` — checkout links, sticky bar, observers
- `README.md` — this file

## Run it

Just double-click `index.html`. No build step, no server needed.

If you want a local server (useful for testing on your phone over Wi-Fi):

    python3 -m http.server 8080

Then open `http://localhost:8080` (or `http://<your-ip>:8080` from your phone).

## Before you launch — fill these in

Search `index.html` for `class="ph"` to find every placeholder.
The high-priority ones:

- [ ] **Hero:** `[price]`, `[date]`, `[founding-buyer offer]`
- [ ] **Packages:** both `[price]` values, `[Bonus item]`, `[Refund / guarantee policy]`, shipping details
- [ ] **Inside:** `[number]`, `[size]`, `[paper type]`, `[size, material, lid]`
- [ ] **Real prompt samples** (replace the four `.slip` cards)
- [ ] **Why I created it** paragraph
- [ ] **Testimonials** (2–3 with first names)
- [ ] **Footer:** contact email / Instagram
- [ ] **SEO head:** `canonical`, `og:url`, `og:image`, `twitter` image
- [ ] **JSON-LD:** `price`, `priceCurrency`, `priceValidUntil`, URLs

## Checkout links

Open `js/main.js` and edit:

    var LINKS = {
      journal:  "https://your-checkout-url",
      complete: "https://your-checkout-url"
    };

The two package buttons read from this automatically.

## Mobile behaviour worth knowing

- Under **820px** the animated jar is hidden and replaced with a static
  "Week 7 · Your people" card stack. This is intentional — the jar's
  animation doesn't read well on phones.
- A sticky pre-order bar appears after the hero and hides while the
  packages section is on screen. It also hides near the page bottom.
- All buttons are full-width and at least 52px tall on phones.

## Accessibility

- `prefers-reduced-motion` respected (jar shows fully, sticky bar doesn't animate).
- Focus outlines use the gold brand colour.
- FAQ uses native `<details>` so it works without JS.
- `scroll-margin-top` prevents anchors from hiding under headings.

## Deploy

Drag the whole `growth-jar` folder onto Netlify Drop, Vercel, or GitHub Pages.
No configuration needed.