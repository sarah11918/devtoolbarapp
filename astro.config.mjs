import { defineConfig } from 'astro/config';
import myIntegration from './toolbar/my-integration.ts';

// https://astro.build/config
export default defineConfig({
  integrations: [myIntegration],
});