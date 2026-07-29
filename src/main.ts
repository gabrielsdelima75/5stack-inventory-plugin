// Standalone dev entry. In production the 5stack host loads ./App directly via
// Module Federation (this file is not used there).
import { createApp } from "vue";
import App from "./App.vue";

// Global preflight for standalone dev only — outside the panel nothing has
// reset UA styles. The host applies its own when embedded, and shipping
// preflight is what damaged the panel chrome, so the guard keeps it out of the
// production bundle entirely.
if (import.meta.env.DEV) {
  import("@5stack/ui/standalone.css");
}

const devUser = {
  steam_id: "76561197960265728",
  name: "Dev User",
  role: "administrator",
};

// The panel owns notifications and always passes `notify`, so App requires it
// rather than carrying a second, hand-rolled toast that only ever ran here and
// had to be kept looking like the panel's by hand. Standalone supplies its own
// — a console line is enough to develop against.
createApp(App, {
  user: devUser,
  notify: (message: string, kind: "error" | "success") =>
    console[kind === "error" ? "error" : "log"](`[notify:${kind}] ${message}`),
}).mount("#app");
