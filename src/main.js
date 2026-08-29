// ── Copyright year ────────────────────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();

// ── i18n ──────────────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.blog": "Blog",
    "nav.connect": "Connect",
    "hero.role": "Full Stack Engineer",
    "hero.tagline": "TypeScript Fanatic \u00b7 Professional Bug Whisperer",
    "hero.desc":
      "10+ years turning coffee into web applications \u2014 back-end APIs that don\u2019t break at 3am & front-end UIs that make designers smile. \u2615",
    "hero.scroll": "Scroll",
    "about.label": "01 \u2014 About",
    "about.heading": "Engineer by craft,<br />mentor by choice.",
    "about.bg.label": "My story",
    "about.bg.1":
      "Based in Mexico \ud83c\uddf2\ud83c\uddfd, collaborating with global teams.",
    "about.bg.2":
      "Started with PHP & MySQL; evolved through the full JS ecosystem.",
    "about.bg.3":
      "Led front-end migrations from legacy codebases to modern SPAs.",
    "about.bg.4": "Comfortable from DB schema design to CI/CD pipelines.",
    "about.bg.5":
      "Strong advocate for type safety \u2014 TypeScript everywhere.",
    "about.drives.label": "Engineering values",
    "about.drives.1": "Code the next dev will thank you for",
    "about.drives.2": "Tests are not optional \u2014 they are documentation",
    "about.drives.3": "Mentored junior devs and interns on modern tooling",
    "about.drives.4": "Deep PR reviews \u2014 every line matters",
    "about.drives.5": "Ship fast, never at the cost of quality",
    "about.db.label": "Beyond the code",
    "about.db.value": "Mentoring \u00b7 Knowledge sharing \u00b7 Team growth",
    "about.be.label": "Open to",
    "about.be.value": "Remote work \u00b7 Open source \u00b7 Technical writing",
    "stack.label": "02 \u2014 Current Stack",
    "stack.heading": "What I work with today.",
    "stack.subtitle": "Technologies I use day-to-day in my current role.",
    "blog.label": "03 \u2014 Coming Soon",
    "blog.heading": "What\u2019s coming.",
    "blog.subtitle": "More ways to stay connected and keep learning.",
    "blog.soon": "Coming soon",
    "blog.newsletter.desc":
      "Curated insights on full-stack development, tooling, and engineering practices \u2014 straight to your inbox.",
    "blog.blog.title": "Engineering Blog",
    "blog.blog.desc":
      "Deep dives into architecture decisions, lessons learned, and the craft of building production software.",
    "langs.label": "04 \u2014 Languages",
    "langs.heading": "Spoken languages.",
    "langs.es.level": "Native",
    "langs.en.level": "Professional working proficiency",
    "connect.label": "06 \u2014 Connect",
    "connect.heading": "Let\u2019s build<br />something great.",
    "connect.subtitle":
      "Send me a message or find me on any of these platforms.",
    "form.name": "Name",
    "form.name.ph": "Your name",
    "form.email": "Email",
    "form.email.ph": "your@email.com",
    "form.message": "Message",
    "form.message.ph": "What\u2019s on your mind?",
    "form.submit": "Send message",
    "form.sending": "Sending\u2026",
    "form.success": "Message sent! I\u2019ll be in touch soon.",
    "form.error": "Something went wrong. Please try again.",
    "form.network": "Network error. Please try again.",
    "form.no-endpoint": "Form endpoint not configured yet.",
  },
  es: {
    "nav.about": "Sobre m\u00ed",
    "nav.stack": "Stack",
    "nav.blog": "Blog",
    "nav.connect": "Contacto",
    "hero.role": "Full Stack Engineer",
    "hero.tagline": "TypeScript Fanatic \u00b7 Domador Profesional de Bugs",
    "hero.desc":
      "10+ a\u00f1os convirtiendo caf\u00e9 en aplicaciones web \u2014 APIs back-end que no fallan a las 3am & UIs front-end que hacen felices a los dise\u00f1adores. \u2615",
    "hero.scroll": "Desplazar",
    "about.label": "01 \u2014 Sobre m\u00ed",
    "about.heading": "Ingeniero de oficio,<br />mentor por elecci\u00f3n.",
    "about.bg.label": "Mi historia",
    "about.bg.1":
      "Basado en M\u00e9xico \ud83c\uddf2\ud83c\uddfd, colaborando con equipos globales.",
    "about.bg.2":
      "Inici\u00e9 con PHP & MySQL; evolucion\u00e9 a trav\u00e9s del ecosistema JS completo.",
    "about.bg.3":
      "Lider\u00e9 migraciones front-end de c\u00f3digos legacy a SPAs modernas.",
    "about.bg.4":
      "C\u00f3modo desde el dise\u00f1o de esquemas DB hasta pipelines de CI/CD.",
    "about.bg.5":
      "Defensor del tipado estricto \u2014 TypeScript en todas partes.",
    "about.drives.label": "Valores de ingenier\u00eda",
    "about.drives.1": "C\u00f3digo que el siguiente dev agradecer\u00e1",
    "about.drives.2":
      "Las pruebas no son opcionales \u2014 son documentaci\u00f3n",
    "about.drives.3":
      "Mentor\u00eda a devs junior e internos en herramientas modernas",
    "about.drives.4": "Code reviews profundos \u2014 cada l\u00ednea importa",
    "about.drives.5": "Entregar r\u00e1pido, nunca a costa de la calidad",
    "about.db.label": "M\u00e1s all\u00e1 del c\u00f3digo",
    "about.db.value":
      "Mentor\u00eda \u00b7 Compartir conocimiento \u00b7 Crecimiento del equipo",
    "about.be.label": "Abierto a",
    "about.be.value":
      "Trabajo remoto \u00b7 Open source \u00b7 Escritura t\u00e9cnica",
    "stack.label": "02 \u2014 Stack actual",
    "stack.heading": "Con lo que trabajo hoy.",
    "stack.subtitle":
      "Tecnolog\u00edas que uso d\u00eda a d\u00eda en mi rol actual.",
    "blog.label": "03 \u2014 Pr\u00f3ximamente",
    "blog.heading": "Lo que viene.",
    "blog.subtitle": "M\u00e1s formas de conectar y seguir aprendiendo.",
    "blog.soon": "Pr\u00f3ximamente",
    "blog.newsletter.desc":
      "Perspectivas sobre desarrollo full-stack, herramientas y pr\u00e1cticas de ingenier\u00eda \u2014 directo a tu bandeja de entrada.",
    "blog.blog.title": "Blog de ingenier\u00eda",
    "blog.blog.desc":
      "An\u00e1lisis profundos sobre decisiones de arquitectura, lecciones aprendidas y el arte de construir software en producci\u00f3n.",
    "langs.label": "04 \u2014 Idiomas",
    "langs.heading": "Idiomas hablados.",
    "langs.es.level": "Nativo",
    "langs.en.level": "Competencia profesional",
    "connect.label": "06 \u2014 Contacto",
    "connect.heading": "Construyamos<br />algo genial.",
    "connect.subtitle":
      "Env\u00edame un mensaje o encu\u00e9ntrame en estas plataformas.",
    "form.name": "Nombre",
    "form.name.ph": "Tu nombre",
    "form.email": "Correo electr\u00f3nico",
    "form.email.ph": "tu@correo.com",
    "form.message": "Mensaje",
    "form.message.ph": "\u00bfEn qu\u00e9 est\u00e1s pensando?",
    "form.submit": "Enviar mensaje",
    "form.sending": "Enviando\u2026",
    "form.success": "\u00a1Mensaje enviado! Estar\u00e9 en contacto pronto.",
    "form.error": "Algo sali\u00f3 mal. Por favor intenta de nuevo.",
    "form.network": "Error de red. Por favor intenta de nuevo.",
    "form.no-endpoint": "Endpoint del formulario no configurado a\u00fan.",
  },
};

