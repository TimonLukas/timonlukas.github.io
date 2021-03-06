/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="unplugin-icons/types/vue3" />
/// <reference types="vite-plugin-comlink/client" />
/// <reference types="vue/macros" />
/// <reference types="vue/macros-global" />

/// <reference types="./packages/*/types/**" />

declare namespace global {
  const OffscreenCanvas: import("@types/offscreencanvas")
}

declare module "prismjs/components/prism-*" {}
