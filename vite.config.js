import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'$content': fileURLToPath(new URL('./src/content', import.meta.url))
		}
	}
});
