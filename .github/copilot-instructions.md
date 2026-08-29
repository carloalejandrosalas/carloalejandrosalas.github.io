## Project

Single-page portfolio SPA. Vite 8 + Tailwind CSS v4 + SCSS + vanilla JS. No frontend framework. Package manager: pnpm.

## CSS loading

Stylesheets (`tailwind.css`, `main.scss`) are loaded via `<link>` tags in `index.html`. Do **not** import them in `main.js`. Tailwind v4 uses `@import "tailwindcss"` — there are no `@tailwind` directives.

## i18n

Custom system in `src/main.js`. All UI strings live in `TRANSLATIONS.en` and `TRANSLATIONS.es`. Use `t("key")` to read them. HTML elements carry `data-i18n`, `data-i18n-html`, or `data-i18n-placeholder` attributes. When adding any visible text, add the attribute to the element **and** both language keys to `TRANSLATIONS`.

## Scroll/nav

`navLinks`, `setActive`, and `sectionObserver` must stay declared before `onScroll()` is invoked. Reordering causes a TDZ ReferenceError.

## Static files

`public/` is copied verbatim to `dist/` root by Vite. `robots.txt`, `sitemap.xml`, `llms.txt` live there. `og-image.png` (1200×630) is referenced in OG meta but not yet created.
