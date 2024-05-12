import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
    fs: {
      allow: ['favicon.ico'] // Add the relative path to the directory containing favicon.ico
    }
  },
	plugins: [sveltekit()]
});
