# Carlo Salas — Portfolio

Personal portfolio SPA for [carloalejandrosalas.github.io](https://carloalejandrosalas.github.io/).

## Stack

| Layer           | Tool                              |
| --------------- | --------------------------------- |
| Build           | Vite 8 (`vite.config.js`)         |
| CSS             | Tailwind CSS v4 + SCSS (Sass)     |
| JS              | Vanilla ES modules — no framework |
| Package manager | pnpm                              |

## Project Structure

```
index.html              # Single HTML entry — all sections live here
src/
  styles/
    tailwind.css        # @import "tailwindcss" + @theme font vars
    main.scss           # @use partials entry
    partials/
      _variables.scss   # Color/transition tokens
      _animations.scss
      _navbar.scss
      _splash.scss
      _components.scss  # .badge, .social-card, .cf-input/.cf-input--error, .cf-btn
  scripts/
    main.js             # Entry point — imports and calls all init* functions
    utils/
      i18n.js           # TRANSLATIONS, t(), applyTranslations(), initI18n()
      scroll.js         # Scroll reveal, progress bar, active nav, smooth scroll
      splash.js         # Splash screen fade-out
    sections/
      nav.js            # Mobile hamburger menu
    forms/
      contact.js        # Contact form, JS validation, Web3Forms submission
public/                 # Copied verbatim to dist/ root
  robots.txt
  sitemap.xml
  llms.txt
  og-image.png          # TODO: 1200×630 social card image (not yet added)
```

## Commands

```bash
pnpm dev      # dev server
pnpm build    # production build → dist/
```

## Critical Conventions

**CSS is loaded via `<link>` tags in `index.html`, not imported in JS.**
Vite processes `.scss` and `tailwind.css` as stylesheet assets — do not `import` them in any JS file.

**Tailwind v4 syntax:**
Use `@import "tailwindcss"` in `tailwind.css`. There are no `@tailwind base/components/utilities` directives.

**JS is modular — entry point is `src/scripts/main.js`:**
Each concern lives in its own module and exports a single `init*()` function. `main.js` imports and calls them all. When adding a new feature, create a module and call its init from `main.js`.

**i18n system (custom, no library):**

- `TRANSLATIONS` object in `src/scripts/utils/i18n.js` with `en` and `es` keys
- `t(key)` helper, `applyTranslations()` walker
- HTML attributes: `data-i18n` (textContent), `data-i18n-html` (innerHTML), `data-i18n-placeholder` (placeholder)
- Language persisted in `localStorage("lang")`, auto-detected from `navigator.language`
- `applyTranslations()` also sets `document.documentElement.lang`
- When adding translatable text: add the element attribute **and** add both `en`/`es` keys to `TRANSLATIONS`

**Scroll/nav order dependency:**
In `scroll.js`, `navLinks`, `setActive`, and `sectionObserver` must be declared **before** the `onScroll()` immediate call. Reordering causes a TDZ `ReferenceError`.

**Splash screen:**
`#splash` is hidden after 900 ms via `setTimeout` in `splash.js`. The CSS fade duration in `_splash.scss` must stay in sync with any JS timing changes.

**Contact form (Web3Forms):**

- Endpoint: `https://api.web3forms.com/submit` (fixed — not configurable per-form)
- Access key injected at build time via `VITE_WEB3FORMS_ACCESS_KEY` as a hidden `<input name="access_key">`
- Fields: name (required), email (required, regex-validated), subject (required), company/organization (optional — falls back to `Independent`/`Independiente` per active language), message (required)
- JS validation in `contact.js` runs before submission; inline errors injected below each field with `.cf-field-error` / `.cf-input--error`
- Spam protection: honeypot `<input name="botcheck" style="display:none">` + 15-minute `localStorage` cooldown (`cf_last_sent`) after a successful send
- All status/error messages go through `t()`
- No reCAPTCHA — not needed on the free 250/month quota plan

**`public/og-image.png`** is referenced in OG/Twitter meta but the file does not exist yet. Add a 1200×630 PNG before deploying for proper social link previews.

**Caching:**
Vite fingerprints all JS/CSS output files with a content hash — browsers can cache them indefinitely and the URL changes on every content change. GitHub Pages forces `Cache-Control: max-age=600` on all files and ignores `_headers` files, so long-lived asset caching requires a CDN in front of the site.
