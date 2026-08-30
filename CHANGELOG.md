# Changelog

All notable changes to this project will be documented in this file.

## [3.1.0] — 2026-08-29

### Added

- **Modular JS architecture** — split monolithic `main.js` into focused ES modules:
  - `src/scripts/utils/i18n.js` — translations, `t()`, `applyTranslations()`, `initI18n()`
  - `src/scripts/utils/scroll.js` — scroll reveal, progress bar, active nav, smooth scroll
  - `src/scripts/utils/splash.js` — splash screen fade-out
  - `src/scripts/sections/nav.js` — mobile hamburger menu
  - `src/scripts/forms/contact.js` — contact form logic
  - `src/scripts/main.js` — lean entry point, imports and calls all `init*()` functions
- **Contact form fields** — added Subject (required) and Company / Organization (optional) fields
- **JS form validation** — client-side validation before submission with inline field errors (`.cf-field-error` / `.cf-input--error`), email regex check, and focus on first failing field; errors clear on input
- **Web3Forms integration** — replaced Formspree with Web3Forms (`https://api.web3forms.com/submit`); access key injected at build time via `VITE_WEB3FORMS_ACCESS_KEY`
- **Spam protection** — honeypot field (`name="botcheck"`) for bot filtering; 15-minute `localStorage` cooldown (`cf_last_sent`) after a successful send
- **Company fallback value** — empty company field sends `Independent` / `Independiente` based on active language
- **i18n keys** — added translations for subject, company, validation errors, and cooldown message in both English and Spanish

### Changed

- Unicode escape sequences in `TRANSLATIONS` replaced with literal UTF-8 characters for readability
- `VITE_CONTACT_FORM_ENDPOINT` and `VITE_RECAPTCHA_SITE_KEY` env vars removed; replaced with `VITE_WEB3FORMS_ACCESS_KEY`
- GitHub Actions deploy workflow updated to use `VITE_WEB3FORMS_ACCESS_KEY` secret
- `example.env` updated to reflect new env var

### Removed

- Formspree as form backend
- Google reCAPTCHA v3 integration (script tag, env var, and JS logic)

## [3.0.0] — 2026-07-11

Vite JS implementation, more cleanup, and high quality standard for maintenance.

## [2.0.0] — 2026-07-11

Massive improvements in terms of design, styling, refactoring, and cleanup.

## [1.0.0] — 2022-06-12

- Added React App inside the repo
- Removed unused CSS styles and JS scripts from the old version
- Refactored webpage — single page with minimal design and info
- New styles using Bootstrap
- Cleaned up npm dependencies
- Updated metadata, favicons, and readme
