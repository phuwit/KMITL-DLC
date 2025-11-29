import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-svelte'],
  alias: {
    $lib: path.resolve('./src/lib')
  },
  webExt: {
    chromiumArgs: ['--user-data-dir=./.wxt/chrome-data'],
  },
  manifestVersion: 3,
  manifest: {
    name: 'KMITL DLC',
    description: "a web extension that add more features to KMITL Registration's website. Forked from KMITL+ by t0ngk.",
    browser_specific_settings: {
      gecko: {
        id: 'kmitl-dlc@phuwit.github.io'
      }
    },
    host_permissions: [
      'https://regis.reg.kmitl.ac.th/api/?function=get-year-semester-now&level_id=1'
    ],
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
