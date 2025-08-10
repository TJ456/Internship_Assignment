import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5001",
        changeOrigin: true,
        secure: false
      },
      "^/([A-Za-z0-9_-]{4,})$": {
        target: "http://localhost:5001",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
