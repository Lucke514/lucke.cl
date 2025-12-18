import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://lucke.cl',
  output: 'static',
  integrations: [tailwind()]
});