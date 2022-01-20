import path, { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport, { VantResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  mode: 'development',
  root: "src/pages/",
  base: "/",
  build: {
    target: "esnext",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "/index.html"),
        main: resolve(__dirname, "/main.html"),
        landpage: resolve(__dirname, "/landpage.html"),
      },
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
