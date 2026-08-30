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

export function initNav() {
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
    if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target))
      closeMenu();
  });
}
