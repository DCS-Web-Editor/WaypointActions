import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    cssCodeSplit: true,
    cssTarget: "esnext",
    target: "esnext",
  },
  plugins: [vue()],
  base: '',
});
