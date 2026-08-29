// ── Copyright year ────────────────────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();

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
