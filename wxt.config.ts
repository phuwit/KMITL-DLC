import path from 'path';
import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-svelte'],
  alias: {
    $lib: path.resolve('./src/lib')
  },
  runner: {
    chromiumArgs: ['--user-data-dir=./.wxt/chrome-data'],
  },
  manifestVersion: 3,
  manifest: {
    name: 'KMITL DLC',
    description: "a web extension that add more features to KMITL Registration's website. Forked from KMITL+ by t0ngk.",
    
  },
});
