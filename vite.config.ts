/// <reference types="vitest/config" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  define: {
    'import.meta.env.VITE_GOOGLE_DOCS_ID': `"1aBcD..."`, // Заміни на реальний ID документа
    'import.meta.env.VITE_TRACKING_ID': `"YOUR_TRACKING_ID"`,
  },

  server: {
    host: true,
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
});

