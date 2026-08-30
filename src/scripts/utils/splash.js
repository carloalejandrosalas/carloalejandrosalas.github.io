export function initSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;
  const hide = () => {
    splash.classList.add("splash-hide");
    splash.addEventListener("transitionend", () => splash.remove(), {
      once: true,
    });
  };
  setTimeout(hide, 900);
}
