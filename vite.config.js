import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/dashboard/",
  css: {
    devSourcemap: true,
  },
  postcss: {
    plugins: [autoprefixer({})],
  },
});
