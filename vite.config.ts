import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import webExtension from 'vite-plugin-web-extension';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte(), webExtension({
    browser: 'firefox',
    webExtConfig: {
      startUrl: ['https://www.reg.kmitl.ac.th/user/'],
    }
  })],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib')
		}
	}
});
