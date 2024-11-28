import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { updateManifestPlugin } from "./src/plugin/updateManifectPlugin.js";
import webExtension from "vite-plugin-web-extension";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), webExtension({})],
});
