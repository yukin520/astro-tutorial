// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://yukin520-astro-tutorial.netlify.app/",
  integrations: [preact()]
});