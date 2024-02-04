import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigs from "vite-tsconfig-paths"
export default defineConfig({
  plugins: [tsconfigs(), react()],
});

