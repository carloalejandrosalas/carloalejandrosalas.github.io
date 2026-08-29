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
  main.js               # All JS: i18n, nav, scroll, contact form, splash
  styles/
    tailwind.css        # @import "tailwindcss" + @theme font vars
    main.scss           # @use partials entry
    partials/
      _variables.scss   # Color/transition tokens
      _animations.scss
      _navbar.scss
      _splash.scss
      _components.scss  # .badge, .social-card, .cf-input, .cf-btn
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
Vite processes `.scss` and `tailwind.css` as stylesheet assets — do not `import` them in `main.js`.

**Tailwind v4 syntax:**
Use `@import "tailwindcss"` in `tailwind.css`. There are no `@tailwind base/components/utilities` directives.

**i18n system (custom, no library):**

- `TRANSLATIONS` object in `main.js` with `en` and `es` keys
- `t(key)` helper, `applyTranslations()` walker
- HTML attributes: `data-i18n` (textContent), `data-i18n-html` (innerHTML), `data-i18n-placeholder` (placeholder)
- Language persisted in `localStorage("lang")`, auto-detected from `navigator.language`
- `applyTranslations()` also sets `document.documentElement.lang`
- When adding translatable text: add the element attribute **and** add both `en`/`es` keys to `TRANSLATIONS`

**Scroll/nav order dependency:**
`navLinks`, `setActive`, and `sectionObserver` must be declared **before** the `onScroll()` immediate call at the bottom of that block. Reordering causes a TDZ `ReferenceError`.

**Splash screen:**
`#splash` is hidden after 900 ms via `setTimeout` in `main.js`. The CSS fade duration in `_splash.scss` must stay in sync with any JS timing changes.

**Contact form:**
Async Formspree submission. Endpoint is set via `data-endpoint` on `#contact-form` (currently a placeholder). All status messages go through `t()`.

**`public/og-image.png`** is referenced in OG/Twitter meta but the file does not exist yet. Add a 1200×630 PNG before deploying for proper social link previews.