let currentLang = "en";

function t(key) {
  return TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = currentLang === "en" ? "ES" : "EN";
}

currentLang = (() => {
  const stored = localStorage.getItem("lang");
  if (stored === "en" || stored === "es") return stored;
  return navigator.language.startsWith("es") ? "es" : "en";
})();

applyTranslations();

document.getElementById("lang-toggle")?.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  localStorage.setItem("lang", currentLang);
  applyTranslations();
});

// ── Scroll reveal ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

// ── Scroll progress bar + navbar state ───────────────────────
const progressBar = document.getElementById("progress");
const siteHeader = document.getElementById("site-header");
const heroSection = document.getElementById("home");

function onScroll() {
  const scrolled = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // Scroll progress bar
  progressBar.style.width =
    maxScroll > 0 ? `${(scrolled / maxScroll) * 100}%` : "0%";

  // Frosted glass navbar after hero
  siteHeader.classList.toggle(
    "scrolled",
    scrolled > heroSection.offsetHeight - 80,
  );

  // Activate "connect" near bottom
  if (
    window.innerHeight + scrolled >=
    document.documentElement.scrollHeight - 80
  ) {
    setActive("connect");
  }
}

window.addEventListener("scroll", onScroll, { passive: true });

// ── Active section detection ──────────────────────────────────
const navLinks = document.querySelectorAll(".nav-link[data-section]");
const sections = document.querySelectorAll("section[id], footer[id]");

