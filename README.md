# carloalejandrosalas.github.io

Personal portfolio for **Carlo Alejandro Salas** — Full Stack Engineer.

🌐 **Live:** [carloalejandrosalas.github.io](https://carloalejandrosalas.github.io)

---

## Tech Stack

| Tool                                                 | Version | Purpose                                              |
| ---------------------------------------------------- | ------- | ---------------------------------------------------- |
| [Vite](https://vite.dev)                             | 8.x     | Build tool & dev server                              |
| [Tailwind CSS v4](https://tailwindcss.com)           | 4.x     | Utility-first CSS via `@tailwindcss/vite` plugin     |
| [Sass](https://sass-lang.com)                        | 1.x     | Custom animations, components, and SCSS partials     |
| [pnpm](https://pnpm.io)                              | 10.x    | Package manager                                      |
| [GitHub Actions](https://docs.github.com/en/actions) | —       | CI/CD: auto-deploy to GitHub Pages on push to `main` |
| [Node.js](https://nodejs.org)                        | ≥ 24    | Runtime                                              |

---

## Project Structure

```
.
├── index.html                  # Single HTML entry — all page sections live here
├── favicon.svg                 # CS monogram favicon
├── vite.config.js              # Vite + @tailwindcss/vite config
├── AGENTS.md                   # AI coding agent context (OpenAI Codex, Gemini CLI, Cursor…)
│
├── src/
│   ├── main.js                 # All JS: i18n, scroll/nav, contact form, splash
│   └── styles/
│       ├── tailwind.css        # @import "tailwindcss" + @theme font vars
│       ├── main.scss           # SCSS entry — @use partials
│       └── partials/
│           ├── _variables.scss # Color/transition tokens
│           ├── _animations.scss
│           ├── _navbar.scss
│           ├── _splash.scss
│           └── _components.scss # .badge, .social-card, .cf-input, .cf-btn
│
└── public/                     # Copied verbatim to dist/ root
    ├── robots.txt
    ├── sitemap.xml
    ├── llms.txt                # AI agent context for the live site
    └── og-image.png            # TODO: 1200×630 social card (not yet added)
```

---

## Key Conventions

**CSS via `<link>` tags, not JS imports.**
Both `tailwind.css` and `main.scss` are loaded as `<link rel="stylesheet">` in `index.html`. Do not import them in `main.js`.

**Tailwind v4 syntax.**
Uses `@import "tailwindcss"` — there are no `@tailwind base/components/utilities` directives.

**Custom i18n (EN / ES, no library).**
All UI strings live in the `TRANSLATIONS` object in `main.js`. HTML elements use `data-i18n` (textContent), `data-i18n-html` (innerHTML), or `data-i18n-placeholder` (placeholder). When adding visible text: add the attribute to the HTML element **and** both `en`/`es` keys to `TRANSLATIONS`. Language is auto-detected from `navigator.language` and persisted in `localStorage("lang")`.

**Scroll/nav declaration order.**
`navLinks`, `setActive`, and `sectionObserver` must be declared before `onScroll()` is invoked. Reordering causes a TDZ `ReferenceError`.

---

## Development

```bash
pnpm install        # install dependencies
pnpm dev            # dev server at http://localhost:5173
pnpm build          # production build → dist/
pnpm preview        # preview production build locally
```

---

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:

1. Installs deps with `pnpm install --frozen-lockfile`
2. Builds with `vite build` (Node 24)
3. Uploads `dist/` as the Pages artifact
4. Deploys via `actions/deploy-pages`

> **Repo setting required:** Settings → Pages → Source → **GitHub Actions**.

---

## Before Going Live

- [ ] Add `public/og-image.png` (1200 × 630 px) for social link previews
- [ ] Replace the Formspree placeholder in `index.html` (`data-endpoint` on `#contact-form`) with a real form ID
