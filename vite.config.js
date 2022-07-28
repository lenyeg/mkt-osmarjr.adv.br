import { defineConfig } from "iles";
import vue from "@vitejs/plugin-vue";
import ssr from "vite-plugin-ssr/plugin";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  vite: {
    plugins: [
      vue(),
      ssr({
        ssr: false,
      }),
      WindiCSS({
        scan: {
          // By default only `src/` is scanned
          dirs: ["pages"],
          // We only have to specify the file extensions we actually use.
          fileExtensions: ["vue", "js", "ts", "jsx", "tsx"],
        },
      }),
    ],
  },
});
