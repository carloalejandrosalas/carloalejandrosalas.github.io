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
│   ├── styles/
│   │   ├── tailwind.css        # @import "tailwindcss" + @theme font vars
│   │   ├── main.scss           # SCSS entry — @use partials
│   │   └── partials/
│   │       ├── _variables.scss # Color/transition tokens
│   │       ├── _animations.scss
│   │       ├── _navbar.scss
│   │       ├── _splash.scss
│   │       └── _components.scss # .badge, .social-card, .cf-input, .cf-btn
│   └── scripts/
│       ├── main.js             # Entry point — imports and calls all init* functions
│       ├── utils/
│       │   ├── i18n.js         # TRANSLATIONS, t(), applyTranslations(), initI18n()
│       │   ├── scroll.js       # Scroll reveal, progress bar, active nav, smooth scroll
│       │   └── splash.js       # Splash screen fade-out
│       ├── sections/
│       │   └── nav.js          # Mobile hamburger menu
│       └── forms/
│           └── contact.js      # Contact form, JS validation, Web3Forms submission
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
All UI strings live in `src/scripts/utils/i18n.js` inside the `TRANSLATIONS` object. HTML elements use `data-i18n` (textContent), `data-i18n-html` (innerHTML), or `data-i18n-placeholder` (placeholder). When adding visible text: add the attribute to the HTML element **and** both `en`/`es` keys to `TRANSLATIONS`. Language is auto-detected from `navigator.language` and persisted in `localStorage("lang")`.

**Contact form (Web3Forms).**
Async submission to `https://api.web3forms.com/submit`. The access key is injected at build time via `VITE_WEB3FORMS_ACCESS_KEY` (hidden `<input name="access_key">`). Fields: name, email, subject, company/organization (optional — defaults to `Independent`/`Independiente`), message. JS validation runs before submission (`src/scripts/forms/contact.js`). Spam protection: honeypot field (`name="botcheck"`) + 15-minute `localStorage` cooldown after a successful send. All status messages go through `t()`.

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

## Caching

Vite fingerprints all JS and CSS output files with a content hash (e.g. `main-BxYzAbc1.js`), so browsers can cache them indefinitely and the URL changes whenever content changes. This is handled automatically — no config needed.

GitHub Pages forces `Cache-Control: max-age=600` (10 min) on every file and does not support custom headers (`_headers` files are ignored). The hashing ensures stale assets are never served; the 10-minute TTL is a GitHub Pages platform constraint that cannot be overridden without fronting the site with a CDN (e.g. Cloudflare free tier).

---

## Before Going Live

- [ ] Add `public/og-image.png` (1200 × 630 px) for social link previews
- [ ] Add `VITE_WEB3FORMS_ACCESS_KEY` as a GitHub repository secret (Settings → Secrets → Actions)
