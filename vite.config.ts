import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { copyFileSync } from "fs";
import { resolve } from "path";

// 🔁 Plugin to copy 404.html to dist/
function copy404Plugin() {
  return {
    name: "copy-404",
    closeBundle() {
      copyFileSync(
        resolve(__dirname, "404.html"),
        resolve(__dirname, "dist/404.html")
      );
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    copy404Plugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
