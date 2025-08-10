import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * We proxy:
 *  - /api -> backend (POST /api/shorten, GET /api/admin/urls)
 *  - regex for shortcode GETs -> backend (so visiting /abc123 will go to backend /:shortcode)
 */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // API proxy
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false
      },
      // Proxy frontend top-level shortcodes to backend. This regex proxies paths like /abc123
      // but not static assets or /api or /admin
      "^/([A-Za-z0-9_-]{4,})$": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
