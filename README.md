# carloalejandrosalas.github.io

Personal portfolio and resume page for **Carlo Alejandro Salas** — Full Stack Engineer.

🌐 **Live:** [carloalejandrosalas.github.io](https://carloalejandrosalas.github.io)

---

## Tech Stack

| Tool                                                 | Version | Purpose                                              |
| ---------------------------------------------------- | ------- | ---------------------------------------------------- |
| [Vite](https://vite.dev)                             | 8.x     | Build tool & dev server with HMR                     |
| [Tailwind CSS v4](https://tailwindcss.com)           | 4.x     | Utility-first CSS via `@tailwindcss/vite` plugin     |
| [SASS](https://sass-lang.com)                        | 1.x     | Custom styles, animations, and component partials    |
| [pnpm](https://pnpm.io)                              | 10.x    | Fast, disk-efficient package manager                 |
| [GitHub Actions](https://docs.github.com/en/actions) | —       | CI/CD: auto-deploy to GitHub Pages on push to `main` |
| [Node.js](https://nodejs.org)                        | 24.x    | Runtime (required ≥ 24)                              |

---

## Project Structure

```
.
├── index.html                        # Vite HTML entry point
├── favicon.svg                       # CS monogram favicon (Playfair Display)
├── vite.config.js                    # Vite + @tailwindcss/vite config
├── package.json
│
├── src/
│   ├── main.js                       # JS entry — imports styles + all logic
│   ├── styles/
│   │   ├── tailwind.css              # Tailwind v4 import + @theme font config
│   │   ├── main.scss                 # SASS entry — @use all partials
│   │   └── partials/
│   │       ├── _variables.scss       # SASS variables (palette, timings)
│   │       ├── _animations.scss      # Keyframes: fade-up, reveal, link-flash
│   │       ├── _navbar.scss          # Scroll-aware navbar, nav-link underline
│   │       ├── _splash.scss          # Splash screen animations
│   │       └── _components.scss      # Badge, social-link, social-card, bg-hero
│   └── assets/
│       └── imgs/
│           └── pinacate_image.jpg    # Hero background photo
│
└── .github/
    └── workflows/
        └── deploy.yml                # GitHub Actions deploy pipeline
```

---

## Styles Architecture

CSS is split between **Tailwind v4** (utility classes) and **SASS partials** (custom component logic):

### `src/styles/tailwind.css`

Imports Tailwind v4 and declares the custom font theme:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, serif;
}
```

### `src/styles/partials/`

| Partial            | Responsibility                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_variables.scss`  | SASS variables for the yellow/zinc palette (`$y-400`, `$z-950`, …) and timing constants (`$t-fast`, `$t-slow`)                                          |
| `_animations.scss` | `fade-up` hero entrance, `.reveal` scroll reveal, `.link-clicked` flash                                                                                 |
| `_navbar.scss`     | `#site-header` transparent→frosted-glass transition on scroll; `#nav-title` / `#nav-dot` reveal; `.nav-link` animated underline and `.nav-active` state |
| `_splash.scss`     | Full-screen splash overlay with logo scale-in, progress bar grow, and pulsing dot                                                                       |
| `_components.scss` | `.bg-hero` background image, `.badge` tech pill, `.social-link` hover lift, `.social-card` press effect                                                 |

---

## JavaScript (`src/main.js`)

All JS is vanilla, no framework:

| Feature            | Details                                                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Scroll reveal**  | `IntersectionObserver` adds `.visible` to `.reveal` elements as they enter the viewport                                                                           |
| **Navbar state**   | Single `onScroll` handler updates the scroll progress bar, toggles `.scrolled` on the header once past the hero, and activates the "connect" link near the bottom |
| **Active section** | `IntersectionObserver` on each `section[id]` / `footer[id]` updates `.nav-active` on the matching nav link                                                        |
| **Slow scroll**    | Custom 900 ms `easeInOutCubic` animation intercepting all `a[href^="#"]` clicks, offset by navbar height                                                          |
| **Mobile menu**    | Hamburger ↔ X animation toggling the mobile nav panel with `aria-expanded`                                                                                        |
| **Splash screen**  | Auto-dismissed after 1.8 s with a CSS opacity fade and DOM removal                                                                                                |

---

## Development

```bash
# Install dependencies
pnpm install

# Start dev server with HMR (http://localhost:5173)
pnpm dev

# Production build → dist/
pnpm build

# Preview production build locally
pnpm preview
```

---

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:

1. Installs deps with `pnpm install --frozen-lockfile`
2. Builds with `vite build` (Node 24)
3. Uploads `dist/` as the Pages artifact
4. Deploys via `actions/deploy-pages`

> **Node version:** runners default to Node 24. See [GitHub changelog](https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/) for details.

> **Repo setting required:** Go to **Settings → Pages → Source** and select **GitHub Actions**.

You can also deploy manually:

```bash
pnpm deploy   # builds + pushes dist/ to gh-pages branch
```
