import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), sitemap(), robotsTxt()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
