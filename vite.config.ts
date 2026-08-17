import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@atoms": path.resolve(__dirname, "./src/components/atoms"),
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@media": path.resolve(__dirname, "./src/media"),
      "@type": path.resolve(__dirname, "./src/type"),
    },
  },
  build: {
    outDir: "dist",
  },
});
