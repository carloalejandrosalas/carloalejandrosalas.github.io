const progressBar = document.getElementById("progress");
const siteHeader = document.getElementById("site-header");
const heroSection = document.getElementById("home");

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

function onScroll() {
  const scrolled = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  progressBar.style.width =
    maxScroll > 0 ? `${(scrolled / maxScroll) * 100}%` : "0%";

  siteHeader.classList.toggle(
    "scrolled",
    scrolled > heroSection.offsetHeight - 80,
  );

  if (
    window.innerHeight + scrolled >=
    document.documentElement.scrollHeight - 80
  ) {
    setActive("connect");
  }
}

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

export function initScroll() {
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

  sections.forEach((s) => sectionObserver.observe(s));

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.getElementById(
        this.getAttribute("href").slice(1),
      );
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
}
