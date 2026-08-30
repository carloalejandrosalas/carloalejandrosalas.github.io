import { t } from "../utils/i18n.js";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COOLDOWN_KEY = "cf_last_sent";
const COOLDOWN_MS = 15 * 60 * 1000;

function setError(input, msgKey) {
  input.classList.add("cf-input--error");
  let errEl = input.parentElement.querySelector(".cf-field-error");
  if (!errEl) {
    errEl = document.createElement("p");
    errEl.className = "cf-field-error";
    errEl.setAttribute("role", "alert");
    input.parentElement.appendChild(errEl);
  }
  errEl.textContent = t(msgKey);
}

function clearError(input) {
  input.classList.remove("cf-input--error");
  input.parentElement.querySelector(".cf-field-error")?.remove();
}

function validateForm(form) {
  const checks = [
    { el: form.querySelector("#cf-name"), msgKey: "form.error.name" },
    {
      el: form.querySelector("#cf-email"),
      msgKey: "form.error.email",
      fn: (v) => EMAIL_RE.test(v),
    },
    { el: form.querySelector("#cf-subject"), msgKey: "form.error.subject" },
    { el: form.querySelector("#cf-message"), msgKey: "form.error.message" },
  ];

  let valid = true;
  for (const { el, msgKey, fn } of checks) {
    clearError(el);
    const val = el.value.trim();
    if (!val || (fn && !fn(val))) {
      setError(el, msgKey);
      if (valid) el.focus();
      valid = false;
    }
  }
  return valid;
}

export function initContact() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  const submitBtn = document.getElementById("cf-submit");
  const statusEl = document.getElementById("cf-status");

  // Clear inline error as soon as the user starts correcting a field
  ["#cf-name", "#cf-email", "#cf-subject", "#cf-message"].forEach((sel) => {
    contactForm
      .querySelector(sel)
      ?.addEventListener("input", (e) => clearError(e.target));
  });

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const accessKeyInput = contactForm.querySelector(
      'input[name="access_key"]',
    );
    if (
      !accessKeyInput?.value ||
      accessKeyInput.value.includes("YOUR_ACCESS_KEY")
    ) {
      statusEl.textContent = t("form.no-endpoint");
      statusEl.className = "text-sm text-yellow-500";
      statusEl.classList.remove("hidden");
      return;
    }

    if (!validateForm(contactForm)) return;

    const lastSent = Number(localStorage.getItem(COOLDOWN_KEY));
    const remaining = COOLDOWN_MS - (Date.now() - lastSent);
    if (remaining > 0) {
      const mins = Math.ceil(remaining / 60000);
      statusEl.textContent = t("form.cooldown").replace("{mins}", mins);
      statusEl.className = "text-sm text-yellow-500";
      statusEl.classList.remove("hidden");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = t("form.sending");
    statusEl.classList.add("hidden");

    try {
      const data = new FormData(contactForm);
      if (!data.get("company")?.toString().trim()) {
        data.set("company", t("form.company.default"));
      }

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
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
