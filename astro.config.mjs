import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://orangefrogproductions.ca/",
  integrations: [react(), sitemap()],
  image: {
    domains: ["orangefrog.swbdatabases3.com"],
  },
});