function setActive(id) {
  navLinks.forEach((link) =>
    link.classList.toggle("nav-active", link.dataset.section === id),
  );
}

const sectionObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) setActive(e.target.id);
    }),
  { threshold: 0.3, rootMargin: "-10% 0px -55% 0px" },
);
sections.forEach((s) => sectionObserver.observe(s));

onScroll();

// ── Slow smooth scroll with easing ───────────────────────────
const NAV_HEIGHT = 56;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function slowScrollTo(targetY, duration = 900) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  function step(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.getElementById(this.getAttribute("href").slice(1));
    if (!target) return;
    e.preventDefault();

    slowScrollTo(
      Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT,
      ),
    );

    this.classList.remove("link-clicked");
    void this.offsetWidth;
    this.classList.add("link-clicked");
    this.addEventListener(
      "animationend",
      () => this.classList.remove("link-clicked"),
      { once: true },
    );
  });
});

// ── Mobile menu ───────────────────────────────────────────────
const menuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

function closeMenu() {
  mobileNav.classList.add("hidden");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-label", "Open navigation menu");
  bar1.style.transform = "";
  bar2.style.opacity = "";
  bar3.style.transform = "";
}

menuBtn.addEventListener("click", () => {
  const isOpen = !mobileNav.classList.contains("hidden");
  if (isOpen) {
    closeMenu();
  } else {
    mobileNav.classList.remove("hidden");
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", "Close navigation menu");
    bar1.style.transform = "translateY(6px) rotate(45deg)";
    bar2.style.opacity = "0";
    bar3.style.transform = "translateY(-6px) rotate(-45deg)";
  }
});

document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) closeMenu();
});

// ── Contact form ──────────────────────────────────────────────
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  const submitBtn = document.getElementById("cf-submit");
  const statusEl = document.getElementById("cf-status");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const endpoint = contactForm.dataset.endpoint;
    if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
      statusEl.textContent = t("form.no-endpoint");
      statusEl.className = "text-sm text-yellow-500";
      statusEl.classList.remove("hidden");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = t("form.sending");
    statusEl.classList.add("hidden");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(contactForm),
      });
      if (res.ok) {
        contactForm.reset();
        statusEl.textContent = t("form.success");
        statusEl.className = "text-sm text-green-400";
      } else {
        statusEl.textContent = t("form.error");
        statusEl.className = "text-sm text-red-400";
      }
    } catch {
      statusEl.textContent = t("form.network");
      statusEl.className = "text-sm text-red-400";
    } finally {
      statusEl.classList.remove("hidden");
      submitBtn.disabled = false;
      submitBtn.textContent = t("form.submit");
    }
  });
}

// ── Splash screen ─────────────────────────────────────────────
(function () {
  const splash = document.getElementById("splash");
  if (!splash) return;
  const hide = () => {
    splash.classList.add("splash-hide");
    splash.addEventListener("transitionend", () => splash.remove(), {
      once: true,
    });
  };
  setTimeout(hide, 900);
})();
