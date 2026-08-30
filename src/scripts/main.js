import { initI18n } from "./utils/i18n.js";
import { initScroll } from "./utils/scroll.js";
import { initNav } from "./sections/nav.js";
import { initContact } from "./forms/contact.js";
import { initSplash } from "./utils/splash.js";

document.getElementById("year").textContent = new Date().getFullYear();

initI18n();
initScroll();
initNav();
initContact();
initSplash();
