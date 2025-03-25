const globals = {
  "ContentScriptContext": true,
  "InvalidMatchPattern": true,
  "MatchPattern": true,
  "MigrationError": true,
  "afterUpdate": true,
  "beforeUpdate": true,
  "browser": true,
  "createEventDispatcher": true,
  "createIframeUi": true,
  "createIntegratedUi": true,
  "createShadowRootUi": true,
  "defineAppConfig": true,
  "defineBackground": true,
  "defineConfig": true,
  "defineContentScript": true,
  "defineUnlistedScript": true,
  "defineWxtPlugin": true,
  "fakeBrowser": true,
  "getAllContexts": true,
  "getContext": true,
  "hasContext": true,
  "injectScript": true,
  "onDestroy": true,
  "onMount": true,
  "setContext": true,
  "storage": true,
  "tick": true,
  "useAppConfig": true
}

export default {
  name: "wxt/auto-imports",
  languageOptions: {
    globals,
    sourceType: "module",
  },
};
