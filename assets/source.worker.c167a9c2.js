const T=Symbol("Comlink.proxy"),j=Symbol("Comlink.endpoint"),E=Symbol("Comlink.releaseProxy"),g=Symbol("Comlink.thrown"),N=e=>typeof e=="object"&&e!==null||typeof e=="function",P={canHandle:e=>N(e)&&e[T],serialize(e){const{port1:n,port2:o}=new MessageChannel;return y(e,n),[o,[o]]},deserialize(e){return e.start(),R(e)}},S={canHandle:e=>N(e)&&g in e,serialize({value:e}){let n;return e instanceof Error?n={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:n={isError:!1,value:e},[n,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},x=new Map([["proxy",P],["throw",S]]);function y(e,n=self){n.addEventListener("message",function o(s){if(!s||!s.data)return;const{id:i,type:f,path:a}=Object.assign({path:[]},s.data),t=(s.data.argumentList||[]).map(p);let c;try{const d=a.slice(0,-1).reduce((r,l)=>r[l],e),u=a.reduce((r,l)=>r[l],e);switch(f){case"GET":c=u;break;case"SET":d[a.slice(-1)[0]]=p(s.data.value),c=!0;break;case"APPLY":c=u.apply(d,t);break;case"CONSTRUCT":{const r=new u(...t);c=D(r)}break;case"ENDPOINT":{const{port1:r,port2:l}=new MessageChannel;y(e,l),c=O(r,[r])}break;case"RELEASE":c=void 0;break;default:return}}catch(d){c={value:d,[g]:0}}Promise.resolve(c).catch(d=>({value:d,[g]:0})).then(d=>{const[u,r]=v(d);n.postMessage(Object.assign(Object.assign({},u),{id:i}),r),f==="RELEASE"&&(n.removeEventListener("message",o),w(n))})}),n.start&&n.start()}function C(e){return e.constructor.name==="MessagePort"}function w(e){C(e)&&e.close()}function R(e,n){return h(e,[],n)}function m(e){if(e)throw new Error("Proxy has been released and is not useable")}function h(e,n=[],o=function(){}){let s=!1;const i=new Proxy(o,{get(f,a){if(m(s),a===E)return()=>b(e,{type:"RELEASE",path:n.map(t=>t.toString())}).then(()=>{w(e),s=!0});if(a==="then"){if(n.length===0)return{then:()=>i};const t=b(e,{type:"GET",path:n.map(c=>c.toString())}).then(p);return t.then.bind(t)}return h(e,[...n,a])},set(f,a,t){m(s);const[c,d]=v(t);return b(e,{type:"SET",path:[...n,a].map(u=>u.toString()),value:c},d).then(p)},apply(f,a,t){m(s);const c=n[n.length-1];if(c===j)return b(e,{type:"ENDPOINT"}).then(p);if(c==="bind")return h(e,n.slice(0,-1));const[d,u]=k(t);return b(e,{type:"APPLY",path:n.map(r=>r.toString()),argumentList:d},u).then(p)},construct(f,a){m(s);const[t,c]=k(a);return b(e,{type:"CONSTRUCT",path:n.map(d=>d.toString()),argumentList:t},c).then(p)}});return i}function F(e){return Array.prototype.concat.apply([],e)}function k(e){const n=e.map(v);return[n.map(o=>o[0]),F(n.map(o=>o[1]))]}const A=new WeakMap;function O(e,n){return A.set(e,n),e}function D(e){return Object.assign(e,{[T]:!0})}function v(e){for(const[n,o]of x)if(o.canHandle(e)){const[s,i]=o.serialize(e);return[{type:"HANDLER",name:n,value:s},i]}return[{type:"RAW",value:e},A.get(e)||[]]}function p(e){switch(e.type){case"HANDLER":return x.get(e.name).deserialize(e.value);case"RAW":return e.value}}function b(e,n,o){return new Promise(s=>{const i=M();e.addEventListener("message",function f(a){!a.data||!a.data.id||a.data.id!==i||(e.removeEventListener("message",f),s(a.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:i},n),o)})}function M(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const I={"/.eslintrc-auto-import.json":`{
  "globals": {
    "EffectScope": true,
    "asyncComputed": true,
    "autoResetRef": true,
    "computed": true,
    "computedAsync": true,
    "computedEager": true,
    "computedInject": true,
    "computedWithControl": true,
    "controlledComputed": true,
    "controlledRef": true,
    "createApp": true,
    "createEventHook": true,
    "createGlobalState": true,
    "createInjectionState": true,
    "createReactiveFn": true,
    "createSharedComposable": true,
    "createUnrefFn": true,
    "customRef": true,
    "debouncedRef": true,
    "debouncedWatch": true,
    "defineAsyncComponent": true,
    "defineComponent": true,
    "eagerComputed": true,
    "effectScope": true,
    "extendRef": true,
    "getCurrentInstance": true,
    "getCurrentScope": true,
    "h": true,
    "ignorableWatch": true,
    "inject": true,
    "isDefined": true,
    "isProxy": true,
    "isReactive": true,
    "isReadonly": true,
    "isRef": true,
    "logicAnd": true,
    "logicNot": true,
    "logicOr": true,
    "makeDestructurable": true,
    "markRaw": true,
    "nextTick": true,
    "onActivated": true,
    "onBeforeMount": true,
    "onBeforeUnmount": true,
    "onBeforeUpdate": true,
    "onClickOutside": true,
    "onDeactivated": true,
    "onErrorCaptured": true,
    "onKeyStroke": true,
    "onLongPress": true,
    "onMounted": true,
    "onRenderTracked": true,
    "onRenderTriggered": true,
    "onScopeDispose": true,
    "onServerPrefetch": true,
    "onStartTyping": true,
    "onUnmounted": true,
    "onUpdated": true,
    "pausableWatch": true,
    "provide": true,
    "reactify": true,
    "reactifyObject": true,
    "reactive": true,
    "reactiveComputed": true,
    "reactiveOmit": true,
    "reactivePick": true,
    "readonly": true,
    "ref": true,
    "refAutoReset": true,
    "refDebounced": true,
    "refDefault": true,
    "refThrottled": true,
    "refWithControl": true,
    "resolveComponent": true,
    "shallowReactive": true,
    "shallowReadonly": true,
    "shallowRef": true,
    "syncRef": true,
    "syncRefs": true,
    "templateRef": true,
    "throttledRef": true,
    "throttledWatch": true,
    "toRaw": true,
    "toReactive": true,
    "toRef": true,
    "toRefs": true,
    "triggerRef": true,
    "tryOnBeforeMount": true,
    "tryOnBeforeUnmount": true,
    "tryOnMounted": true,
    "tryOnScopeDispose": true,
    "tryOnUnmounted": true,
    "unref": true,
    "unrefElement": true,
    "until": true,
    "useActiveElement": true,
    "useAsyncQueue": true,
    "useAsyncState": true,
    "useAttrs": true,
    "useBase64": true,
    "useBattery": true,
    "useBreakpoints": true,
    "useBroadcastChannel": true,
    "useBrowserLocation": true,
    "useCached": true,
    "useClamp": true,
    "useClipboard": true,
    "useColorMode": true,
    "useConfirmDialog": true,
    "useCounter": true,
    "useCssModule": true,
    "useCssVar": true,
    "useCssVars": true,
    "useCurrentElement": true,
    "useCycleList": true,
    "useDark": true,
    "useDateFormat": true,
    "useDebounce": true,
    "useDebounceFn": true,
    "useDebouncedRefHistory": true,
    "useDeviceMotion": true,
    "useDeviceOrientation": true,
    "useDevicePixelRatio": true,
    "useDevicesList": true,
    "useDisplayMedia": true,
    "useDocumentVisibility": true,
    "useDraggable": true,
    "useElementBounding": true,
    "useElementByPoint": true,
    "useElementHover": true,
    "useElementSize": true,
    "useElementVisibility": true,
    "useEventBus": true,
    "useEventListener": true,
    "useEventSource": true,
    "useEyeDropper": true,
    "useFavicon": true,
    "useFetch": true,
    "useFileSystemAccess": true,
    "useFocus": true,
    "useFocusWithin": true,
    "useFps": true,
    "useFullscreen": true,
    "useGamepad": true,
    "useGeolocation": true,
    "useIdle": true,
    "useInfiniteScroll": true,
    "useIntersectionObserver": true,
    "useInterval": true,
    "useIntervalFn": true,
    "useKeyModifier": true,
    "useLastChanged": true,
    "useLocalStorage": true,
    "useMagicKeys": true,
    "useManualRefHistory": true,
    "useMediaControls": true,
    "useMediaQuery": true,
    "useMemoize": true,
    "useMemory": true,
    "useMounted": true,
    "useMouse": true,
    "useMouseInElement": true,
    "useMousePressed": true,
    "useMutationObserver": true,
    "useNavigatorLanguage": true,
    "useNetwork": true,
    "useNow": true,
    "useOffsetPagination": true,
    "useOnline": true,
    "usePageLeave": true,
    "useParallax": true,
    "usePermission": true,
    "usePointer": true,
    "usePointerSwipe": true,
    "usePreferredColorScheme": true,
    "usePreferredDark": true,
    "usePreferredLanguages": true,
    "useRafFn": true,
    "useRefHistory": true,
    "useResizeObserver": true,
    "useRoute": true,
    "useRouter": true,
    "useScreenOrientation": true,
    "useScreenSafeArea": true,
    "useScriptTag": true,
    "useScroll": true,
    "useScrollLock": true,
    "useSessionStorage": true,
    "useShare": true,
    "useSlots": true,
    "useSpeechRecognition": true,
    "useSpeechSynthesis": true,
    "useStorage": true,
    "useStorageAsync": true,
    "useStyleTag": true,
    "useSwipe": true,
    "useTemplateRefsList": true,
    "useTextSelection": true,
    "useThrottle": true,
    "useThrottleFn": true,
    "useThrottledRefHistory": true,
    "useTimeAgo": true,
    "useTimeout": true,
    "useTimeoutFn": true,
    "useTimeoutPoll": true,
    "useTimestamp": true,
    "useTitle": true,
    "useToggle": true,
    "useTransition": true,
    "useUrlSearchParams": true,
    "useUserMedia": true,
    "useVModel": true,
    "useVModels": true,
    "useVibrate": true,
    "useVirtualList": true,
    "useWakeLock": true,
    "useWebNotification": true,
    "useWebSocket": true,
    "useWebWorker": true,
    "useWebWorkerFn": true,
    "useWindowFocus": true,
    "useWindowScroll": true,
    "useWindowSize": true,
    "watch": true,
    "watchAtMost": true,
    "watchDebounced": true,
    "watchEffect": true,
    "watchIgnorable": true,
    "watchOnce": true,
    "watchPausable": true,
    "watchPostEffect": true,
    "watchSyncEffect": true,
    "watchThrottled": true,
    "watchWithFilter": true,
    "whenever": true
  }
}`,"/.eslintrc.cjs":`/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    ".eslintrc-auto-import.json",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
  overrides: [
    {
      files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
    {
      files: ["*.c{js,ts}"],
      env: {
        node: true,
      },
    },
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "vue/multi-word-component-names": "off",
      },
      globals: {
        $ref: "readonly",
        $computed: "readonly",
        $toRef: "readonly",
        $: "readonly",
        $$: "readonly",
      },
    },
  ],
}
`,"/.prettierignore":`packages/framework/types/*
`,"/.prettierrc":`{
  "semi": false,
  "importOrder": ["^@/", "^[./]"],
  "importOrderSortSpecifiers": true,
  "importOrderCaseInsensitive": true,
  "pugSingleQuote": false,
  "pugAttributeSeparator": "none"
}
`,"/LICENSE":`MIT License

Copyright (c) 2022 Timon Lukas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,"/README.md":`# timonlukas.github.io

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for \`.vue\` Imports in TS

TypeScript cannot handle type information for \`.vue\` imports by default, so we replace the \`tsc\` CLI with \`vue-tsc\` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of \`.vue\` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run \`Extensions: Show Built-in Extensions\` from VSCode's command palette
    2) Find \`TypeScript and JavaScript Language Features\`, right click and select \`Disable (Workspace)\`
2. Reload the VSCode window by running \`Developer: Reload Window\` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

\`\`\`sh
npm install
\`\`\`

### Compile and Hot-Reload for Development

\`\`\`sh
npm run dev
\`\`\`

### Type-Check, Compile and Minify for Production

\`\`\`sh
npm run build
\`\`\`

### Run Unit Tests with [Vitest](https://vitest.dev/)

\`\`\`sh
npm run test:unit
\`\`\`

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

\`\`\`sh
npm run build
npm run test:e2e # or \`npm run test:e2e:ci\` for headless testing
\`\`\`

### Lint with [ESLint](https://eslint.org/)

\`\`\`sh
npm run lint
\`\`\`
`,"/cypress.json":`{
  "baseUrl": "http://localhost:5050"
}
`,"/env.d.ts":`/// <reference types="vite/client" />
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
`,"/index.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>timonlukas.github.io</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/packages/framework/main.ts"><\/script>
  </body>
</html>
`,"/package.json":`{
  "name": "timonlukas.github.io",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview --port 5050",
    "test:unit": "vitest --environment jsdom",
    "test:e2e": "start-server-and-test preview http://127.0.0.1:5050/ 'cypress open'",
    "test:e2e:ci": "start-server-and-test preview http://127.0.0.1:5050/ 'cypress run'",
    "typecheck": "vue-tsc --noEmit -p tsconfig.vitest.json --composite false",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --cache --ignore-path .gitignore"
  },
  "dependencies": {
    "@iconify-json/feather": "^1.1.1",
    "@iconify-json/vscode-icons": "^1.1.6",
    "@swan-io/boxed": "^0.9.0",
    "@tailwindcss/forms": "^0.5.1",
    "@tailwindcss/typography": "^0.5.2",
    "@ungap/structured-clone": "^1.0.1",
    "@vue/runtime-core": "^3.2.33",
    "@vue/runtime-dom": "^3.2.33",
    "@vueuse/core": "^8.4.2",
    "@vueuse/router": "^8.5.0",
    "chroma-js": "^2.4.2",
    "comlink": "^4.3.1",
    "dynamics.js": "^1.1.5",
    "glob": "^8.0.3",
    "iwanthue": "^2.0.0",
    "lodash": "^4.17.21",
    "marked": "^4.0.17",
    "naive-ui": "^2.29.0",
    "pinia": "^2.0.13",
    "prismjs": "^1.28.0",
    "pug": "^3.0.2",
    "sass": "^1.51.0",
    "svg-path-parser": "^1.1.0",
    "tailwindcss": "^3.0.24",
    "ts-deepmerge": "^2.0.1",
    "type-fest": "^2.13.0",
    "uuid": "^8.3.2",
    "vue": "^3.2.31",
    "vue-router": "^4.0.14"
  },
  "devDependencies": {
    "@prettier/plugin-pug": "^2.0.0",
    "@rushstack/eslint-patch": "^1.1.0",
    "@trivago/prettier-plugin-sort-imports": "^3.2.0",
    "@types/chroma-js": "^2",
    "@types/glob": "^7.2.0",
    "@types/jsdom": "^16.2.14",
    "@types/lodash": "^4",
    "@types/marked": "^4",
    "@types/node": "^16.11.26",
    "@types/offscreencanvas": "^2019.7.0",
    "@types/prettier": "^2.6.3",
    "@types/prismjs": "^1",
    "@types/svg-path-parser": "^1",
    "@types/ungap__structured-clone": "^0.3.0",
    "@types/uuid": "^8",
    "@types/vue": "^2.0.0",
    "@typescript-eslint/eslint-plugin": "^5.27.1",
    "@typescript-eslint/parser": "^5.27.1",
    "@vitejs/plugin-vue": "^2.3.1",
    "@vue/compiler-sfc": "^3.2.33",
    "@vue/eslint-config-prettier": "^7.0.0",
    "@vue/eslint-config-typescript": "^10.0.0",
    "@vue/test-utils": "^2.0.0-rc.18",
    "@vue/tsconfig": "^0.1.3",
    "autoprefixer": "^10.4.7",
    "cypress": "^9.5.3",
    "eslint": "^8.5.0",
    "eslint-plugin-cypress": "^2.12.1",
    "eslint-plugin-vue": "^8.2.0",
    "jsdom": "^19.0.0",
    "mlly": "^0.5.3",
    "postcss": "^8.4.13",
    "prettier": "^2.5.1",
    "start-server-and-test": "^1.14.0",
    "typescript": "~4.6.3",
    "unplugin-auto-import": "^0.8.7",
    "unplugin-icons": "^0.14.3",
    "unplugin-vue-components": "^0.19.6",
    "vite": "^2.9.1",
    "vite-plugin-comlink": "^3.0.3",
    "vite-plugin-inspect": "^0.5.0",
    "vite-plugin-pages": "^0.23.0",
    "vite-plugin-static-copy": "^0.5.0",
    "vite-tsconfig-paths": "^3.4.1",
    "vitest": "^0.8.1",
    "vue-eslint-parser": "^9.0.2",
    "vue-tsc": "^0.33.9"
  },
  "packageManager": "yarn@3.2.0"
}
`,"/postcss.config.cjs":`module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`,"/tailwind.config.cjs":`module.exports = {
  content: [
    "./pages/**/*.{vue,ts}",
    "./packages/**/*.vue",
    "./node_modules/@hotellistat/robust-ui/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
`,"/tsconfig.app.json":`{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["env.d.ts", "packages/**/*", "pages/**/*"],
  "exclude": ["src/**/__tests__/*"],
  "compilerOptions": {
    "composite": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./packages/*"]
    },
    "lib": ["ESNext", "DOM"],
    "target": "ES2020",
    "types": ["unplugin-icons/types/vue"]
  }
}
`,"/tsconfig.json":`{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.vite-config.json"
    },
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.vitest.json"
    }
  ],
}
`,"/tsconfig.vite-config.json":`{
  "extends": "@vue/tsconfig/tsconfig.node.json",
  "include": ["vite.config.*", "packages/utilities/vite/*.ts"],
  "compilerOptions": {
    "composite": true,
    "types": ["node", "vitest"]
  }
}
`,"/tsconfig.vitest.json":`{
  "extends": "./tsconfig.app.json",
  "exclude": [],
  "compilerOptions": {
    "composite": true,
    "lib": [],
    "types": ["node", "jsdom"]
  }
}
`,"/vite.config.ts":`import vitePluginVue from "@vitejs/plugin-vue"
import unpluginAutoImport from "unplugin-auto-import/vite"
import IconsResolver from "unplugin-icons/resolver"
import unpluginIcons from "unplugin-icons/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
import unpluginComponents from "unplugin-vue-components/vite"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import { comlink as vitePluginComlink } from "vite-plugin-comlink"
import vitePluginInspect from "vite-plugin-inspect"
import vitePluginPages from "vite-plugin-pages"
import utils from "./packages/utilities/vite"

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./packages", self.location.href)),
    },
  },
  plugins: [
    vitePluginInspect(),
    unpluginAutoImport({
      dts: fileURLToPath(
        new URL("./packages/framework/types/auto-import.d.ts", import.meta.url)
      ),
      imports: ["vue", "vue-router", "@vueuse/core"],
      eslintrc: {
        enabled: true,
      },
    }),
    unpluginIcons(),
    vitePluginVue({
      reactivityTransform: true,
    }),
    vitePluginPages({
      dirs: utils.pages.fetchDirs(),
    }),
    unpluginComponents({
      resolvers: [NaiveUiResolver(), IconsResolver()],
      dts: fileURLToPath(
        new URL("./packages/framework/types/components.d.ts", import.meta.url)
      ),
    }),
    vitePluginComlink(),
    utils.plugins.ViteGenerateIndex({
      dirs: ["packages/*/components", "packages/framework/components/**"],
      extension: "ts",
      excludeFiles: [/^.+(\\.entry\\.)/gm],
    }),
  ],
  worker: {
    format: "es",
    plugins: [vitePluginComlink()],
  },
})
`,"/yarn.lock":`# This file is generated by running "yarn install" inside your project.
# Manual changes might be lost - proceed with caution!

__metadata:
  version: 6
  cacheKey: 8

"@antfu/install-pkg@npm:^0.1.0":
  version: 0.1.0
  resolution: "@antfu/install-pkg@npm:0.1.0"
  dependencies:
    execa: ^5.1.1
    find-up: ^5.0.0
  checksum: 5ab86edcc90a85ceab7e56ecd3499b05ca93ee9eaa176da582a79d451939c701ad25e847e774b7d3f19e99eac845d06bf27685ffe969f13a475df9a9124806b3
  languageName: node
  linkType: hard

"@antfu/utils@npm:^0.5.0, @antfu/utils@npm:^0.5.1":
  version: 0.5.1
  resolution: "@antfu/utils@npm:0.5.1"
  checksum: 54a64a1a7d451d07be2ead39dee534281f0cca35db2e72b995f4d81baedfe4c8889f428e46ebefe32c7f4444fc2d5389a5a52223fe8cef01cc98415c8ffc9491
  languageName: node
  linkType: hard

"@antfu/utils@npm:^0.5.2":
  version: 0.5.2
  resolution: "@antfu/utils@npm:0.5.2"
  checksum: 9b91446b2dbb823abeeba1cc33d6ebf701a462923408ad4751fbe162da46ae0669c774c2b5435fc77691dc207ce5de5945e693d5163e07d6ef42e376b04c7af4
  languageName: node
  linkType: hard

"@babel/code-frame@npm:^7.12.13, @babel/code-frame@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/code-frame@npm:7.16.7"
  dependencies:
    "@babel/highlight": ^7.16.7
  checksum: db2f7faa31bc2c9cf63197b481b30ea57147a5fc1a6fab60e5d6c02cdfbf6de8e17b5121f99917b3dabb5eeb572da078312e70697415940383efc140d4e0808b
  languageName: node
  linkType: hard

"@babel/compat-data@npm:^7.17.10":
  version: 7.17.10
  resolution: "@babel/compat-data@npm:7.17.10"
  checksum: e85051087cd4690de5061909a2dd2d7f8b6434a3c2e30be6c119758db2027ae1845bcd75a81127423dd568b706ac6994a1a3d7d701069a23bf5cfe900728290b
  languageName: node
  linkType: hard

"@babel/core@npm:7.13.10":
  version: 7.13.10
  resolution: "@babel/core@npm:7.13.10"
  dependencies:
    "@babel/code-frame": ^7.12.13
    "@babel/generator": ^7.13.9
    "@babel/helper-compilation-targets": ^7.13.10
    "@babel/helper-module-transforms": ^7.13.0
    "@babel/helpers": ^7.13.10
    "@babel/parser": ^7.13.10
    "@babel/template": ^7.12.13
    "@babel/traverse": ^7.13.0
    "@babel/types": ^7.13.0
    convert-source-map: ^1.7.0
    debug: ^4.1.0
    gensync: ^1.0.0-beta.2
    json5: ^2.1.2
    lodash: ^4.17.19
    semver: ^6.3.0
    source-map: ^0.5.0
  checksum: 9b3362fd02e6a4f3ad642893312ec3d22713c4eeb2571c994d49c31f38d24893a6a18f4b49abb8d56b510e116278608eaddde2ca72ccb39ab29350efa5af39de
  languageName: node
  linkType: hard

"@babel/generator@npm:7.13.9":
  version: 7.13.9
  resolution: "@babel/generator@npm:7.13.9"
  dependencies:
    "@babel/types": ^7.13.0
    jsesc: ^2.5.1
    source-map: ^0.5.0
  checksum: 1b0e9fa1b5ea6656f0abeeedc99ff7bffa455d7bf118f4d17a75d80c439206b4ba3e1071c104b486b7447689512969286cbde505e6169ab38cf437e13ca54225
  languageName: node
  linkType: hard

"@babel/generator@npm:^7.13.0, @babel/generator@npm:^7.13.9, @babel/generator@npm:^7.17.10":
  version: 7.17.10
  resolution: "@babel/generator@npm:7.17.10"
  dependencies:
    "@babel/types": ^7.17.10
    "@jridgewell/gen-mapping": ^0.1.0
    jsesc: ^2.5.1
  checksum: 9ec596a6ffec7bec239133a4ba79d4f834e6c894019accb1c70a7a5affbec9d0912d3baef200edd9d48e553d4ef72abcbffbc73cfb7d75f327c24186e887f79c
  languageName: node
  linkType: hard

"@babel/helper-compilation-targets@npm:^7.13.10":
  version: 7.17.10
  resolution: "@babel/helper-compilation-targets@npm:7.17.10"
  dependencies:
    "@babel/compat-data": ^7.17.10
    "@babel/helper-validator-option": ^7.16.7
    browserslist: ^4.20.2
    semver: ^6.3.0
  peerDependencies:
    "@babel/core": ^7.0.0
  checksum: 5f547c7ebd372e90fa72c2aaea867e7193166e9f469dec5acde4f0e18a78b80bdca8e02a0f641f3e998be984fb5b802c729a9034faaee8b1a9ef6670cb76f120
  languageName: node
  linkType: hard

"@babel/helper-environment-visitor@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-environment-visitor@npm:7.16.7"
  dependencies:
    "@babel/types": ^7.16.7
  checksum: c03a10105d9ebd1fe632a77356b2e6e2f3c44edba9a93b0dc3591b6a66bd7a2e323dd9502f9ce96fc6401234abff1907aa877b6674f7826b61c953f7c8204bbe
  languageName: node
  linkType: hard

"@babel/helper-function-name@npm:^7.12.13, @babel/helper-function-name@npm:^7.17.9":
  version: 7.17.9
  resolution: "@babel/helper-function-name@npm:7.17.9"
  dependencies:
    "@babel/template": ^7.16.7
    "@babel/types": ^7.17.0
  checksum: a59b2e5af56d8f43b9b0019939a43774754beb7cb01a211809ca8031c71890999d07739e955343135ec566c4d8ff725435f1f60fb0af3bb546837c1f9f84f496
  languageName: node
  linkType: hard

"@babel/helper-hoist-variables@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-hoist-variables@npm:7.16.7"
  dependencies:
    "@babel/types": ^7.16.7
  checksum: 6ae1641f4a751cd9045346e3f61c3d9ec1312fd779ab6d6fecfe2a96e59a481ad5d7e40d2a840894c13b3fd6114345b157f9e3062fc5f1580f284636e722de60
  languageName: node
  linkType: hard

"@babel/helper-module-imports@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-module-imports@npm:7.16.7"
  dependencies:
    "@babel/types": ^7.16.7
  checksum: ddd2c4a600a2e9a4fee192ab92bf35a627c5461dbab4af31b903d9ba4d6b6e59e0ff3499fde4e2e9a0eebe24906f00b636f8b4d9bd72ff24d50e6618215c3212
  languageName: node
  linkType: hard

"@babel/helper-module-transforms@npm:^7.13.0":
  version: 7.17.7
  resolution: "@babel/helper-module-transforms@npm:7.17.7"
  dependencies:
    "@babel/helper-environment-visitor": ^7.16.7
    "@babel/helper-module-imports": ^7.16.7
    "@babel/helper-simple-access": ^7.17.7
    "@babel/helper-split-export-declaration": ^7.16.7
    "@babel/helper-validator-identifier": ^7.16.7
    "@babel/template": ^7.16.7
    "@babel/traverse": ^7.17.3
    "@babel/types": ^7.17.0
  checksum: 0b8f023aa7ff82dc4864349d54c4557865ad8ba54d78f6d78a86b05ca40f65c2d60acb4a54c5c309e7a4356beb9a89b876e54af4b3c4801ad25f62ec3721f0ae
  languageName: node
  linkType: hard

"@babel/helper-simple-access@npm:^7.17.7":
  version: 7.17.7
  resolution: "@babel/helper-simple-access@npm:7.17.7"
  dependencies:
    "@babel/types": ^7.17.0
  checksum: 58a9bfd054720024f6ff47fbb113c96061dc2bd31a5e5285756bd3c2e83918c6926900e00150d0fb175d899494fe7d69bf2a8b278c32ef6f6bea8d032e6a3831
  languageName: node
  linkType: hard

"@babel/helper-split-export-declaration@npm:^7.12.13, @babel/helper-split-export-declaration@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-split-export-declaration@npm:7.16.7"
  dependencies:
    "@babel/types": ^7.16.7
  checksum: e10aaf135465c55114627951b79115f24bc7af72ecbb58d541d66daf1edaee5dde7cae3ec8c3639afaf74526c03ae3ce723444e3b5b3dc77140c456cd84bcaa1
  languageName: node
  linkType: hard

"@babel/helper-validator-identifier@npm:^7.12.11, @babel/helper-validator-identifier@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-validator-identifier@npm:7.16.7"
  checksum: dbb3db9d184343152520a209b5684f5e0ed416109cde82b428ca9c759c29b10c7450657785a8b5c5256aa74acc6da491c1f0cf6b784939f7931ef82982051b69
  languageName: node
  linkType: hard

"@babel/helper-validator-option@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-validator-option@npm:7.16.7"
  checksum: c5ccc451911883cc9f12125d47be69434f28094475c1b9d2ada7c3452e6ac98a1ee8ddd364ca9e3f9855fcdee96cdeafa32543ebd9d17fee7a1062c202e80570
  languageName: node
  linkType: hard

"@babel/helpers@npm:^7.13.10":
  version: 7.17.9
  resolution: "@babel/helpers@npm:7.17.9"
  dependencies:
    "@babel/template": ^7.16.7
    "@babel/traverse": ^7.17.9
    "@babel/types": ^7.17.0
  checksum: 3c6db861e4c82fff2de3efb4ad12e32658c50c29920597cd0979390659b202e5849acd9542e0e2453167a52ccc30156ee4455d64d0e330f020d991d7551566f8
  languageName: node
  linkType: hard

"@babel/highlight@npm:^7.16.7":
  version: 7.17.9
  resolution: "@babel/highlight@npm:7.17.9"
  dependencies:
    "@babel/helper-validator-identifier": ^7.16.7
    chalk: ^2.0.0
    js-tokens: ^4.0.0
  checksum: 7bdf10228f2e4d18f48f114411ed584380d356e7c168d7582c14abd8df9909b2fc09e0a7cd334f47c3eb0bc17e639e0c8d9688c6afd5d09a2bdbf0ac193b11fd
  languageName: node
  linkType: hard

"@babel/parser@npm:7.14.6":
  version: 7.14.6
  resolution: "@babel/parser@npm:7.14.6"
  bin:
    parser: ./bin/babel-parser.js
  checksum: 104482e07971a78a3d68a0c329b1303981a272f55a510d39c93dac3c293f207ec863329046abc5d8bb86db58c49670cc607654793470a87ccd386544c2ccf298
  languageName: node
  linkType: hard

"@babel/parser@npm:^7.13.0, @babel/parser@npm:^7.13.10, @babel/parser@npm:^7.16.4, @babel/parser@npm:^7.16.7, @babel/parser@npm:^7.17.10, @babel/parser@npm:^7.6.0, @babel/parser@npm:^7.9.6":
  version: 7.17.10
  resolution: "@babel/parser@npm:7.17.10"
  bin:
    parser: ./bin/babel-parser.js
  checksum: a9493d9fb8625e0904a178703866c8ee4d3a6003f0954b08df9f772b54dae109c69376812b74732e0c3e1a7f1d5b30915577a1db12e5e16b0abee083539df574
  languageName: node
  linkType: hard

"@babel/template@npm:^7.12.13, @babel/template@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/template@npm:7.16.7"
  dependencies:
    "@babel/code-frame": ^7.16.7
    "@babel/parser": ^7.16.7
    "@babel/types": ^7.16.7
  checksum: 10cd112e89276e00f8b11b55a51c8b2f1262c318283a980f4d6cdb0286dc05734b9aaeeb9f3ad3311900b09bc913e02343fcaa9d4a4f413964aaab04eb84ac4a
  languageName: node
  linkType: hard

"@babel/traverse@npm:7.13.0":
  version: 7.13.0
  resolution: "@babel/traverse@npm:7.13.0"
  dependencies:
    "@babel/code-frame": ^7.12.13
    "@babel/generator": ^7.13.0
    "@babel/helper-function-name": ^7.12.13
    "@babel/helper-split-export-declaration": ^7.12.13
    "@babel/parser": ^7.13.0
    "@babel/types": ^7.13.0
    debug: ^4.1.0
    globals: ^11.1.0
    lodash: ^4.17.19
  checksum: 7d584b5541396b02f6973ba8ec8a067f2a6c2fd2e894c663dfae36e86e65a004a6865fbffbfc89ca040c894f9c12134bb971d31f09e7ec32c28e9b18bf737f2a
  languageName: node
  linkType: hard

"@babel/traverse@npm:^7.13.0, @babel/traverse@npm:^7.17.3, @babel/traverse@npm:^7.17.9":
  version: 7.17.10
  resolution: "@babel/traverse@npm:7.17.10"
  dependencies:
    "@babel/code-frame": ^7.16.7
    "@babel/generator": ^7.17.10
    "@babel/helper-environment-visitor": ^7.16.7
    "@babel/helper-function-name": ^7.17.9
    "@babel/helper-hoist-variables": ^7.16.7
    "@babel/helper-split-export-declaration": ^7.16.7
    "@babel/parser": ^7.17.10
    "@babel/types": ^7.17.10
    debug: ^4.1.0
    globals: ^11.1.0
  checksum: 44ec0a59aa274b59464d52b1796eb6e54c67ae0f946de0d608068e28b1ab7065bdf53c0169d9102854cb00aa01944c83e722f08aeab96d9cc6bf56f8aede70fd
  languageName: node
  linkType: hard

"@babel/types@npm:7.13.0":
  version: 7.13.0
  resolution: "@babel/types@npm:7.13.0"
  dependencies:
    "@babel/helper-validator-identifier": ^7.12.11
    lodash: ^4.17.19
    to-fast-properties: ^2.0.0
  checksum: 3dbb08add345325a49e1deebefa8d3774a8ab055c4be675c339a389358f4b3443652ded4bfdb230b342c6af12593a6fd3fb95156564e7ec84081018815896821
  languageName: node
  linkType: hard

"@babel/types@npm:^7.13.0, @babel/types@npm:^7.16.7, @babel/types@npm:^7.17.0, @babel/types@npm:^7.17.10, @babel/types@npm:^7.6.1, @babel/types@npm:^7.8.3, @babel/types@npm:^7.9.6":
  version: 7.17.10
  resolution: "@babel/types@npm:7.17.10"
  dependencies:
    "@babel/helper-validator-identifier": ^7.16.7
    to-fast-properties: ^2.0.0
  checksum: 40cfc3f43a3ab7374df8ee6844793f804c65e7bea0fd1b090886b425106ba26e16e8fa698ae4b2caf2746083fe3e62f03f12997a5982e0d131700f17cbdcfca1
  languageName: node
  linkType: hard

"@colors/colors@npm:1.5.0":
  version: 1.5.0
  resolution: "@colors/colors@npm:1.5.0"
  checksum: d64d5260bed1d5012ae3fc617d38d1afc0329fec05342f4e6b838f46998855ba56e0a73833f4a80fa8378c84810da254f76a8a19c39d038260dc06dc4e007425
  languageName: node
  linkType: hard

"@css-render/plugin-bem@npm:^0.15.10":
  version: 0.15.10
  resolution: "@css-render/plugin-bem@npm:0.15.10"
  peerDependencies:
    css-render: ~0.15.10
  checksum: cbab72a7b5e6cec84041f8ea01b4e5c6d83e44f2a5c8e6cbba3b2a41a8b5ed5faf22390336d70648b5e471d7aab6b13123c0cdaea1bd21c6678d18abd399a203
  languageName: node
  linkType: hard

"@css-render/vue3-ssr@npm:^0.15.10":
  version: 0.15.10
  resolution: "@css-render/vue3-ssr@npm:0.15.10"
  peerDependencies:
    vue: ^3.0.11
  checksum: 7977e0c440d34cd03743809313bea7362e913bf20acb988a1019bbbd8c2aa2c045794344b625fdd6d2bbb1bef9bcf9dccc866978d524b9a358389068c58c81a8
  languageName: node
  linkType: hard

"@cush/relative@npm:^1.0.0":
  version: 1.0.0
  resolution: "@cush/relative@npm:1.0.0"
  checksum: 708681b61986e5f74e44ca5824503c23adb02c088b998429e8ecbbb8e7a4133b9be491cdb6d2b24b39fd9b55fcef109d41ac4f69b74f1f9466268f3c49c020a5
  languageName: node
  linkType: hard

"@cypress/request@npm:^2.88.10":
  version: 2.88.10
  resolution: "@cypress/request@npm:2.88.10"
  dependencies:
    aws-sign2: ~0.7.0
    aws4: ^1.8.0
    caseless: ~0.12.0
    combined-stream: ~1.0.6
    extend: ~3.0.2
    forever-agent: ~0.6.1
    form-data: ~2.3.2
    http-signature: ~1.3.6
    is-typedarray: ~1.0.0
    isstream: ~0.1.2
    json-stringify-safe: ~5.0.1
    mime-types: ~2.1.19
    performance-now: ^2.1.0
    qs: ~6.5.2
    safe-buffer: ^5.1.2
    tough-cookie: ~2.5.0
    tunnel-agent: ^0.6.0
    uuid: ^8.3.2
  checksum: 69c3e3b332e9be4866a900f6bcca5d274d8cea6c99707fbcce061de8dbab11c9b1e39f4c017f6e83e6e682717781d4f6106fd6b7cf9546580fcfac353b6676cf
  languageName: node
  linkType: hard

"@cypress/xvfb@npm:^1.2.4":
  version: 1.2.4
  resolution: "@cypress/xvfb@npm:1.2.4"
  dependencies:
    debug: ^3.1.0
    lodash.once: ^4.1.1
  checksum: 7bdcdaeb1bb692ec9d9bf8ec52538aa0bead6764753f4a067a171a511807a43fab016f7285a56bef6a606c2467ff3f1365e1ad2d2d583b81beed849ee1573fd1
  languageName: node
  linkType: hard

"@emotion/hash@npm:~0.8.0":
  version: 0.8.0
  resolution: "@emotion/hash@npm:0.8.0"
  checksum: 4b35d88a97e67275c1d990c96d3b0450451d089d1508619488fc0acb882cb1ac91e93246d471346ebd1b5402215941ef4162efe5b51534859b39d8b3a0e3ffaa
  languageName: node
  linkType: hard

"@eslint/eslintrc@npm:^1.2.3":
  version: 1.2.3
  resolution: "@eslint/eslintrc@npm:1.2.3"
  dependencies:
    ajv: ^6.12.4
    debug: ^4.3.2
    espree: ^9.3.2
    globals: ^13.9.0
    ignore: ^5.2.0
    import-fresh: ^3.2.1
    js-yaml: ^4.1.0
    minimatch: ^3.1.2
    strip-json-comments: ^3.1.1
  checksum: 48e7b7ac05cd514eee2ebb1d487600f0dd637ac21f63605e353cff6a08c7223275fe4f571d15ee9deae4e78c53edc73369ffcbed15fba4dfc1806179dbf4dc85
  languageName: node
  linkType: hard

"@gar/promisify@npm:^1.1.3":
  version: 1.1.3
  resolution: "@gar/promisify@npm:1.1.3"
  checksum: 4059f790e2d07bf3c3ff3e0fec0daa8144fe35c1f6e0111c9921bd32106adaa97a4ab096ad7dab1e28ee6a9060083c4d1a4ada42a7f5f3f7a96b8812e2b757c1
  languageName: node
  linkType: hard

"@hapi/hoek@npm:^9.0.0":
  version: 9.3.0
  resolution: "@hapi/hoek@npm:9.3.0"
  checksum: 4771c7a776242c3c022b168046af4e324d116a9d2e1d60631ee64f474c6e38d1bb07092d898bf95c7bc5d334c5582798a1456321b2e53ca817d4e7c88bc25b43
  languageName: node
  linkType: hard

"@hapi/topo@npm:^5.0.0":
  version: 5.1.0
  resolution: "@hapi/topo@npm:5.1.0"
  dependencies:
    "@hapi/hoek": ^9.0.0
  checksum: 604dfd5dde76d5c334bd03f9001fce69c7ce529883acf92da96f4fe7e51221bf5e5110e964caca287a6a616ba027c071748ab636ff178ad750547fba611d6014
  languageName: node
  linkType: hard

"@humanwhocodes/config-array@npm:^0.9.2":
  version: 0.9.5
  resolution: "@humanwhocodes/config-array@npm:0.9.5"
  dependencies:
    "@humanwhocodes/object-schema": ^1.2.1
    debug: ^4.1.1
    minimatch: ^3.0.4
  checksum: 8ba6281bc0590f6c6eadeefc14244b5a3e3f5903445aadd1a32099ed80e753037674026ce1b3c945ab93561bea5eb29e3c5bff67060e230c295595ba517a3492
  languageName: node
  linkType: hard

"@humanwhocodes/object-schema@npm:^1.2.1":
  version: 1.2.1
  resolution: "@humanwhocodes/object-schema@npm:1.2.1"
  checksum: a824a1ec31591231e4bad5787641f59e9633827d0a2eaae131a288d33c9ef0290bd16fda8da6f7c0fcb014147865d12118df10db57f27f41e20da92369fcb3f1
  languageName: node
  linkType: hard

"@iconify-json/feather@npm:^1.1.1":
  version: 1.1.1
  resolution: "@iconify-json/feather@npm:1.1.1"
  dependencies:
    "@iconify/types": ^1.0.12
  checksum: 897b45598d9f646ca25d93eae1f584798643cec59058a589cdcd51936eb5e284b962709844d9f5e350fa08f5ffab287c3f6f43104bb0f3e310d474df5980fa43
  languageName: node
  linkType: hard

"@iconify-json/vscode-icons@npm:^1.1.6":
  version: 1.1.6
  resolution: "@iconify-json/vscode-icons@npm:1.1.6"
  dependencies:
    "@iconify/types": ^1.1.0
  checksum: 0d7b1b14ca7660b503a9c243447c414e52a0a4b181567d22838ce441bcc32586286ed9b4ae58015460f6e1974474a21e86f42fc59bc64cb7a6690c1fc5b928f1
  languageName: node
  linkType: hard

"@iconify/types@npm:^1.0.12, @iconify/types@npm:^1.1.0":
  version: 1.1.0
  resolution: "@iconify/types@npm:1.1.0"
  checksum: beffcdbf14e879ff74e79ac29ea0f4f4874f9df632f1994d97395b3f05cbeebaf10f1abc73cf850dc7444924cd57ed92e0e2ca55bacfe3374eff7542d489fbd0
  languageName: node
  linkType: hard

"@iconify/utils@npm:^1.0.32":
  version: 1.0.32
  resolution: "@iconify/utils@npm:1.0.32"
  dependencies:
    "@antfu/install-pkg": ^0.1.0
    "@antfu/utils": ^0.5.0
    "@iconify/types": ^1.1.0
    debug: ^4.3.4
    kolorist: ^1.5.1
    local-pkg: ^0.4.1
  checksum: 914a24beb8dc8adc7064c937979a7ebfa9e577f3024cc92f29934a0dc07430edee44b589acb137a4c234aa8f3a96178c97adf3ca827cf72f6621be042d9eb620
  languageName: node
  linkType: hard

"@jridgewell/gen-mapping@npm:^0.1.0":
  version: 0.1.1
  resolution: "@jridgewell/gen-mapping@npm:0.1.1"
  dependencies:
    "@jridgewell/set-array": ^1.0.0
    "@jridgewell/sourcemap-codec": ^1.4.10
  checksum: 3bcc21fe786de6ffbf35c399a174faab05eb23ce6a03e8769569de28abbf4facc2db36a9ddb0150545ae23a8d35a7cf7237b2aa9e9356a7c626fb4698287d5cc
  languageName: node
  linkType: hard

"@jridgewell/set-array@npm:^1.0.0":
  version: 1.1.1
  resolution: "@jridgewell/set-array@npm:1.1.1"
  checksum: cc5d91e0381c347e3edee4ca90b3c292df9e6e55f29acbe0dd97de8651b4730e9ab761406fd572effa79972a0edc55647b627f8c72315e276d959508853d9bf2
  languageName: node
  linkType: hard

"@jridgewell/sourcemap-codec@npm:^1.4.10":
  version: 1.4.13
  resolution: "@jridgewell/sourcemap-codec@npm:1.4.13"
  checksum: f14449096f60a5f921262322fef65ce0bbbfb778080b3b20212080bcefdeba621c43a58c27065bd536ecb4cc767b18eb9c45f15b6b98a4970139572b60603a1c
  languageName: node
  linkType: hard

"@juggle/resize-observer@npm:^3.3.1":
  version: 3.3.1
  resolution: "@juggle/resize-observer@npm:3.3.1"
  checksum: ddabc4044276a2cb57d469c4917206c7e39f2463aa8e3430e33e4eda554412afe29c22afa40e6708b49dad5d56768dc83acd68a704b1dcd49a0906bb96b991b2
  languageName: node
  linkType: hard

"@nodelib/fs.scandir@npm:2.1.5":
  version: 2.1.5
  resolution: "@nodelib/fs.scandir@npm:2.1.5"
  dependencies:
    "@nodelib/fs.stat": 2.0.5
    run-parallel: ^1.1.9
  checksum: a970d595bd23c66c880e0ef1817791432dbb7acbb8d44b7e7d0e7a22f4521260d4a83f7f9fd61d44fda4610105577f8f58a60718105fb38352baed612fd79e59
  languageName: node
  linkType: hard

"@nodelib/fs.stat@npm:2.0.5, @nodelib/fs.stat@npm:^2.0.2":
  version: 2.0.5
  resolution: "@nodelib/fs.stat@npm:2.0.5"
  checksum: 012480b5ca9d97bff9261571dbbec7bbc6033f69cc92908bc1ecfad0792361a5a1994bc48674b9ef76419d056a03efadfce5a6cf6dbc0a36559571a7a483f6f0
  languageName: node
  linkType: hard

"@nodelib/fs.walk@npm:^1.2.3":
  version: 1.2.8
  resolution: "@nodelib/fs.walk@npm:1.2.8"
  dependencies:
    "@nodelib/fs.scandir": 2.1.5
    fastq: ^1.6.0
  checksum: 190c643f156d8f8f277bf2a6078af1ffde1fd43f498f187c2db24d35b4b4b5785c02c7dc52e356497b9a1b65b13edc996de08de0b961c32844364da02986dc53
  languageName: node
  linkType: hard

"@npmcli/fs@npm:^2.1.0":
  version: 2.1.0
  resolution: "@npmcli/fs@npm:2.1.0"
  dependencies:
    "@gar/promisify": ^1.1.3
    semver: ^7.3.5
  checksum: 6ec6d678af6da49f9dac50cd882d7f661934dd278972ffbaacde40d9eaa2871292d634000a0cca9510f6fc29855fbd4af433e1adbff90a524ec3eaf140f1219b
  languageName: node
  linkType: hard

"@npmcli/move-file@npm:^2.0.0":
  version: 2.0.0
  resolution: "@npmcli/move-file@npm:2.0.0"
  dependencies:
    mkdirp: ^1.0.4
    rimraf: ^3.0.2
  checksum: 1388777b507b0c592d53f41b9d182e1a8de7763bc625fc07999b8edbc22325f074e5b3ec90af79c89d6987fdb2325bc66d59f483258543c14a43661621f841b0
  languageName: node
  linkType: hard

"@polka/url@npm:^1.0.0-next.20":
  version: 1.0.0-next.21
  resolution: "@polka/url@npm:1.0.0-next.21"
  checksum: c7654046d38984257dd639eab3dc770d1b0340916097b2fac03ce5d23506ada684e05574a69b255c32ea6a144a957c8cd84264159b545fca031c772289d88788
  languageName: node
  linkType: hard

"@prettier/plugin-pug@npm:^2.0.0":
  version: 2.0.0
  resolution: "@prettier/plugin-pug@npm:2.0.0"
  dependencies:
    pug-lexer: ^5.0.0
  peerDependencies:
    prettier: ^2.3.0
  checksum: fecb759f5c64dbe2b5b94a0276819cb8862a9f75eee1d6be0825fe202dbd96689fcf16d19edb224bad32ecd6db887fd637e729081d92f71b587dea02bd0ce2dd
  languageName: node
  linkType: hard

"@rollup/pluginutils@npm:^4.2.1":
  version: 4.2.1
  resolution: "@rollup/pluginutils@npm:4.2.1"
  dependencies:
    estree-walker: ^2.0.1
    picomatch: ^2.2.2
  checksum: 6bc41f22b1a0f1efec3043899e4d3b6b1497b3dea4d94292d8f83b4cf07a1073ecbaedd562a22d11913ff7659f459677b01b09e9598a98936e746780ecc93a12
  languageName: node
  linkType: hard

"@rushstack/eslint-patch@npm:^1.1.0":
  version: 1.1.3
  resolution: "@rushstack/eslint-patch@npm:1.1.3"
  checksum: 53752d1e34e45a91b30a016b837c33054fcbd0a295c0312b0812dab78289ea680d7c0c3f19c1f885f49764d416727747133765ff5bfce31a9c4cc93c7a56ebe1
  languageName: node
  linkType: hard

"@sideway/address@npm:^4.1.3":
  version: 4.1.4
  resolution: "@sideway/address@npm:4.1.4"
  dependencies:
    "@hapi/hoek": ^9.0.0
  checksum: b9fca2a93ac2c975ba12e0a6d97853832fb1f4fb02393015e012b47fa916a75ca95102d77214b2a29a2784740df2407951af8c5dde054824c65577fd293c4cdb
  languageName: node
  linkType: hard

"@sideway/formula@npm:^3.0.0":
  version: 3.0.0
  resolution: "@sideway/formula@npm:3.0.0"
  checksum: 8ae26a0ed6bc84f7310be6aae6eb9d81e97f382619fc69025d346871a707eaab0fa38b8c857e3f0c35a19923de129f42d35c50b8010c928d64aab41578580ec4
  languageName: node
  linkType: hard

"@sideway/pinpoint@npm:^2.0.0":
  version: 2.0.0
  resolution: "@sideway/pinpoint@npm:2.0.0"
  checksum: 0f4491e5897fcf5bf02c46f5c359c56a314e90ba243f42f0c100437935daa2488f20482f0f77186bd6bf43345095a95d8143ecf8b1f4d876a7bc0806aba9c3d2
  languageName: node
  linkType: hard

"@swan-io/boxed@npm:^0.9.0":
  version: 0.9.0
  resolution: "@swan-io/boxed@npm:0.9.0"
  checksum: f428fc11aa5bcb80fced718542e98cba18697c450ae929a3fa6e954a13d10d7b2a2004b484a2219e37229c19f2ad8964947d2e8c858353e1102dc26fa3d93418
  languageName: node
  linkType: hard

"@tailwindcss/forms@npm:^0.5.1":
  version: 0.5.1
  resolution: "@tailwindcss/forms@npm:0.5.1"
  dependencies:
    mini-svg-data-uri: ^1.2.3
  peerDependencies:
    tailwindcss: ">=3.0.0 || >= 3.0.0-alpha.1"
  checksum: c9dc0124235692db6205960a16cfc8fa09ffd6491b9989cddaaaaf92bf252b9029de2e766dc1714aed056d56f9c347d5548dbb5b9a95f512b3301e20054fdbc9
  languageName: node
  linkType: hard

"@tailwindcss/typography@npm:^0.5.2":
  version: 0.5.2
  resolution: "@tailwindcss/typography@npm:0.5.2"
  dependencies:
    lodash.castarray: ^4.4.0
    lodash.isplainobject: ^4.0.6
    lodash.merge: ^4.6.2
  peerDependencies:
    tailwindcss: "*"
  checksum: f6c27e32c9b48b0e906561d1e9dd3eec8fd5efc9792fd691269ceaa9d30d35bc715023215ec83ff8e5475c38af69e164d577672d935813b70e04b1c820b2ea8e
  languageName: node
  linkType: hard

"@tootallnate/once@npm:2":
  version: 2.0.0
  resolution: "@tootallnate/once@npm:2.0.0"
  checksum: ad87447820dd3f24825d2d947ebc03072b20a42bfc96cbafec16bff8bbda6c1a81fcb0be56d5b21968560c5359a0af4038a68ba150c3e1694fe4c109a063bed8
  languageName: node
  linkType: hard

"@trivago/prettier-plugin-sort-imports@npm:^3.2.0":
  version: 3.2.0
  resolution: "@trivago/prettier-plugin-sort-imports@npm:3.2.0"
  dependencies:
    "@babel/core": 7.13.10
    "@babel/generator": 7.13.9
    "@babel/parser": 7.14.6
    "@babel/traverse": 7.13.0
    "@babel/types": 7.13.0
    javascript-natural-sort: 0.7.1
    lodash: 4.17.21
  peerDependencies:
    prettier: 2.x
  checksum: 22461433fa0dc82621713cdfb88f8f527c6c41729e9859bb7f0106ef23c35b0da591ee7fed63516be7e8df5604dc8055f0c7e200fed1ef97f44000c9fe25a890
  languageName: node
  linkType: hard

"@types/chai-subset@npm:^1.3.3":
  version: 1.3.3
  resolution: "@types/chai-subset@npm:1.3.3"
  dependencies:
    "@types/chai": "*"
  checksum: 4481da7345022995f5a105e6683744f7203d2c3d19cfe88d8e17274d045722948abf55e0adfd97709e0f043dade37a4d4e98cd4c660e2e8a14f23e6ecf79418f
  languageName: node
  linkType: hard

"@types/chai@npm:*, @types/chai@npm:^4.3.0":
  version: 4.3.1
  resolution: "@types/chai@npm:4.3.1"
  checksum: 2ee246b76c469cd620a7a1876a73bc597074361b67d547b4bd96a0c1adb43597ede2d8589ab626192e14349d83cbb646cc11e2c179eeeb43ff11596de94d82c4
  languageName: node
  linkType: hard

"@types/chroma-js@npm:^2":
  version: 2.1.3
  resolution: "@types/chroma-js@npm:2.1.3"
  checksum: 8c94c421b9613c534471b18912b11cdbb267ab8da380ce6d484115f48fb08583e7ab1f7e26fa0e7811a0d42ac531fe9a9b8475afe7b7b91d86cd08b758ca3add
  languageName: node
  linkType: hard

"@types/debug@npm:^4.1.7":
  version: 4.1.7
  resolution: "@types/debug@npm:4.1.7"
  dependencies:
    "@types/ms": "*"
  checksum: 0a7b89d8ed72526858f0b61c6fd81f477853e8c4415bb97f48b1b5545248d2ae389931680b94b393b993a7cfe893537a200647d93defe6d87159b96812305adc
  languageName: node
  linkType: hard

"@types/glob@npm:^7.2.0":
  version: 7.2.0
  resolution: "@types/glob@npm:7.2.0"
  dependencies:
    "@types/minimatch": "*"
    "@types/node": "*"
  checksum: 6ae717fedfdfdad25f3d5a568323926c64f52ef35897bcac8aca8e19bc50c0bd84630bbd063e5d52078b2137d8e7d3c26eabebd1a2f03ff350fff8a91e79fc19
  languageName: node
  linkType: hard

"@types/jest@npm:^27.0.1":
  version: 27.5.1
  resolution: "@types/jest@npm:27.5.1"
  dependencies:
    jest-matcher-utils: ^27.0.0
    pretty-format: ^27.0.0
  checksum: be20e39f7aaf17179109c0060d0a0489cec2034d4e2e28a631284c7ecd13c5ae52f62697a33a0e89b03b6cfe54e9d5e8c2bd387ab2bd90d6071d68c63b86d1e3
  languageName: node
  linkType: hard

"@types/jsdom@npm:^16.2.14":
  version: 16.2.14
  resolution: "@types/jsdom@npm:16.2.14"
  dependencies:
    "@types/node": "*"
    "@types/parse5": "*"
    "@types/tough-cookie": "*"
  checksum: 12bb926fa74ea07c0ba0bfd5bf185ac0fd771b28666a5e8784b9af4bb96bb0c51fc5f494eff7da1d3cd804e4757f640a23c344c1cd5d188f95ab0ab51770d88b
  languageName: node
  linkType: hard

"@types/json-schema@npm:^7.0.9":
  version: 7.0.11
  resolution: "@types/json-schema@npm:7.0.11"
  checksum: 527bddfe62db9012fccd7627794bd4c71beb77601861055d87e3ee464f2217c85fca7a4b56ae677478367bbd248dbde13553312b7d4dbc702a2f2bbf60c4018d
  languageName: node
  linkType: hard

"@types/json5@npm:^0.0.29":
  version: 0.0.29
  resolution: "@types/json5@npm:0.0.29"
  checksum: e60b153664572116dfea673c5bda7778dbff150498f44f998e34b5886d8afc47f16799280e4b6e241c0472aef1bc36add771c569c68fc5125fc2ae519a3eb9ac
  languageName: node
  linkType: hard

"@types/lodash-es@npm:^4.17.6":
  version: 4.17.6
  resolution: "@types/lodash-es@npm:4.17.6"
  dependencies:
    "@types/lodash": "*"
  checksum: 9bd239dd525086e278821949ce12fbdd4f100a060fed9323fc7ad5661113e1641f28a7ebab617230ed3474680d8f4de705c1928b48252bb684be6ec9eed715db
  languageName: node
  linkType: hard

"@types/lodash@npm:*, @types/lodash@npm:^4, @types/lodash@npm:^4.14.181":
  version: 4.14.182
  resolution: "@types/lodash@npm:4.14.182"
  checksum: 7dd137aa9dbabd632408bd37009d984655164fa1ecc3f2b6eb94afe35bf0a5852cbab6183148d883e9c73a958b7fec9a9bcf7c8e45d41195add6a18c34958209
  languageName: node
  linkType: hard

"@types/marked@npm:^4":
  version: 4.0.3
  resolution: "@types/marked@npm:4.0.3"
  checksum: 2fc409a6291cb770688731a444f54e7eab6257c9b565dea4e9d2f3b6654b606e9dd8ea4a924e306b2d2f581dedcb7a27f10f2ca7aed828b11642ab85955341f1
  languageName: node
  linkType: hard

"@types/minimatch@npm:*":
  version: 3.0.5
  resolution: "@types/minimatch@npm:3.0.5"
  checksum: c41d136f67231c3131cf1d4ca0b06687f4a322918a3a5adddc87ce90ed9dbd175a3610adee36b106ae68c0b92c637c35e02b58c8a56c424f71d30993ea220b92
  languageName: node
  linkType: hard

"@types/ms@npm:*":
  version: 0.7.31
  resolution: "@types/ms@npm:0.7.31"
  checksum: daadd354aedde024cce6f5aa873fefe7b71b22cd0e28632a69e8b677aeb48ae8caa1c60e5919bb781df040d116b01cb4316335167a3fc0ef6a63fa3614c0f6da
  languageName: node
  linkType: hard

"@types/node@npm:*":
  version: 17.0.31
  resolution: "@types/node@npm:17.0.31"
  checksum: 704618350f8420d5c47db0f7778398e821b7724369946f5c441a7e6b9343295553936400eb8309f0b07d5e39c240988ab3456b983712ca86265dabc9aee4ad3d
  languageName: node
  linkType: hard

"@types/node@npm:^14.14.31":
  version: 14.18.16
  resolution: "@types/node@npm:14.18.16"
  checksum: 1999799309dc8620a2adf9a5d5e48416af87321bae4c950b4aa8018fcef2c3b6c1fcf98c39eae06f6492c03a643a5a44e2bb3750cd2574d9cf7eac33bac50e24
  languageName: node
  linkType: hard

"@types/node@npm:^16.11.26":
  version: 16.11.33
  resolution: "@types/node@npm:16.11.33"
  checksum: 5c86d3f1e3b996607b41405d368d2e19d410eee0054595cef73d230368a609a2863926e75ad19f5091f0fd742cd018b667d54c51292018dd8020a202a5b29fa9
  languageName: node
  linkType: hard

"@types/node@npm:~17.0.5":
  version: 17.0.36
  resolution: "@types/node@npm:17.0.36"
  checksum: 11055fde0a1e1421113849b5e32c7022911efc0be670729947bf0162970e79962d804b1eb8a9afb291380cac97cf0e684511415d586ae5fe1560322c940fe188
  languageName: node
  linkType: hard

"@types/offscreencanvas@npm:^2019.7.0":
  version: 2019.7.0
  resolution: "@types/offscreencanvas@npm:2019.7.0"
  checksum: 018cfcd19e0c59c44d14ba61caaca7246f77fbb512839c7881654b7f2b6591dbdd5857362eccbf49f29cdc93724e71a4b37c8b6cf203388f9c04e913a53ea390
  languageName: node
  linkType: hard

"@types/parse5@npm:*":
  version: 6.0.3
  resolution: "@types/parse5@npm:6.0.3"
  checksum: ddb59ee4144af5dfcc508a8dcf32f37879d11e12559561e65788756b95b33e6f03ea027d88e1f5408f9b7bfb656bf630ace31a2169edf44151daaf8dd58df1b7
  languageName: node
  linkType: hard

"@types/prettier@npm:^2.6.3":
  version: 2.6.3
  resolution: "@types/prettier@npm:2.6.3"
  checksum: e1836699ca189fff6d2a73dc22e028b6a6f693ed1180d5998ac29fa197caf8f85aa92cb38db642e4a370e616b451cb5722ad2395dab11c78e025a1455f37d1f0
  languageName: node
  linkType: hard

"@types/prismjs@npm:^1":
  version: 1.26.0
  resolution: "@types/prismjs@npm:1.26.0"
  checksum: cd5e7a6214c1f4213ec512a5fcf6d8fe37a56b813fc57ac95b5ff5ee074742bfdbd2f2730d9fd985205bf4586728e09baa97023f739e5aa1c9735a7c1ecbd11a
  languageName: node
  linkType: hard

"@types/sinonjs__fake-timers@npm:8.1.1":
  version: 8.1.1
  resolution: "@types/sinonjs__fake-timers@npm:8.1.1"
  checksum: ca09d54d47091d87020824a73f026300fa06b17cd9f2f9b9387f28b549364b141ef194ee28db762f6588de71d8febcd17f753163cb7ea116b8387c18e80ebd5c
  languageName: node
  linkType: hard

"@types/sizzle@npm:^2.3.2":
  version: 2.3.3
  resolution: "@types/sizzle@npm:2.3.3"
  checksum: 586a9fb1f6ff3e325e0f2cc1596a460615f0bc8a28f6e276ac9b509401039dd242fa8b34496d3a30c52f5b495873922d09a9e76c50c2ab2bcc70ba3fb9c4e160
  languageName: node
  linkType: hard

"@types/svg-path-parser@npm:^1":
  version: 1.1.3
  resolution: "@types/svg-path-parser@npm:1.1.3"
  checksum: 534e5945c9ef557b066078541b24df27326efd33b5ffdafd3ba46c23e099093c41e85c0c309c378f2bf8ea5e3714f7c016caaba5fa3d9b93ad33a7814940feec
  languageName: node
  linkType: hard

"@types/tough-cookie@npm:*":
  version: 4.0.2
  resolution: "@types/tough-cookie@npm:4.0.2"
  checksum: e055556ffdaa39ad85ede0af192c93f93f986f4bd9e9426efdc2948e3e2632db3a4a584d4937dbf6d7620527419bc99e6182d3daf2b08685e710f2eda5291905
  languageName: node
  linkType: hard

"@types/ungap__structured-clone@npm:^0.3.0":
  version: 0.3.0
  resolution: "@types/ungap__structured-clone@npm:0.3.0"
  checksum: 1502276e64645c2157e7a6d0dc6b572787b99f5a4e64d11711fcc05edb9c5be5d0a7827939d269746a29f24ae96c9581b16f12d00604dacfbfdc6b62ba6025c5
  languageName: node
  linkType: hard

"@types/uuid@npm:^8":
  version: 8.3.4
  resolution: "@types/uuid@npm:8.3.4"
  checksum: 6f11f3ff70f30210edaa8071422d405e9c1d4e53abbe50fdce365150d3c698fe7bbff65c1e71ae080cbfb8fded860dbb5e174da96fdbbdfcaa3fb3daa474d20f
  languageName: node
  linkType: hard

"@types/vue@npm:^2.0.0":
  version: 2.0.0
  resolution: "@types/vue@npm:2.0.0"
  dependencies:
    vue: "*"
  checksum: c5e6f7281d25f951ed7e160c12e88738ec65691b01648987428ee65730e69bc6f7aa50e6218e86ebf662ade8b6ae274a59e54047f83609af805db9c64b858f39
  languageName: node
  linkType: hard

"@types/yauzl@npm:^2.9.1":
  version: 2.10.0
  resolution: "@types/yauzl@npm:2.10.0"
  dependencies:
    "@types/node": "*"
  checksum: 55d27ae5d346ea260e40121675c24e112ef0247649073848e5d4e03182713ae4ec8142b98f61a1c6cbe7d3b72fa99bbadb65d8b01873e5e605cdc30f1ff70ef2
  languageName: node
  linkType: hard

"@typescript-eslint/eslint-plugin@npm:^5.0.0":
  version: 5.22.0
  resolution: "@typescript-eslint/eslint-plugin@npm:5.22.0"
  dependencies:
    "@typescript-eslint/scope-manager": 5.22.0
    "@typescript-eslint/type-utils": 5.22.0
    "@typescript-eslint/utils": 5.22.0
    debug: ^4.3.2
    functional-red-black-tree: ^1.0.1
    ignore: ^5.1.8
    regexpp: ^3.2.0
    semver: ^7.3.5
    tsutils: ^3.21.0
  peerDependencies:
    "@typescript-eslint/parser": ^5.0.0
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 3b083f7003f091c3ef7b3970dca9cfd507ab8c52a9b8a52259c630010adf765e9766f0e6fd9c901fc0e807319a4e8c003e12287b1f12a4b9eb4d7222e8d6db83
  languageName: node
  linkType: hard

"@typescript-eslint/eslint-plugin@npm:^5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/eslint-plugin@npm:5.27.1"
  dependencies:
    "@typescript-eslint/scope-manager": 5.27.1
    "@typescript-eslint/type-utils": 5.27.1
    "@typescript-eslint/utils": 5.27.1
    debug: ^4.3.4
    functional-red-black-tree: ^1.0.1
    ignore: ^5.2.0
    regexpp: ^3.2.0
    semver: ^7.3.7
    tsutils: ^3.21.0
  peerDependencies:
    "@typescript-eslint/parser": ^5.0.0
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: ee00d8d3a7b395e346801b7bf30209e278f06b5c283ad71c03b34db9e2d68a43ca0e292e315fa7e5bf131a8839ff4a24e0ed76c37811d230f97aae7e123d73ea
  languageName: node
  linkType: hard

"@typescript-eslint/parser@npm:^5.0.0":
  version: 5.22.0
  resolution: "@typescript-eslint/parser@npm:5.22.0"
  dependencies:
    "@typescript-eslint/scope-manager": 5.22.0
    "@typescript-eslint/types": 5.22.0
    "@typescript-eslint/typescript-estree": 5.22.0
    debug: ^4.3.2
  peerDependencies:
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 28a7d4b73154fc97336be9a4efd5ffdc659f748232c82479909e86ed87ed8a78d23280b3aaf532ca4e735caaffac43d9576e6af2dfd11865e30a9d70c8a3f275
  languageName: node
  linkType: hard

"@typescript-eslint/parser@npm:^5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/parser@npm:5.27.1"
  dependencies:
    "@typescript-eslint/scope-manager": 5.27.1
    "@typescript-eslint/types": 5.27.1
    "@typescript-eslint/typescript-estree": 5.27.1
    debug: ^4.3.4
  peerDependencies:
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 0f1df76142c9d7a6c6dbfc5d19fdee02bbc0e79def6e6df4b126c7eaae1c3a46a3871ad498d4b1fc7ad5cb58d6eb70f020807f600d99c0b9add98441fc12f23b
  languageName: node
  linkType: hard

"@typescript-eslint/scope-manager@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/scope-manager@npm:5.22.0"
  dependencies:
    "@typescript-eslint/types": 5.22.0
    "@typescript-eslint/visitor-keys": 5.22.0
  checksum: ebf2ad44f4e5a4dfd55225419804f81f68056086c20f1549adbcca4236634eac3aae461e30d6cab6539ce6f42346ed6e1fbbb2710d2cc058a3283ef91a0fe174
  languageName: node
  linkType: hard

"@typescript-eslint/scope-manager@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/scope-manager@npm:5.27.1"
  dependencies:
    "@typescript-eslint/types": 5.27.1
    "@typescript-eslint/visitor-keys": 5.27.1
  checksum: 401bf2b46de08ddb80ec9f36df7d58bf5de7837185a472b190b670d421d685743aad4c9fa8a6893f65ba933b822c5d7060c640e87cf0756d7aa56abdd25689cc
  languageName: node
  linkType: hard

"@typescript-eslint/type-utils@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/type-utils@npm:5.22.0"
  dependencies:
    "@typescript-eslint/utils": 5.22.0
    debug: ^4.3.2
    tsutils: ^3.21.0
  peerDependencies:
    eslint: "*"
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 7128085bfbeca3a9646a795a34730cdfeca110bc00240569f6a7b3dc0854680afa56e015715675a78198b414de869339bd6036cc33cb14903919780a60321a95
  languageName: node
  linkType: hard

"@typescript-eslint/type-utils@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/type-utils@npm:5.27.1"
  dependencies:
    "@typescript-eslint/utils": 5.27.1
    debug: ^4.3.4
    tsutils: ^3.21.0
  peerDependencies:
    eslint: "*"
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 43b7da26ea1bd7d249c45d168ec88f971fb71362bbc21ec4748d73b1ecb43f4ca59f5ed338e8dbc74272ae4ebac1cab87a9b62c0fa616c6f9bd833a212dc8a40
  languageName: node
  linkType: hard

"@typescript-eslint/types@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/types@npm:5.22.0"
  checksum: 74f822c5a3b96bba05229eea4ed370c4bd48b17f475c37f08d6ba708adf65c3aa026bb544f1d0308c96e043b30015e396fd53b1e8e4e9fbb6dc9c92d2ccc0a15
  languageName: node
  linkType: hard

"@typescript-eslint/types@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/types@npm:5.27.1"
  checksum: 81faa50256ba67c23221273744c51676774fe6a1583698c3a542f3e2fd21ab34a4399019527c9cf7ab4e5a1577272f091d5848d3af937232ddb2dbf558a7c39a
  languageName: node
  linkType: hard

"@typescript-eslint/typescript-estree@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/typescript-estree@npm:5.22.0"
  dependencies:
    "@typescript-eslint/types": 5.22.0
    "@typescript-eslint/visitor-keys": 5.22.0
    debug: ^4.3.2
    globby: ^11.0.4
    is-glob: ^4.0.3
    semver: ^7.3.5
    tsutils: ^3.21.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 2797a79d7d32a9a547b7f1de77a353d8e8c8519791f865f5e061bfc4918d12cdaddec51afa015f5aac5d068ef525c92bd65afc83b84dc9e52e697303acf0873a
  languageName: node
  linkType: hard

"@typescript-eslint/typescript-estree@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/typescript-estree@npm:5.27.1"
  dependencies:
    "@typescript-eslint/types": 5.27.1
    "@typescript-eslint/visitor-keys": 5.27.1
    debug: ^4.3.4
    globby: ^11.1.0
    is-glob: ^4.0.3
    semver: ^7.3.7
    tsutils: ^3.21.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 59d2a0885be7d54bd86472a446d84930cc52d2690ea432d9164075ea437b3b4206dadd49799764ad0fb68f3e4ebb4e36db9717c7a443d0f3c82d5659e41fbd05
  languageName: node
  linkType: hard

"@typescript-eslint/utils@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/utils@npm:5.22.0"
  dependencies:
    "@types/json-schema": ^7.0.9
    "@typescript-eslint/scope-manager": 5.22.0
    "@typescript-eslint/types": 5.22.0
    "@typescript-eslint/typescript-estree": 5.22.0
    eslint-scope: ^5.1.1
    eslint-utils: ^3.0.0
  peerDependencies:
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  checksum: 5019485e76d754a7a60c042545fd884dc666fddf9d4223ff706bbf0c275f19ea25a6b210fb5cf7ed368b019fe538fd854a925e9c6f12007d51b1731a29d95cc1
  languageName: node
  linkType: hard

"@typescript-eslint/utils@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/utils@npm:5.27.1"
  dependencies:
    "@types/json-schema": ^7.0.9
    "@typescript-eslint/scope-manager": 5.27.1
    "@typescript-eslint/types": 5.27.1
    "@typescript-eslint/typescript-estree": 5.27.1
    eslint-scope: ^5.1.1
    eslint-utils: ^3.0.0
  peerDependencies:
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  checksum: 51add038226cddad2b3322225de18d53bc1ed44613f7b3a379eb597114b8830a632990b0f4321e0ddf3502b460d80072d7e789be89135b5e11e8dae167005625
  languageName: node
  linkType: hard

"@typescript-eslint/visitor-keys@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/visitor-keys@npm:5.22.0"
  dependencies:
    "@typescript-eslint/types": 5.22.0
    eslint-visitor-keys: ^3.0.0
  checksum: d30dfa98dcce75da49a6a204a0132d42e63228c35681cb9b3643e47a0a24a633e259832d48d101265bd85b8eb5a9f2b4858f9447646c1d3df6a2ac54258dfe8f
  languageName: node
  linkType: hard

"@typescript-eslint/visitor-keys@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/visitor-keys@npm:5.27.1"
  dependencies:
    "@typescript-eslint/types": 5.27.1
    eslint-visitor-keys: ^3.3.0
  checksum: 8f104eda321cd6c613daf284fbebbd32b149d4213d137b0ce1caec7a1334c9f46c82ed64aff1243b712ac8c13f67ac344c996cd36d21fbb15032c24d9897a64a
  languageName: node
  linkType: hard

"@ungap/structured-clone@npm:^1.0.1":
  version: 1.0.1
  resolution: "@ungap/structured-clone@npm:1.0.1"
  checksum: cd614e038fa63dcd5da0070d9ed5214d74d1f72b04d88e884d5a6563bb77d52a566fdd26b889f09c534fb72ab1d6ad8efe6bb678a56a5ccd3f0d6946234d1113
  languageName: node
  linkType: hard

"@vitejs/plugin-vue@npm:^2.3.1":
  version: 2.3.2
  resolution: "@vitejs/plugin-vue@npm:2.3.2"
  peerDependencies:
    vite: ^2.5.10
    vue: ^3.2.25
  checksum: cfd539b412fee269705a8fd81cbc45529ffc3fe3d1962c6d70b8532994c95d2a54004afc94eef161c64055644a4e7be44b95654fd78d8bd01b61acf6190c34d4
  languageName: node
  linkType: hard

"@volar/code-gen@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/code-gen@npm:0.33.9"
  dependencies:
    "@volar/source-map": 0.33.9
  checksum: 52ebcceec2761cacb2537b6331c991a5d3fe0c2d42534e2ef590c3acfbf863e5b0fe50cf5c15257bdddc4a88dea6b50ef756d054cda1aed4f9f25273e876c368
  languageName: node
  linkType: hard

"@volar/pug-language-service@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/pug-language-service@npm:0.33.9"
  dependencies:
    "@volar/code-gen": 0.33.9
    "@volar/shared": 0.33.9
    "@volar/source-map": 0.33.9
    "@volar/transforms": 0.33.9
    pug-lexer: ^5.0.1
    pug-parser: ^6.0.0
    vscode-languageserver-textdocument: ^1.0.3
    vscode-languageserver-types: ^3.17.0-next.6
  checksum: 23873fa9c226329554d00867c19584484cb518404289714fd891bcee240e342a121694ce18d14506d119d3aaba7e1b0b6753771016b7911ab5b55963bce72f19
  languageName: node
  linkType: hard

"@volar/shared@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/shared@npm:0.33.9"
  dependencies:
    upath: ^2.0.1
    vscode-jsonrpc: ^8.0.0-next.5
    vscode-uri: ^3.0.3
  checksum: cc7bd86413121236ca1c03b73f72e9949ba2a8c81713d659db88bc1c4fdf47060889018ff067aa844cf5888e662a2a6ae340f7ab562b058a25a13398dd21de2d
  languageName: node
  linkType: hard

"@volar/source-map@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/source-map@npm:0.33.9"
  checksum: d5e33d12b07d4584d22bffeaad7bc8d94de008984de766198f48323849789146aed14dc716af3d3b43aa72d27ec139771a7b5bc6c26bb03f25fd0537eaf1d003
  languageName: node
  linkType: hard

"@volar/transforms@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/transforms@npm:0.33.9"
  dependencies:
    "@volar/shared": 0.33.9
    vscode-languageserver-types: ^3.17.0-next.6
  checksum: 33f5e5a940a046e3ebf9ce1792ad5616b61232e0320107aa761667a1acfe39c1b40b28501d6527cceb8f026748c7fcaf7d974664b89e1b67994ede7f73be78ab
  languageName: node
  linkType: hard

"@volar/vue-code-gen@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/vue-code-gen@npm:0.33.9"
  dependencies:
    "@volar/code-gen": 0.33.9
    "@volar/source-map": 0.33.9
    "@vue/compiler-core": ^3.2.27
    "@vue/compiler-dom": ^3.2.27
    "@vue/shared": ^3.2.27
  checksum: 29cbc392b7c0cd095fa862078f0aa8ba8c52dda2eeb7a281343e56ebb0c38fee250304f97d0e2870eef1dce2218e71fe62dbfaee80c842702b09a739809ac0c8
  languageName: node
  linkType: hard

"@volar/vue-typescript@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/vue-typescript@npm:0.33.9"
  dependencies:
    "@volar/code-gen": 0.33.9
    "@volar/pug-language-service": 0.33.9
    "@volar/source-map": 0.33.9
    "@volar/vue-code-gen": 0.33.9
    "@vue/compiler-sfc": ^3.2.27
    "@vue/reactivity": ^3.2.27
  checksum: f7ee009cc315566f2334cbe8bd38e6f27904e2eeb96d4bff904b8f0a024ae1143f1200407d01f6830f7b7b3cc8c66e6ee1c31e6ed1d42dcc2cd106bf3fac1d3d
  languageName: node
  linkType: hard

"@vue/compiler-core@npm:3.2.33, @vue/compiler-core@npm:^3.2.27":
  version: 3.2.33
  resolution: "@vue/compiler-core@npm:3.2.33"
  dependencies:
    "@babel/parser": ^7.16.4
    "@vue/shared": 3.2.33
    estree-walker: ^2.0.2
    source-map: ^0.6.1
  checksum: bae1a7db26ab208fe8f0b09f443387e0951a1d1b35f80d89cad2285a818dc9dece783b98ccee4dbece59fde57f20a2f17afb183f710fdbc852e568bdf871265e
  languageName: node
  linkType: hard

"@vue/compiler-dom@npm:3.2.33, @vue/compiler-dom@npm:^3.2.27":
  version: 3.2.33
  resolution: "@vue/compiler-dom@npm:3.2.33"
  dependencies:
    "@vue/compiler-core": 3.2.33
    "@vue/shared": 3.2.33
  checksum: 498f313c81d287ab4ee5861508121ab130728f3b643544041acdadfce9840c2ea05b972169437ef1462443d4d0bc9674105db7b6cfa75f6e46ef470f2a098112
  languageName: node
  linkType: hard

"@vue/compiler-sfc@npm:3.2.33, @vue/compiler-sfc@npm:^3.2.27, @vue/compiler-sfc@npm:^3.2.33":
  version: 3.2.33
  resolution: "@vue/compiler-sfc@npm:3.2.33"
  dependencies:
    "@babel/parser": ^7.16.4
    "@vue/compiler-core": 3.2.33
    "@vue/compiler-dom": 3.2.33
    "@vue/compiler-ssr": 3.2.33
    "@vue/reactivity-transform": 3.2.33
    "@vue/shared": 3.2.33
    estree-walker: ^2.0.2
    magic-string: ^0.25.7
    postcss: ^8.1.10
    source-map: ^0.6.1
  checksum: f436c49bdce0d00d4b0c8dd9a9a8e76167898fc10e79578425391d0b0a712e8d8f3aad257066d6e0ecdde3c6c38e6280f93ea741865ea1cab823b71440578a24
  languageName: node
  linkType: hard

"@vue/compiler-ssr@npm:3.2.33":
  version: 3.2.33
  resolution: "@vue/compiler-ssr@npm:3.2.33"
  dependencies:
    "@vue/compiler-dom": 3.2.33
    "@vue/shared": 3.2.33
  checksum: 4107f8e9e8f4553ba12cb915d0f51169b67176fbb50e05accf014ee6786e767ae9ec1218ffae266e807d00fbdeb881781a615d777531385581cce2ea5e1afd58
  languageName: node
  linkType: hard

"@vue/devtools-api@npm:^6.0.0, @vue/devtools-api@npm:^6.1.4":
  version: 6.1.4
  resolution: "@vue/devtools-api@npm:6.1.4"
  checksum: 027bb138b03ec7147dd15e5d0ef28d5b72c822530396cc8a86bc6fdb049dc6850314b9e897e497064e3ed47fad229a18141f56b8b8ca3d41092a576dc5b6538d
  languageName: node
  linkType: hard

"@vue/eslint-config-prettier@npm:^7.0.0":
  version: 7.0.0
  resolution: "@vue/eslint-config-prettier@npm:7.0.0"
  dependencies:
    eslint-config-prettier: ^8.3.0
    eslint-plugin-prettier: ^4.0.0
  peerDependencies:
    eslint: ">= 7.28.0"
    prettier: ">= 2.0.0"
  checksum: febfd7f70369426bc3a481845b26a5d0c2cf26be8bf6b45dd96134529ce63f436e070785084c5c6b9579021cdca5ab26926cc75ea4b08f2cbe6cf9f8857f09e2
  languageName: node
  linkType: hard

"@vue/eslint-config-typescript@npm:^10.0.0":
  version: 10.0.0
  resolution: "@vue/eslint-config-typescript@npm:10.0.0"
  dependencies:
    "@typescript-eslint/eslint-plugin": ^5.0.0
    "@typescript-eslint/parser": ^5.0.0
    vue-eslint-parser: ^8.0.0
  peerDependencies:
    eslint: ^6.2.0 || ^7.0.0 || ^8.0.0
    eslint-plugin-vue: ^8.0.1
  checksum: 8af585db57ea4cd24a00e0ef21db077d911237f8db76c4147a98ba0b975f2b5ebc85d5ce7b9abb0e8a9a32cd2ad5030e62b3d1ddeb9ac47a740a8bc4eae46f97
  languageName: node
  linkType: hard

"@vue/reactivity-transform@npm:3.2.33":
  version: 3.2.33
  resolution: "@vue/reactivity-transform@npm:3.2.33"
  dependencies:
    "@babel/parser": ^7.16.4
    "@vue/compiler-core": 3.2.33
    "@vue/shared": 3.2.33
    estree-walker: ^2.0.2
    magic-string: ^0.25.7
  checksum: 599a68f4bb1b36ac7015ddfc5cbcc97498e9caac5d1b96834185e2d248c22d1f1f4184e33788761112377ce22f9e2e3d79c50b551eec685395368a2480e6385c
  languageName: node
  linkType: hard

"@vue/reactivity@npm:3.2.33, @vue/reactivity@npm:^3.2.27":
  version: 3.2.33
  resolution: "@vue/reactivity@npm:3.2.33"
  dependencies:
    "@vue/shared": 3.2.33
  checksum: fe801ea75fabfe95f414c32a79fee275917ef458b2b2f0f05834ae9bd4f65fefc9d25b62be55d680674ec4ef301b75ec45501f920efda780e70a214b21dfa02c
  languageName: node
  linkType: hard

"@vue/runtime-core@npm:3.2.33, @vue/runtime-core@npm:^3.2.33":
  version: 3.2.33
  resolution: "@vue/runtime-core@npm:3.2.33"
  dependencies:
    "@vue/reactivity": 3.2.33
    "@vue/shared": 3.2.33
  checksum: 8eaba9a5d94461cd8a1adb805a2874f751e08abcc9169ca47a5d4479c20b5cf9c7323adbaa99047e85b6d32240764f4232078c24199a22a2c7044717c12a6984
  languageName: node
  linkType: hard

"@vue/runtime-dom@npm:3.2.33, @vue/runtime-dom@npm:^3.2.33":
  version: 3.2.33
  resolution: "@vue/runtime-dom@npm:3.2.33"
  dependencies:
    "@vue/runtime-core": 3.2.33
    "@vue/shared": 3.2.33
    csstype: ^2.6.8
  checksum: 1fec6328b27c50f8bb73f37324c03c381cad1e48aa134d27539efaa433df57bdcb8f55101972be0f00d093f0310036e569b7211a9ac1c9a75a949141e7112b59
  languageName: node
  linkType: hard

"@vue/server-renderer@npm:3.2.33":
  version: 3.2.33
  resolution: "@vue/server-renderer@npm:3.2.33"
  dependencies:
    "@vue/compiler-ssr": 3.2.33
    "@vue/shared": 3.2.33
  peerDependencies:
    vue: 3.2.33
  checksum: effc448e522f70f7271a6e81f6ca925e9b6a5948a9f947a96c7932e907a6a46fc5ae108cecfc6ec43159171055b1f6549139bb163363970829d81b625b921bbb
  languageName: node
  linkType: hard

"@vue/shared@npm:3.2.33, @vue/shared@npm:^3.2.27":
  version: 3.2.33
  resolution: "@vue/shared@npm:3.2.33"
  checksum: 0083c9555b44f1c230079fac9270764e51af740f851101ae8972758fe6acf52184f76b4ab0c67a3840096d8f5a0988b99cae3046826b0f15af2431db6127ae48
  languageName: node
  linkType: hard

"@vue/test-utils@npm:^2.0.0-rc.18":
  version: 2.0.0-rc.21
  resolution: "@vue/test-utils@npm:2.0.0-rc.21"
  peerDependencies:
    vue: ^3.0.1
  checksum: 4c7998281f45557a7df7193f07a8cafdfa209ad724910d8556b71dbeecbdb8f52186f0e38b89dd8d60f15d22c3b150da948f5afc32b7b2a40ef52026ae7a77c9
  languageName: node
  linkType: hard

"@vue/tsconfig@npm:^0.1.3":
  version: 0.1.3
  resolution: "@vue/tsconfig@npm:0.1.3"
  peerDependencies:
    "@types/node": "*"
  peerDependenciesMeta:
    "@types/node":
      optional: true
  checksum: 8150a24497a5348bc342c27afb38ad989de2ce8e94c349020628065d2a8df6837cb8bb3012f9161eea716487832612ac71b5f910d95bac41539ac6021d6bd88d
  languageName: node
  linkType: hard

"@vueuse/core@npm:^8.4.2":
  version: 8.4.2
  resolution: "@vueuse/core@npm:8.4.2"
  dependencies:
    "@vueuse/metadata": 8.4.2
    "@vueuse/shared": 8.4.2
    vue-demi: "*"
  peerDependencies:
    "@vue/composition-api": ^1.1.0
    vue: ^2.6.0 || ^3.2.0
  peerDependenciesMeta:
    "@vue/composition-api":
      optional: true
    vue:
      optional: true
  checksum: 846c660d3db349e57d43db34c79cdb3c952ff410cc817ee5c82abb6cc92c53aa3d5183ba34060adc8144f9e4ad033fe301d342f628e0d79c0ff7dd8342816c64
  languageName: node
  linkType: hard

"@vueuse/metadata@npm:8.4.2":
  version: 8.4.2
  resolution: "@vueuse/metadata@npm:8.4.2"
  checksum: dc83cb698f8125ec825331829e5e7101e7a9681ba2f96f1c5cb1522d5d90fa514d0fcad83dc15b31828a05ee30460bce9102c8dc4d7873c308a68ea959f99d6a
  languageName: node
  linkType: hard

"@vueuse/router@npm:^8.5.0":
  version: 8.5.0
  resolution: "@vueuse/router@npm:8.5.0"
  dependencies:
    "@vueuse/shared": 8.5.0
    vue-demi: "*"
  peerDependencies:
    vue-router: ">=4.0.0-rc.1"
  checksum: 331a9d174e83f953d724eca5466b4b7211dd4822fdbeedf9a663b174f880e0d06880e117f6c363d1bd96e4a4ac6913ed123945c51826efdec4cfe1518c82a61d
  languageName: node
  linkType: hard

"@vueuse/shared@npm:8.4.2":
  version: 8.4.2
  resolution: "@vueuse/shared@npm:8.4.2"
  dependencies:
    vue-demi: "*"
  peerDependencies:
    "@vue/composition-api": ^1.1.0
    vue: ^2.6.0 || ^3.2.0
  peerDependenciesMeta:
    "@vue/composition-api":
      optional: true
    vue:
      optional: true
  checksum: d8fc22e837997778ee11d2b17579e84fbc0c28667ef4b69932217f5030b79b34f6bacc6cd2158deb92610941db8e4b05bad5504c709af77993192612b0f82199
  languageName: node
  linkType: hard

"@vueuse/shared@npm:8.5.0":
  version: 8.5.0
  resolution: "@vueuse/shared@npm:8.5.0"
  dependencies:
    vue-demi: "*"
  peerDependencies:
    "@vue/composition-api": ^1.1.0
    vue: ^2.6.0 || ^3.2.0
  peerDependenciesMeta:
    "@vue/composition-api":
      optional: true
    vue:
      optional: true
  checksum: 8a99f29accfc45a0c155b7918c76d4dc87f241748cc6df0d47be7b32ce37010f6b190ed22a2bd2acf0fbe97b2b7d0e22623043ede92d3bf201ce4dc0977c4516
  languageName: node
  linkType: hard

"abab@npm:^2.0.5, abab@npm:^2.0.6":
  version: 2.0.6
  resolution: "abab@npm:2.0.6"
  checksum: 6ffc1af4ff315066c62600123990d87551ceb0aafa01e6539da77b0f5987ac7019466780bf480f1787576d4385e3690c81ccc37cfda12819bf510b8ab47e5a3e
  languageName: node
  linkType: hard

"abbrev@npm:1":
  version: 1.1.1
  resolution: "abbrev@npm:1.1.1"
  checksum: a4a97ec07d7ea112c517036882b2ac22f3109b7b19077dc656316d07d308438aac28e4d9746dc4d84bf6b1e75b4a7b0a5f3cb30592419f128ca9a8cee3bcfa17
  languageName: node
  linkType: hard

"acorn-globals@npm:^6.0.0":
  version: 6.0.0
  resolution: "acorn-globals@npm:6.0.0"
  dependencies:
    acorn: ^7.1.1
    acorn-walk: ^7.1.1
  checksum: 72d95e5b5e585f9acd019b993ab8bbba68bb3cbc9d9b5c1ebb3c2f1fe5981f11deababfb4949f48e6262f9c57878837f5958c0cca396f81023814680ca878042
  languageName: node
  linkType: hard

"acorn-jsx@npm:^5.3.2":
  version: 5.3.2
  resolution: "acorn-jsx@npm:5.3.2"
  peerDependencies:
    acorn: ^6.0.0 || ^7.0.0 || ^8.0.0
  checksum: c3d3b2a89c9a056b205b69530a37b972b404ee46ec8e5b341666f9513d3163e2a4f214a71f4dfc7370f5a9c07472d2fd1c11c91c3f03d093e37637d95da98950
  languageName: node
  linkType: hard

"acorn-node@npm:^1.6.1":
  version: 1.8.2
  resolution: "acorn-node@npm:1.8.2"
  dependencies:
    acorn: ^7.0.0
    acorn-walk: ^7.0.0
    xtend: ^4.0.2
  checksum: 02e1564a1ccf8bd1fcefcd01235398af4a9effaf032c5397994ddd275590a72894cb3e26e4b82579ccdda1e48ade7486aef61e771ddae3563ca452b927f443d8
  languageName: node
  linkType: hard

"acorn-walk@npm:^7.0.0, acorn-walk@npm:^7.1.1":
  version: 7.2.0
  resolution: "acorn-walk@npm:7.2.0"
  checksum: 9252158a79b9d92f1bc0dd6acc0fcfb87a67339e84bcc301bb33d6078936d27e35d606b4d35626d2962cd43c256d6f27717e70cbe15c04fff999ab0b2260b21f
  languageName: node
  linkType: hard

"acorn@npm:^7.0.0, acorn@npm:^7.1.1":
  version: 7.4.1
  resolution: "acorn@npm:7.4.1"
  bin:
    acorn: bin/acorn
  checksum: 1860f23c2107c910c6177b7b7be71be350db9e1080d814493fae143ae37605189504152d1ba8743ba3178d0b37269ce1ffc42b101547fdc1827078f82671e407
  languageName: node
  linkType: hard

"acorn@npm:^8.5.0, acorn@npm:^8.7.1":
  version: 8.7.1
  resolution: "acorn@npm:8.7.1"
  bin:
    acorn: bin/acorn
  checksum: aca0aabf98826717920ac2583fdcad0a6fbe4e583fdb6e843af2594e907455aeafe30b1e14f1757cd83ce1776773cf8296ffc3a4acf13f0bd3dfebcf1db6ae80
  languageName: node
  linkType: hard

"agent-base@npm:6, agent-base@npm:^6.0.2":
  version: 6.0.2
  resolution: "agent-base@npm:6.0.2"
  dependencies:
    debug: 4
  checksum: f52b6872cc96fd5f622071b71ef200e01c7c4c454ee68bc9accca90c98cfb39f2810e3e9aa330435835eedc8c23f4f8a15267f67c6e245d2b33757575bdac49d
  languageName: node
  linkType: hard

"agentkeepalive@npm:^4.2.1":
  version: 4.2.1
  resolution: "agentkeepalive@npm:4.2.1"
  dependencies:
    debug: ^4.1.0
    depd: ^1.1.2
    humanize-ms: ^1.2.1
  checksum: 39cb49ed8cf217fd6da058a92828a0a84e0b74c35550f82ee0a10e1ee403c4b78ade7948be2279b188b7a7303f5d396ea2738b134731e464bf28de00a4f72a18
  languageName: node
  linkType: hard

"aggregate-error@npm:^3.0.0":
  version: 3.1.0
  resolution: "aggregate-error@npm:3.1.0"
  dependencies:
    clean-stack: ^2.0.0
    indent-string: ^4.0.0
  checksum: 1101a33f21baa27a2fa8e04b698271e64616b886795fd43c31068c07533c7b3facfcaf4e9e0cab3624bd88f729a592f1c901a1a229c9e490eafce411a8644b79
  languageName: node
  linkType: hard

"ajv@npm:^6.10.0, ajv@npm:^6.12.4":
  version: 6.12.6
  resolution: "ajv@npm:6.12.6"
  dependencies:
    fast-deep-equal: ^3.1.1
    fast-json-stable-stringify: ^2.0.0
    json-schema-traverse: ^0.4.1
    uri-js: ^4.2.2
  checksum: 874972efe5c4202ab0a68379481fbd3d1b5d0a7bd6d3cc21d40d3536ebff3352a2a1fabb632d4fd2cc7fe4cbdcd5ed6782084c9bbf7f32a1536d18f9da5007d4
  languageName: node
  linkType: hard

"ansi-colors@npm:^4.1.1":
  version: 4.1.1
  resolution: "ansi-colors@npm:4.1.1"
  checksum: 138d04a51076cb085da0a7e2d000c5c0bb09f6e772ed5c65c53cb118d37f6c5f1637506d7155fb5f330f0abcf6f12fa2e489ac3f8cdab9da393bf1bb4f9a32b0
  languageName: node
  linkType: hard

"ansi-escapes@npm:^4.3.0":
  version: 4.3.2
  resolution: "ansi-escapes@npm:4.3.2"
  dependencies:
    type-fest: ^0.21.3
  checksum: 93111c42189c0a6bed9cdb4d7f2829548e943827ee8479c74d6e0b22ee127b2a21d3f8b5ca57723b8ef78ce011fbfc2784350eb2bde3ccfccf2f575fa8489815
  languageName: node
  linkType: hard

"ansi-regex@npm:^5.0.1":
  version: 5.0.1
  resolution: "ansi-regex@npm:5.0.1"
  checksum: 2aa4bb54caf2d622f1afdad09441695af2a83aa3fe8b8afa581d205e57ed4261c183c4d3877cee25794443fde5876417d859c108078ab788d6af7e4fe52eb66b
  languageName: node
  linkType: hard

"ansi-styles@npm:^3.2.1":
  version: 3.2.1
  resolution: "ansi-styles@npm:3.2.1"
  dependencies:
    color-convert: ^1.9.0
  checksum: d85ade01c10e5dd77b6c89f34ed7531da5830d2cb5882c645f330079975b716438cd7ebb81d0d6e6b4f9c577f19ae41ab55f07f19786b02f9dfd9e0377395665
  languageName: node
  linkType: hard

"ansi-styles@npm:^4.0.0, ansi-styles@npm:^4.1.0":
  version: 4.3.0
  resolution: "ansi-styles@npm:4.3.0"
  dependencies:
    color-convert: ^2.0.1
  checksum: 513b44c3b2105dd14cc42a19271e80f386466c4be574bccf60b627432f9198571ebf4ab1e4c3ba17347658f4ee1711c163d574248c0c1cdc2d5917a0ad582ec4
  languageName: node
  linkType: hard

"ansi-styles@npm:^5.0.0":
  version: 5.2.0
  resolution: "ansi-styles@npm:5.2.0"
  checksum: d7f4e97ce0623aea6bc0d90dcd28881ee04cba06c570b97fd3391bd7a268eedfd9d5e2dd4fdcbdd82b8105df5faf6f24aaedc08eaf3da898e702db5948f63469
  languageName: node
  linkType: hard

"anymatch@npm:~3.1.2":
  version: 3.1.2
  resolution: "anymatch@npm:3.1.2"
  dependencies:
    normalize-path: ^3.0.0
    picomatch: ^2.0.4
  checksum: 985163db2292fac9e5a1e072bf99f1b5baccf196e4de25a0b0b81865ebddeb3b3eb4480734ef0a2ac8c002845396b91aa89121f5b84f93981a4658164a9ec6e9
  languageName: node
  linkType: hard

"aproba@npm:^1.0.3 || ^2.0.0":
  version: 2.0.0
  resolution: "aproba@npm:2.0.0"
  checksum: 5615cadcfb45289eea63f8afd064ab656006361020e1735112e346593856f87435e02d8dcc7ff0d11928bc7d425f27bc7c2a84f6c0b35ab0ff659c814c138a24
  languageName: node
  linkType: hard

"arch@npm:^2.2.0":
  version: 2.2.0
  resolution: "arch@npm:2.2.0"
  checksum: e21b7635029fe8e9cdd5a026f9a6c659103e63fff423834323cdf836a1bb240a72d0c39ca8c470f84643385cf581bd8eda2cad8bf493e27e54bd9783abe9101f
  languageName: node
  linkType: hard

"are-we-there-yet@npm:^3.0.0":
  version: 3.0.0
  resolution: "are-we-there-yet@npm:3.0.0"
  dependencies:
    delegates: ^1.0.0
    readable-stream: ^3.6.0
  checksum: 348edfdd931b0b50868b55402c01c3f64df1d4c229ab6f063539a5025fd6c5f5bb8a0cab409bbed8d75d34762d22aa91b7c20b4204eb8177063158d9ba792981
  languageName: node
  linkType: hard

"arg@npm:^5.0.1":
  version: 5.0.1
  resolution: "arg@npm:5.0.1"
  checksum: 9aefbcb1204f8dbd541a045bfe99b6515b4dc697c2f704ef2bb5e9fe5464575d97571e91e673a6f23ad72dd1cc24d7d8cf2d1d828e72c08e4d4f6f9237adc761
  languageName: node
  linkType: hard

"argparse@npm:^2.0.1":
  version: 2.0.1
  resolution: "argparse@npm:2.0.1"
  checksum: 83644b56493e89a254bae05702abf3a1101b4fa4d0ca31df1c9985275a5a5bd47b3c27b7fa0b71098d41114d8ca000e6ed90cad764b306f8a503665e4d517ced
  languageName: node
  linkType: hard

"array-union@npm:^2.1.0":
  version: 2.1.0
  resolution: "array-union@npm:2.1.0"
  checksum: 5bee12395cba82da674931df6d0fea23c4aa4660cb3b338ced9f828782a65caa232573e6bf3968f23e0c5eb301764a382cef2f128b170a9dc59de0e36c39f98d
  languageName: node
  linkType: hard

"asap@npm:~2.0.3":
  version: 2.0.6
  resolution: "asap@npm:2.0.6"
  checksum: b296c92c4b969e973260e47523207cd5769abd27c245a68c26dc7a0fe8053c55bb04360237cb51cab1df52be939da77150ace99ad331fb7fb13b3423ed73ff3d
  languageName: node
  linkType: hard

"asn1@npm:~0.2.3":
  version: 0.2.6
  resolution: "asn1@npm:0.2.6"
  dependencies:
    safer-buffer: ~2.1.0
  checksum: 39f2ae343b03c15ad4f238ba561e626602a3de8d94ae536c46a4a93e69578826305366dc09fbb9b56aec39b4982a463682f259c38e59f6fa380cd72cd61e493d
  languageName: node
  linkType: hard

"assert-never@npm:^1.2.1":
  version: 1.2.1
  resolution: "assert-never@npm:1.2.1"
  checksum: ea4f1756d90f55254c4dc7a20d6c5d5bc169160562aefe3d8756b598c10e695daf568f21b6d6b12245d7f3782d3ff83ef6a01ab75d487adfc6909470a813bf8c
  languageName: node
  linkType: hard

"assert-plus@npm:1.0.0, assert-plus@npm:^1.0.0":
  version: 1.0.0
  resolution: "assert-plus@npm:1.0.0"
  checksum: 19b4340cb8f0e6a981c07225eacac0e9d52c2644c080198765d63398f0075f83bbc0c8e95474d54224e297555ad0d631c1dcd058adb1ddc2437b41a6b424ac64
  languageName: node
  linkType: hard

"assertion-error@npm:^1.1.0":
  version: 1.1.0
  resolution: "assertion-error@npm:1.1.0"
  checksum: fd9429d3a3d4fd61782eb3962ae76b6d08aa7383123fca0596020013b3ebd6647891a85b05ce821c47d1471ed1271f00b0545cf6a4326cf2fc91efcc3b0fbecf
  languageName: node
  linkType: hard

"astral-regex@npm:^2.0.0":
  version: 2.0.0
  resolution: "astral-regex@npm:2.0.0"
  checksum: 876231688c66400473ba505731df37ea436e574dd524520294cc3bbc54ea40334865e01fa0d074d74d036ee874ee7e62f486ea38bc421ee8e6a871c06f011766
  languageName: node
  linkType: hard

"async-validator@npm:^4.0.7":
  version: 4.1.1
  resolution: "async-validator@npm:4.1.1"
  checksum: 88590ab8ad1db6e3f6e01136d5313d4e91e269e74b7d4017aa16c64dac5be2697dbd1ff3de18f0e000d12073626475de9f77ba41808af38b0ea23eb0e6e8a361
  languageName: node
  linkType: hard

"async@npm:^3.2.0":
  version: 3.2.3
  resolution: "async@npm:3.2.3"
  checksum: c4bee57ab2249af3dc83ca3ef9acfa8e822c0d5e5aa41bae3eaf7f673648343cd64ecd7d26091ffd357f3f044428b17b5f00098494b6cf8b6b3e9681f0636ca1
  languageName: node
  linkType: hard

"asynckit@npm:^0.4.0":
  version: 0.4.0
  resolution: "asynckit@npm:0.4.0"
  checksum: 7b78c451df768adba04e2d02e63e2d0bf3b07adcd6e42b4cf665cb7ce899bedd344c69a1dcbce355b5f972d597b25aaa1c1742b52cffd9caccb22f348114f6be
  languageName: node
  linkType: hard

"at-least-node@npm:^1.0.0":
  version: 1.0.0
  resolution: "at-least-node@npm:1.0.0"
  checksum: 463e2f8e43384f1afb54bc68485c436d7622acec08b6fad269b421cb1d29cebb5af751426793d0961ed243146fe4dc983402f6d5a51b720b277818dbf6f2e49e
  languageName: node
  linkType: hard

"autoprefixer@npm:^10.4.7":
  version: 10.4.7
  resolution: "autoprefixer@npm:10.4.7"
  dependencies:
    browserslist: ^4.20.3
    caniuse-lite: ^1.0.30001335
    fraction.js: ^4.2.0
    normalize-range: ^0.1.2
    picocolors: ^1.0.0
    postcss-value-parser: ^4.2.0
  peerDependencies:
    postcss: ^8.1.0
  bin:
    autoprefixer: bin/autoprefixer
  checksum: 0e55d0d19806c672ec0c79cc23c27cf77e90edf2600670735266ba33ec5294458f404baaa2f7cd4cfe359cf7a97b3c86f01886bdbdc129a4f2f76ca5977a91af
  languageName: node
  linkType: hard

"available-typed-arrays@npm:^1.0.5":
  version: 1.0.5
  resolution: "available-typed-arrays@npm:1.0.5"
  checksum: 20eb47b3cefd7db027b9bbb993c658abd36d4edd3fe1060e83699a03ee275b0c9b216cc076ff3f2db29073225fb70e7613987af14269ac1fe2a19803ccc97f1a
  languageName: node
  linkType: hard

"aws-sign2@npm:~0.7.0":
  version: 0.7.0
  resolution: "aws-sign2@npm:0.7.0"
  checksum: b148b0bb0778098ad8cf7e5fc619768bcb51236707ca1d3e5b49e41b171166d8be9fdc2ea2ae43d7decf02989d0aaa3a9c4caa6f320af95d684de9b548a71525
  languageName: node
  linkType: hard

"aws4@npm:^1.8.0":
  version: 1.11.0
  resolution: "aws4@npm:1.11.0"
  checksum: 5a00d045fd0385926d20ebebcfba5ec79d4482fe706f63c27b324d489a04c68edb0db99ed991e19eda09cb8c97dc2452059a34d97545cebf591d7a2b5a10999f
  languageName: node
  linkType: hard

"axios@npm:^0.21.1":
  version: 0.21.4
  resolution: "axios@npm:0.21.4"
  dependencies:
    follow-redirects: ^1.14.0
  checksum: 44245f24ac971e7458f3120c92f9d66d1fc695e8b97019139de5b0cc65d9b8104647db01e5f46917728edfc0cfd88eb30fc4c55e6053eef4ace76768ce95ff3c
  languageName: node
  linkType: hard

"babel-walk@npm:3.0.0-canary-5":
  version: 3.0.0-canary-5
  resolution: "babel-walk@npm:3.0.0-canary-5"
  dependencies:
    "@babel/types": ^7.9.6
  checksum: 6fe7ee3889343a6602f665c28ea135956a0767d7f7ca5fc1d72c5243e2f6e9d8a64f51254bf2fd0cce47b79fceeccf7a357f37cfa755a509dfb930a21151837c
  languageName: node
  linkType: hard

"balanced-match@npm:^1.0.0":
  version: 1.0.2
  resolution: "balanced-match@npm:1.0.2"
  checksum: 9706c088a283058a8a99e0bf91b0a2f75497f185980d9ffa8b304de1d9e58ebda7c72c07ebf01dadedaac5b2907b2c6f566f660d62bd336c3468e960403b9d65
  languageName: node
  linkType: hard

"base64-js@npm:^1.3.1":
  version: 1.5.1
  resolution: "base64-js@npm:1.5.1"
  checksum: 669632eb3745404c2f822a18fc3a0122d2f9a7a13f7fb8b5823ee19d1d2ff9ee5b52c53367176ea4ad093c332fd5ab4bd0ebae5a8e27917a4105a4cfc86b1005
  languageName: node
  linkType: hard

"bcrypt-pbkdf@npm:^1.0.0":
  version: 1.0.2
  resolution: "bcrypt-pbkdf@npm:1.0.2"
  dependencies:
    tweetnacl: ^0.14.3
  checksum: 4edfc9fe7d07019609ccf797a2af28351736e9d012c8402a07120c4453a3b789a15f2ee1530dc49eee8f7eb9379331a8dd4b3766042b9e502f74a68e7f662291
  languageName: node
  linkType: hard

"binary-extensions@npm:^2.0.0":
  version: 2.2.0
  resolution: "binary-extensions@npm:2.2.0"
  checksum: ccd267956c58d2315f5d3ea6757cf09863c5fc703e50fbeb13a7dc849b812ef76e3cf9ca8f35a0c48498776a7478d7b4a0418e1e2b8cb9cb9731f2922aaad7f8
  languageName: node
  linkType: hard

"blob-util@npm:^2.0.2":
  version: 2.0.2
  resolution: "blob-util@npm:2.0.2"
  checksum: d543e6b92e4ca715ca33c78e89a07a2290d43e5b2bc897d7ec588c5c7bbf59df93e45225ac0c9258aa6ce4320358990f99c9288f1c48280f8ec5d7a2e088d19b
  languageName: node
  linkType: hard

"bluebird@npm:3.7.2, bluebird@npm:^3.7.2":
  version: 3.7.2
  resolution: "bluebird@npm:3.7.2"
  checksum: 869417503c722e7dc54ca46715f70e15f4d9c602a423a02c825570862d12935be59ed9c7ba34a9b31f186c017c23cac6b54e35446f8353059c101da73eac22ef
  languageName: node
  linkType: hard

"boolbase@npm:^1.0.0":
  version: 1.0.0
  resolution: "boolbase@npm:1.0.0"
  checksum: 3e25c80ef626c3a3487c73dbfc70ac322ec830666c9ad915d11b701142fab25ec1e63eff2c450c74347acfd2de854ccde865cd79ef4db1683f7c7b046ea43bb0
  languageName: node
  linkType: hard

"brace-expansion@npm:^1.1.7":
  version: 1.1.11
  resolution: "brace-expansion@npm:1.1.11"
  dependencies:
    balanced-match: ^1.0.0
    concat-map: 0.0.1
  checksum: faf34a7bb0c3fcf4b59c7808bc5d2a96a40988addf2e7e09dfbb67a2251800e0d14cd2bfc1aa79174f2f5095c54ff27f46fb1289fe2d77dac755b5eb3434cc07
  languageName: node
  linkType: hard

"brace-expansion@npm:^2.0.1":
  version: 2.0.1
  resolution: "brace-expansion@npm:2.0.1"
  dependencies:
    balanced-match: ^1.0.0
  checksum: a61e7cd2e8a8505e9f0036b3b6108ba5e926b4b55089eeb5550cd04a471fe216c96d4fe7e4c7f995c728c554ae20ddfc4244cad10aef255e72b62930afd233d1
  languageName: node
  linkType: hard

"braces@npm:^3.0.2, braces@npm:~3.0.2":
  version: 3.0.2
  resolution: "braces@npm:3.0.2"
  dependencies:
    fill-range: ^7.0.1
  checksum: e2a8e769a863f3d4ee887b5fe21f63193a891c68b612ddb4b68d82d1b5f3ff9073af066c343e9867a393fe4c2555dcb33e89b937195feb9c1613d259edfcd459
  languageName: node
  linkType: hard

"browser-process-hrtime@npm:^1.0.0":
  version: 1.0.0
  resolution: "browser-process-hrtime@npm:1.0.0"
  checksum: e30f868cdb770b1201afb714ad1575dd86366b6e861900884665fb627109b3cc757c40067d3bfee1ff2a29c835257ea30725a8018a9afd02ac1c24b408b1e45f
  languageName: node
  linkType: hard

"browserslist@npm:^4.20.2, browserslist@npm:^4.20.3":
  version: 4.20.3
  resolution: "browserslist@npm:4.20.3"
  dependencies:
    caniuse-lite: ^1.0.30001332
    electron-to-chromium: ^1.4.118
    escalade: ^3.1.1
    node-releases: ^2.0.3
    picocolors: ^1.0.0
  bin:
    browserslist: cli.js
  checksum: 1e4b719ac2ca0fe235218a606e8b8ef16b8809e0973b924158c39fbc435a0b0fe43437ea52dd6ef5ad2efcb83fcb07431244e472270177814217f7c563651f7d
  languageName: node
  linkType: hard

"buffer-crc32@npm:~0.2.3":
  version: 0.2.13
  resolution: "buffer-crc32@npm:0.2.13"
  checksum: 06252347ae6daca3453b94e4b2f1d3754a3b146a111d81c68924c22d91889a40623264e95e67955b1cb4a68cbedf317abeabb5140a9766ed248973096db5ce1c
  languageName: node
  linkType: hard

"buffer@npm:^5.6.0":
  version: 5.7.1
  resolution: "buffer@npm:5.7.1"
  dependencies:
    base64-js: ^1.3.1
    ieee754: ^1.1.13
  checksum: e2cf8429e1c4c7b8cbd30834ac09bd61da46ce35f5c22a78e6c2f04497d6d25541b16881e30a019c6fd3154150650ccee27a308eff3e26229d788bbdeb08ab84
  languageName: node
  linkType: hard

"cacache@npm:^16.0.2":
  version: 16.0.7
  resolution: "cacache@npm:16.0.7"
  dependencies:
    "@npmcli/fs": ^2.1.0
    "@npmcli/move-file": ^2.0.0
    chownr: ^2.0.0
    fs-minipass: ^2.1.0
    glob: ^8.0.1
    infer-owner: ^1.0.4
    lru-cache: ^7.7.1
    minipass: ^3.1.6
    minipass-collect: ^1.0.2
    minipass-flush: ^1.0.5
    minipass-pipeline: ^1.2.4
    mkdirp: ^1.0.4
    p-map: ^4.0.0
    promise-inflight: ^1.0.1
    rimraf: ^3.0.2
    ssri: ^9.0.0
    tar: ^6.1.11
    unique-filename: ^1.1.1
  checksum: 2155b099b7e0f0369fb1155ca4673532ca7efe2ebdbec63acca8743580b8446b5d4fd7184626b1cb059001af77b981cdc67035c7855544d365d4f048eafca2ca
  languageName: node
  linkType: hard

"cachedir@npm:^2.3.0":
  version: 2.3.0
  resolution: "cachedir@npm:2.3.0"
  checksum: ec90cb0f2e6336e266aa748dbadf3da9e0b20e843e43f1591acab7a3f1451337dc2f26cb9dd833ae8cfefeffeeb43ef5b5ff62782a685f4e3c2305dd98482fcb
  languageName: node
  linkType: hard

"call-bind@npm:^1.0.0, call-bind@npm:^1.0.2":
  version: 1.0.2
  resolution: "call-bind@npm:1.0.2"
  dependencies:
    function-bind: ^1.1.1
    get-intrinsic: ^1.0.2
  checksum: f8e31de9d19988a4b80f3e704788c4a2d6b6f3d17cfec4f57dc29ced450c53a49270dc66bf0fbd693329ee948dd33e6c90a329519aef17474a4d961e8d6426b0
  languageName: node
  linkType: hard

"callsites@npm:^3.0.0":
  version: 3.1.0
  resolution: "callsites@npm:3.1.0"
  checksum: 072d17b6abb459c2ba96598918b55868af677154bec7e73d222ef95a8fdb9bbf7dae96a8421085cdad8cd190d86653b5b6dc55a4484f2e5b2e27d5e0c3fc15b3
  languageName: node
  linkType: hard

"camelcase-css@npm:^2.0.1":
  version: 2.0.1
  resolution: "camelcase-css@npm:2.0.1"
  checksum: 1cec2b3b3dcb5026688a470b00299a8db7d904c4802845c353dbd12d9d248d3346949a814d83bfd988d4d2e5b9904c07efe76fecd195a1d4f05b543e7c0b56b1
  languageName: node
  linkType: hard

"caniuse-lite@npm:^1.0.30001332, caniuse-lite@npm:^1.0.30001335":
  version: 1.0.30001338
  resolution: "caniuse-lite@npm:1.0.30001338"
  checksum: 80ac481b20aac13d6168825762e2ad9b9895d36451088b921400c3cd818185e6d113c2d202e82cf3b88f4d2311b3064507f2e3f9fe9f0935fcaf42d9d4f15570
  languageName: node
  linkType: hard

"caseless@npm:~0.12.0":
  version: 0.12.0
  resolution: "caseless@npm:0.12.0"
  checksum: b43bd4c440aa1e8ee6baefee8063b4850fd0d7b378f6aabc796c9ec8cb26d27fb30b46885350777d9bd079c5256c0e1329ad0dc7c2817e0bb466810ebb353751
  languageName: node
  linkType: hard

"chai@npm:^4.3.6":
  version: 4.3.6
  resolution: "chai@npm:4.3.6"
  dependencies:
    assertion-error: ^1.1.0
    check-error: ^1.0.2
    deep-eql: ^3.0.1
    get-func-name: ^2.0.0
    loupe: ^2.3.1
    pathval: ^1.1.1
    type-detect: ^4.0.5
  checksum: acff93fd537f96d4a4d62dd83810285dffcfccb5089e1bf2a1205b28ec82d93dff551368722893cf85004282df10ee68802737c33c90c5493957ed449ed7ce71
  languageName: node
  linkType: hard

"chalk@npm:^2.0.0":
  version: 2.4.2
  resolution: "chalk@npm:2.4.2"
  dependencies:
    ansi-styles: ^3.2.1
    escape-string-regexp: ^1.0.5
    supports-color: ^5.3.0
  checksum: ec3661d38fe77f681200f878edbd9448821924e0f93a9cefc0e26a33b145f1027a2084bf19967160d11e1f03bfe4eaffcabf5493b89098b2782c3fe0b03d80c2
  languageName: node
  linkType: hard

"chalk@npm:^4.0.0, chalk@npm:^4.1.0":
  version: 4.1.2
  resolution: "chalk@npm:4.1.2"
  dependencies:
    ansi-styles: ^4.1.0
    supports-color: ^7.1.0
  checksum: fe75c9d5c76a7a98d45495b91b2172fa3b7a09e0cc9370e5c8feb1c567b85c4288e2b3fded7cfdd7359ac28d6b3844feb8b82b8686842e93d23c827c417e83fc
  languageName: node
  linkType: hard

"character-parser@npm:^2.2.0":
  version: 2.2.0
  resolution: "character-parser@npm:2.2.0"
  dependencies:
    is-regex: ^1.0.3
  checksum: 71826fae509d4dc3ef07c2e824da9c8853f910ba0d8fe699edaab263051fd3b8db77bb96e46ed896bb36ed1d86108e6d6ceedff436bec7786ba7f0b585a0bc93
  languageName: node
  linkType: hard

"check-error@npm:^1.0.2":
  version: 1.0.2
  resolution: "check-error@npm:1.0.2"
  checksum: d9d106504404b8addd1ee3f63f8c0eaa7cd962a1a28eb9c519b1c4a1dc7098be38007fc0060f045ee00f075fbb7a2a4f42abcf61d68323677e11ab98dc16042e
  languageName: node
  linkType: hard

"check-more-types@npm:2.24.0, check-more-types@npm:^2.24.0":
  version: 2.24.0
  resolution: "check-more-types@npm:2.24.0"
  checksum: b09080ec3404d20a4b0ead828994b2e5913236ef44ed3033a27062af0004cf7d2091fbde4b396bf13b7ce02fb018bc9960b48305e6ab2304cd82d73ed7a51ef4
  languageName: node
  linkType: hard

"chokidar@npm:>=3.0.0 <4.0.0, chokidar@npm:^3.5.3":
  version: 3.5.3
  resolution: "chokidar@npm:3.5.3"
  dependencies:
    anymatch: ~3.1.2
    braces: ~3.0.2
    fsevents: ~2.3.2
    glob-parent: ~5.1.2
    is-binary-path: ~2.1.0
    is-glob: ~4.0.1
    normalize-path: ~3.0.0
    readdirp: ~3.6.0
  dependenciesMeta:
    fsevents:
      optional: true
  checksum: b49fcde40176ba007ff361b198a2d35df60d9bb2a5aab228279eb810feae9294a6b4649ab15981304447afe1e6ffbf4788ad5db77235dc770ab777c6e771980c
  languageName: node
  linkType: hard

"chownr@npm:^2.0.0":
  version: 2.0.0
  resolution: "chownr@npm:2.0.0"
  checksum: c57cf9dd0791e2f18a5ee9c1a299ae6e801ff58fee96dc8bfd0dcb4738a6ce58dd252a3605b1c93c6418fe4f9d5093b28ffbf4d66648cb2a9c67eaef9679be2f
  languageName: node
  linkType: hard

"chroma-js@npm:^2.4.2":
  version: 2.4.2
  resolution: "chroma-js@npm:2.4.2"
  checksum: cf9884c02d406286e4370599bcd1afbf089384407df46b3a69edfedcba7bb99e8f959a5cfdbfec750b305c441c06ca40cd1f70ba3a6c2ce739ac09a92520ddae
  languageName: node
  linkType: hard

"ci-info@npm:^3.2.0":
  version: 3.3.0
  resolution: "ci-info@npm:3.3.0"
  checksum: c3d86fe374938ecda5093b1ba39acb535d8309185ba3f23587747c6a057e63f45419b406d880304dbc0e1d72392c9a33e42fe9a1e299209bc0ded5efaa232b66
  languageName: node
  linkType: hard

"clean-stack@npm:^2.0.0":
  version: 2.2.0
  resolution: "clean-stack@npm:2.2.0"
  checksum: 2ac8cd2b2f5ec986a3c743935ec85b07bc174d5421a5efc8017e1f146a1cf5f781ae962618f416352103b32c9cd7e203276e8c28241bbe946160cab16149fb68
  languageName: node
  linkType: hard

"cli-cursor@npm:^3.1.0":
  version: 3.1.0
  resolution: "cli-cursor@npm:3.1.0"
  dependencies:
    restore-cursor: ^3.1.0
  checksum: 2692784c6cd2fd85cfdbd11f53aea73a463a6d64a77c3e098b2b4697a20443f430c220629e1ca3b195ea5ac4a97a74c2ee411f3807abf6df2b66211fec0c0a29
  languageName: node
  linkType: hard

"cli-table3@npm:~0.6.1":
  version: 0.6.2
  resolution: "cli-table3@npm:0.6.2"
  dependencies:
    "@colors/colors": 1.5.0
    string-width: ^4.2.0
  dependenciesMeta:
    "@colors/colors":
      optional: true
  checksum: 2f82391698b8a2a2a5e45d2adcfea5d93e557207f90455a8d4c1aac688e9b18a204d9eb4ba1d322fa123b17d64ea3dc5e11de8b005529f3c3e7dbeb27cb4d9be
  languageName: node
  linkType: hard

"cli-truncate@npm:^2.1.0":
  version: 2.1.0
  resolution: "cli-truncate@npm:2.1.0"
  dependencies:
    slice-ansi: ^3.0.0
    string-width: ^4.2.0
  checksum: bf1e4e6195392dc718bf9cd71f317b6300dc4a9191d052f31046b8773230ece4fa09458813bf0e3455a5e68c0690d2ea2c197d14a8b85a7b5e01c97f4b5feb5d
  languageName: node
  linkType: hard

"color-convert@npm:^1.9.0":
  version: 1.9.3
  resolution: "color-convert@npm:1.9.3"
  dependencies:
    color-name: 1.1.3
  checksum: fd7a64a17cde98fb923b1dd05c5f2e6f7aefda1b60d67e8d449f9328b4e53b228a428fd38bfeaeb2db2ff6b6503a776a996150b80cdf224062af08a5c8a3a203
  languageName: node
  linkType: hard

"color-convert@npm:^2.0.1":
  version: 2.0.1
  resolution: "color-convert@npm:2.0.1"
  dependencies:
    color-name: ~1.1.4
  checksum: 79e6bdb9fd479a205c71d89574fccfb22bd9053bd98c6c4d870d65c132e5e904e6034978e55b43d69fcaa7433af2016ee203ce76eeba9cfa554b373e7f7db336
  languageName: node
  linkType: hard

"color-name@npm:1.1.3":
  version: 1.1.3
  resolution: "color-name@npm:1.1.3"
  checksum: 09c5d3e33d2105850153b14466501f2bfb30324a2f76568a408763a3b7433b0e50e5b4ab1947868e65cb101bb7cb75029553f2c333b6d4b8138a73fcc133d69d
  languageName: node
  linkType: hard

"color-name@npm:^1.1.4, color-name@npm:~1.1.4":
  version: 1.1.4
  resolution: "color-name@npm:1.1.4"
  checksum: b0445859521eb4021cd0fb0cc1a75cecf67fceecae89b63f62b201cca8d345baf8b952c966862a9d9a2632987d4f6581f0ec8d957dfacece86f0a7919316f610
  languageName: node
  linkType: hard

"color-support@npm:^1.1.3":
  version: 1.1.3
  resolution: "color-support@npm:1.1.3"
  bin:
    color-support: bin.js
  checksum: 9b7356817670b9a13a26ca5af1c21615463b500783b739b7634a0c2047c16cef4b2865d7576875c31c3cddf9dd621fa19285e628f20198b233a5cfdda6d0793b
  languageName: node
  linkType: hard

"colorette@npm:^2.0.16":
  version: 2.0.16
  resolution: "colorette@npm:2.0.16"
  checksum: cd55596a3a2d1071c1a28eee7fd8a5387593ff1bd10a3e8d0a6221499311fe34a9f2b9272d77c391e0e003dcdc8934fb2f8d106e7ef1f7516f8060c901d41a27
  languageName: node
  linkType: hard

"combined-stream@npm:^1.0.6, combined-stream@npm:^1.0.8, combined-stream@npm:~1.0.6":
  version: 1.0.8
  resolution: "combined-stream@npm:1.0.8"
  dependencies:
    delayed-stream: ~1.0.0
  checksum: 49fa4aeb4916567e33ea81d088f6584749fc90c7abec76fd516bf1c5aa5c79f3584b5ba3de6b86d26ddd64bae5329c4c7479343250cfe71c75bb366eae53bb7c
  languageName: node
  linkType: hard

"comlink@npm:^4.3.1":
  version: 4.3.1
  resolution: "comlink@npm:4.3.1"
  checksum: 557360a6558708c55aff74a25f834bfb9bfca8a42444682c4d5aead57681534a0206202be2a2760b4de124c3ba6d485b08978b6d5469cb3d26bf1438ee28a4f1
  languageName: node
  linkType: hard

"commander@npm:^5.1.0":
  version: 5.1.0
  resolution: "commander@npm:5.1.0"
  checksum: 0b7fec1712fbcc6230fcb161d8d73b4730fa91a21dc089515489402ad78810547683f058e2a9835929c212fead1d6a6ade70db28bbb03edbc2829a9ab7d69447
  languageName: node
  linkType: hard

"common-tags@npm:^1.8.0":
  version: 1.8.2
  resolution: "common-tags@npm:1.8.2"
  checksum: 767a6255a84bbc47df49a60ab583053bb29a7d9687066a18500a516188a062c4e4cd52de341f22de0b07062e699b1b8fe3cfa1cb55b241cb9301aeb4f45b4dff
  languageName: node
  linkType: hard

"concat-map@npm:0.0.1":
  version: 0.0.1
  resolution: "concat-map@npm:0.0.1"
  checksum: 902a9f5d8967a3e2faf138d5cb784b9979bad2e6db5357c5b21c568df4ebe62bcb15108af1b2253744844eb964fc023fbd9afbbbb6ddd0bcc204c6fb5b7bf3af
  languageName: node
  linkType: hard

"console-control-strings@npm:^1.1.0":
  version: 1.1.0
  resolution: "console-control-strings@npm:1.1.0"
  checksum: 8755d76787f94e6cf79ce4666f0c5519906d7f5b02d4b884cf41e11dcd759ed69c57da0670afd9236d229a46e0f9cf519db0cd829c6dca820bb5a5c3def584ed
  languageName: node
  linkType: hard

"constantinople@npm:^4.0.1":
  version: 4.0.1
  resolution: "constantinople@npm:4.0.1"
  dependencies:
    "@babel/parser": ^7.6.0
    "@babel/types": ^7.6.1
  checksum: 8f70f16ddf97cdc263ca16b398bc52470c25e2ec5ed27bc015f251b849597223ce3a123e6924f43efddeb75422c1f55b7e56e0e2e594e4dd2964bfc9392b9b82
  languageName: node
  linkType: hard

"convert-source-map@npm:^1.7.0":
  version: 1.8.0
  resolution: "convert-source-map@npm:1.8.0"
  dependencies:
    safe-buffer: ~5.1.1
  checksum: 985d974a2d33e1a2543ada51c93e1ba2f73eaed608dc39f229afc78f71dcc4c8b7d7c684aa647e3c6a3a204027444d69e53e169ce94e8d1fa8d7dee80c9c8fed
  languageName: node
  linkType: hard

"core-util-is@npm:1.0.2":
  version: 1.0.2
  resolution: "core-util-is@npm:1.0.2"
  checksum: 7a4c925b497a2c91421e25bf76d6d8190f0b2359a9200dbeed136e63b2931d6294d3b1893eda378883ed363cd950f44a12a401384c609839ea616befb7927dab
  languageName: node
  linkType: hard

"cross-spawn@npm:^7.0.0, cross-spawn@npm:^7.0.2, cross-spawn@npm:^7.0.3":
  version: 7.0.3
  resolution: "cross-spawn@npm:7.0.3"
  dependencies:
    path-key: ^3.1.0
    shebang-command: ^2.0.0
    which: ^2.0.1
  checksum: 671cc7c7288c3a8406f3c69a3ae2fc85555c04169e9d611def9a675635472614f1c0ed0ef80955d5b6d4e724f6ced67f0ad1bb006c2ea643488fcfef994d7f52
  languageName: node
  linkType: hard

"css-render@npm:^0.15.10":
  version: 0.15.10
  resolution: "css-render@npm:0.15.10"
  dependencies:
    "@emotion/hash": ~0.8.0
    "@types/node": ~17.0.5
    csstype: ~3.0.5
  checksum: 051ebb6a56bc8ef1149ef15eecef54b9a08e6ba1aec8866e459c6823988c5307b7e52de4c80fa17ac80d04a81573dbe7811092b2ba85cc586c78fb1f0f7ab918
  languageName: node
  linkType: hard

"cssesc@npm:^3.0.0":
  version: 3.0.0
  resolution: "cssesc@npm:3.0.0"
  bin:
    cssesc: bin/cssesc
  checksum: f8c4ababffbc5e2ddf2fa9957dda1ee4af6048e22aeda1869d0d00843223c1b13ad3f5d88b51caa46c994225eacb636b764eb807a8883e2fb6f99b4f4e8c48b2
  languageName: node
  linkType: hard

"cssom@npm:^0.5.0":
  version: 0.5.0
  resolution: "cssom@npm:0.5.0"
  checksum: 823471aa30091c59e0a305927c30e7768939b6af70405808f8d2ce1ca778cddcb24722717392438329d1691f9a87cb0183b64b8d779b56a961546d54854fde01
  languageName: node
  linkType: hard

"cssom@npm:~0.3.6":
  version: 0.3.8
  resolution: "cssom@npm:0.3.8"
  checksum: 24beb3087c76c0d52dd458be9ee1fbc80ac771478a9baef35dd258cdeb527c68eb43204dd439692bb2b1ae5272fa5f2946d10946edab0d04f1078f85e06bc7f6
  languageName: node
  linkType: hard

"cssstyle@npm:^2.3.0":
  version: 2.3.0
  resolution: "cssstyle@npm:2.3.0"
  dependencies:
    cssom: ~0.3.6
  checksum: 5f05e6fd2e3df0b44695c2f08b9ef38b011862b274e320665176467c0725e44a53e341bc4959a41176e83b66064ab786262e7380fd1cabeae6efee0d255bb4e3
  languageName: node
  linkType: hard

"csstype@npm:^2.6.8":
  version: 2.6.20
  resolution: "csstype@npm:2.6.20"
  checksum: cb5d5ded49c3390909e93b20b285d4a63d0ba5b10294bdfbc4cf911f80e91d6cf367ea671f99f09570762535c14ea7074a2c7fa73f02008203f01328dea8968b
  languageName: node
  linkType: hard

"csstype@npm:~3.0.5":
  version: 3.0.11
  resolution: "csstype@npm:3.0.11"
  checksum: 95e56abfe9ca219ae065acb4e43f61771a03170eed919127f558dfa168240867aba7629c8d98a201a0dd06d9a5ce82686f0570031c928516c61816adbc7c877f
  languageName: node
  linkType: hard

"cypress@npm:^9.5.3":
  version: 9.6.0
  resolution: "cypress@npm:9.6.0"
  dependencies:
    "@cypress/request": ^2.88.10
    "@cypress/xvfb": ^1.2.4
    "@types/node": ^14.14.31
    "@types/sinonjs__fake-timers": 8.1.1
    "@types/sizzle": ^2.3.2
    arch: ^2.2.0
    blob-util: ^2.0.2
    bluebird: ^3.7.2
    buffer: ^5.6.0
    cachedir: ^2.3.0
    chalk: ^4.1.0
    check-more-types: ^2.24.0
    cli-cursor: ^3.1.0
    cli-table3: ~0.6.1
    commander: ^5.1.0
    common-tags: ^1.8.0
    dayjs: ^1.10.4
    debug: ^4.3.2
    enquirer: ^2.3.6
    eventemitter2: ^6.4.3
    execa: 4.1.0
    executable: ^4.1.1
    extract-zip: 2.0.1
    figures: ^3.2.0
    fs-extra: ^9.1.0
    getos: ^3.2.1
    is-ci: ^3.0.0
    is-installed-globally: ~0.4.0
    lazy-ass: ^1.6.0
    listr2: ^3.8.3
    lodash: ^4.17.21
    log-symbols: ^4.0.0
    minimist: ^1.2.6
    ospath: ^1.2.2
    pretty-bytes: ^5.6.0
    proxy-from-env: 1.0.0
    request-progress: ^3.0.0
    semver: ^7.3.2
    supports-color: ^8.1.1
    tmp: ~0.2.1
    untildify: ^4.0.0
    yauzl: ^2.10.0
  bin:
    cypress: bin/cypress
  checksum: 1e5142885a3fb54db6ef7477e3b11b363f1f610ff008982af014e6df3261ac3899f4cad407c598fb690f93029634adb4ad4605929d10776f92175a3eebb471c4
  languageName: node
  linkType: hard

"dashdash@npm:^1.12.0":
  version: 1.14.1
  resolution: "dashdash@npm:1.14.1"
  dependencies:
    assert-plus: ^1.0.0
  checksum: 3634c249570f7f34e3d34f866c93f866c5b417f0dd616275decae08147dcdf8fccfaa5947380ccfb0473998ea3a8057c0b4cd90c875740ee685d0624b2983598
  languageName: node
  linkType: hard

"data-urls@npm:^3.0.1":
  version: 3.0.2
  resolution: "data-urls@npm:3.0.2"
  dependencies:
    abab: ^2.0.6
    whatwg-mimetype: ^3.0.0
    whatwg-url: ^11.0.0
  checksum: 033fc3dd0fba6d24bc9a024ddcf9923691dd24f90a3d26f6545d6a2f71ec6956f93462f2cdf2183cc46f10dc01ed3bcb36731a8208456eb1a08147e571fe2a76
  languageName: node
  linkType: hard

"date-fns-tz@npm:^1.3.3":
  version: 1.3.4
  resolution: "date-fns-tz@npm:1.3.4"
  peerDependencies:
    date-fns: ">=2.0.0"
  checksum: d9b929f2d65b2c4ed96bb09a8bc38f3884b2c44525d58f9329bd374556bb0445bd13308747d209afda513c9b1fac33dfee91d0633b1e9c579d376715a1ac01c5
  languageName: node
  linkType: hard

"date-fns@npm:^2.28.0":
  version: 2.28.0
  resolution: "date-fns@npm:2.28.0"
  checksum: a0516b2e4f99b8bffc6cc5193349f185f195398385bdcaf07f17c2c4a24473c99d933eb0018be4142a86a6d46cb0b06be6440ad874f15e795acbedd6fd727a1f
  languageName: node
  linkType: hard

"dayjs@npm:^1.10.4":
  version: 1.11.2
  resolution: "dayjs@npm:1.11.2"
  checksum: 78f8bd04a9e5f5554aa06eacda65a7d59e162d39f621a46fd34fb3b51367c3662426d86b4e2f4ac535f81e0c4d5af3e8a83b37e672412eb556267d726c61f8f3
  languageName: node
  linkType: hard

"debug@npm:4, debug@npm:^4.1.0, debug@npm:^4.1.1, debug@npm:^4.3.2, debug@npm:^4.3.3, debug@npm:^4.3.4":
  version: 4.3.4
  resolution: "debug@npm:4.3.4"
  dependencies:
    ms: 2.1.2
  peerDependenciesMeta:
    supports-color:
      optional: true
  checksum: 3dbad3f94ea64f34431a9cbf0bafb61853eda57bff2880036153438f50fb5a84f27683ba0d8e5426bf41a8c6ff03879488120cf5b3a761e77953169c0600a708
  languageName: node
  linkType: hard

"debug@npm:4.3.2":
  version: 4.3.2
  resolution: "debug@npm:4.3.2"
  dependencies:
    ms: 2.1.2
  peerDependenciesMeta:
    supports-color:
      optional: true
  checksum: 820ea160e267e23c953c9ed87e7ad93494d8cda2f7349af5e7e3bb236d23707ee3022f477d5a7d2ee86ef2bf7d60aa9ab22d1f58080d7deb9dccd073585e1e43
  languageName: node
  linkType: hard

"debug@npm:^3.1.0":
  version: 3.2.7
  resolution: "debug@npm:3.2.7"
  dependencies:
    ms: ^2.1.1
  checksum: b3d8c5940799914d30314b7c3304a43305fd0715581a919dacb8b3176d024a782062368405b47491516d2091d6462d4d11f2f4974a405048094f8bfebfa3071c
  languageName: node
  linkType: hard

"decimal.js@npm:^10.3.1":
  version: 10.3.1
  resolution: "decimal.js@npm:10.3.1"
  checksum: 0351ac9f05fe050f23227aa6a4573bee2d58fa7378fcf28d969a8c789525032effb488a90320fd3fe86a66e17b4bc507d811b15eada5b7f0e7ec5d2af4c24a59
  languageName: node
  linkType: hard

"deep-eql@npm:^3.0.1":
  version: 3.0.1
  resolution: "deep-eql@npm:3.0.1"
  dependencies:
    type-detect: ^4.0.0
  checksum: 4f4c9fb79eb994fb6e81d4aa8b063adc40c00f831588aa65e20857d5d52f15fb23034a6576ecf886f7ff6222d5ae42e71e9b7d57113e0715b1df7ea1e812b125
  languageName: node
  linkType: hard

"deep-equal@npm:^2.0.5":
  version: 2.0.5
  resolution: "deep-equal@npm:2.0.5"
  dependencies:
    call-bind: ^1.0.0
    es-get-iterator: ^1.1.1
    get-intrinsic: ^1.0.1
    is-arguments: ^1.0.4
    is-date-object: ^1.0.2
    is-regex: ^1.1.1
    isarray: ^2.0.5
    object-is: ^1.1.4
    object-keys: ^1.1.1
    object.assign: ^4.1.2
    regexp.prototype.flags: ^1.3.0
    side-channel: ^1.0.3
    which-boxed-primitive: ^1.0.1
    which-collection: ^1.0.1
    which-typed-array: ^1.1.2
  checksum: 2bb7332badf589b540184d25098acac750e30fe11c8dce4523d03fc5db15f46881a0105e6bf0b64bb0c57213a95ed964029ff0259026ad6f7f9e0019f8200de5
  languageName: node
  linkType: hard

"deep-is@npm:^0.1.3, deep-is@npm:~0.1.3":
  version: 0.1.4
  resolution: "deep-is@npm:0.1.4"
  checksum: edb65dd0d7d1b9c40b2f50219aef30e116cedd6fc79290e740972c132c09106d2e80aa0bc8826673dd5a00222d4179c84b36a790eef63a4c4bca75a37ef90804
  languageName: node
  linkType: hard

"define-properties@npm:^1.1.3, define-properties@npm:^1.1.4":
  version: 1.1.4
  resolution: "define-properties@npm:1.1.4"
  dependencies:
    has-property-descriptors: ^1.0.0
    object-keys: ^1.1.1
  checksum: ce0aef3f9eb193562b5cfb79b2d2c86b6a109dfc9fdcb5f45d680631a1a908c06824ddcdb72b7573b54e26ace07f0a23420aaba0d5c627b34d2c1de8ef527e2b
  languageName: node
  linkType: hard

"defined@npm:^1.0.0":
  version: 1.0.0
  resolution: "defined@npm:1.0.0"
  checksum: 77672997c5001773371c4dbcce98da0b3dc43089d6da2ad87c4b800adb727633cea8723ea3889fe0c2112a2404e2fd07e3bfd0e55f7426aa6441d8992045dbd5
  languageName: node
  linkType: hard

"delayed-stream@npm:~1.0.0":
  version: 1.0.0
  resolution: "delayed-stream@npm:1.0.0"
  checksum: 46fe6e83e2cb1d85ba50bd52803c68be9bd953282fa7096f51fc29edd5d67ff84ff753c51966061e5ba7cb5e47ef6d36a91924eddb7f3f3483b1c560f77a0020
  languageName: node
  linkType: hard

"delegates@npm:^1.0.0":
  version: 1.0.0
  resolution: "delegates@npm:1.0.0"
  checksum: a51744d9b53c164ba9c0492471a1a2ffa0b6727451bdc89e31627fdf4adda9d51277cfcbfb20f0a6f08ccb3c436f341df3e92631a3440226d93a8971724771fd
  languageName: node
  linkType: hard

"depd@npm:^1.1.2":
  version: 1.1.2
  resolution: "depd@npm:1.1.2"
  checksum: 6b406620d269619852885ce15965272b829df6f409724415e0002c8632ab6a8c0a08ec1f0bd2add05dc7bd7507606f7e2cc034fa24224ab829580040b835ecd9
  languageName: node
  linkType: hard

"detective@npm:^5.2.0":
  version: 5.2.0
  resolution: "detective@npm:5.2.0"
  dependencies:
    acorn-node: ^1.6.1
    defined: ^1.0.0
    minimist: ^1.1.1
  bin:
    detective: bin/detective.js
  checksum: 2ab266aecbd695b42e4703cfa560178ceac4308a74baece58185775426e65573d563d84f33e6a3b28ef3a544aa0c039c0730ada939c6458862e6643f66044f32
  languageName: node
  linkType: hard

"didyoumean@npm:^1.2.2":
  version: 1.2.2
  resolution: "didyoumean@npm:1.2.2"
  checksum: d5d98719d58b3c2fa59663c4c42ba9716f1fd01245c31d5fce31915bd3aa26e6aac149788e007358f778ebbd68a2256eb5973e8ca6f221df221ba060115acf2e
  languageName: node
  linkType: hard

"diff-sequences@npm:^27.5.1":
  version: 27.5.1
  resolution: "diff-sequences@npm:27.5.1"
  checksum: a00db5554c9da7da225db2d2638d85f8e41124eccbd56cbaefb3b276dcbb1c1c2ad851c32defe2055a54a4806f030656cbf6638105fd6ce97bb87b90b32a33ca
  languageName: node
  linkType: hard

"dir-glob@npm:^3.0.1":
  version: 3.0.1
  resolution: "dir-glob@npm:3.0.1"
  dependencies:
    path-type: ^4.0.0
  checksum: fa05e18324510d7283f55862f3161c6759a3f2f8dbce491a2fc14c8324c498286c54282c1f0e933cb930da8419b30679389499b919122952a4f8592362ef4615
  languageName: node
  linkType: hard

"dlv@npm:^1.1.3":
  version: 1.1.3
  resolution: "dlv@npm:1.1.3"
  checksum: d7381bca22ed11933a1ccf376db7a94bee2c57aa61e490f680124fa2d1cd27e94eba641d9f45be57caab4f9a6579de0983466f620a2cd6230d7ec93312105ae7
  languageName: node
  linkType: hard

"doctrine@npm:^3.0.0":
  version: 3.0.0
  resolution: "doctrine@npm:3.0.0"
  dependencies:
    esutils: ^2.0.2
  checksum: fd7673ca77fe26cd5cba38d816bc72d641f500f1f9b25b83e8ce28827fe2da7ad583a8da26ab6af85f834138cf8dae9f69b0cd6ab925f52ddab1754db44d99ce
  languageName: node
  linkType: hard

"doctypes@npm:^1.1.0":
  version: 1.1.0
  resolution: "doctypes@npm:1.1.0"
  checksum: 6e6c2d1a80f2072dc4831994c914c44455e341c5ab18c16797368a0afd59d7c22f3335805ba2c1dd2931e9539d1ba8b613b7650dc63f6ab56b77b8d888055de8
  languageName: node
  linkType: hard

"domexception@npm:^4.0.0":
  version: 4.0.0
  resolution: "domexception@npm:4.0.0"
  dependencies:
    webidl-conversions: ^7.0.0
  checksum: ddbc1268edf33a8ba02ccc596735ede80375ee0cf124b30d2f05df5b464ba78ef4f49889b6391df4a04954e63d42d5631c7fcf8b1c4f12bc531252977a5f13d5
  languageName: node
  linkType: hard

"duplexer@npm:~0.1.1":
  version: 0.1.2
  resolution: "duplexer@npm:0.1.2"
  checksum: 62ba61a830c56801db28ff6305c7d289b6dc9f859054e8c982abd8ee0b0a14d2e9a8e7d086ffee12e868d43e2bbe8a964be55ddbd8c8957714c87373c7a4f9b0
  languageName: node
  linkType: hard

"dynamics.js@npm:^1.1.5":
  version: 1.1.5
  resolution: "dynamics.js@npm:1.1.5"
  checksum: 5686a37fa1382beadc455c5a1c551f0ac835559de1cb31a789d77e7f69f195668e929e1c410d89ba600f57831bcb688764feb4b7b2af353ca14096396a9e59b6
  languageName: node
  linkType: hard

"ecc-jsbn@npm:~0.1.1":
  version: 0.1.2
  resolution: "ecc-jsbn@npm:0.1.2"
  dependencies:
    jsbn: ~0.1.0
    safer-buffer: ^2.1.0
  checksum: 22fef4b6203e5f31d425f5b711eb389e4c6c2723402e389af394f8411b76a488fa414d309d866e2b577ce3e8462d344205545c88a8143cc21752a5172818888a
  languageName: node
  linkType: hard

"electron-to-chromium@npm:^1.4.118":
  version: 1.4.137
  resolution: "electron-to-chromium@npm:1.4.137"
  checksum: 639d7b94906efafcf363519c3698eecc44be46755a6a5cdc9088954329978866cc93fbd57e08b97290599b68d5226243d21de9fa50be416b8a5d3fa8fd42c3a0
  languageName: node
  linkType: hard

"emoji-regex@npm:^8.0.0":
  version: 8.0.0
  resolution: "emoji-regex@npm:8.0.0"
  checksum: d4c5c39d5a9868b5fa152f00cada8a936868fd3367f33f71be515ecee4c803132d11b31a6222b2571b1e5f7e13890156a94880345594d0ce7e3c9895f560f192
  languageName: node
  linkType: hard

"encoding@npm:^0.1.13":
  version: 0.1.13
  resolution: "encoding@npm:0.1.13"
  dependencies:
    iconv-lite: ^0.6.2
  checksum: bb98632f8ffa823996e508ce6a58ffcf5856330fde839ae42c9e1f436cc3b5cc651d4aeae72222916545428e54fd0f6aa8862fd8d25bdbcc4589f1e3f3715e7f
  languageName: node
  linkType: hard

"end-of-stream@npm:^1.1.0":
  version: 1.4.4
  resolution: "end-of-stream@npm:1.4.4"
  dependencies:
    once: ^1.4.0
  checksum: 530a5a5a1e517e962854a31693dbb5c0b2fc40b46dad2a56a2deec656ca040631124f4795823acc68238147805f8b021abbe221f4afed5ef3c8e8efc2024908b
  languageName: node
  linkType: hard

"enquirer@npm:^2.3.6":
  version: 2.3.6
  resolution: "enquirer@npm:2.3.6"
  dependencies:
    ansi-colors: ^4.1.1
  checksum: 1c0911e14a6f8d26721c91e01db06092a5f7675159f0261d69c403396a385afd13dd76825e7678f66daffa930cfaa8d45f506fb35f818a2788463d022af1b884
  languageName: node
  linkType: hard

"env-paths@npm:^2.2.0":
  version: 2.2.1
  resolution: "env-paths@npm:2.2.1"
  checksum: 65b5df55a8bab92229ab2b40dad3b387fad24613263d103a97f91c9fe43ceb21965cd3392b1ccb5d77088021e525c4e0481adb309625d0cb94ade1d1fb8dc17e
  languageName: node
  linkType: hard

"err-code@npm:^2.0.2":
  version: 2.0.3
  resolution: "err-code@npm:2.0.3"
  checksum: 8b7b1be20d2de12d2255c0bc2ca638b7af5171142693299416e6a9339bd7d88fc8d7707d913d78e0993176005405a236b066b45666b27b797252c771156ace54
  languageName: node
  linkType: hard

"es-abstract@npm:^1.18.5, es-abstract@npm:^1.19.0, es-abstract@npm:^1.19.5":
  version: 1.20.0
  resolution: "es-abstract@npm:1.20.0"
  dependencies:
    call-bind: ^1.0.2
    es-to-primitive: ^1.2.1
    function-bind: ^1.1.1
    function.prototype.name: ^1.1.5
    get-intrinsic: ^1.1.1
    get-symbol-description: ^1.0.0
    has: ^1.0.3
    has-property-descriptors: ^1.0.0
    has-symbols: ^1.0.3
    internal-slot: ^1.0.3
    is-callable: ^1.2.4
    is-negative-zero: ^2.0.2
    is-regex: ^1.1.4
    is-shared-array-buffer: ^1.0.2
    is-string: ^1.0.7
    is-weakref: ^1.0.2
    object-inspect: ^1.12.0
    object-keys: ^1.1.1
    object.assign: ^4.1.2
    regexp.prototype.flags: ^1.4.1
    string.prototype.trimend: ^1.0.5
    string.prototype.trimstart: ^1.0.5
    unbox-primitive: ^1.0.2
  checksum: c9cc85a7aa0e3cdef740293b4b90892d6954e4e834d0888e3071cc9544bce0ae12923f5026a1970e0ac75a254d311d53e72ba4675647b81e7ca05acb703004e6
  languageName: node
  linkType: hard

"es-get-iterator@npm:^1.1.1":
  version: 1.1.2
  resolution: "es-get-iterator@npm:1.1.2"
  dependencies:
    call-bind: ^1.0.2
    get-intrinsic: ^1.1.0
    has-symbols: ^1.0.1
    is-arguments: ^1.1.0
    is-map: ^2.0.2
    is-set: ^2.0.2
    is-string: ^1.0.5
    isarray: ^2.0.5
  checksum: f75e66acb6a45686fa08b3ade9c9421a70d36a0c43ed4363e67f4d7aab2226cb73dd977cb48abbaf75721b946d3cd810682fcf310c7ad0867802fbf929b17dcf
  languageName: node
  linkType: hard

"es-to-primitive@npm:^1.2.1":
  version: 1.2.1
  resolution: "es-to-primitive@npm:1.2.1"
  dependencies:
    is-callable: ^1.1.4
    is-date-object: ^1.0.1
    is-symbol: ^1.0.2
  checksum: 4ead6671a2c1402619bdd77f3503991232ca15e17e46222b0a41a5d81aebc8740a77822f5b3c965008e631153e9ef0580540007744521e72de8e33599fca2eed
  languageName: node
  linkType: hard

"esbuild-android-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-android-64@npm:0.14.38"
  conditions: os=android & cpu=x64
  languageName: node
  linkType: hard

"esbuild-android-arm64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-android-arm64@npm:0.14.38"
  conditions: os=android & cpu=arm64
  languageName: node
  linkType: hard

"esbuild-darwin-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-darwin-64@npm:0.14.38"
  conditions: os=darwin & cpu=x64
  languageName: node
  linkType: hard

"esbuild-darwin-arm64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-darwin-arm64@npm:0.14.38"
  conditions: os=darwin & cpu=arm64
  languageName: node
  linkType: hard

"esbuild-freebsd-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-freebsd-64@npm:0.14.38"
  conditions: os=freebsd & cpu=x64
  languageName: node
  linkType: hard

"esbuild-freebsd-arm64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-freebsd-arm64@npm:0.14.38"
  conditions: os=freebsd & cpu=arm64
  languageName: node
  linkType: hard

"esbuild-linux-32@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-32@npm:0.14.38"
  conditions: os=linux & cpu=ia32
  languageName: node
  linkType: hard

"esbuild-linux-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-64@npm:0.14.38"
  conditions: os=linux & cpu=x64
  languageName: node
  linkType: hard

"esbuild-linux-arm64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-arm64@npm:0.14.38"
  conditions: os=linux & cpu=arm64
  languageName: node
  linkType: hard

"esbuild-linux-arm@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-arm@npm:0.14.38"
  conditions: os=linux & cpu=arm
  languageName: node
  linkType: hard

"esbuild-linux-mips64le@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-mips64le@npm:0.14.38"
  conditions: os=linux & cpu=mips64el
  languageName: node
  linkType: hard

"esbuild-linux-ppc64le@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-ppc64le@npm:0.14.38"
  conditions: os=linux & cpu=ppc64
  languageName: node
  linkType: hard

"esbuild-linux-riscv64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-riscv64@npm:0.14.38"
  conditions: os=linux & cpu=riscv64
  languageName: node
  linkType: hard

"esbuild-linux-s390x@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-s390x@npm:0.14.38"
  conditions: os=linux & cpu=s390x
  languageName: node
  linkType: hard

"esbuild-netbsd-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-netbsd-64@npm:0.14.38"
  conditions: os=netbsd & cpu=x64
  languageName: node
  linkType: hard

"esbuild-openbsd-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-openbsd-64@npm:0.14.38"
  conditions: os=openbsd & cpu=x64
  languageName: node
  linkType: hard

"esbuild-sunos-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-sunos-64@npm:0.14.38"
  conditions: os=sunos & cpu=x64
  languageName: node
  linkType: hard

"esbuild-windows-32@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-windows-32@npm:0.14.38"
  conditions: os=win32 & cpu=ia32
  languageName: node
  linkType: hard

"esbuild-windows-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-windows-64@npm:0.14.38"
  conditions: os=win32 & cpu=x64
  languageName: node
  linkType: hard

"esbuild-windows-arm64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-windows-arm64@npm:0.14.38"
  conditions: os=win32 & cpu=arm64
  languageName: node
  linkType: hard

"esbuild@npm:^0.14.27":
  version: 0.14.38
  resolution: "esbuild@npm:0.14.38"
  dependencies:
    esbuild-android-64: 0.14.38
    esbuild-android-arm64: 0.14.38
    esbuild-darwin-64: 0.14.38
    esbuild-darwin-arm64: 0.14.38
    esbuild-freebsd-64: 0.14.38
    esbuild-freebsd-arm64: 0.14.38
    esbuild-linux-32: 0.14.38
    esbuild-linux-64: 0.14.38
    esbuild-linux-arm: 0.14.38
    esbuild-linux-arm64: 0.14.38
    esbuild-linux-mips64le: 0.14.38
    esbuild-linux-ppc64le: 0.14.38
    esbuild-linux-riscv64: 0.14.38
    esbuild-linux-s390x: 0.14.38
    esbuild-netbsd-64: 0.14.38
    esbuild-openbsd-64: 0.14.38
    esbuild-sunos-64: 0.14.38
    esbuild-windows-32: 0.14.38
    esbuild-windows-64: 0.14.38
    esbuild-windows-arm64: 0.14.38
  dependenciesMeta:
    esbuild-android-64:
      optional: true
    esbuild-android-arm64:
      optional: true
    esbuild-darwin-64:
      optional: true
    esbuild-darwin-arm64:
      optional: true
    esbuild-freebsd-64:
      optional: true
    esbuild-freebsd-arm64:
      optional: true
    esbuild-linux-32:
      optional: true
    esbuild-linux-64:
      optional: true
    esbuild-linux-arm:
      optional: true
    esbuild-linux-arm64:
      optional: true
    esbuild-linux-mips64le:
      optional: true
    esbuild-linux-ppc64le:
      optional: true
    esbuild-linux-riscv64:
      optional: true
    esbuild-linux-s390x:
      optional: true
    esbuild-netbsd-64:
      optional: true
    esbuild-openbsd-64:
      optional: true
    esbuild-sunos-64:
      optional: true
    esbuild-windows-32:
      optional: true
    esbuild-windows-64:
      optional: true
    esbuild-windows-arm64:
      optional: true
  bin:
    esbuild: bin/esbuild
  checksum: d7523a36bd28016c010829c527386dbc0c6b9f514920abf5ac8003f346665161aa61026fd6822c5091fc1c1af52fe26c9281a81740fc06f2994cdbb7c2880297
  languageName: node
  linkType: hard

"escalade@npm:^3.1.1":
  version: 3.1.1
  resolution: "escalade@npm:3.1.1"
  checksum: a3e2a99f07acb74b3ad4989c48ca0c3140f69f923e56d0cba0526240ee470b91010f9d39001f2a4a313841d237ede70a729e92125191ba5d21e74b106800b133
  languageName: node
  linkType: hard

"escape-string-regexp@npm:^1.0.5":
  version: 1.0.5
  resolution: "escape-string-regexp@npm:1.0.5"
  checksum: 6092fda75c63b110c706b6a9bfde8a612ad595b628f0bd2147eea1d3406723020810e591effc7db1da91d80a71a737a313567c5abb3813e8d9c71f4aa595b410
  languageName: node
  linkType: hard

"escape-string-regexp@npm:^4.0.0":
  version: 4.0.0
  resolution: "escape-string-regexp@npm:4.0.0"
  checksum: 98b48897d93060f2322108bf29db0feba7dd774be96cd069458d1453347b25ce8682ecc39859d4bca2203cc0ab19c237bcc71755eff49a0f8d90beadeeba5cc5
  languageName: node
  linkType: hard

"escape-string-regexp@npm:^5.0.0":
  version: 5.0.0
  resolution: "escape-string-regexp@npm:5.0.0"
  checksum: 20daabe197f3cb198ec28546deebcf24b3dbb1a5a269184381b3116d12f0532e06007f4bc8da25669d6a7f8efb68db0758df4cd981f57bc5b57f521a3e12c59e
  languageName: node
  linkType: hard

"escodegen@npm:^2.0.0":
  version: 2.0.0
  resolution: "escodegen@npm:2.0.0"
  dependencies:
    esprima: ^4.0.1
    estraverse: ^5.2.0
    esutils: ^2.0.2
    optionator: ^0.8.1
    source-map: ~0.6.1
  dependenciesMeta:
    source-map:
      optional: true
  bin:
    escodegen: bin/escodegen.js
    esgenerate: bin/esgenerate.js
  checksum: 5aa6b2966fafe0545e4e77936300cc94ad57cfe4dc4ebff9950492eaba83eef634503f12d7e3cbd644ecc1bab388ad0e92b06fd32222c9281a75d1cf02ec6cef
  languageName: node
  linkType: hard

"eslint-config-prettier@npm:^8.3.0":
  version: 8.5.0
  resolution: "eslint-config-prettier@npm:8.5.0"
  peerDependencies:
    eslint: ">=7.0.0"
  bin:
    eslint-config-prettier: bin/cli.js
  checksum: 0d0f5c32e7a0ad91249467ce71ca92394ccd343178277d318baf32063b79ea90216f4c81d1065d60f96366fdc60f151d4d68ae7811a58bd37228b84c2083f893
  languageName: node
  linkType: hard

"eslint-plugin-cypress@npm:^2.12.1":
  version: 2.12.1
  resolution: "eslint-plugin-cypress@npm:2.12.1"
  dependencies:
    globals: ^11.12.0
  peerDependencies:
    eslint: ">= 3.2.1"
  checksum: 1f1c36e149304e9a6f58e2292a761abad58274da33b3a48b24ad55ad20cbce3ac7467321f2b6fcb052f9563c89f67004de4766eba2e2bdbcb010a6a0666989cf
  languageName: node
  linkType: hard

"eslint-plugin-prettier@npm:^4.0.0":
  version: 4.0.0
  resolution: "eslint-plugin-prettier@npm:4.0.0"
  dependencies:
    prettier-linter-helpers: ^1.0.0
  peerDependencies:
    eslint: ">=7.28.0"
    prettier: ">=2.0.0"
  peerDependenciesMeta:
    eslint-config-prettier:
      optional: true
  checksum: 03d69177a3c21fa2229c7e427ce604429f0b20ab7f411e2e824912f572a207c7f5a41fd1f0a95b9b8afe121e291c1b1f1dc1d44c7aad4b0837487f9c19f5210d
  languageName: node
  linkType: hard

"eslint-plugin-vue@npm:^8.2.0":
  version: 8.7.1
  resolution: "eslint-plugin-vue@npm:8.7.1"
  dependencies:
    eslint-utils: ^3.0.0
    natural-compare: ^1.4.0
    nth-check: ^2.0.1
    postcss-selector-parser: ^6.0.9
    semver: ^7.3.5
    vue-eslint-parser: ^8.0.1
  peerDependencies:
    eslint: ^6.2.0 || ^7.0.0 || ^8.0.0
  checksum: c3aefb226dea126db32cab4c570f17f4b4047d609f4f5748e8dc410e929fbbfacdc07af1421c0f7773398513e9363de4480694714bc85fa2188ca50d1d19cfbc
  languageName: node
  linkType: hard

"eslint-scope@npm:^5.1.1":
  version: 5.1.1
  resolution: "eslint-scope@npm:5.1.1"
  dependencies:
    esrecurse: ^4.3.0
    estraverse: ^4.1.1
  checksum: 47e4b6a3f0cc29c7feedee6c67b225a2da7e155802c6ea13bbef4ac6b9e10c66cd2dcb987867ef176292bf4e64eccc680a49e35e9e9c669f4a02bac17e86abdb
  languageName: node
  linkType: hard

"eslint-scope@npm:^7.0.0, eslint-scope@npm:^7.1.1":
  version: 7.1.1
  resolution: "eslint-scope@npm:7.1.1"
  dependencies:
    esrecurse: ^4.3.0
    estraverse: ^5.2.0
  checksum: 9f6e974ab2db641ca8ab13508c405b7b859e72afe9f254e8131ff154d2f40c99ad4545ce326fd9fde3212ff29707102562a4834f1c48617b35d98c71a97fbf3e
  languageName: node
  linkType: hard

"eslint-utils@npm:^3.0.0":
  version: 3.0.0
  resolution: "eslint-utils@npm:3.0.0"
  dependencies:
    eslint-visitor-keys: ^2.0.0
  peerDependencies:
    eslint: ">=5"
  checksum: 0668fe02f5adab2e5a367eee5089f4c39033af20499df88fe4e6aba2015c20720404d8c3d6349b6f716b08fdf91b9da4e5d5481f265049278099c4c836ccb619
  languageName: node
  linkType: hard

"eslint-visitor-keys@npm:^2.0.0":
  version: 2.1.0
  resolution: "eslint-visitor-keys@npm:2.1.0"
  checksum: e3081d7dd2611a35f0388bbdc2f5da60b3a3c5b8b6e928daffff7391146b434d691577aa95064c8b7faad0b8a680266bcda0a42439c18c717b80e6718d7e267d
  languageName: node
  linkType: hard

"eslint-visitor-keys@npm:^3.0.0, eslint-visitor-keys@npm:^3.1.0, eslint-visitor-keys@npm:^3.3.0":
  version: 3.3.0
  resolution: "eslint-visitor-keys@npm:3.3.0"
  checksum: d59e68a7c5a6d0146526b0eec16ce87fbf97fe46b8281e0d41384224375c4e52f5ffb9e16d48f4ea50785cde93f766b0c898e31ab89978d88b0e1720fbfb7808
  languageName: node
  linkType: hard

"eslint@npm:^8.5.0":
  version: 8.15.0
  resolution: "eslint@npm:8.15.0"
  dependencies:
    "@eslint/eslintrc": ^1.2.3
    "@humanwhocodes/config-array": ^0.9.2
    ajv: ^6.10.0
    chalk: ^4.0.0
    cross-spawn: ^7.0.2
    debug: ^4.3.2
    doctrine: ^3.0.0
    escape-string-regexp: ^4.0.0
    eslint-scope: ^7.1.1
    eslint-utils: ^3.0.0
    eslint-visitor-keys: ^3.3.0
    espree: ^9.3.2
    esquery: ^1.4.0
    esutils: ^2.0.2
    fast-deep-equal: ^3.1.3
    file-entry-cache: ^6.0.1
    functional-red-black-tree: ^1.0.1
    glob-parent: ^6.0.1
    globals: ^13.6.0
    ignore: ^5.2.0
    import-fresh: ^3.0.0
    imurmurhash: ^0.1.4
    is-glob: ^4.0.0
    js-yaml: ^4.1.0
    json-stable-stringify-without-jsonify: ^1.0.1
    levn: ^0.4.1
    lodash.merge: ^4.6.2
    minimatch: ^3.1.2
    natural-compare: ^1.4.0
    optionator: ^0.9.1
    regexpp: ^3.2.0
    strip-ansi: ^6.0.1
    strip-json-comments: ^3.1.0
    text-table: ^0.2.0
    v8-compile-cache: ^2.0.3
  bin:
    eslint: bin/eslint.js
  checksum: d8896393832e154e1381a21041cfe4d12a73a76fac26ea27cabbc0e5fdac87918ad651f07f804ef6faacd3868572de3c1ec5d96edf5502bc999eff0c423638f7
  languageName: node
  linkType: hard

"espree@npm:^9.0.0, espree@npm:^9.3.1, espree@npm:^9.3.2":
  version: 9.3.2
  resolution: "espree@npm:9.3.2"
  dependencies:
    acorn: ^8.7.1
    acorn-jsx: ^5.3.2
    eslint-visitor-keys: ^3.3.0
  checksum: 9a790d6779847051e87f70d720a0f6981899a722419e80c92ab6dee01e1ab83b8ce52d11b4dc96c2c490182efb5a4c138b8b0d569205bfe1cd4629e658e58c30
  languageName: node
  linkType: hard

"esprima@npm:^4.0.1":
  version: 4.0.1
  resolution: "esprima@npm:4.0.1"
  bin:
    esparse: ./bin/esparse.js
    esvalidate: ./bin/esvalidate.js
  checksum: b45bc805a613dbea2835278c306b91aff6173c8d034223fa81498c77dcbce3b2931bf6006db816f62eacd9fd4ea975dfd85a5b7f3c6402cfd050d4ca3c13a628
  languageName: node
  linkType: hard

"esquery@npm:^1.4.0":
  version: 1.4.0
  resolution: "esquery@npm:1.4.0"
  dependencies:
    estraverse: ^5.1.0
  checksum: a0807e17abd7fbe5fbd4fab673038d6d8a50675cdae6b04fbaa520c34581be0c5fa24582990e8acd8854f671dd291c78bb2efb9e0ed5b62f33bac4f9cf820210
  languageName: node
  linkType: hard

"esrecurse@npm:^4.3.0":
  version: 4.3.0
  resolution: "esrecurse@npm:4.3.0"
  dependencies:
    estraverse: ^5.2.0
  checksum: ebc17b1a33c51cef46fdc28b958994b1dc43cd2e86237515cbc3b4e5d2be6a811b2315d0a1a4d9d340b6d2308b15322f5c8291059521cc5f4802f65e7ec32837
  languageName: node
  linkType: hard

"estraverse@npm:^4.1.1":
  version: 4.3.0
  resolution: "estraverse@npm:4.3.0"
  checksum: a6299491f9940bb246124a8d44b7b7a413a8336f5436f9837aaa9330209bd9ee8af7e91a654a3545aee9c54b3308e78ee360cef1d777d37cfef77d2fa33b5827
  languageName: node
  linkType: hard

"estraverse@npm:^5.1.0, estraverse@npm:^5.2.0":
  version: 5.3.0
  resolution: "estraverse@npm:5.3.0"
  checksum: 072780882dc8416ad144f8fe199628d2b3e7bbc9989d9ed43795d2c90309a2047e6bc5979d7e2322a341163d22cfad9e21f4110597fe487519697389497e4e2b
  languageName: node
  linkType: hard

"estree-walker@npm:^2.0.1, estree-walker@npm:^2.0.2":
  version: 2.0.2
  resolution: "estree-walker@npm:2.0.2"
  checksum: 6151e6f9828abe2259e57f5fd3761335bb0d2ebd76dc1a01048ccee22fabcfef3c0859300f6d83ff0d1927849368775ec5a6d265dde2f6de5a1be1721cd94efc
  languageName: node
  linkType: hard

"esutils@npm:^2.0.2":
  version: 2.0.3
  resolution: "esutils@npm:2.0.3"
  checksum: 22b5b08f74737379a840b8ed2036a5fb35826c709ab000683b092d9054e5c2a82c27818f12604bfc2a9a76b90b6834ef081edbc1c7ae30d1627012e067c6ec87
  languageName: node
  linkType: hard

"event-stream@npm:=3.3.4":
  version: 3.3.4
  resolution: "event-stream@npm:3.3.4"
  dependencies:
    duplexer: ~0.1.1
    from: ~0
    map-stream: ~0.1.0
    pause-stream: 0.0.11
    split: 0.3
    stream-combiner: ~0.0.4
    through: ~2.3.1
  checksum: 80b467820b6daf824d9fb4345d2daf115a056e5c104463f2e98534e92d196a27f2df5ea2aa085624db26f4c45698905499e881d13bc7c01f7a13eac85be72a22
  languageName: node
  linkType: hard

"eventemitter2@npm:^6.4.3":
  version: 6.4.5
  resolution: "eventemitter2@npm:6.4.5"
  checksum: 84504f9cf0cc30205cdd46783fe9df3733435e5097f13070b678023110b5ef07847651808ae280cd94c42cd5976880211c7a40321a8ff8fa56f7c5f9c5c11960
  languageName: node
  linkType: hard

"evtd@npm:^0.2.2, evtd@npm:^0.2.3":
  version: 0.2.3
  resolution: "evtd@npm:0.2.3"
  checksum: 5ddded626355bf97c62e9b0a99aa2187b74e90b50032c06e2e75723250a152ad5b57bbca844fc07d3bd0b9f22f8dfe96ae4c68614efe5f879a4191c3c8070b5a
  languageName: node
  linkType: hard

"execa@npm:4.1.0":
  version: 4.1.0
  resolution: "execa@npm:4.1.0"
  dependencies:
    cross-spawn: ^7.0.0
    get-stream: ^5.0.0
    human-signals: ^1.1.1
    is-stream: ^2.0.0
    merge-stream: ^2.0.0
    npm-run-path: ^4.0.0
    onetime: ^5.1.0
    signal-exit: ^3.0.2
    strip-final-newline: ^2.0.0
  checksum: e30d298934d9c52f90f3847704fd8224e849a081ab2b517bbc02f5f7732c24e56a21f14cb96a08256deffeb2d12b2b7cb7e2b014a12fb36f8d3357e06417ed55
  languageName: node
  linkType: hard

"execa@npm:5.1.1, execa@npm:^5.1.1":
  version: 5.1.1
  resolution: "execa@npm:5.1.1"
  dependencies:
    cross-spawn: ^7.0.3
    get-stream: ^6.0.0
    human-signals: ^2.1.0
    is-stream: ^2.0.0
    merge-stream: ^2.0.0
    npm-run-path: ^4.0.1
    onetime: ^5.1.2
    signal-exit: ^3.0.3
    strip-final-newline: ^2.0.0
  checksum: fba9022c8c8c15ed862847e94c252b3d946036d7547af310e344a527e59021fd8b6bb0723883ea87044dc4f0201f949046993124a42ccb0855cae5bf8c786343
  languageName: node
  linkType: hard

"executable@npm:^4.1.1":
  version: 4.1.1
  resolution: "executable@npm:4.1.1"
  dependencies:
    pify: ^2.2.0
  checksum: f01927ce59bccec804e171bf859a26e362c1f50aa9ebc69f7cafdcce3859d29d4b6267fd47237c18b0a1830614bd3f0ee14b7380d9bad18a4e7af9b5f0b6984f
  languageName: node
  linkType: hard

"extend@npm:~3.0.2":
  version: 3.0.2
  resolution: "extend@npm:3.0.2"
  checksum: a50a8309ca65ea5d426382ff09f33586527882cf532931cb08ca786ea3146c0553310bda688710ff61d7668eba9f96b923fe1420cdf56a2c3eaf30fcab87b515
  languageName: node
  linkType: hard

"extract-zip@npm:2.0.1":
  version: 2.0.1
  resolution: "extract-zip@npm:2.0.1"
  dependencies:
    "@types/yauzl": ^2.9.1
    debug: ^4.1.1
    get-stream: ^5.1.0
    yauzl: ^2.10.0
  dependenciesMeta:
    "@types/yauzl":
      optional: true
  bin:
    extract-zip: cli.js
  checksum: 8cbda9debdd6d6980819cc69734d874ddd71051c9fe5bde1ef307ebcedfe949ba57b004894b585f758b7c9eeeea0e3d87f2dda89b7d25320459c2c9643ebb635
  languageName: node
  linkType: hard

"extsprintf@npm:1.3.0":
  version: 1.3.0
  resolution: "extsprintf@npm:1.3.0"
  checksum: cee7a4a1e34cffeeec18559109de92c27517e5641991ec6bab849aa64e3081022903dd53084f2080d0d2530803aa5ee84f1e9de642c365452f9e67be8f958ce2
  languageName: node
  linkType: hard

"extsprintf@npm:^1.2.0":
  version: 1.4.1
  resolution: "extsprintf@npm:1.4.1"
  checksum: a2f29b241914a8d2bad64363de684821b6b1609d06ae68d5b539e4de6b28659715b5bea94a7265201603713b7027d35399d10b0548f09071c5513e65e8323d33
  languageName: node
  linkType: hard

"fast-deep-equal@npm:^3.1.1, fast-deep-equal@npm:^3.1.3":
  version: 3.1.3
  resolution: "fast-deep-equal@npm:3.1.3"
  checksum: e21a9d8d84f53493b6aa15efc9cfd53dd5b714a1f23f67fb5dc8f574af80df889b3bce25dc081887c6d25457cce704e636395333abad896ccdec03abaf1f3f9d
  languageName: node
  linkType: hard

"fast-diff@npm:^1.1.2":
  version: 1.2.0
  resolution: "fast-diff@npm:1.2.0"
  checksum: 1b5306eaa9e826564d9e5ffcd6ebd881eb5f770b3f977fcbf38f05c824e42172b53c79920e8429c54eb742ce15a0caf268b0fdd5b38f6de52234c4a8368131ae
  languageName: node
  linkType: hard

"fast-glob@npm:^3.2.11, fast-glob@npm:^3.2.9":
  version: 3.2.11
  resolution: "fast-glob@npm:3.2.11"
  dependencies:
    "@nodelib/fs.stat": ^2.0.2
    "@nodelib/fs.walk": ^1.2.3
    glob-parent: ^5.1.2
    merge2: ^1.3.0
    micromatch: ^4.0.4
  checksum: f473105324a7780a20c06de842e15ddbb41d3cb7e71d1e4fe6e8373204f22245d54f5ab9e2061e6a1c613047345954d29b022e0e76f5c28b1df9858179a0e6d7
  languageName: node
  linkType: hard

"fast-json-stable-stringify@npm:^2.0.0":
  version: 2.1.0
  resolution: "fast-json-stable-stringify@npm:2.1.0"
  checksum: b191531e36c607977e5b1c47811158733c34ccb3bfde92c44798929e9b4154884378536d26ad90dfecd32e1ffc09c545d23535ad91b3161a27ddbb8ebe0cbecb
  languageName: node
  linkType: hard

"fast-levenshtein@npm:^2.0.6, fast-levenshtein@npm:~2.0.6":
  version: 2.0.6
  resolution: "fast-levenshtein@npm:2.0.6"
  checksum: 92cfec0a8dfafd9c7a15fba8f2cc29cd0b62b85f056d99ce448bbcd9f708e18ab2764bda4dd5158364f4145a7c72788538994f0d1787b956ef0d1062b0f7c24c
  languageName: node
  linkType: hard

"fastq@npm:^1.6.0":
  version: 1.13.0
  resolution: "fastq@npm:1.13.0"
  dependencies:
    reusify: ^1.0.4
  checksum: 32cf15c29afe622af187d12fc9cd93e160a0cb7c31a3bb6ace86b7dea3b28e7b72acde89c882663f307b2184e14782c6c664fa315973c03626c7d4bff070bb0b
  languageName: node
  linkType: hard

"fd-slicer@npm:~1.1.0":
  version: 1.1.0
  resolution: "fd-slicer@npm:1.1.0"
  dependencies:
    pend: ~1.2.0
  checksum: c8585fd5713f4476eb8261150900d2cb7f6ff2d87f8feb306ccc8a1122efd152f1783bdb2b8dc891395744583436bfd8081d8e63ece0ec8687eeefea394d4ff2
  languageName: node
  linkType: hard

"figures@npm:^3.2.0":
  version: 3.2.0
  resolution: "figures@npm:3.2.0"
  dependencies:
    escape-string-regexp: ^1.0.5
  checksum: 85a6ad29e9aca80b49b817e7c89ecc4716ff14e3779d9835af554db91bac41c0f289c418923519392a1e582b4d10482ad282021330cd045bb7b80c84152f2a2b
  languageName: node
  linkType: hard

"file-entry-cache@npm:^6.0.1":
  version: 6.0.1
  resolution: "file-entry-cache@npm:6.0.1"
  dependencies:
    flat-cache: ^3.0.4
  checksum: f49701feaa6314c8127c3c2f6173cfefff17612f5ed2daaafc6da13b5c91fd43e3b2a58fd0d63f9f94478a501b167615931e7200e31485e320f74a33885a9c74
  languageName: node
  linkType: hard

"fill-range@npm:^7.0.1":
  version: 7.0.1
  resolution: "fill-range@npm:7.0.1"
  dependencies:
    to-regex-range: ^5.0.1
  checksum: cc283f4e65b504259e64fd969bcf4def4eb08d85565e906b7d36516e87819db52029a76b6363d0f02d0d532f0033c9603b9e2d943d56ee3b0d4f7ad3328ff917
  languageName: node
  linkType: hard

"find-up@npm:^5.0.0":
  version: 5.0.0
  resolution: "find-up@npm:5.0.0"
  dependencies:
    locate-path: ^6.0.0
    path-exists: ^4.0.0
  checksum: 07955e357348f34660bde7920783204ff5a26ac2cafcaa28bace494027158a97b9f56faaf2d89a6106211a8174db650dd9f503f9c0d526b1202d5554a00b9095
  languageName: node
  linkType: hard

"flat-cache@npm:^3.0.4":
  version: 3.0.4
  resolution: "flat-cache@npm:3.0.4"
  dependencies:
    flatted: ^3.1.0
    rimraf: ^3.0.2
  checksum: 4fdd10ecbcbf7d520f9040dd1340eb5dfe951e6f0ecf2252edeec03ee68d989ec8b9a20f4434270e71bcfd57800dc09b3344fca3966b2eb8f613072c7d9a2365
  languageName: node
  linkType: hard

"flatted@npm:^3.1.0":
  version: 3.2.5
  resolution: "flatted@npm:3.2.5"
  checksum: 3c436e9695ccca29620b4be5671dd72e5dd0a7500e0856611b7ca9bd8169f177f408c3b9abfa78dfe1493ee2d873e2c119080a8a9bee4e1a186a9e60ca6c89f1
  languageName: node
  linkType: hard

"follow-redirects@npm:^1.14.0":
  version: 1.15.0
  resolution: "follow-redirects@npm:1.15.0"
  peerDependenciesMeta:
    debug:
      optional: true
  checksum: eaec81c3e0ae57aae2422e38ad3539d0e7279b3a63f9681eeea319bb683dea67502c4e097136b8ce9721542b4e236e092b6b49e34e326cdd7733c274f0a3f378
  languageName: node
  linkType: hard

"foreach@npm:^2.0.5":
  version: 2.0.5
  resolution: "foreach@npm:2.0.5"
  checksum: dab4fbfef0b40b69ee5eab81bcb9626b8fa8b3469c8cfa26480f3e5e1ee08c40eae07048c9a967c65aeda26e774511ccc70b3f10a604c01753c6ef24361f0fc8
  languageName: node
  linkType: hard

"forever-agent@npm:~0.6.1":
  version: 0.6.1
  resolution: "forever-agent@npm:0.6.1"
  checksum: 766ae6e220f5fe23676bb4c6a99387cec5b7b62ceb99e10923376e27bfea72f3c3aeec2ba5f45f3f7ba65d6616965aa7c20b15002b6860833bb6e394dea546a8
  languageName: node
  linkType: hard

"form-data@npm:^4.0.0":
  version: 4.0.0
  resolution: "form-data@npm:4.0.0"
  dependencies:
    asynckit: ^0.4.0
    combined-stream: ^1.0.8
    mime-types: ^2.1.12
  checksum: 01135bf8675f9d5c61ff18e2e2932f719ca4de964e3be90ef4c36aacfc7b9cb2fceb5eca0b7e0190e3383fe51c5b37f4cb80b62ca06a99aaabfcfd6ac7c9328c
  languageName: node
  linkType: hard

"form-data@npm:~2.3.2":
  version: 2.3.3
  resolution: "form-data@npm:2.3.3"
  dependencies:
    asynckit: ^0.4.0
    combined-stream: ^1.0.6
    mime-types: ^2.1.12
  checksum: 10c1780fa13dbe1ff3100114c2ce1f9307f8be10b14bf16e103815356ff567b6be39d70fc4a40f8990b9660012dc24b0f5e1dde1b6426166eb23a445ba068ca3
  languageName: node
  linkType: hard

"fraction.js@npm:^4.2.0":
  version: 4.2.0
  resolution: "fraction.js@npm:4.2.0"
  checksum: 8c76a6e21dedea87109d6171a0ac77afa14205794a565d71cb10d2925f629a3922da61bf45ea52dbc30bce4d8636dc0a27213a88cbd600eab047d82f9a3a94c5
  languageName: node
  linkType: hard

"from@npm:~0":
  version: 0.1.7
  resolution: "from@npm:0.1.7"
  checksum: b85125b7890489656eb2e4f208f7654a93ec26e3aefaf3bbbcc0d496fc1941e4405834fcc9fe7333192aa2187905510ace70417bbf9ac6f6f4784a731d986939
  languageName: node
  linkType: hard

"fs-extra@npm:^10.0.1":
  version: 10.1.0
  resolution: "fs-extra@npm:10.1.0"
  dependencies:
    graceful-fs: ^4.2.0
    jsonfile: ^6.0.1
    universalify: ^2.0.0
  checksum: dc94ab37096f813cc3ca12f0f1b5ad6744dfed9ed21e953d72530d103cea193c2f81584a39e9dee1bea36de5ee66805678c0dddc048e8af1427ac19c00fffc50
  languageName: node
  linkType: hard

"fs-extra@npm:^9.1.0":
  version: 9.1.0
  resolution: "fs-extra@npm:9.1.0"
  dependencies:
    at-least-node: ^1.0.0
    graceful-fs: ^4.2.0
    jsonfile: ^6.0.1
    universalify: ^2.0.0
  checksum: ba71ba32e0faa74ab931b7a0031d1523c66a73e225de7426e275e238e312d07313d2da2d33e34a52aa406c8763ade5712eb3ec9ba4d9edce652bcacdc29e6b20
  languageName: node
  linkType: hard

"fs-minipass@npm:^2.0.0, fs-minipass@npm:^2.1.0":
  version: 2.1.0
  resolution: "fs-minipass@npm:2.1.0"
  dependencies:
    minipass: ^3.0.0
  checksum: 1b8d128dae2ac6cc94230cc5ead341ba3e0efaef82dab46a33d171c044caaa6ca001364178d42069b2809c35a1c3c35079a32107c770e9ffab3901b59af8c8b1
  languageName: node
  linkType: hard

"fs.realpath@npm:^1.0.0":
  version: 1.0.0
  resolution: "fs.realpath@npm:1.0.0"
  checksum: 99ddea01a7e75aa276c250a04eedeffe5662bce66c65c07164ad6264f9de18fb21be9433ead460e54cff20e31721c811f4fb5d70591799df5f85dce6d6746fd0
  languageName: node
  linkType: hard

"fsevents@npm:~2.3.2":
  version: 2.3.2
  resolution: "fsevents@npm:2.3.2"
  dependencies:
    node-gyp: latest
  checksum: 97ade64e75091afee5265e6956cb72ba34db7819b4c3e94c431d4be2b19b8bb7a2d4116da417950c3425f17c8fe693d25e20212cac583ac1521ad066b77ae31f
  conditions: os=darwin
  languageName: node
  linkType: hard

"fsevents@patch:fsevents@~2.3.2#~builtin<compat/fsevents>":
  version: 2.3.2
  resolution: "fsevents@patch:fsevents@npm%3A2.3.2#~builtin<compat/fsevents>::version=2.3.2&hash=18f3a7"
  dependencies:
    node-gyp: latest
  conditions: os=darwin
  languageName: node
  linkType: hard

"function-bind@npm:^1.1.1":
  version: 1.1.1
  resolution: "function-bind@npm:1.1.1"
  checksum: b32fbaebb3f8ec4969f033073b43f5c8befbb58f1a79e12f1d7490358150359ebd92f49e72ff0144f65f2c48ea2a605bff2d07965f548f6474fd8efd95bf361a
  languageName: node
  linkType: hard

"function.prototype.name@npm:^1.1.5":
  version: 1.1.5
  resolution: "function.prototype.name@npm:1.1.5"
  dependencies:
    call-bind: ^1.0.2
    define-properties: ^1.1.3
    es-abstract: ^1.19.0
    functions-have-names: ^1.2.2
  checksum: acd21d733a9b649c2c442f067567743214af5fa248dbeee69d8278ce7df3329ea5abac572be9f7470b4ec1cd4d8f1040e3c5caccf98ebf2bf861a0deab735c27
  languageName: node
  linkType: hard

"functional-red-black-tree@npm:^1.0.1":
  version: 1.0.1
  resolution: "functional-red-black-tree@npm:1.0.1"
  checksum: ca6c170f37640e2d94297da8bb4bf27a1d12bea3e00e6a3e007fd7aa32e37e000f5772acf941b4e4f3cf1c95c3752033d0c509af157ad8f526e7f00723b9eb9f
  languageName: node
  linkType: hard

"functions-have-names@npm:^1.2.2":
  version: 1.2.3
  resolution: "functions-have-names@npm:1.2.3"
  checksum: c3f1f5ba20f4e962efb71344ce0a40722163e85bee2101ce25f88214e78182d2d2476aa85ef37950c579eb6cf6ee811c17b3101bb84004bb75655f3e33f3fdb5
  languageName: node
  linkType: hard

"gauge@npm:^4.0.3":
  version: 4.0.4
  resolution: "gauge@npm:4.0.4"
  dependencies:
    aproba: ^1.0.3 || ^2.0.0
    color-support: ^1.1.3
    console-control-strings: ^1.1.0
    has-unicode: ^2.0.1
    signal-exit: ^3.0.7
    string-width: ^4.2.3
    strip-ansi: ^6.0.1
    wide-align: ^1.1.5
  checksum: 788b6bfe52f1dd8e263cda800c26ac0ca2ff6de0b6eee2fe0d9e3abf15e149b651bd27bf5226be10e6e3edb5c4e5d5985a5a1a98137e7a892f75eff76467ad2d
  languageName: node
  linkType: hard

"gensync@npm:^1.0.0-beta.2":
  version: 1.0.0-beta.2
  resolution: "gensync@npm:1.0.0-beta.2"
  checksum: a7437e58c6be12aa6c90f7730eac7fa9833dc78872b4ad2963d2031b00a3367a93f98aec75f9aaac7220848e4026d67a8655e870b24f20a543d103c0d65952ec
  languageName: node
  linkType: hard

"get-func-name@npm:^2.0.0":
  version: 2.0.0
  resolution: "get-func-name@npm:2.0.0"
  checksum: 8d82e69f3e7fab9e27c547945dfe5cc0c57fc0adf08ce135dddb01081d75684a03e7a0487466f478872b341d52ac763ae49e660d01ab83741f74932085f693c3
  languageName: node
  linkType: hard

"get-intrinsic@npm:^1.0.1, get-intrinsic@npm:^1.0.2, get-intrinsic@npm:^1.1.0, get-intrinsic@npm:^1.1.1":
  version: 1.1.1
  resolution: "get-intrinsic@npm:1.1.1"
  dependencies:
    function-bind: ^1.1.1
    has: ^1.0.3
    has-symbols: ^1.0.1
  checksum: a9fe2ca8fa3f07f9b0d30fb202bcd01f3d9b9b6b732452e79c48e79f7d6d8d003af3f9e38514250e3553fdc83c61650851cb6870832ac89deaaceb08e3721a17
  languageName: node
  linkType: hard

"get-stream@npm:^5.0.0, get-stream@npm:^5.1.0":
  version: 5.2.0
  resolution: "get-stream@npm:5.2.0"
  dependencies:
    pump: ^3.0.0
  checksum: 8bc1a23174a06b2b4ce600df38d6c98d2ef6d84e020c1ddad632ad75bac4e092eeb40e4c09e0761c35fc2dbc5e7fff5dab5e763a383582c4a167dd69a905bd12
  languageName: node
  linkType: hard

"get-stream@npm:^6.0.0":
  version: 6.0.1
  resolution: "get-stream@npm:6.0.1"
  checksum: e04ecece32c92eebf5b8c940f51468cd53554dcbb0ea725b2748be583c9523d00128137966afce410b9b051eb2ef16d657cd2b120ca8edafcf5a65e81af63cad
  languageName: node
  linkType: hard

"get-symbol-description@npm:^1.0.0":
  version: 1.0.0
  resolution: "get-symbol-description@npm:1.0.0"
  dependencies:
    call-bind: ^1.0.2
    get-intrinsic: ^1.1.1
  checksum: 9ceff8fe968f9270a37a1f73bf3f1f7bda69ca80f4f80850670e0e7b9444ff99323f7ac52f96567f8b5f5fbe7ac717a0d81d3407c7313e82810c6199446a5247
  languageName: node
  linkType: hard

"getos@npm:^3.2.1":
  version: 3.2.1
  resolution: "getos@npm:3.2.1"
  dependencies:
    async: ^3.2.0
  checksum: 42fd78a66d47cebd3e09de5566cc0044e034b08f4a000a310dbd89a77b02c65d8f4002554bfa495ea5bdc4fa9d515f5ac785a7cc474ba45383cc697f865eeaf1
  languageName: node
  linkType: hard

"getpass@npm:^0.1.1":
  version: 0.1.7
  resolution: "getpass@npm:0.1.7"
  dependencies:
    assert-plus: ^1.0.0
  checksum: ab18d55661db264e3eac6012c2d3daeafaab7a501c035ae0ccb193c3c23e9849c6e29b6ac762b9c2adae460266f925d55a3a2a3a3c8b94be2f222df94d70c046
  languageName: node
  linkType: hard

"glob-parent@npm:^5.1.2, glob-parent@npm:~5.1.2":
  version: 5.1.2
  resolution: "glob-parent@npm:5.1.2"
  dependencies:
    is-glob: ^4.0.1
  checksum: f4f2bfe2425296e8a47e36864e4f42be38a996db40420fe434565e4480e3322f18eb37589617a98640c5dc8fdec1a387007ee18dbb1f3f5553409c34d17f425e
  languageName: node
  linkType: hard

"glob-parent@npm:^6.0.1, glob-parent@npm:^6.0.2":
  version: 6.0.2
  resolution: "glob-parent@npm:6.0.2"
  dependencies:
    is-glob: ^4.0.3
  checksum: c13ee97978bef4f55106b71e66428eb1512e71a7466ba49025fc2aec59a5bfb0954d5abd58fc5ee6c9b076eef4e1f6d3375c2e964b88466ca390da4419a786a8
  languageName: node
  linkType: hard

"glob-regex@npm:^0.3.0":
  version: 0.3.2
  resolution: "glob-regex@npm:0.3.2"
  checksum: 4f7adee18e750cbc3a328acb879631feca56dbfc03016cec53d5a54e50663ddc96e24e244ec8c1a5ee883515126754d89deb825eba529d32b869a0ae46f95e5c
  languageName: node
  linkType: hard

"glob@npm:^7.1.3, glob@npm:^7.1.4":
  version: 7.2.0
  resolution: "glob@npm:7.2.0"
  dependencies:
    fs.realpath: ^1.0.0
    inflight: ^1.0.4
    inherits: 2
    minimatch: ^3.0.4
    once: ^1.3.0
    path-is-absolute: ^1.0.0
  checksum: 78a8ea942331f08ed2e055cb5b9e40fe6f46f579d7fd3d694f3412fe5db23223d29b7fee1575440202e9a7ff9a72ab106a39fee39934c7bedafe5e5f8ae20134
  languageName: node
  linkType: hard

"glob@npm:^8.0.1":
  version: 8.0.1
  resolution: "glob@npm:8.0.1"
  dependencies:
    fs.realpath: ^1.0.0
    inflight: ^1.0.4
    inherits: 2
    minimatch: ^5.0.1
    once: ^1.3.0
    path-is-absolute: ^1.0.0
  checksum: 7ac782f3ef1c08005884447479e68ceb0ad56997eb2003e1e9aefae71bad3cb48eb7c49190d3d6736f2ffcd8af4985d53a46831b3d5e0052cc5756822a38b61a
  languageName: node
  linkType: hard

"glob@npm:^8.0.3":
  version: 8.0.3
  resolution: "glob@npm:8.0.3"
  dependencies:
    fs.realpath: ^1.0.0
    inflight: ^1.0.4
    inherits: 2
    minimatch: ^5.0.1
    once: ^1.3.0
  checksum: 50bcdea19d8e79d8de5f460b1939ffc2b3299eac28deb502093fdca22a78efebc03e66bf54f0abc3d3d07d8134d19a32850288b7440d77e072aa55f9d33b18c5
  languageName: node
  linkType: hard

"global-dirs@npm:^3.0.0":
  version: 3.0.0
  resolution: "global-dirs@npm:3.0.0"
  dependencies:
    ini: 2.0.0
  checksum: 953c17cf14bf6ee0e2100ae82a0d779934eed8a3ec5c94a7a4f37c5b3b592c31ea015fb9a15cf32484de13c79f4a814f3015152f3e1d65976cfbe47c1bfe4a88
  languageName: node
  linkType: hard

"globals@npm:^11.1.0, globals@npm:^11.12.0":
  version: 11.12.0
  resolution: "globals@npm:11.12.0"
  checksum: 67051a45eca3db904aee189dfc7cd53c20c7d881679c93f6146ddd4c9f4ab2268e68a919df740d39c71f4445d2b38ee360fc234428baea1dbdfe68bbcb46979e
  languageName: node
  linkType: hard

"globals@npm:^13.6.0, globals@npm:^13.9.0":
  version: 13.13.0
  resolution: "globals@npm:13.13.0"
  dependencies:
    type-fest: ^0.20.2
  checksum: c55ea8fd3afecb72567bac41605577e19e68476993dfb0ca4c49b86075af5f0ae3f0f5502525f69010f7c5ea5db6a1c540a80a4f80ebdfb2f686d87b0f05d7e9
  languageName: node
  linkType: hard

"globby@npm:^11.0.4, globby@npm:^11.1.0":
  version: 11.1.0
  resolution: "globby@npm:11.1.0"
  dependencies:
    array-union: ^2.1.0
    dir-glob: ^3.0.1
    fast-glob: ^3.2.9
    ignore: ^5.2.0
    merge2: ^1.4.1
    slash: ^3.0.0
  checksum: b4be8885e0cfa018fc783792942d53926c35c50b3aefd3fdcfb9d22c627639dc26bd2327a40a0b74b074100ce95bb7187bfeae2f236856aa3de183af7a02aea6
  languageName: node
  linkType: hard

"globrex@npm:^0.1.2":
  version: 0.1.2
  resolution: "globrex@npm:0.1.2"
  checksum: adca162494a176ce9ecf4dd232f7b802956bb1966b37f60c15e49d2e7d961b66c60826366dc2649093cad5a0d69970cfa8875bd1695b5a1a2f33dcd2aa88da3c
  languageName: node
  linkType: hard

"graceful-fs@npm:^4.1.6, graceful-fs@npm:^4.2.0, graceful-fs@npm:^4.2.6":
  version: 4.2.10
  resolution: "graceful-fs@npm:4.2.10"
  checksum: 3f109d70ae123951905d85032ebeae3c2a5a7a997430df00ea30df0e3a6c60cf6689b109654d6fdacd28810a053348c4d14642da1d075049e6be1ba5216218da
  languageName: node
  linkType: hard

"has-bigints@npm:^1.0.1, has-bigints@npm:^1.0.2":
  version: 1.0.2
  resolution: "has-bigints@npm:1.0.2"
  checksum: 390e31e7be7e5c6fe68b81babb73dfc35d413604d7ee5f56da101417027a4b4ce6a27e46eff97ad040c835b5d228676eae99a9b5c3bc0e23c8e81a49241ff45b
  languageName: node
  linkType: hard

"has-flag@npm:^3.0.0":
  version: 3.0.0
  resolution: "has-flag@npm:3.0.0"
  checksum: 4a15638b454bf086c8148979aae044dd6e39d63904cd452d970374fa6a87623423da485dfb814e7be882e05c096a7ccf1ebd48e7e7501d0208d8384ff4dea73b
  languageName: node
  linkType: hard

"has-flag@npm:^4.0.0":
  version: 4.0.0
  resolution: "has-flag@npm:4.0.0"
  checksum: 261a1357037ead75e338156b1f9452c016a37dcd3283a972a30d9e4a87441ba372c8b81f818cd0fbcd9c0354b4ae7e18b9e1afa1971164aef6d18c2b6095a8ad
  languageName: node
  linkType: hard

"has-property-descriptors@npm:^1.0.0":
  version: 1.0.0
  resolution: "has-property-descriptors@npm:1.0.0"
  dependencies:
    get-intrinsic: ^1.1.1
  checksum: a6d3f0a266d0294d972e354782e872e2fe1b6495b321e6ef678c9b7a06a40408a6891817350c62e752adced73a94ac903c54734fee05bf65b1905ee1368194bb
  languageName: node
  linkType: hard

"has-symbols@npm:^1.0.1, has-symbols@npm:^1.0.2, has-symbols@npm:^1.0.3":
  version: 1.0.3
  resolution: "has-symbols@npm:1.0.3"
  checksum: a054c40c631c0d5741a8285010a0777ea0c068f99ed43e5d6eb12972da223f8af553a455132fdb0801bdcfa0e0f443c0c03a68d8555aa529b3144b446c3f2410
  languageName: node
  linkType: hard

"has-tostringtag@npm:^1.0.0":
  version: 1.0.0
  resolution: "has-tostringtag@npm:1.0.0"
  dependencies:
    has-symbols: ^1.0.2
  checksum: cc12eb28cb6ae22369ebaad3a8ab0799ed61270991be88f208d508076a1e99abe4198c965935ce85ea90b60c94ddda73693b0920b58e7ead048b4a391b502c1c
  languageName: node
  linkType: hard

"has-unicode@npm:^2.0.1":
  version: 2.0.1
  resolution: "has-unicode@npm:2.0.1"
  checksum: 1eab07a7436512db0be40a710b29b5dc21fa04880b7f63c9980b706683127e3c1b57cb80ea96d47991bdae2dfe479604f6a1ba410106ee1046a41d1bd0814400
  languageName: node
  linkType: hard

"has@npm:^1.0.3":
  version: 1.0.3
  resolution: "has@npm:1.0.3"
  dependencies:
    function-bind: ^1.1.1
  checksum: b9ad53d53be4af90ce5d1c38331e712522417d017d5ef1ebd0507e07c2fbad8686fffb8e12ddecd4c39ca9b9b47431afbb975b8abf7f3c3b82c98e9aad052792
  languageName: node
  linkType: hard

"highlight.js@npm:^11.5.0":
  version: 11.5.1
  resolution: "highlight.js@npm:11.5.1"
  checksum: bff556101d7691c6275ad19318e368fc971cd0621ef3d86222f5373df7d8191a2fc1ffd47f118138cbcf85e5fe91cfeefaecd6184f49a3ec18090955efc9edef
  languageName: node
  linkType: hard

"html-encoding-sniffer@npm:^3.0.0":
  version: 3.0.0
  resolution: "html-encoding-sniffer@npm:3.0.0"
  dependencies:
    whatwg-encoding: ^2.0.0
  checksum: 8d806aa00487e279e5ccb573366a951a9f68f65c90298eac9c3a2b440a7ffe46615aff2995a2f61c6746c639234e6179a97e18ca5ccbbf93d3725ef2099a4502
  languageName: node
  linkType: hard

"http-cache-semantics@npm:^4.1.0":
  version: 4.1.0
  resolution: "http-cache-semantics@npm:4.1.0"
  checksum: 974de94a81c5474be07f269f9fd8383e92ebb5a448208223bfb39e172a9dbc26feff250192ecc23b9593b3f92098e010406b0f24bd4d588d631f80214648ed42
  languageName: node
  linkType: hard

"http-proxy-agent@npm:^5.0.0":
  version: 5.0.0
  resolution: "http-proxy-agent@npm:5.0.0"
  dependencies:
    "@tootallnate/once": 2
    agent-base: 6
    debug: 4
  checksum: e2ee1ff1656a131953839b2a19cd1f3a52d97c25ba87bd2559af6ae87114abf60971e498021f9b73f9fd78aea8876d1fb0d4656aac8a03c6caa9fc175f22b786
  languageName: node
  linkType: hard

"http-signature@npm:~1.3.6":
  version: 1.3.6
  resolution: "http-signature@npm:1.3.6"
  dependencies:
    assert-plus: ^1.0.0
    jsprim: ^2.0.2
    sshpk: ^1.14.1
  checksum: 10be2af4764e71fee0281392937050201ee576ac755c543f570d6d87134ce5e858663fe999a7adb3e4e368e1e356d0d7fec6b9542295b875726ff615188e7a0c
  languageName: node
  linkType: hard

"https-proxy-agent@npm:^5.0.0":
  version: 5.0.1
  resolution: "https-proxy-agent@npm:5.0.1"
  dependencies:
    agent-base: 6
    debug: 4
  checksum: 571fccdf38184f05943e12d37d6ce38197becdd69e58d03f43637f7fa1269cf303a7d228aa27e5b27bbd3af8f09fd938e1c91dcfefff2df7ba77c20ed8dfc765
  languageName: node
  linkType: hard

"human-signals@npm:^1.1.1":
  version: 1.1.1
  resolution: "human-signals@npm:1.1.1"
  checksum: d587647c9e8ec24e02821b6be7de5a0fc37f591f6c4e319b3054b43fd4c35a70a94c46fc74d8c1a43c47fde157d23acd7421f375e1c1365b09a16835b8300205
  languageName: node
  linkType: hard

"human-signals@npm:^2.1.0":
  version: 2.1.0
  resolution: "human-signals@npm:2.1.0"
  checksum: b87fd89fce72391625271454e70f67fe405277415b48bcc0117ca73d31fa23a4241787afdc8d67f5a116cf37258c052f59ea82daffa72364d61351423848e3b8
  languageName: node
  linkType: hard

"humanize-ms@npm:^1.2.1":
  version: 1.2.1
  resolution: "humanize-ms@npm:1.2.1"
  dependencies:
    ms: ^2.0.0
  checksum: 9c7a74a2827f9294c009266c82031030eae811ca87b0da3dceb8d6071b9bde22c9f3daef0469c3c533cc67a97d8a167cd9fc0389350e5f415f61a79b171ded16
  languageName: node
  linkType: hard

"iconv-lite@npm:0.6.3, iconv-lite@npm:^0.6.2":
  version: 0.6.3
  resolution: "iconv-lite@npm:0.6.3"
  dependencies:
    safer-buffer: ">= 2.1.2 < 3.0.0"
  checksum: 3f60d47a5c8fc3313317edfd29a00a692cc87a19cac0159e2ce711d0ebc9019064108323b5e493625e25594f11c6236647d8e256fbe7a58f4a3b33b89e6d30bf
  languageName: node
  linkType: hard

"ieee754@npm:^1.1.13":
  version: 1.2.1
  resolution: "ieee754@npm:1.2.1"
  checksum: 5144c0c9815e54ada181d80a0b810221a253562422e7c6c3a60b1901154184f49326ec239d618c416c1c5945a2e197107aee8d986a3dd836b53dffefd99b5e7e
  languageName: node
  linkType: hard

"ignore@npm:^5.1.8, ignore@npm:^5.2.0":
  version: 5.2.0
  resolution: "ignore@npm:5.2.0"
  checksum: 6b1f926792d614f64c6c83da3a1f9c83f6196c2839aa41e1e32dd7b8d174cef2e329d75caabb62cb61ce9dc432f75e67d07d122a037312db7caa73166a1bdb77
  languageName: node
  linkType: hard

"immutable@npm:^4.0.0":
  version: 4.0.0
  resolution: "immutable@npm:4.0.0"
  checksum: 4b5e9181e4d5fa06728a481835ec09c86367e5d03268666c95b522b7644ab891098022e4479a43c4c81a68f2ed82f10751ce5d33e208d7b873b6e7f9dfaf4d87
  languageName: node
  linkType: hard

"import-fresh@npm:^3.0.0, import-fresh@npm:^3.2.1":
  version: 3.3.0
  resolution: "import-fresh@npm:3.3.0"
  dependencies:
    parent-module: ^1.0.0
    resolve-from: ^4.0.0
  checksum: 2cacfad06e652b1edc50be650f7ec3be08c5e5a6f6d12d035c440a42a8cc028e60a5b99ca08a77ab4d6b1346da7d971915828f33cdab730d3d42f08242d09baa
  languageName: node
  linkType: hard

"imurmurhash@npm:^0.1.4":
  version: 0.1.4
  resolution: "imurmurhash@npm:0.1.4"
  checksum: 7cae75c8cd9a50f57dadd77482359f659eaebac0319dd9368bcd1714f55e65badd6929ca58569da2b6494ef13fdd5598cd700b1eba23f8b79c5f19d195a3ecf7
  languageName: node
  linkType: hard

"indent-string@npm:^4.0.0":
  version: 4.0.0
  resolution: "indent-string@npm:4.0.0"
  checksum: 824cfb9929d031dabf059bebfe08cf3137365e112019086ed3dcff6a0a7b698cb80cf67ccccde0e25b9e2d7527aa6cc1fed1ac490c752162496caba3e6699612
  languageName: node
  linkType: hard

"infer-owner@npm:^1.0.4":
  version: 1.0.4
  resolution: "infer-owner@npm:1.0.4"
  checksum: 181e732764e4a0611576466b4b87dac338972b839920b2a8cde43642e4ed6bd54dc1fb0b40874728f2a2df9a1b097b8ff83b56d5f8f8e3927f837fdcb47d8a89
  languageName: node
  linkType: hard

"inflight@npm:^1.0.4":
  version: 1.0.6
  resolution: "inflight@npm:1.0.6"
  dependencies:
    once: ^1.3.0
    wrappy: 1
  checksum: f4f76aa072ce19fae87ce1ef7d221e709afb59d445e05d47fba710e85470923a75de35bfae47da6de1b18afc3ce83d70facf44cfb0aff89f0a3f45c0a0244dfd
  languageName: node
  linkType: hard

"inherits@npm:2, inherits@npm:^2.0.3":
  version: 2.0.4
  resolution: "inherits@npm:2.0.4"
  checksum: 4a48a733847879d6cf6691860a6b1e3f0f4754176e4d71494c41f3475553768b10f84b5ce1d40fbd0e34e6bfbb864ee35858ad4dd2cf31e02fc4a154b724d7f1
  languageName: node
  linkType: hard

"ini@npm:2.0.0":
  version: 2.0.0
  resolution: "ini@npm:2.0.0"
  checksum: e7aadc5fb2e4aefc666d74ee2160c073995a4061556b1b5b4241ecb19ad609243b9cceafe91bae49c219519394bbd31512516cb22a3b1ca6e66d869e0447e84e
  languageName: node
  linkType: hard

"internal-slot@npm:^1.0.3":
  version: 1.0.3
  resolution: "internal-slot@npm:1.0.3"
  dependencies:
    get-intrinsic: ^1.1.0
    has: ^1.0.3
    side-channel: ^1.0.4
  checksum: 1944f92e981e47aebc98a88ff0db579fd90543d937806104d0b96557b10c1f170c51fb777b97740a8b6ddeec585fca8c39ae99fd08a8e058dfc8ab70937238bf
  languageName: node
  linkType: hard

"ip@npm:^1.1.5":
  version: 1.1.5
  resolution: "ip@npm:1.1.5"
  checksum: 30133981f082a060a32644f6a7746e9ba7ac9e2bc07ecc8bbdda3ee8ca9bec1190724c390e45a1ee7695e7edfd2a8f7dda2c104ec5f7ac5068c00648504c7e5a
  languageName: node
  linkType: hard

"is-arguments@npm:^1.0.4, is-arguments@npm:^1.1.0":
  version: 1.1.1
  resolution: "is-arguments@npm:1.1.1"
  dependencies:
    call-bind: ^1.0.2
    has-tostringtag: ^1.0.0
  checksum: 7f02700ec2171b691ef3e4d0e3e6c0ba408e8434368504bb593d0d7c891c0dbfda6d19d30808b904a6cb1929bca648c061ba438c39f296c2a8ca083229c49f27
  languageName: node
  linkType: hard

"is-bigint@npm:^1.0.1":
  version: 1.0.4
  resolution: "is-bigint@npm:1.0.4"
  dependencies:
    has-bigints: ^1.0.1
  checksum: c56edfe09b1154f8668e53ebe8252b6f185ee852a50f9b41e8d921cb2bed425652049fbe438723f6cb48a63ca1aa051e948e7e401e093477c99c84eba244f666
  languageName: node
  linkType: hard

"is-binary-path@npm:~2.1.0":
  version: 2.1.0
  resolution: "is-binary-path@npm:2.1.0"
  dependencies:
    binary-extensions: ^2.0.0
  checksum: 84192eb88cff70d320426f35ecd63c3d6d495da9d805b19bc65b518984b7c0760280e57dbf119b7e9be6b161784a5a673ab2c6abe83abb5198a432232ad5b35c
  languageName: node
  linkType: hard

"is-boolean-object@npm:^1.1.0":
  version: 1.1.2
  resolution: "is-boolean-object@npm:1.1.2"
  dependencies:
    call-bind: ^1.0.2
    has-tostringtag: ^1.0.0
  checksum: c03b23dbaacadc18940defb12c1c0e3aaece7553ef58b162a0f6bba0c2a7e1551b59f365b91e00d2dbac0522392d576ef322628cb1d036a0fe51eb466db67222
  languageName: node
  linkType: hard

"is-callable@npm:^1.1.4, is-callable@npm:^1.2.4":
  version: 1.2.4
  resolution: "is-callable@npm:1.2.4"
  checksum: 1a28d57dc435797dae04b173b65d6d1e77d4f16276e9eff973f994eadcfdc30a017e6a597f092752a083c1103cceb56c91e3dadc6692fedb9898dfaba701575f
  languageName: node
  linkType: hard

"is-ci@npm:^3.0.0":
  version: 3.0.1
  resolution: "is-ci@npm:3.0.1"
  dependencies:
    ci-info: ^3.2.0
  bin:
    is-ci: bin.js
  checksum: 192c66dc7826d58f803ecae624860dccf1899fc1f3ac5505284c0a5cf5f889046ffeb958fa651e5725d5705c5bcb14f055b79150ea5fcad7456a9569de60260e
  languageName: node
  linkType: hard

"is-core-module@npm:^2.8.1":
  version: 2.9.0
  resolution: "is-core-module@npm:2.9.0"
  dependencies:
    has: ^1.0.3
  checksum: b27034318b4b462f1c8f1dfb1b32baecd651d891a4e2d1922135daeff4141dfced2b82b07aef83ef54275c4a3526aa38da859223664d0868ca24182badb784ce
  languageName: node
  linkType: hard

"is-date-object@npm:^1.0.1, is-date-object@npm:^1.0.2":
  version: 1.0.5
  resolution: "is-date-object@npm:1.0.5"
  dependencies:
    has-tostringtag: ^1.0.0
  checksum: baa9077cdf15eb7b58c79398604ca57379b2fc4cf9aa7a9b9e295278648f628c9b201400c01c5e0f7afae56507d741185730307cbe7cad3b9f90a77e5ee342fc
  languageName: node
  linkType: hard

"is-expression@npm:^4.0.0":
  version: 4.0.0
  resolution: "is-expression@npm:4.0.0"
  dependencies:
    acorn: ^7.1.1
    object-assign: ^4.1.1
  checksum: 0f01d0ff53fbbec36abae8fbb7ef056c6d024f7128646856a3e6c500b205788d3e0f337025e72df979d7d7cf4674a00370633d7f8974c668b2d3fdb7e8a83bdb
  languageName: node
  linkType: hard

"is-extglob@npm:^2.1.1":
  version: 2.1.1
  resolution: "is-extglob@npm:2.1.1"
  checksum: df033653d06d0eb567461e58a7a8c9f940bd8c22274b94bf7671ab36df5719791aae15eef6d83bbb5e23283967f2f984b8914559d4449efda578c775c4be6f85
  languageName: node
  linkType: hard

"is-fullwidth-code-point@npm:^3.0.0":
  version: 3.0.0
  resolution: "is-fullwidth-code-point@npm:3.0.0"
  checksum: 44a30c29457c7fb8f00297bce733f0a64cd22eca270f83e58c105e0d015e45c019491a4ab2faef91ab51d4738c670daff901c799f6a700e27f7314029e99e348
  languageName: node
  linkType: hard

"is-glob@npm:^4.0.0, is-glob@npm:^4.0.1, is-glob@npm:^4.0.3, is-glob@npm:~4.0.1":
  version: 4.0.3
  resolution: "is-glob@npm:4.0.3"
  dependencies:
    is-extglob: ^2.1.1
  checksum: d381c1319fcb69d341cc6e6c7cd588e17cd94722d9a32dbd60660b993c4fb7d0f19438674e68dfec686d09b7c73139c9166b47597f846af387450224a8101ab4
  languageName: node
  linkType: hard

"is-installed-globally@npm:~0.4.0":
  version: 0.4.0
  resolution: "is-installed-globally@npm:0.4.0"
  dependencies:
    global-dirs: ^3.0.0
    is-path-inside: ^3.0.2
  checksum: 3359840d5982d22e9b350034237b2cda2a12bac1b48a721912e1ab8e0631dd07d45a2797a120b7b87552759a65ba03e819f1bd63f2d7ab8657ec0b44ee0bf399
  languageName: node
  linkType: hard

"is-lambda@npm:^1.0.1":
  version: 1.0.1
  resolution: "is-lambda@npm:1.0.1"
  checksum: 93a32f01940220532e5948538699ad610d5924ac86093fcee83022252b363eb0cc99ba53ab084a04e4fb62bf7b5731f55496257a4c38adf87af9c4d352c71c35
  languageName: node
  linkType: hard

"is-map@npm:^2.0.1, is-map@npm:^2.0.2":
  version: 2.0.2
  resolution: "is-map@npm:2.0.2"
  checksum: ace3d0ecd667bbdefdb1852de601268f67f2db725624b1958f279316e13fecb8fa7df91fd60f690d7417b4ec180712f5a7ee967008e27c65cfd475cc84337728
  languageName: node
  linkType: hard

"is-negative-zero@npm:^2.0.2":
  version: 2.0.2
  resolution: "is-negative-zero@npm:2.0.2"
  checksum: f3232194c47a549da60c3d509c9a09be442507616b69454716692e37ae9f37c4dea264fb208ad0c9f3efd15a796a46b79df07c7e53c6227c32170608b809149a
  languageName: node
  linkType: hard

"is-number-object@npm:^1.0.4":
  version: 1.0.7
  resolution: "is-number-object@npm:1.0.7"
  dependencies:
    has-tostringtag: ^1.0.0
  checksum: d1e8d01bb0a7134c74649c4e62da0c6118a0bfc6771ea3c560914d52a627873e6920dd0fd0ebc0e12ad2ff4687eac4c308f7e80320b973b2c8a2c8f97a7524f7
  languageName: node
  linkType: hard

"is-number@npm:^7.0.0":
  version: 7.0.0
  resolution: "is-number@npm:7.0.0"
  checksum: 456ac6f8e0f3111ed34668a624e45315201dff921e5ac181f8ec24923b99e9f32ca1a194912dc79d539c97d33dba17dc635202ff0b2cf98326f608323276d27a
  languageName: node
  linkType: hard

"is-path-inside@npm:^3.0.2":
  version: 3.0.3
  resolution: "is-path-inside@npm:3.0.3"
  checksum: abd50f06186a052b349c15e55b182326f1936c89a78bf6c8f2b707412517c097ce04bc49a0ca221787bc44e1049f51f09a2ffb63d22899051988d3a618ba13e9
  languageName: node
  linkType: hard

"is-potential-custom-element-name@npm:^1.0.1":
  version: 1.0.1
  resolution: "is-potential-custom-element-name@npm:1.0.1"
  checksum: ced7bbbb6433a5b684af581872afe0e1767e2d1146b2207ca0068a648fb5cab9d898495d1ac0583524faaf24ca98176a7d9876363097c2d14fee6dd324f3a1ab
  languageName: node
  linkType: hard

"is-promise@npm:^2.0.0":
  version: 2.2.2
  resolution: "is-promise@npm:2.2.2"
  checksum: 18bf7d1c59953e0ad82a1ed963fb3dc0d135c8f299a14f89a17af312fc918373136e56028e8831700e1933519630cc2fd4179a777030330fde20d34e96f40c78
  languageName: node
  linkType: hard

"is-regex@npm:^1.0.3, is-regex@npm:^1.1.1, is-regex@npm:^1.1.4":
  version: 1.1.4
  resolution: "is-regex@npm:1.1.4"
  dependencies:
    call-bind: ^1.0.2
    has-tostringtag: ^1.0.0
  checksum: 362399b33535bc8f386d96c45c9feb04cf7f8b41c182f54174c1a45c9abbbe5e31290bbad09a458583ff6bf3b2048672cdb1881b13289569a7c548370856a652
  languageName: node
  linkType: hard

"is-set@npm:^2.0.1, is-set@npm:^2.0.2":
  version: 2.0.2
  resolution: "is-set@npm:2.0.2"
  checksum: b64343faf45e9387b97a6fd32be632ee7b269bd8183701f3b3f5b71a7cf00d04450ed8669d0bd08753e08b968beda96fca73a10fd0ff56a32603f64deba55a57
  languageName: node
  linkType: hard

"is-shared-array-buffer@npm:^1.0.2":
  version: 1.0.2
  resolution: "is-shared-array-buffer@npm:1.0.2"
  dependencies:
    call-bind: ^1.0.2
  checksum: 9508929cf14fdc1afc9d61d723c6e8d34f5e117f0bffda4d97e7a5d88c3a8681f633a74f8e3ad1fe92d5113f9b921dc5ca44356492079612f9a247efbce7032a
  languageName: node
  linkType: hard

"is-stream@npm:^2.0.0":
  version: 2.0.1
  resolution: "is-stream@npm:2.0.1"
  checksum: b8e05ccdf96ac330ea83c12450304d4a591f9958c11fd17bed240af8d5ffe08aedafa4c0f4cfccd4d28dc9d4d129daca1023633d5c11601a6cbc77521f6fae66
  languageName: node
  linkType: hard

"is-string@npm:^1.0.5, is-string@npm:^1.0.7":
  version: 1.0.7
  resolution: "is-string@npm:1.0.7"
  dependencies:
    has-tostringtag: ^1.0.0
  checksum: 323b3d04622f78d45077cf89aab783b2f49d24dc641aa89b5ad1a72114cfeff2585efc8c12ef42466dff32bde93d839ad321b26884cf75e5a7892a938b089989
  languageName: node
  linkType: hard

"is-symbol@npm:^1.0.2, is-symbol@npm:^1.0.3":
  version: 1.0.4
  resolution: "is-symbol@npm:1.0.4"
  dependencies:
    has-symbols: ^1.0.2
  checksum: 92805812ef590738d9de49d677cd17dfd486794773fb6fa0032d16452af46e9b91bb43ffe82c983570f015b37136f4b53b28b8523bfb10b0ece7a66c31a54510
  languageName: node
  linkType: hard

"is-typed-array@npm:^1.1.7":
  version: 1.1.8
  resolution: "is-typed-array@npm:1.1.8"
  dependencies:
    available-typed-arrays: ^1.0.5
    call-bind: ^1.0.2
    es-abstract: ^1.18.5
    foreach: ^2.0.5
    has-tostringtag: ^1.0.0
  checksum: aa0f9f0716e19e2fb8aef69e69e4205479d25ace778e2339fc910948115cde4b0d9aff9d5d1e8b80f09a5664998278e05e54ad3dc9cb12cefcf86db71084ed00
  languageName: node
  linkType: hard

"is-typedarray@npm:~1.0.0":
  version: 1.0.0
  resolution: "is-typedarray@npm:1.0.0"
  checksum: 3508c6cd0a9ee2e0df2fa2e9baabcdc89e911c7bd5cf64604586697212feec525aa21050e48affb5ffc3df20f0f5d2e2cf79b08caa64e1ccc9578e251763aef7
  languageName: node
  linkType: hard

"is-unicode-supported@npm:^0.1.0":
  version: 0.1.0
  resolution: "is-unicode-supported@npm:0.1.0"
  checksum: a2aab86ee7712f5c2f999180daaba5f361bdad1efadc9610ff5b8ab5495b86e4f627839d085c6530363c6d6d4ecbde340fb8e54bdb83da4ba8e0865ed5513c52
  languageName: node
  linkType: hard

"is-weakmap@npm:^2.0.1":
  version: 2.0.1
  resolution: "is-weakmap@npm:2.0.1"
  checksum: 1222bb7e90c32bdb949226e66d26cb7bce12e1e28e3e1b40bfa6b390ba3e08192a8664a703dff2a00a84825f4e022f9cd58c4599ff9981ab72b1d69479f4f7f6
  languageName: node
  linkType: hard

"is-weakref@npm:^1.0.2":
  version: 1.0.2
  resolution: "is-weakref@npm:1.0.2"
  dependencies:
    call-bind: ^1.0.2
  checksum: 95bd9a57cdcb58c63b1c401c60a474b0f45b94719c30f548c891860f051bc2231575c290a6b420c6bc6e7ed99459d424c652bd5bf9a1d5259505dc35b4bf83de
  languageName: node
  linkType: hard

"is-weakset@npm:^2.0.1":
  version: 2.0.2
  resolution: "is-weakset@npm:2.0.2"
  dependencies:
    call-bind: ^1.0.2
    get-intrinsic: ^1.1.1
  checksum: 5d8698d1fa599a0635d7ca85be9c26d547b317ed8fd83fc75f03efbe75d50001b5eececb1e9971de85fcde84f69ae6f8346bc92d20d55d46201d328e4c74a367
  languageName: node
  linkType: hard

"isarray@npm:^2.0.5":
  version: 2.0.5
  resolution: "isarray@npm:2.0.5"
  checksum: bd5bbe4104438c4196ba58a54650116007fa0262eccef13a4c55b2e09a5b36b59f1e75b9fcc49883dd9d4953892e6fc007eef9e9155648ceea036e184b0f930a
  languageName: node
  linkType: hard

"isexe@npm:^2.0.0":
  version: 2.0.0
  resolution: "isexe@npm:2.0.0"
  checksum: 26bf6c5480dda5161c820c5b5c751ae1e766c587b1f951ea3fcfc973bafb7831ae5b54a31a69bd670220e42e99ec154475025a468eae58ea262f813fdc8d1c62
  languageName: node
  linkType: hard

"isstream@npm:~0.1.2":
  version: 0.1.2
  resolution: "isstream@npm:0.1.2"
  checksum: 1eb2fe63a729f7bdd8a559ab552c69055f4f48eb5c2f03724430587c6f450783c8f1cd936c1c952d0a927925180fcc892ebd5b174236cf1065d4bd5bdb37e963
  languageName: node
  linkType: hard

"iwanthue@npm:^2.0.0":
  version: 2.0.0
  resolution: "iwanthue@npm:2.0.0"
  dependencies:
    obliterator: ^2.0.3
  checksum: 516ff2b6235aefb046a641e9cc3a361cf2d852a4184864ade5da36bfe859d9e743b505b74e56cbcf78e667132366d39d4218676757dadcf1379950115727a62b
  languageName: node
  linkType: hard

"javascript-natural-sort@npm:0.7.1":
  version: 0.7.1
  resolution: "javascript-natural-sort@npm:0.7.1"
  checksum: 161e2c512cc7884bc055a582c6645d9032cab88497a76123d73cb23bfb03d97a04cf7772ecdb8bd3366fc07192c2f996366f479f725c23ef073fffe03d6a586a
  languageName: node
  linkType: hard

"jest-diff@npm:^27.5.1":
  version: 27.5.1
  resolution: "jest-diff@npm:27.5.1"
  dependencies:
    chalk: ^4.0.0
    diff-sequences: ^27.5.1
    jest-get-type: ^27.5.1
    pretty-format: ^27.5.1
  checksum: 8be27c1e1ee57b2bb2bef9c0b233c19621b4c43d53a3c26e2c00a4e805eb4ea11fe1694a06a9fb0e80ffdcfdc0d2b1cb0b85920b3f5c892327ecd1e7bd96b865
  languageName: node
  linkType: hard

"jest-get-type@npm:^27.5.1":
  version: 27.5.1
  resolution: "jest-get-type@npm:27.5.1"
  checksum: 63064ab70195c21007d897c1157bf88ff94a790824a10f8c890392e7d17eda9c3900513cb291ca1c8d5722cad79169764e9a1279f7c8a9c4cd6e9109ff04bbc0
  languageName: node
  linkType: hard

"jest-matcher-utils@npm:^27.0.0":
  version: 27.5.1
  resolution: "jest-matcher-utils@npm:27.5.1"
  dependencies:
    chalk: ^4.0.0
    jest-diff: ^27.5.1
    jest-get-type: ^27.5.1
    pretty-format: ^27.5.1
  checksum: bb2135fc48889ff3fe73888f6cc7168ddab9de28b51b3148f820c89fdfd2effdcad005f18be67d0b9be80eda208ad47290f62f03d0a33f848db2dd0273c8217a
  languageName: node
  linkType: hard

"joi@npm:^17.4.0":
  version: 17.6.0
  resolution: "joi@npm:17.6.0"
  dependencies:
    "@hapi/hoek": ^9.0.0
    "@hapi/topo": ^5.0.0
    "@sideway/address": ^4.1.3
    "@sideway/formula": ^3.0.0
    "@sideway/pinpoint": ^2.0.0
  checksum: eaf62f6c02f2edb1042f1ab04fc23a5918a2cb8f54bec84c6e1033624d8a462c10ae9518af55a3ba84f1793960450d58094eda308e7ef93c17edd4e3c8ef31d5
  languageName: node
  linkType: hard

"js-stringify@npm:^1.0.2":
  version: 1.0.2
  resolution: "js-stringify@npm:1.0.2"
  checksum: f9701d9e535d3ac0f62bbf2624b76c5d0af5b889187232817ae284a41ba21fd7a8b464c2dce3815d8cf52c8bea3480be6b368cfc2c67da799cad458058e8bbf5
  languageName: node
  linkType: hard

"js-tokens@npm:^4.0.0":
  version: 4.0.0
  resolution: "js-tokens@npm:4.0.0"
  checksum: 8a95213a5a77deb6cbe94d86340e8d9ace2b93bc367790b260101d2f36a2eaf4e4e22d9fa9cf459b38af3a32fb4190e638024cf82ec95ef708680e405ea7cc78
  languageName: node
  linkType: hard

"js-yaml@npm:^4.1.0":
  version: 4.1.0
  resolution: "js-yaml@npm:4.1.0"
  dependencies:
    argparse: ^2.0.1
  bin:
    js-yaml: bin/js-yaml.js
  checksum: c7830dfd456c3ef2c6e355cc5a92e6700ceafa1d14bba54497b34a99f0376cecbb3e9ac14d3e5849b426d5a5140709a66237a8c991c675431271c4ce5504151a
  languageName: node
  linkType: hard

"jsbn@npm:~0.1.0":
  version: 0.1.1
  resolution: "jsbn@npm:0.1.1"
  checksum: e5ff29c1b8d965017ef3f9c219dacd6e40ad355c664e277d31246c90545a02e6047018c16c60a00f36d561b3647215c41894f5d869ada6908a2e0ce4200c88f2
  languageName: node
  linkType: hard

"jsdom@npm:^19.0.0":
  version: 19.0.0
  resolution: "jsdom@npm:19.0.0"
  dependencies:
    abab: ^2.0.5
    acorn: ^8.5.0
    acorn-globals: ^6.0.0
    cssom: ^0.5.0
    cssstyle: ^2.3.0
    data-urls: ^3.0.1
    decimal.js: ^10.3.1
    domexception: ^4.0.0
    escodegen: ^2.0.0
    form-data: ^4.0.0
    html-encoding-sniffer: ^3.0.0
    http-proxy-agent: ^5.0.0
    https-proxy-agent: ^5.0.0
    is-potential-custom-element-name: ^1.0.1
    nwsapi: ^2.2.0
    parse5: 6.0.1
    saxes: ^5.0.1
    symbol-tree: ^3.2.4
    tough-cookie: ^4.0.0
    w3c-hr-time: ^1.0.2
    w3c-xmlserializer: ^3.0.0
    webidl-conversions: ^7.0.0
    whatwg-encoding: ^2.0.0
    whatwg-mimetype: ^3.0.0
    whatwg-url: ^10.0.0
    ws: ^8.2.3
    xml-name-validator: ^4.0.0
  peerDependencies:
    canvas: ^2.5.0
  peerDependenciesMeta:
    canvas:
      optional: true
  checksum: 94b693bf4a394097dd96705550bb7b6cd3c8db3c5414e6e9c92a0995ed8b61067597da2f37fca6bed4b5a2f1ef33960ee759522156dccd0b306311988ea87cfb
  languageName: node
  linkType: hard

"jsesc@npm:^2.5.1":
  version: 2.5.2
  resolution: "jsesc@npm:2.5.2"
  bin:
    jsesc: bin/jsesc
  checksum: 4dc190771129e12023f729ce20e1e0bfceac84d73a85bc3119f7f938843fe25a4aeccb54b6494dce26fcf263d815f5f31acdefac7cc9329efb8422a4f4d9fa9d
  languageName: node
  linkType: hard

"json-schema-traverse@npm:^0.4.1":
  version: 0.4.1
  resolution: "json-schema-traverse@npm:0.4.1"
  checksum: 7486074d3ba247769fda17d5181b345c9fb7d12e0da98b22d1d71a5db9698d8b4bd900a3ec1a4ffdd60846fc2556274a5c894d0c48795f14cb03aeae7b55260b
  languageName: node
  linkType: hard

"json-schema@npm:0.4.0":
  version: 0.4.0
  resolution: "json-schema@npm:0.4.0"
  checksum: 66389434c3469e698da0df2e7ac5a3281bcff75e797a5c127db7c5b56270e01ae13d9afa3c03344f76e32e81678337a8c912bdbb75101c62e487dc3778461d72
  languageName: node
  linkType: hard

"json-stable-stringify-without-jsonify@npm:^1.0.1":
  version: 1.0.1
  resolution: "json-stable-stringify-without-jsonify@npm:1.0.1"
  checksum: cff44156ddce9c67c44386ad5cddf91925fe06b1d217f2da9c4910d01f358c6e3989c4d5a02683c7a5667f9727ff05831f7aa8ae66c8ff691c556f0884d49215
  languageName: node
  linkType: hard

"json-stringify-safe@npm:~5.0.1":
  version: 5.0.1
  resolution: "json-stringify-safe@npm:5.0.1"
  checksum: 48ec0adad5280b8a96bb93f4563aa1667fd7a36334f79149abd42446d0989f2ddc58274b479f4819f1f00617957e6344c886c55d05a4e15ebb4ab931e4a6a8ee
  languageName: node
  linkType: hard

"json5@npm:2.2.1, json5@npm:^2.1.2, json5@npm:^2.2.1":
  version: 2.2.1
  resolution: "json5@npm:2.2.1"
  bin:
    json5: lib/cli.js
  checksum: 74b8a23b102a6f2bf2d224797ae553a75488b5adbaee9c9b6e5ab8b510a2fc6e38f876d4c77dea672d4014a44b2399e15f2051ac2b37b87f74c0c7602003543b
  languageName: node
  linkType: hard

"json5@npm:^1.0.1":
  version: 1.0.1
  resolution: "json5@npm:1.0.1"
  dependencies:
    minimist: ^1.2.0
  bin:
    json5: lib/cli.js
  checksum: e76ea23dbb8fc1348c143da628134a98adf4c5a4e8ea2adaa74a80c455fc2cdf0e2e13e6398ef819bfe92306b610ebb2002668ed9fc1af386d593691ef346fc3
  languageName: node
  linkType: hard

"jsonc-parser@npm:^3.0.0":
  version: 3.0.0
  resolution: "jsonc-parser@npm:3.0.0"
  checksum: 1df2326f1f9688de30c70ff19c5b2a83ba3b89a1036160da79821d1361090775e9db502dc57a67c11b56e1186fc1ed70b887f25c5febf9a3ec4f91435836c99d
  languageName: node
  linkType: hard

"jsonfile@npm:^6.0.1":
  version: 6.1.0
  resolution: "jsonfile@npm:6.1.0"
  dependencies:
    graceful-fs: ^4.1.6
    universalify: ^2.0.0
  dependenciesMeta:
    graceful-fs:
      optional: true
  checksum: 7af3b8e1ac8fe7f1eccc6263c6ca14e1966fcbc74b618d3c78a0a2075579487547b94f72b7a1114e844a1e15bb00d440e5d1720bfc4612d790a6f285d5ea8354
  languageName: node
  linkType: hard

"jsprim@npm:^2.0.2":
  version: 2.0.2
  resolution: "jsprim@npm:2.0.2"
  dependencies:
    assert-plus: 1.0.0
    extsprintf: 1.3.0
    json-schema: 0.4.0
    verror: 1.10.0
  checksum: d175f6b1991e160cb0aa39bc857da780e035611986b5492f32395411879fdaf4e513d98677f08f7352dac93a16b66b8361c674b86a3fa406e2e7af6b26321838
  languageName: node
  linkType: hard

"jstransformer@npm:1.0.0":
  version: 1.0.0
  resolution: "jstransformer@npm:1.0.0"
  dependencies:
    is-promise: ^2.0.0
    promise: ^7.0.1
  checksum: 1e019fde17a38766a5b96bccf0738156badc60cfa61e2ba8a8bbd3b855e7d5d7e17492b8a66e4aaabc39483e335d23217343ae32d0f7e5a81af42a95c3e075f9
  languageName: node
  linkType: hard

"kolorist@npm:^1.5.1":
  version: 1.5.1
  resolution: "kolorist@npm:1.5.1"
  checksum: c113be08834fc03a24699612141c79879fceba9ff9765ad500507fb594ee4fa3465a3453ea90bbc9b0dd82f7ba5dbd79814da28e9ebaf8da27266a0088ba2714
  languageName: node
  linkType: hard

"lazy-ass@npm:1.6.0, lazy-ass@npm:^1.6.0":
  version: 1.6.0
  resolution: "lazy-ass@npm:1.6.0"
  checksum: 5a3ebb17915b03452320804466345382a6c25ac782ec4874fecdb2385793896cd459be2f187dc7def8899180c32ee0ab9a1aa7fe52193ac3ff3fe29bb0591729
  languageName: node
  linkType: hard

"levn@npm:^0.4.1":
  version: 0.4.1
  resolution: "levn@npm:0.4.1"
  dependencies:
    prelude-ls: ^1.2.1
    type-check: ~0.4.0
  checksum: 12c5021c859bd0f5248561bf139121f0358285ec545ebf48bb3d346820d5c61a4309535c7f387ed7d84361cf821e124ce346c6b7cef8ee09a67c1473b46d0fc4
  languageName: node
  linkType: hard

"levn@npm:~0.3.0":
  version: 0.3.0
  resolution: "levn@npm:0.3.0"
  dependencies:
    prelude-ls: ~1.1.2
    type-check: ~0.3.2
  checksum: 0d084a524231a8246bb10fec48cdbb35282099f6954838604f3c7fc66f2e16fa66fd9cc2f3f20a541a113c4dafdf181e822c887c8a319c9195444e6c64ac395e
  languageName: node
  linkType: hard

"lilconfig@npm:^2.0.5":
  version: 2.0.5
  resolution: "lilconfig@npm:2.0.5"
  checksum: f7bb9e42656f06930ad04e583026f087508ae408d3526b8b54895e934eb2a966b7aafae569656f2c79a29fe6d779b3ec44ba577e80814734c8655d6f71cdf2d1
  languageName: node
  linkType: hard

"listr2@npm:^3.8.3":
  version: 3.14.0
  resolution: "listr2@npm:3.14.0"
  dependencies:
    cli-truncate: ^2.1.0
    colorette: ^2.0.16
    log-update: ^4.0.0
    p-map: ^4.0.0
    rfdc: ^1.3.0
    rxjs: ^7.5.1
    through: ^2.3.8
    wrap-ansi: ^7.0.0
  peerDependencies:
    enquirer: ">= 2.3.0 < 3"
  peerDependenciesMeta:
    enquirer:
      optional: true
  checksum: fdb8b2d6bdf5df9371ebd5082bee46c6d0ca3d1e5f2b11fbb5a127839855d5f3da9d4968fce94f0a5ec67cac2459766abbb1faeef621065ebb1829b11ef9476d
  languageName: node
  linkType: hard

"local-pkg@npm:^0.4.1":
  version: 0.4.1
  resolution: "local-pkg@npm:0.4.1"
  checksum: 4ab3b4853ffbc3b292a3ae2e22618dbc348418a2ebf60ada55fdcc5a8583f9167c89fc7977194ffa39d0a4c5078f9c421d246afdd252fea7a840f7a8f3b5f96b
  languageName: node
  linkType: hard

"locate-path@npm:^6.0.0":
  version: 6.0.0
  resolution: "locate-path@npm:6.0.0"
  dependencies:
    p-locate: ^5.0.0
  checksum: 72eb661788a0368c099a184c59d2fee760b3831c9c1c33955e8a19ae4a21b4116e53fa736dc086cdeb9fce9f7cc508f2f92d2d3aae516f133e16a2bb59a39f5a
  languageName: node
  linkType: hard

"lodash-es@npm:^4.17.21":
  version: 4.17.21
  resolution: "lodash-es@npm:4.17.21"
  checksum: 05cbffad6e2adbb331a4e16fbd826e7faee403a1a04873b82b42c0f22090f280839f85b95393f487c1303c8a3d2a010048bf06151a6cbe03eee4d388fb0a12d2
  languageName: node
  linkType: hard

"lodash.castarray@npm:^4.4.0":
  version: 4.4.0
  resolution: "lodash.castarray@npm:4.4.0"
  checksum: fca8c7047e0ae2738b0b2503fb00157ae0ff6d8a1b716f87ed715b22560e09de438c75b65e01a7e44ceb41c5b31dce2eb576e46db04beb9c699c498e03cbd00f
  languageName: node
  linkType: hard

"lodash.isplainobject@npm:^4.0.6":
  version: 4.0.6
  resolution: "lodash.isplainobject@npm:4.0.6"
  checksum: 29c6351f281e0d9a1d58f1a4c8f4400924b4c79f18dfc4613624d7d54784df07efaff97c1ff2659f3e085ecf4fff493300adc4837553104cef2634110b0d5337
  languageName: node
  linkType: hard

"lodash.merge@npm:^4.6.2":
  version: 4.6.2
  resolution: "lodash.merge@npm:4.6.2"
  checksum: ad580b4bdbb7ca1f7abf7e1bce63a9a0b98e370cf40194b03380a46b4ed799c9573029599caebc1b14e3f24b111aef72b96674a56cfa105e0f5ac70546cdc005
  languageName: node
  linkType: hard

"lodash.once@npm:^4.1.1":
  version: 4.1.1
  resolution: "lodash.once@npm:4.1.1"
  checksum: d768fa9f9b4e1dc6453be99b753906f58990e0c45e7b2ca5a3b40a33111e5d17f6edf2f768786e2716af90a8e78f8f91431ab8435f761fef00f9b0c256f6d245
  languageName: node
  linkType: hard

"lodash@npm:4.17.21, lodash@npm:^4.17.19, lodash@npm:^4.17.21":
  version: 4.17.21
  resolution: "lodash@npm:4.17.21"
  checksum: eb835a2e51d381e561e508ce932ea50a8e5a68f4ebdd771ea240d3048244a8d13658acbd502cd4829768c56f2e16bdd4340b9ea141297d472517b83868e677f7
  languageName: node
  linkType: hard

"log-symbols@npm:^4.0.0":
  version: 4.1.0
  resolution: "log-symbols@npm:4.1.0"
  dependencies:
    chalk: ^4.1.0
    is-unicode-supported: ^0.1.0
  checksum: fce1497b3135a0198803f9f07464165e9eb83ed02ceb2273930a6f8a508951178d8cf4f0378e9d28300a2ed2bc49050995d2bd5f53ab716bb15ac84d58c6ef74
  languageName: node
  linkType: hard

"log-update@npm:^4.0.0":
  version: 4.0.0
  resolution: "log-update@npm:4.0.0"
  dependencies:
    ansi-escapes: ^4.3.0
    cli-cursor: ^3.1.0
    slice-ansi: ^4.0.0
    wrap-ansi: ^6.2.0
  checksum: ae2f85bbabc1906034154fb7d4c4477c79b3e703d22d78adee8b3862fa913942772e7fa11713e3d96fb46de4e3cabefbf5d0a544344f03b58d3c4bff52aa9eb2
  languageName: node
  linkType: hard

"loupe@npm:^2.3.1":
  version: 2.3.4
  resolution: "loupe@npm:2.3.4"
  dependencies:
    get-func-name: ^2.0.0
  checksum: 5af91db61aa18530f1749a64735ee194ac263e65e9f4d1562bf3036c591f1baa948289c193e0e34c7b5e2c1b75d3c1dc4fce87f5edb3cee10b0c0df46bc9ffb3
  languageName: node
  linkType: hard

"lru-cache@npm:^6.0.0":
  version: 6.0.0
  resolution: "lru-cache@npm:6.0.0"
  dependencies:
    yallist: ^4.0.0
  checksum: f97f499f898f23e4585742138a22f22526254fdba6d75d41a1c2526b3b6cc5747ef59c5612ba7375f42aca4f8461950e925ba08c991ead0651b4918b7c978297
  languageName: node
  linkType: hard

"lru-cache@npm:^7.7.1":
  version: 7.9.0
  resolution: "lru-cache@npm:7.9.0"
  checksum: c91a293a103d11ea4f07de4122ba4f73d8203d0de51852fb612b1764296aebf623a3e11dddef1b3aefdc8d71af97d52b222dad5459dcb967713bbab9a19fed7d
  languageName: node
  linkType: hard

"magic-string@npm:0.26.2, magic-string@npm:^0.26.2":
  version: 0.26.2
  resolution: "magic-string@npm:0.26.2"
  dependencies:
    sourcemap-codec: ^1.4.8
  checksum: b4db4e2b370ac8d9ffc6443a2b591b75364bf1fc9121b5a4068d5b89804abff6709d1fa4a0e0c2d54f2e61e0e44db83efdfe219a5ab0ba6d25ee1f2b51fbed55
  languageName: node
  linkType: hard

"magic-string@npm:^0.25.7":
  version: 0.25.9
  resolution: "magic-string@npm:0.25.9"
  dependencies:
    sourcemap-codec: ^1.4.8
  checksum: 9a0e55a15c7303fc360f9572a71cffba1f61451bc92c5602b1206c9d17f492403bf96f946dfce7483e66822d6b74607262e24392e87b0ac27b786e69a40e9b1a
  languageName: node
  linkType: hard

"magic-string@npm:^0.26.1":
  version: 0.26.1
  resolution: "magic-string@npm:0.26.1"
  dependencies:
    sourcemap-codec: ^1.4.8
  checksum: 23f21f5734346ddfbabd7b9834e3ecda3521e3e1db81166c1513b45b729489bbed1eafa8cd052c7db7fdc7c68ebc5c03bc00dd5a23697edda15dbecaf8c98397
  languageName: node
  linkType: hard

"make-fetch-happen@npm:^10.0.3":
  version: 10.1.2
  resolution: "make-fetch-happen@npm:10.1.2"
  dependencies:
    agentkeepalive: ^4.2.1
    cacache: ^16.0.2
    http-cache-semantics: ^4.1.0
    http-proxy-agent: ^5.0.0
    https-proxy-agent: ^5.0.0
    is-lambda: ^1.0.1
    lru-cache: ^7.7.1
    minipass: ^3.1.6
    minipass-collect: ^1.0.2
    minipass-fetch: ^2.0.3
    minipass-flush: ^1.0.5
    minipass-pipeline: ^1.2.4
    negotiator: ^0.6.3
    promise-retry: ^2.0.1
    socks-proxy-agent: ^6.1.1
    ssri: ^9.0.0
  checksum: 42825d119a7e4f5b1a8e7048a86d328cd36bb1ff875d155ce7079d9a0afdd310c198fb310096af358cfa9ecdf643cecf960380686792457dccb36e17efe89eb0
  languageName: node
  linkType: hard

"map-stream@npm:~0.1.0":
  version: 0.1.0
  resolution: "map-stream@npm:0.1.0"
  checksum: 38abbe4eb883888031e6b2fc0630bc583c99396be16b8ace5794b937b682a8a081f03e8b15bfd4914d1bc88318f0e9ac73ba3512ae65955cd449f63256ddb31d
  languageName: node
  linkType: hard

"marked@npm:^4.0.17":
  version: 4.0.17
  resolution: "marked@npm:4.0.17"
  bin:
    marked: bin/marked.js
  checksum: 33a3c43a20b47bddaf045a59bfc7c3d41cc321931cc663ed231ca3b5b3b195fb2ac2973e687c2afd65b79539c14619baa07d19793f70130160f0af80c06d9b3a
  languageName: node
  linkType: hard

"merge-stream@npm:^2.0.0":
  version: 2.0.0
  resolution: "merge-stream@npm:2.0.0"
  checksum: 6fa4dcc8d86629705cea944a4b88ef4cb0e07656ebf223fa287443256414283dd25d91c1cd84c77987f2aec5927af1a9db6085757cb43d90eb170ebf4b47f4f4
  languageName: node
  linkType: hard

"merge2@npm:^1.3.0, merge2@npm:^1.4.1":
  version: 1.4.1
  resolution: "merge2@npm:1.4.1"
  checksum: 7268db63ed5169466540b6fb947aec313200bcf6d40c5ab722c22e242f651994619bcd85601602972d3c85bd2cc45a358a4c61937e9f11a061919a1da569b0c2
  languageName: node
  linkType: hard

"micromatch@npm:^4.0.4":
  version: 4.0.5
  resolution: "micromatch@npm:4.0.5"
  dependencies:
    braces: ^3.0.2
    picomatch: ^2.3.1
  checksum: 02a17b671c06e8fefeeb6ef996119c1e597c942e632a21ef589154f23898c9c6a9858526246abb14f8bca6e77734aa9dcf65476fca47cedfb80d9577d52843fc
  languageName: node
  linkType: hard

"mime-db@npm:1.52.0":
  version: 1.52.0
  resolution: "mime-db@npm:1.52.0"
  checksum: 0d99a03585f8b39d68182803b12ac601d9c01abfa28ec56204fa330bc9f3d1c5e14beb049bafadb3dbdf646dfb94b87e24d4ec7b31b7279ef906a8ea9b6a513f
  languageName: node
  linkType: hard

"mime-types@npm:^2.1.12, mime-types@npm:~2.1.19":
  version: 2.1.35
  resolution: "mime-types@npm:2.1.35"
  dependencies:
    mime-db: 1.52.0
  checksum: 89a5b7f1def9f3af5dad6496c5ed50191ae4331cc5389d7c521c8ad28d5fdad2d06fd81baf38fed813dc4e46bb55c8145bb0ff406330818c9cf712fb2e9b3836
  languageName: node
  linkType: hard

"mimic-fn@npm:^2.1.0":
  version: 2.1.0
  resolution: "mimic-fn@npm:2.1.0"
  checksum: d2421a3444848ce7f84bd49115ddacff29c15745db73f54041edc906c14b131a38d05298dae3081667627a59b2eb1ca4b436ff2e1b80f69679522410418b478a
  languageName: node
  linkType: hard

"mini-svg-data-uri@npm:^1.2.3":
  version: 1.4.4
  resolution: "mini-svg-data-uri@npm:1.4.4"
  bin:
    mini-svg-data-uri: cli.js
  checksum: 997f1fbd8d59a70f03761e18626d335197a3479cb9d1ff75678e4b64b864d32a0b8fc18115eabde035e5299b8b4a354a78e57dd6ac10f9d604162a6170898d09
  languageName: node
  linkType: hard

"minimatch@npm:^3.0.4, minimatch@npm:^3.1.2":
  version: 3.1.2
  resolution: "minimatch@npm:3.1.2"
  dependencies:
    brace-expansion: ^1.1.7
  checksum: c154e566406683e7bcb746e000b84d74465b3a832c45d59912b9b55cd50dee66e5c4b1e5566dba26154040e51672f9aa450a9aef0c97cfc7336b78b7afb9540a
  languageName: node
  linkType: hard

"minimatch@npm:^5.0.1":
  version: 5.0.1
  resolution: "minimatch@npm:5.0.1"
  dependencies:
    brace-expansion: ^2.0.1
  checksum: b34b98463da4754bc526b244d680c69d4d6089451ebe512edaf6dd9eeed0279399cfa3edb19233513b8f830bf4bfcad911dddcdf125e75074100d52f724774f0
  languageName: node
  linkType: hard

"minimist@npm:^1.1.1, minimist@npm:^1.2.0, minimist@npm:^1.2.5, minimist@npm:^1.2.6":
  version: 1.2.6
  resolution: "minimist@npm:1.2.6"
  checksum: d15428cd1e11eb14e1233bcfb88ae07ed7a147de251441d61158619dfb32c4d7e9061d09cab4825fdee18ecd6fce323228c8c47b5ba7cd20af378ca4048fb3fb
  languageName: node
  linkType: hard

"minipass-collect@npm:^1.0.2":
  version: 1.0.2
  resolution: "minipass-collect@npm:1.0.2"
  dependencies:
    minipass: ^3.0.0
  checksum: 14df761028f3e47293aee72888f2657695ec66bd7d09cae7ad558da30415fdc4752bbfee66287dcc6fd5e6a2fa3466d6c484dc1cbd986525d9393b9523d97f10
  languageName: node
  linkType: hard

"minipass-fetch@npm:^2.0.3":
  version: 2.1.0
  resolution: "minipass-fetch@npm:2.1.0"
  dependencies:
    encoding: ^0.1.13
    minipass: ^3.1.6
    minipass-sized: ^1.0.3
    minizlib: ^2.1.2
  dependenciesMeta:
    encoding:
      optional: true
  checksum: 1334732859a3f7959ed22589bafd9c40384b885aebb5932328071c33f86b3eb181d54c86919675d1825ab5f1c8e4f328878c863873258d113c29d79a4b0c9c9f
  languageName: node
  linkType: hard

"minipass-flush@npm:^1.0.5":
  version: 1.0.5
  resolution: "minipass-flush@npm:1.0.5"
  dependencies:
    minipass: ^3.0.0
  checksum: 56269a0b22bad756a08a94b1ffc36b7c9c5de0735a4dd1ab2b06c066d795cfd1f0ac44a0fcae13eece5589b908ecddc867f04c745c7009be0b566421ea0944cf
  languageName: node
  linkType: hard

"minipass-pipeline@npm:^1.2.4":
  version: 1.2.4
  resolution: "minipass-pipeline@npm:1.2.4"
  dependencies:
    minipass: ^3.0.0
  checksum: b14240dac0d29823c3d5911c286069e36d0b81173d7bdf07a7e4a91ecdef92cdff4baaf31ea3746f1c61e0957f652e641223970870e2353593f382112257971b
  languageName: node
  linkType: hard

"minipass-sized@npm:^1.0.3":
  version: 1.0.3
  resolution: "minipass-sized@npm:1.0.3"
  dependencies:
    minipass: ^3.0.0
  checksum: 79076749fcacf21b5d16dd596d32c3b6bf4d6e62abb43868fac21674078505c8b15eaca4e47ed844985a4514854f917d78f588fcd029693709417d8f98b2bd60
  languageName: node
  linkType: hard

"minipass@npm:^3.0.0, minipass@npm:^3.1.1, minipass@npm:^3.1.6":
  version: 3.1.6
  resolution: "minipass@npm:3.1.6"
  dependencies:
    yallist: ^4.0.0
  checksum: 57a04041413a3531a65062452cb5175f93383ef245d6f4a2961d34386eb9aa8ac11ac7f16f791f5e8bbaf1dfb1ef01596870c88e8822215db57aa591a5bb0a77
  languageName: node
  linkType: hard

"minizlib@npm:^2.1.1, minizlib@npm:^2.1.2":
  version: 2.1.2
  resolution: "minizlib@npm:2.1.2"
  dependencies:
    minipass: ^3.0.0
    yallist: ^4.0.0
  checksum: f1fdeac0b07cf8f30fcf12f4b586795b97be856edea22b5e9072707be51fc95d41487faec3f265b42973a304fe3a64acd91a44a3826a963e37b37bafde0212c3
  languageName: node
  linkType: hard

"mkdirp@npm:^1.0.3, mkdirp@npm:^1.0.4":
  version: 1.0.4
  resolution: "mkdirp@npm:1.0.4"
  bin:
    mkdirp: bin/cmd.js
  checksum: a96865108c6c3b1b8e1d5e9f11843de1e077e57737602de1b82030815f311be11f96f09cce59bd5b903d0b29834733e5313f9301e3ed6d6f6fba2eae0df4298f
  languageName: node
  linkType: hard

"mlly@npm:^0.3.6":
  version: 0.3.19
  resolution: "mlly@npm:0.3.19"
  checksum: 85d646936d5d94b6783e12257adb64ceac9ece32ccaa33d911d44f0c265a91d4f34092beb39641cd108c14a4228f56fc591af60412f65964c72561fbd244ad36
  languageName: node
  linkType: hard

"mlly@npm:^0.5.2":
  version: 0.5.2
  resolution: "mlly@npm:0.5.2"
  dependencies:
    pathe: ^0.2.0
    pkg-types: ^0.3.2
  checksum: 8a369b0b6333e704bff297ab2ac886ebaf67af8ba2c1967a6f55b6771eb7f5a96a2aeaeb6e3329cd7e9360a2fc59226ada41fa2a8aa76c1f4325e92cbc6bc0f3
  languageName: node
  linkType: hard

"mlly@npm:^0.5.3":
  version: 0.5.3
  resolution: "mlly@npm:0.5.3"
  dependencies:
    pathe: ^0.2.0
    pkg-types: ^0.3.2
  checksum: 05b76d2167c9e195ae3952ef116b9a00f81af06772e0f27080b95bf57693916447af7b8313d48911fdeb7185bed6c8e8fc45b311c55599a29a1a451a8f8c103c
  languageName: node
  linkType: hard

"mrmime@npm:^1.0.0":
  version: 1.0.1
  resolution: "mrmime@npm:1.0.1"
  checksum: cc979da44bbbffebaa8eaf7a45117e851f2d4cb46a3ada6ceb78130466a04c15a0de9a9ce1c8b8ba6f6e1b8618866b1352992bf1757d241c0ddca558b9f28a77
  languageName: node
  linkType: hard

"ms@npm:2.1.2":
  version: 2.1.2
  resolution: "ms@npm:2.1.2"
  checksum: 673cdb2c3133eb050c745908d8ce632ed2c02d85640e2edb3ace856a2266a813b30c613569bf3354fdf4ea7d1a1494add3bfa95e2713baa27d0c2c71fc44f58f
  languageName: node
  linkType: hard

"ms@npm:^2.0.0, ms@npm:^2.1.1":
  version: 2.1.3
  resolution: "ms@npm:2.1.3"
  checksum: aa92de608021b242401676e35cfa5aa42dd70cbdc082b916da7fb925c542173e36bce97ea3e804923fe92c0ad991434e4a38327e15a1b5b5f945d66df615ae6d
  languageName: node
  linkType: hard

"naive-ui@npm:^2.29.0":
  version: 2.29.0
  resolution: "naive-ui@npm:2.29.0"
  dependencies:
    "@css-render/plugin-bem": ^0.15.10
    "@css-render/vue3-ssr": ^0.15.10
    "@types/lodash": ^4.14.181
    "@types/lodash-es": ^4.17.6
    async-validator: ^4.0.7
    css-render: ^0.15.10
    date-fns: ^2.28.0
    date-fns-tz: ^1.3.3
    evtd: ^0.2.3
    highlight.js: ^11.5.0
    lodash: ^4.17.21
    lodash-es: ^4.17.21
    seemly: ^0.3.3
    treemate: ^0.3.11
    vdirs: ^0.1.8
    vooks: ^0.2.12
    vueuc: ^0.4.33
  peerDependencies:
    vue: ^3.0.0
  checksum: d3ceb679f55dd4197c8dd7a19c387f8ff8b7c54a01efcb244ddb19efb08ed290540252bea074a1676fc13b98750a4e49cb42bad346c5fb8d892b8278ee70be30
  languageName: node
  linkType: hard

"nanoid@npm:^3.3.3":
  version: 3.3.4
  resolution: "nanoid@npm:3.3.4"
  bin:
    nanoid: bin/nanoid.cjs
  checksum: 2fddd6dee994b7676f008d3ffa4ab16035a754f4bb586c61df5a22cf8c8c94017aadd360368f47d653829e0569a92b129979152ff97af23a558331e47e37cd9c
  languageName: node
  linkType: hard

"natural-compare@npm:^1.4.0":
  version: 1.4.0
  resolution: "natural-compare@npm:1.4.0"
  checksum: 23ad088b08f898fc9b53011d7bb78ec48e79de7627e01ab5518e806033861bef68d5b0cd0e2205c2f36690ac9571ff6bcb05eb777ced2eeda8d4ac5b44592c3d
  languageName: node
  linkType: hard

"negotiator@npm:^0.6.3":
  version: 0.6.3
  resolution: "negotiator@npm:0.6.3"
  checksum: b8ffeb1e262eff7968fc90a2b6767b04cfd9842582a9d0ece0af7049537266e7b2506dfb1d107a32f06dd849ab2aea834d5830f7f4d0e5cb7d36e1ae55d021d9
  languageName: node
  linkType: hard

"node-gyp@npm:latest":
  version: 9.0.0
  resolution: "node-gyp@npm:9.0.0"
  dependencies:
    env-paths: ^2.2.0
    glob: ^7.1.4
    graceful-fs: ^4.2.6
    make-fetch-happen: ^10.0.3
    nopt: ^5.0.0
    npmlog: ^6.0.0
    rimraf: ^3.0.2
    semver: ^7.3.5
    tar: ^6.1.2
    which: ^2.0.2
  bin:
    node-gyp: bin/node-gyp.js
  checksum: 4d8ef8860f7e4f4d86c91db3f519d26ed5cc23b48fe54543e2afd86162b4acbd14f21de42a5db344525efb69a991e021b96a68c70c6e2d5f4a5cb770793da6d3
  languageName: node
  linkType: hard

"node-releases@npm:^2.0.3":
  version: 2.0.4
  resolution: "node-releases@npm:2.0.4"
  checksum: b32d6c2032c7b169ae3938b416fc50f123f5bd577d54a79b2ae201febf27b22846b01c803dd35ac8689afe840f8ba4e5f7154723db629b80f359836b6707b92f
  languageName: node
  linkType: hard

"nopt@npm:^5.0.0":
  version: 5.0.0
  resolution: "nopt@npm:5.0.0"
  dependencies:
    abbrev: 1
  bin:
    nopt: bin/nopt.js
  checksum: d35fdec187269503843924e0114c0c6533fb54bbf1620d0f28b4b60ba01712d6687f62565c55cc20a504eff0fbe5c63e22340c3fad549ad40469ffb611b04f2f
  languageName: node
  linkType: hard

"normalize-path@npm:^3.0.0, normalize-path@npm:~3.0.0":
  version: 3.0.0
  resolution: "normalize-path@npm:3.0.0"
  checksum: 88eeb4da891e10b1318c4b2476b6e2ecbeb5ff97d946815ffea7794c31a89017c70d7f34b3c2ebf23ef4e9fc9fb99f7dffe36da22011b5b5c6ffa34f4873ec20
  languageName: node
  linkType: hard

"normalize-range@npm:^0.1.2":
  version: 0.1.2
  resolution: "normalize-range@npm:0.1.2"
  checksum: 9b2f14f093593f367a7a0834267c24f3cb3e887a2d9809c77d8a7e5fd08738bcd15af46f0ab01cc3a3d660386f015816b5c922cea8bf2ee79777f40874063184
  languageName: node
  linkType: hard

"npm-run-path@npm:^4.0.0, npm-run-path@npm:^4.0.1":
  version: 4.0.1
  resolution: "npm-run-path@npm:4.0.1"
  dependencies:
    path-key: ^3.0.0
  checksum: 5374c0cea4b0bbfdfae62da7bbdf1e1558d338335f4cacf2515c282ff358ff27b2ecb91ffa5330a8b14390ac66a1e146e10700440c1ab868208430f56b5f4d23
  languageName: node
  linkType: hard

"npmlog@npm:^6.0.0":
  version: 6.0.2
  resolution: "npmlog@npm:6.0.2"
  dependencies:
    are-we-there-yet: ^3.0.0
    console-control-strings: ^1.1.0
    gauge: ^4.0.3
    set-blocking: ^2.0.0
  checksum: ae238cd264a1c3f22091cdd9e2b106f684297d3c184f1146984ecbe18aaa86343953f26b9520dedd1b1372bc0316905b736c1932d778dbeb1fcf5a1001390e2a
  languageName: node
  linkType: hard

"nth-check@npm:^2.0.1":
  version: 2.0.1
  resolution: "nth-check@npm:2.0.1"
  dependencies:
    boolbase: ^1.0.0
  checksum: 5386d035c48438ff304fe687704d93886397349d1bed136de97aeae464caba10e8ffac55a04b215b86b3bc8897f33e0a5aa1045a9d8b2f251ae61b2a3ad3e450
  languageName: node
  linkType: hard

"nwsapi@npm:^2.2.0":
  version: 2.2.0
  resolution: "nwsapi@npm:2.2.0"
  checksum: 5ef4a9bc0c1a5b7f2e014aa6a4b359a257503b796618ed1ef0eb852098f77e772305bb0e92856e4bbfa3e6c75da48c0113505c76f144555ff38867229c2400a7
  languageName: node
  linkType: hard

"object-assign@npm:^4.1.1":
  version: 4.1.1
  resolution: "object-assign@npm:4.1.1"
  checksum: fcc6e4ea8c7fe48abfbb552578b1c53e0d194086e2e6bbbf59e0a536381a292f39943c6e9628af05b5528aa5e3318bb30d6b2e53cadaf5b8fe9e12c4b69af23f
  languageName: node
  linkType: hard

"object-hash@npm:^3.0.0":
  version: 3.0.0
  resolution: "object-hash@npm:3.0.0"
  checksum: 80b4904bb3857c52cc1bfd0b52c0352532ca12ed3b8a6ff06a90cd209dfda1b95cee059a7625eb9da29537027f68ac4619363491eedb2f5d3dddbba97494fd6c
  languageName: node
  linkType: hard

"object-inspect@npm:^1.12.0, object-inspect@npm:^1.9.0":
  version: 1.12.0
  resolution: "object-inspect@npm:1.12.0"
  checksum: 2b36d4001a9c921c6b342e2965734519c9c58c355822243c3207fbf0aac271f8d44d30d2d570d450b2cc6f0f00b72bcdba515c37827d2560e5f22b1899a31cf4
  languageName: node
  linkType: hard

"object-is@npm:^1.1.4":
  version: 1.1.5
  resolution: "object-is@npm:1.1.5"
  dependencies:
    call-bind: ^1.0.2
    define-properties: ^1.1.3
  checksum: 989b18c4cba258a6b74dc1d74a41805c1a1425bce29f6cabb50dcb1a6a651ea9104a1b07046739a49a5bb1bc49727bcb00efd5c55f932f6ea04ec8927a7901fe
  languageName: node
  linkType: hard

"object-keys@npm:^1.1.1":
  version: 1.1.1
  resolution: "object-keys@npm:1.1.1"
  checksum: b363c5e7644b1e1b04aa507e88dcb8e3a2f52b6ffd0ea801e4c7a62d5aa559affe21c55a07fd4b1fd55fc03a33c610d73426664b20032405d7b92a1414c34d6a
  languageName: node
  linkType: hard

"object.assign@npm:^4.1.2":
  version: 4.1.2
  resolution: "object.assign@npm:4.1.2"
  dependencies:
    call-bind: ^1.0.0
    define-properties: ^1.1.3
    has-symbols: ^1.0.1
    object-keys: ^1.1.1
  checksum: d621d832ed7b16ac74027adb87196804a500d80d9aca536fccb7ba48d33a7e9306a75f94c1d29cbfa324bc091bfc530bc24789568efdaee6a47fcfa298993814
  languageName: node
  linkType: hard

"obliterator@npm:^2.0.3":
  version: 2.0.4
  resolution: "obliterator@npm:2.0.4"
  checksum: f28ad35b6d812089315f375dc3e6e5f9bebf958ebe4b10ccd471c7115cbcf595e74bdac4783ae758e5b1f47e3096427fdb37cfa7bed566b132df92ff317b9a7c
  languageName: node
  linkType: hard

"once@npm:^1.3.0, once@npm:^1.3.1, once@npm:^1.4.0":
  version: 1.4.0
  resolution: "once@npm:1.4.0"
  dependencies:
    wrappy: 1
  checksum: cd0a88501333edd640d95f0d2700fbde6bff20b3d4d9bdc521bdd31af0656b5706570d6c6afe532045a20bb8dc0849f8332d6f2a416e0ba6d3d3b98806c7db68
  languageName: node
  linkType: hard

"onetime@npm:^5.1.0, onetime@npm:^5.1.2":
  version: 5.1.2
  resolution: "onetime@npm:5.1.2"
  dependencies:
    mimic-fn: ^2.1.0
  checksum: 2478859ef817fc5d4e9c2f9e5728512ddd1dbc9fb7829ad263765bb6d3b91ce699d6e2332eef6b7dff183c2f490bd3349f1666427eaba4469fba0ac38dfd0d34
  languageName: node
  linkType: hard

"optionator@npm:^0.8.1":
  version: 0.8.3
  resolution: "optionator@npm:0.8.3"
  dependencies:
    deep-is: ~0.1.3
    fast-levenshtein: ~2.0.6
    levn: ~0.3.0
    prelude-ls: ~1.1.2
    type-check: ~0.3.2
    word-wrap: ~1.2.3
  checksum: b8695ddf3d593203e25ab0900e265d860038486c943ff8b774f596a310f8ceebdb30c6832407a8198ba3ec9debe1abe1f51d4aad94843612db3b76d690c61d34
  languageName: node
  linkType: hard

"optionator@npm:^0.9.1":
  version: 0.9.1
  resolution: "optionator@npm:0.9.1"
  dependencies:
    deep-is: ^0.1.3
    fast-levenshtein: ^2.0.6
    levn: ^0.4.1
    prelude-ls: ^1.2.1
    type-check: ^0.4.0
    word-wrap: ^1.2.3
  checksum: dbc6fa065604b24ea57d734261914e697bd73b69eff7f18e967e8912aa2a40a19a9f599a507fa805be6c13c24c4eae8c71306c239d517d42d4c041c942f508a0
  languageName: node
  linkType: hard

"ospath@npm:^1.2.2":
  version: 1.2.2
  resolution: "ospath@npm:1.2.2"
  checksum: 505f48a4f4f1c557d6c656ec985707726e3714721680139be037613e903aa8c8fa4ddd8d1342006f9b2dc0065e6e20f8b7bea2ee05354f31257044790367b347
  languageName: node
  linkType: hard

"p-limit@npm:^3.0.2":
  version: 3.1.0
  resolution: "p-limit@npm:3.1.0"
  dependencies:
    yocto-queue: ^0.1.0
  checksum: 7c3690c4dbf62ef625671e20b7bdf1cbc9534e83352a2780f165b0d3ceba21907e77ad63401708145ca4e25bfc51636588d89a8c0aeb715e6c37d1c066430360
  languageName: node
  linkType: hard

"p-locate@npm:^5.0.0":
  version: 5.0.0
  resolution: "p-locate@npm:5.0.0"
  dependencies:
    p-limit: ^3.0.2
  checksum: 1623088f36cf1cbca58e9b61c4e62bf0c60a07af5ae1ca99a720837356b5b6c5ba3eb1b2127e47a06865fee59dd0453cad7cc844cda9d5a62ac1a5a51b7c86d3
  languageName: node
  linkType: hard

"p-map@npm:^4.0.0":
  version: 4.0.0
  resolution: "p-map@npm:4.0.0"
  dependencies:
    aggregate-error: ^3.0.0
  checksum: cb0ab21ec0f32ddffd31dfc250e3afa61e103ef43d957cc45497afe37513634589316de4eb88abdfd969fe6410c22c0b93ab24328833b8eb1ccc087fc0442a1c
  languageName: node
  linkType: hard

"parent-module@npm:^1.0.0":
  version: 1.0.1
  resolution: "parent-module@npm:1.0.1"
  dependencies:
    callsites: ^3.0.0
  checksum: 6ba8b255145cae9470cf5551eb74be2d22281587af787a2626683a6c20fbb464978784661478dd2a3f1dad74d1e802d403e1b03c1a31fab310259eec8ac560ff
  languageName: node
  linkType: hard

"parse5@npm:6.0.1":
  version: 6.0.1
  resolution: "parse5@npm:6.0.1"
  checksum: 7d569a176c5460897f7c8f3377eff640d54132b9be51ae8a8fa4979af940830b2b0c296ce75e5bd8f4041520aadde13170dbdec44889975f906098ea0002f4bd
  languageName: node
  linkType: hard

"path-exists@npm:^4.0.0":
  version: 4.0.0
  resolution: "path-exists@npm:4.0.0"
  checksum: 505807199dfb7c50737b057dd8d351b82c033029ab94cb10a657609e00c1bc53b951cfdbccab8de04c5584d5eff31128ce6afd3db79281874a5ef2adbba55ed1
  languageName: node
  linkType: hard

"path-is-absolute@npm:^1.0.0":
  version: 1.0.1
  resolution: "path-is-absolute@npm:1.0.1"
  checksum: 060840f92cf8effa293bcc1bea81281bd7d363731d214cbe5c227df207c34cd727430f70c6037b5159c8a870b9157cba65e775446b0ab06fd5ecc7e54615a3b8
  languageName: node
  linkType: hard

"path-key@npm:^3.0.0, path-key@npm:^3.1.0":
  version: 3.1.1
  resolution: "path-key@npm:3.1.1"
  checksum: 55cd7a9dd4b343412a8386a743f9c746ef196e57c823d90ca3ab917f90ab9f13dd0ded27252ba49dbdfcab2b091d998bc446f6220cd3cea65db407502a740020
  languageName: node
  linkType: hard

"path-parse@npm:^1.0.7":
  version: 1.0.7
  resolution: "path-parse@npm:1.0.7"
  checksum: 49abf3d81115642938a8700ec580da6e830dde670be21893c62f4e10bd7dd4c3742ddc603fe24f898cba7eb0c6bc1777f8d9ac14185d34540c6d4d80cd9cae8a
  languageName: node
  linkType: hard

"path-type@npm:^4.0.0":
  version: 4.0.0
  resolution: "path-type@npm:4.0.0"
  checksum: 5b1e2daa247062061325b8fdbfd1fb56dde0a448fb1455453276ea18c60685bdad23a445dc148cf87bc216be1573357509b7d4060494a6fd768c7efad833ee45
  languageName: node
  linkType: hard

"pathe@npm:^0.2.0":
  version: 0.2.0
  resolution: "pathe@npm:0.2.0"
  checksum: 9a8149ce152088f30d15b0b03a7c128ba21f16b4dc1f3f90fe38eee9f6d0f1d6da8e4e47bd2a4f9e14aaac7c30ed01cfc86216479011de2bdc598b65e6f19f41
  languageName: node
  linkType: hard

"pathe@npm:^0.3.0":
  version: 0.3.0
  resolution: "pathe@npm:0.3.0"
  checksum: 1da704da2b625b9062be4079b6f8d5609e053add991520fb6a43905b492ee48e5c61cc6fb87f7ae970df39d4b7be1e6840285f683d670f8b430481e46c81c863
  languageName: node
  linkType: hard

"pathval@npm:^1.1.1":
  version: 1.1.1
  resolution: "pathval@npm:1.1.1"
  checksum: 090e3147716647fb7fb5b4b8c8e5b55e5d0a6086d085b6cd23f3d3c01fcf0ff56fd3cc22f2f4a033bd2e46ed55d61ed8379e123b42afe7d531a2a5fc8bb556d6
  languageName: node
  linkType: hard

"pause-stream@npm:0.0.11":
  version: 0.0.11
  resolution: "pause-stream@npm:0.0.11"
  dependencies:
    through: ~2.3
  checksum: 3c4a14052a638b92e0c96eb00c0d7977df7f79ea28395250c525d197f1fc02d34ce1165d5362e2e6ebbb251524b94a76f3f0d4abc39ab8b016d97449fe15583c
  languageName: node
  linkType: hard

"pend@npm:~1.2.0":
  version: 1.2.0
  resolution: "pend@npm:1.2.0"
  checksum: 6c72f5243303d9c60bd98e6446ba7d30ae29e3d56fdb6fae8767e8ba6386f33ee284c97efe3230a0d0217e2b1723b8ab490b1bbf34fcbb2180dbc8a9de47850d
  languageName: node
  linkType: hard

"performance-now@npm:^2.1.0":
  version: 2.1.0
  resolution: "performance-now@npm:2.1.0"
  checksum: 534e641aa8f7cba160f0afec0599b6cecefbb516a2e837b512be0adbe6c1da5550e89c78059c7fabc5c9ffdf6627edabe23eb7c518c4500067a898fa65c2b550
  languageName: node
  linkType: hard

"picocolors@npm:^1.0.0":
  version: 1.0.0
  resolution: "picocolors@npm:1.0.0"
  checksum: a2e8092dd86c8396bdba9f2b5481032848525b3dc295ce9b57896f931e63fc16f79805144321f72976383fc249584672a75cc18d6777c6b757603f372f745981
  languageName: node
  linkType: hard

"picomatch@npm:^2.0.4, picomatch@npm:^2.2.1, picomatch@npm:^2.2.2, picomatch@npm:^2.3.1":
  version: 2.3.1
  resolution: "picomatch@npm:2.3.1"
  checksum: 050c865ce81119c4822c45d3c84f1ced46f93a0126febae20737bd05ca20589c564d6e9226977df859ed5e03dc73f02584a2b0faad36e896936238238b0446cf
  languageName: node
  linkType: hard

"pify@npm:^2.2.0":
  version: 2.3.0
  resolution: "pify@npm:2.3.0"
  checksum: 9503aaeaf4577acc58642ad1d25c45c6d90288596238fb68f82811c08104c800e5a7870398e9f015d82b44ecbcbef3dc3d4251a1cbb582f6e5959fe09884b2ba
  languageName: node
  linkType: hard

"pinia@npm:^2.0.13":
  version: 2.0.14
  resolution: "pinia@npm:2.0.14"
  dependencies:
    "@vue/devtools-api": ^6.1.4
    vue-demi: "*"
  peerDependencies:
    "@vue/composition-api": ^1.4.0
    typescript: ">=4.4.4"
    vue: ^2.6.14 || ^3.2.0
  peerDependenciesMeta:
    "@vue/composition-api":
      optional: true
    typescript:
      optional: true
  checksum: d07ed55b53e92da0971c3fcc0a1bd520b26cd50d266f46c8bab24fed87788461782a2c75088cf97c79810e7a4ceb28381f5d77daf280883ad3340c41962d0934
  languageName: node
  linkType: hard

"pkg-types@npm:^0.3.2":
  version: 0.3.2
  resolution: "pkg-types@npm:0.3.2"
  dependencies:
    jsonc-parser: ^3.0.0
    mlly: ^0.3.6
    pathe: ^0.2.0
  checksum: 55942a816772137fda954ea1ad86cb972e63da42e445a0532cd6bfc31def6ed22f28bf5746fcea39cedd128494079212ee1ab51edcf206280b9e4eb8c3468bd4
  languageName: node
  linkType: hard

"postcss-js@npm:^4.0.0":
  version: 4.0.0
  resolution: "postcss-js@npm:4.0.0"
  dependencies:
    camelcase-css: ^2.0.1
  peerDependencies:
    postcss: ^8.3.3
  checksum: 14be8a58670b4c5d037d40f179240a4f736d53530db727e2635638fa296bc4bff18149ca860928398aace422e55d07c9f5729eeccd395340944985199cdc82a5
  languageName: node
  linkType: hard

"postcss-load-config@npm:^3.1.4":
  version: 3.1.4
  resolution: "postcss-load-config@npm:3.1.4"
  dependencies:
    lilconfig: ^2.0.5
    yaml: ^1.10.2
  peerDependencies:
    postcss: ">=8.0.9"
    ts-node: ">=9.0.0"
  peerDependenciesMeta:
    postcss:
      optional: true
    ts-node:
      optional: true
  checksum: 1c589504c2d90b1568aecae8238ab993c17dba2c44f848a8f13619ba556d26a1c09644d5e6361b5784e721e94af37b604992f9f3dc0483e687a0cc1cc5029a34
  languageName: node
  linkType: hard

"postcss-nested@npm:5.0.6":
  version: 5.0.6
  resolution: "postcss-nested@npm:5.0.6"
  dependencies:
    postcss-selector-parser: ^6.0.6
  peerDependencies:
    postcss: ^8.2.14
  checksum: dbcbfd11e514f485ac0d2b649b32bcbd855665a88a76f697f8be6c5017aa0260954ecccd2475bbd5865a5d248eae9a4e6e10d2d51927621d05430381aa37e43b
  languageName: node
  linkType: hard

"postcss-selector-parser@npm:^6.0.10, postcss-selector-parser@npm:^6.0.6, postcss-selector-parser@npm:^6.0.9":
  version: 6.0.10
  resolution: "postcss-selector-parser@npm:6.0.10"
  dependencies:
    cssesc: ^3.0.0
    util-deprecate: ^1.0.2
  checksum: 46afaa60e3d1998bd7adf6caa374baf857cc58d3ff944e29459c9a9e4680a7fe41597bd5b755fc81d7c388357e9bf67c0251d047c640a09f148e13606b8a8608
  languageName: node
  linkType: hard

"postcss-value-parser@npm:^4.2.0":
  version: 4.2.0
  resolution: "postcss-value-parser@npm:4.2.0"
  checksum: 819ffab0c9d51cf0acbabf8996dffbfafbafa57afc0e4c98db88b67f2094cb44488758f06e5da95d7036f19556a4a732525e84289a425f4f6fd8e412a9d7442f
  languageName: node
  linkType: hard

"postcss@npm:^8.1.10, postcss@npm:^8.4.12, postcss@npm:^8.4.13":
  version: 8.4.13
  resolution: "postcss@npm:8.4.13"
  dependencies:
    nanoid: ^3.3.3
    picocolors: ^1.0.0
    source-map-js: ^1.0.2
  checksum: 514fb3552805a5d039a2d6b4df3e73f657001716ca93c0d57e6067b0473abdea70276d80afc96005c9aaff82ed5d98062bd97724d3f47ca400fba0b5e9e436ed
  languageName: node
  linkType: hard

"prelude-ls@npm:^1.2.1":
  version: 1.2.1
  resolution: "prelude-ls@npm:1.2.1"
  checksum: cd192ec0d0a8e4c6da3bb80e4f62afe336df3f76271ac6deb0e6a36187133b6073a19e9727a1ff108cd8b9982e4768850d413baa71214dd80c7979617dca827a
  languageName: node
  linkType: hard

"prelude-ls@npm:~1.1.2":
  version: 1.1.2
  resolution: "prelude-ls@npm:1.1.2"
  checksum: c4867c87488e4a0c233e158e4d0d5565b609b105d75e4c05dc760840475f06b731332eb93cc8c9cecb840aa8ec323ca3c9a56ad7820ad2e63f0261dadcb154e4
  languageName: node
  linkType: hard

"prettier-linter-helpers@npm:^1.0.0":
  version: 1.0.0
  resolution: "prettier-linter-helpers@npm:1.0.0"
  dependencies:
    fast-diff: ^1.1.2
  checksum: 00ce8011cf6430158d27f9c92cfea0a7699405633f7f1d4a45f07e21bf78e99895911cbcdc3853db3a824201a7c745bd49bfea8abd5fb9883e765a90f74f8392
  languageName: node
  linkType: hard

"prettier@npm:^2.5.1":
  version: 2.6.2
  resolution: "prettier@npm:2.6.2"
  bin:
    prettier: bin-prettier.js
  checksum: 48d08dde8e9fb1f5bccdd205baa7f192e9fc8bc98f86e1b97d919de804e28c806b0e6cc685e4a88211aa7987fa9668f30baae19580d87ced3ed0f2ec6572106f
  languageName: node
  linkType: hard

"pretty-bytes@npm:^5.6.0":
  version: 5.6.0
  resolution: "pretty-bytes@npm:5.6.0"
  checksum: 9c082500d1e93434b5b291bd651662936b8bd6204ec9fa17d563116a192d6d86b98f6d328526b4e8d783c07d5499e2614a807520249692da9ec81564b2f439cd
  languageName: node
  linkType: hard

"pretty-format@npm:^27.0.0, pretty-format@npm:^27.5.1":
  version: 27.5.1
  resolution: "pretty-format@npm:27.5.1"
  dependencies:
    ansi-regex: ^5.0.1
    ansi-styles: ^5.0.0
    react-is: ^17.0.1
  checksum: cf610cffcb793885d16f184a62162f2dd0df31642d9a18edf4ca298e909a8fe80bdbf556d5c9573992c102ce8bf948691da91bf9739bee0ffb6e79c8a8a6e088
  languageName: node
  linkType: hard

"prismjs@npm:^1.28.0":
  version: 1.28.0
  resolution: "prismjs@npm:1.28.0"
  checksum: bde93fb2beb45b7243219fc53855f59ee54b3fa179f315e8f9d66244d756ef984462e10561bbdc6713d3d7e051852472d7c284f5794a8791eeaefea2fb910b16
  languageName: node
  linkType: hard

"promise-inflight@npm:^1.0.1":
  version: 1.0.1
  resolution: "promise-inflight@npm:1.0.1"
  checksum: 22749483091d2c594261517f4f80e05226d4d5ecc1fc917e1886929da56e22b5718b7f2a75f3807e7a7d471bc3be2907fe92e6e8f373ddf5c64bae35b5af3981
  languageName: node
  linkType: hard

"promise-retry@npm:^2.0.1":
  version: 2.0.1
  resolution: "promise-retry@npm:2.0.1"
  dependencies:
    err-code: ^2.0.2
    retry: ^0.12.0
  checksum: f96a3f6d90b92b568a26f71e966cbbc0f63ab85ea6ff6c81284dc869b41510e6cdef99b6b65f9030f0db422bf7c96652a3fff9f2e8fb4a0f069d8f4430359429
  languageName: node
  linkType: hard

"promise@npm:^7.0.1":
  version: 7.3.1
  resolution: "promise@npm:7.3.1"
  dependencies:
    asap: ~2.0.3
  checksum: 475bb069130179fbd27ed2ab45f26d8862376a137a57314cf53310bdd85cc986a826fd585829be97ebc0aaf10e9d8e68be1bfe5a4a0364144b1f9eedfa940cf1
  languageName: node
  linkType: hard

"proxy-from-env@npm:1.0.0":
  version: 1.0.0
  resolution: "proxy-from-env@npm:1.0.0"
  checksum: 292e28d1de0c315958d71d8315eb546dd3cd8c8cbc2dab7c54eeb9f5c17f421771964ad0b5e1f77011bab2305bdae42e1757ce33bdb1ccc3e87732322a8efcf1
  languageName: node
  linkType: hard

"ps-tree@npm:1.2.0":
  version: 1.2.0
  resolution: "ps-tree@npm:1.2.0"
  dependencies:
    event-stream: =3.3.4
  bin:
    ps-tree: ./bin/ps-tree.js
  checksum: e635dd00f53d30d31696cf5f95b3a8dbdf9b1aeb36d4391578ce8e8cd22949b7c5536c73b0dc18c78615ea3ddd4be96101166be59ca2e3e3cb1e2f79ba3c7f98
  languageName: node
  linkType: hard

"psl@npm:^1.1.28, psl@npm:^1.1.33":
  version: 1.8.0
  resolution: "psl@npm:1.8.0"
  checksum: 6150048ed2da3f919478bee8a82f3828303bc0fc730fb015a48f83c9977682c7b28c60ab01425a72d82a2891a1681627aa530a991d50c086b48a3be27744bde7
  languageName: node
  linkType: hard

"pug-attrs@npm:^3.0.0":
  version: 3.0.0
  resolution: "pug-attrs@npm:3.0.0"
  dependencies:
    constantinople: ^4.0.1
    js-stringify: ^1.0.2
    pug-runtime: ^3.0.0
  checksum: 2ca2d34de3065239f01f0fc3c0e104c17f7a7105684d088bb71df623005a45f40a2301e65f49ec4581bb31794c74e691862643d4e34062d1509e92fa56a15aa5
  languageName: node
  linkType: hard

"pug-code-gen@npm:^3.0.2":
  version: 3.0.2
  resolution: "pug-code-gen@npm:3.0.2"
  dependencies:
    constantinople: ^4.0.1
    doctypes: ^1.1.0
    js-stringify: ^1.0.2
    pug-attrs: ^3.0.0
    pug-error: ^2.0.0
    pug-runtime: ^3.0.0
    void-elements: ^3.1.0
    with: ^7.0.0
  checksum: 1644d3a4d673392794248749eb146299704639a8197746454b7d03b240b83ee102f25b76d203381501e283be3927ab01eb3f4563ff51c45a478de1f3435a400d
  languageName: node
  linkType: hard

"pug-error@npm:^2.0.0":
  version: 2.0.0
  resolution: "pug-error@npm:2.0.0"
  checksum: c5372d018c897c1d6a141dd803c50957feecfda1f3d84a6adc6149801315d6c7f8c28b05f3e186d98d774fc9718699d1e1caa675630dd3c4453f8c5ec4e4a986
  languageName: node
  linkType: hard

"pug-filters@npm:^4.0.0":
  version: 4.0.0
  resolution: "pug-filters@npm:4.0.0"
  dependencies:
    constantinople: ^4.0.1
    jstransformer: 1.0.0
    pug-error: ^2.0.0
    pug-walk: ^2.0.0
    resolve: ^1.15.1
  checksum: 44eb3273195e3f42f034ad81109452236377780557eaf5a28db6e478f297675e19b8598cca9de65a0ba9c1d57e2ca2a93e332f0ab4be79dc5dd042375228cdff
  languageName: node
  linkType: hard

"pug-lexer@npm:^5.0.0, pug-lexer@npm:^5.0.1":
  version: 5.0.1
  resolution: "pug-lexer@npm:5.0.1"
  dependencies:
    character-parser: ^2.2.0
    is-expression: ^4.0.0
    pug-error: ^2.0.0
  checksum: afdd2f43f2c3ba96001a7b734c0c3bc745eb5d7dd68c787c2690c606d34573ca46ba807e4b4c7e70db9b4556fb938625dbb9c25b79cdb8857868e6deb2574d3e
  languageName: node
  linkType: hard

"pug-linker@npm:^4.0.0":
  version: 4.0.0
  resolution: "pug-linker@npm:4.0.0"
  dependencies:
    pug-error: ^2.0.0
    pug-walk: ^2.0.0
  checksum: 7433aa65181cd5b7bc631ab5f14baae7496fd8da98608cbd55bbea9bc72fe69a863e72026781a9fe76ab429d7037465b942145455420ee1178e2875ec87a1e12
  languageName: node
  linkType: hard

"pug-load@npm:^3.0.0":
  version: 3.0.0
  resolution: "pug-load@npm:3.0.0"
  dependencies:
    object-assign: ^4.1.1
    pug-walk: ^2.0.0
  checksum: 1800ec51994c92338401bcf79bbfa0d5ef9aa312bc415c2618263d6c04d1d7c5be5ac4a333c47a0eaa823f6231b4ade1a1c40f5784b99eb576d25853597bff2f
  languageName: node
  linkType: hard

"pug-parser@npm:^6.0.0":
  version: 6.0.0
  resolution: "pug-parser@npm:6.0.0"
  dependencies:
    pug-error: ^2.0.0
    token-stream: 1.0.0
  checksum: a6954d1383601233ec9d58e8fb22339f4809cf938272db16c551d8574566f388af3bf5560ec95ad5e23902bc358e6fa857409e840de4ed1ff5120a1dd6892cca
  languageName: node
  linkType: hard

"pug-runtime@npm:^3.0.0, pug-runtime@npm:^3.0.1":
  version: 3.0.1
  resolution: "pug-runtime@npm:3.0.1"
  checksum: 48a71b587caa08a5bccf9c1164206a34067edc1d13c2164bebad2dc562b529317578f889a0c41f0e16ddab3853c599696ff29a085f2d4554b783228f0002c41b
  languageName: node
  linkType: hard

"pug-strip-comments@npm:^2.0.0":
  version: 2.0.0
  resolution: "pug-strip-comments@npm:2.0.0"
  dependencies:
    pug-error: ^2.0.0
  checksum: 2cfcbf506c14bb3e64204a1d93f12ca61658d2540475b0f0911c35531ad28421e8d1e73a646d841d58cfa2c20f8593c52e492dfe5b6bec968e20b614e4dea1e4
  languageName: node
  linkType: hard

"pug-walk@npm:^2.0.0":
  version: 2.0.0
  resolution: "pug-walk@npm:2.0.0"
  checksum: bee64e133b711e1ed58022c0869b59e62f9f3ebb7084293857f074120b3cb588e7b8f74c4566426bf2b26dc1ec176ca6b64a2d1e53782f3fbbe039c5d4816638
  languageName: node
  linkType: hard

"pug@npm:^3.0.2":
  version: 3.0.2
  resolution: "pug@npm:3.0.2"
  dependencies:
    pug-code-gen: ^3.0.2
    pug-filters: ^4.0.0
    pug-lexer: ^5.0.1
    pug-linker: ^4.0.0
    pug-load: ^3.0.0
    pug-parser: ^6.0.0
    pug-runtime: ^3.0.1
    pug-strip-comments: ^2.0.0
  checksum: 3e1a3d48897c0c7dedd4f959ce8afaf6417a63756b149e1b5382bef16de5792ec7c7ae6a7d41641059cb149520f20b0d1ecf57014c0661526e96f0bad88541e5
  languageName: node
  linkType: hard

"pump@npm:^3.0.0":
  version: 3.0.0
  resolution: "pump@npm:3.0.0"
  dependencies:
    end-of-stream: ^1.1.0
    once: ^1.3.1
  checksum: e42e9229fba14732593a718b04cb5e1cfef8254544870997e0ecd9732b189a48e1256e4e5478148ecb47c8511dca2b09eae56b4d0aad8009e6fac8072923cfc9
  languageName: node
  linkType: hard

"punycode@npm:^2.1.0, punycode@npm:^2.1.1":
  version: 2.1.1
  resolution: "punycode@npm:2.1.1"
  checksum: 823bf443c6dd14f669984dea25757b37993f67e8d94698996064035edd43bed8a5a17a9f12e439c2b35df1078c6bec05a6c86e336209eb1061e8025c481168e8
  languageName: node
  linkType: hard

"qs@npm:~6.5.2":
  version: 6.5.3
  resolution: "qs@npm:6.5.3"
  checksum: 6f20bf08cabd90c458e50855559539a28d00b2f2e7dddcb66082b16a43188418cb3cb77cbd09268bcef6022935650f0534357b8af9eeb29bf0f27ccb17655692
  languageName: node
  linkType: hard

"queue-microtask@npm:^1.2.2":
  version: 1.2.3
  resolution: "queue-microtask@npm:1.2.3"
  checksum: b676f8c040cdc5b12723ad2f91414d267605b26419d5c821ff03befa817ddd10e238d22b25d604920340fd73efd8ba795465a0377c4adf45a4a41e4234e42dc4
  languageName: node
  linkType: hard

"quick-lru@npm:^5.1.1":
  version: 5.1.1
  resolution: "quick-lru@npm:5.1.1"
  checksum: a516faa25574be7947969883e6068dbe4aa19e8ef8e8e0fd96cddd6d36485e9106d85c0041a27153286b0770b381328f4072aa40d3b18a19f5f7d2b78b94b5ed
  languageName: node
  linkType: hard

"react-is@npm:^17.0.1":
  version: 17.0.2
  resolution: "react-is@npm:17.0.2"
  checksum: 9d6d111d8990dc98bc5402c1266a808b0459b5d54830bbea24c12d908b536df7883f268a7868cfaedde3dd9d4e0d574db456f84d2e6df9c4526f99bb4b5344d8
  languageName: node
  linkType: hard

"readable-stream@npm:^3.6.0":
  version: 3.6.0
  resolution: "readable-stream@npm:3.6.0"
  dependencies:
    inherits: ^2.0.3
    string_decoder: ^1.1.1
    util-deprecate: ^1.0.1
  checksum: d4ea81502d3799439bb955a3a5d1d808592cf3133350ed352aeaa499647858b27b1c4013984900238b0873ec8d0d8defce72469fb7a83e61d53f5ad61cb80dc8
  languageName: node
  linkType: hard

"readdirp@npm:~3.6.0":
  version: 3.6.0
  resolution: "readdirp@npm:3.6.0"
  dependencies:
    picomatch: ^2.2.1
  checksum: 1ced032e6e45670b6d7352d71d21ce7edf7b9b928494dcaba6f11fba63180d9da6cd7061ebc34175ffda6ff529f481818c962952004d273178acd70f7059b320
  languageName: node
  linkType: hard

"recrawl-sync@npm:^2.0.3":
  version: 2.2.2
  resolution: "recrawl-sync@npm:2.2.2"
  dependencies:
    "@cush/relative": ^1.0.0
    glob-regex: ^0.3.0
    slash: ^3.0.0
    tslib: ^1.9.3
  checksum: ee0a3fdbb6c4fa7124a93ef13b87f69f9a4e7bdd0be157ca98e1951ae8d1a7bbee2ebc25de6946b0b53426f804c712ff32f6c93b916b719e865c90233386a126
  languageName: node
  linkType: hard

"regexp.prototype.flags@npm:^1.3.0, regexp.prototype.flags@npm:^1.4.1":
  version: 1.4.3
  resolution: "regexp.prototype.flags@npm:1.4.3"
  dependencies:
    call-bind: ^1.0.2
    define-properties: ^1.1.3
    functions-have-names: ^1.2.2
  checksum: 51228bae732592adb3ededd5e15426be25f289e9c4ef15212f4da73f4ec3919b6140806374b8894036a86020d054a8d2657d3fee6bb9b4d35d8939c20030b7a6
  languageName: node
  linkType: hard

"regexpp@npm:^3.2.0":
  version: 3.2.0
  resolution: "regexpp@npm:3.2.0"
  checksum: a78dc5c7158ad9ddcfe01aa9144f46e192ddbfa7b263895a70a5c6c73edd9ce85faf7c0430e59ac38839e1734e275b9c3de5c57ee3ab6edc0e0b1bdebefccef8
  languageName: node
  linkType: hard

"request-progress@npm:^3.0.0":
  version: 3.0.0
  resolution: "request-progress@npm:3.0.0"
  dependencies:
    throttleit: ^1.0.0
  checksum: 6ea1761dcc8a8b7b5894afd478c0286aa31bd69438d7050294bd4fd0d0b3e09b5cde417d38deef9c49809039c337d8744e4bb49d8632b0c3e4ffa5e8a687e0fd
  languageName: node
  linkType: hard

"resolve-from@npm:^4.0.0":
  version: 4.0.0
  resolution: "resolve-from@npm:4.0.0"
  checksum: f4ba0b8494846a5066328ad33ef8ac173801a51739eb4d63408c847da9a2e1c1de1e6cbbf72699211f3d13f8fc1325648b169bd15eb7da35688e30a5fb0e4a7f
  languageName: node
  linkType: hard

"resolve@npm:^1.15.1, resolve@npm:^1.22.0":
  version: 1.22.0
  resolution: "resolve@npm:1.22.0"
  dependencies:
    is-core-module: ^2.8.1
    path-parse: ^1.0.7
    supports-preserve-symlinks-flag: ^1.0.0
  bin:
    resolve: bin/resolve
  checksum: a2d14cc437b3a23996f8c7367eee5c7cf8149c586b07ca2ae00e96581ce59455555a1190be9aa92154785cf9f2042646c200d0e00e0bbd2b8a995a93a0ed3e4e
  languageName: node
  linkType: hard

"resolve@patch:resolve@^1.15.1#~builtin<compat/resolve>, resolve@patch:resolve@^1.22.0#~builtin<compat/resolve>":
  version: 1.22.0
  resolution: "resolve@patch:resolve@npm%3A1.22.0#~builtin<compat/resolve>::version=1.22.0&hash=07638b"
  dependencies:
    is-core-module: ^2.8.1
    path-parse: ^1.0.7
    supports-preserve-symlinks-flag: ^1.0.0
  bin:
    resolve: bin/resolve
  checksum: c79ecaea36c872ee4a79e3db0d3d4160b593f2ca16e031d8283735acd01715a203607e9ded3f91f68899c2937fa0d49390cddbe0fb2852629212f3cda283f4a7
  languageName: node
  linkType: hard

"restore-cursor@npm:^3.1.0":
  version: 3.1.0
  resolution: "restore-cursor@npm:3.1.0"
  dependencies:
    onetime: ^5.1.0
    signal-exit: ^3.0.2
  checksum: f877dd8741796b909f2a82454ec111afb84eb45890eb49ac947d87991379406b3b83ff9673a46012fca0d7844bb989f45cc5b788254cf1a39b6b5a9659de0630
  languageName: node
  linkType: hard

"retry@npm:^0.12.0":
  version: 0.12.0
  resolution: "retry@npm:0.12.0"
  checksum: 623bd7d2e5119467ba66202d733ec3c2e2e26568074923bc0585b6b99db14f357e79bdedb63cab56cec47491c4a0da7e6021a7465ca6dc4f481d3898fdd3158c
  languageName: node
  linkType: hard

"reusify@npm:^1.0.4":
  version: 1.0.4
  resolution: "reusify@npm:1.0.4"
  checksum: c3076ebcc22a6bc252cb0b9c77561795256c22b757f40c0d8110b1300723f15ec0fc8685e8d4ea6d7666f36c79ccc793b1939c748bf36f18f542744a4e379fcc
  languageName: node
  linkType: hard

"rfdc@npm:^1.3.0":
  version: 1.3.0
  resolution: "rfdc@npm:1.3.0"
  checksum: fb2ba8512e43519983b4c61bd3fa77c0f410eff6bae68b08614437bc3f35f91362215f7b4a73cbda6f67330b5746ce07db5dd9850ad3edc91271ad6deea0df32
  languageName: node
  linkType: hard

"rimraf@npm:^3.0.0, rimraf@npm:^3.0.2":
  version: 3.0.2
  resolution: "rimraf@npm:3.0.2"
  dependencies:
    glob: ^7.1.3
  bin:
    rimraf: bin.js
  checksum: 87f4164e396f0171b0a3386cc1877a817f572148ee13a7e113b238e48e8a9f2f31d009a92ec38a591ff1567d9662c6b67fd8818a2dbbaed74bc26a87a2a4a9a0
  languageName: node
  linkType: hard

"rollup@npm:^2.59.0":
  version: 2.72.0
  resolution: "rollup@npm:2.72.0"
  dependencies:
    fsevents: ~2.3.2
  dependenciesMeta:
    fsevents:
      optional: true
  bin:
    rollup: dist/bin/rollup
  checksum: d4c213d4250a0455e0ee40664db3339a9e3ca5affa09c348019b4895e7100cdbedeba881a239a7a80c407b4055dca4e97d10a740d99c09b17651efbfedd61a4b
  languageName: node
  linkType: hard

"run-parallel@npm:^1.1.9":
  version: 1.2.0
  resolution: "run-parallel@npm:1.2.0"
  dependencies:
    queue-microtask: ^1.2.2
  checksum: cb4f97ad25a75ebc11a8ef4e33bb962f8af8516bb2001082ceabd8902e15b98f4b84b4f8a9b222e5d57fc3bd1379c483886ed4619367a7680dad65316993021d
  languageName: node
  linkType: hard

"rxjs@npm:^7.1.0, rxjs@npm:^7.5.1":
  version: 7.5.5
  resolution: "rxjs@npm:7.5.5"
  dependencies:
    tslib: ^2.1.0
  checksum: e034f60805210cce756dd2f49664a8108780b117cf5d0e2281506e9e6387f7b4f1532d974a8c8b09314fa7a16dd2f6cff3462072a5789672b5dcb45c4173f3c6
  languageName: node
  linkType: hard

"safe-buffer@npm:^5.0.1, safe-buffer@npm:^5.1.2, safe-buffer@npm:~5.2.0":
  version: 5.2.1
  resolution: "safe-buffer@npm:5.2.1"
  checksum: b99c4b41fdd67a6aaf280fcd05e9ffb0813654894223afb78a31f14a19ad220bba8aba1cb14eddce1fcfb037155fe6de4e861784eb434f7d11ed58d1e70dd491
  languageName: node
  linkType: hard

"safe-buffer@npm:~5.1.1":
  version: 5.1.2
  resolution: "safe-buffer@npm:5.1.2"
  checksum: f2f1f7943ca44a594893a852894055cf619c1fbcb611237fc39e461ae751187e7baf4dc391a72125e0ac4fb2d8c5c0b3c71529622e6a58f46b960211e704903c
  languageName: node
  linkType: hard

"safer-buffer@npm:>= 2.1.2 < 3.0.0, safer-buffer@npm:^2.0.2, safer-buffer@npm:^2.1.0, safer-buffer@npm:~2.1.0":
  version: 2.1.2
  resolution: "safer-buffer@npm:2.1.2"
  checksum: cab8f25ae6f1434abee8d80023d7e72b598cf1327164ddab31003c51215526801e40b66c5e65d658a0af1e9d6478cadcb4c745f4bd6751f97d8644786c0978b0
  languageName: node
  linkType: hard

"sass@npm:^1.51.0":
  version: 1.51.0
  resolution: "sass@npm:1.51.0"
  dependencies:
    chokidar: ">=3.0.0 <4.0.0"
    immutable: ^4.0.0
    source-map-js: ">=0.6.2 <2.0.0"
  bin:
    sass: sass.js
  checksum: d674fd87be863961d5e5233a148e381a72b06ca1749ffd95a08be2c3f4aa8fc77e3e21840347a84d7d4542cbf97cd6f9bfae19ecb1f5eefa6c207a3d8f923dbc
  languageName: node
  linkType: hard

"saxes@npm:^5.0.1":
  version: 5.0.1
  resolution: "saxes@npm:5.0.1"
  dependencies:
    xmlchars: ^2.2.0
  checksum: 5636b55cf15f7cf0baa73f2797bf992bdcf75d1b39d82c0aa4608555c774368f6ac321cb641fd5f3d3ceb87805122cd47540da6a7b5960fe0dbdb8f8c263f000
  languageName: node
  linkType: hard

"scule@npm:^0.2.1":
  version: 0.2.1
  resolution: "scule@npm:0.2.1"
  checksum: d9731b4c3560ce6983d23cc594395b718bc3c08ea3da930a9cd2bd3feb137ad3295521bcbc50baa82dc05d8521a7a41d6b78d2723e5195c053d93359f5808706
  languageName: node
  linkType: hard

"seemly@npm:^0.3.1, seemly@npm:^0.3.3":
  version: 0.3.3
  resolution: "seemly@npm:0.3.3"
  dependencies:
    "@types/jest": ^27.0.1
  checksum: b6445553f8e7b19310a5ea0240c80981aa669a6826e1ddbd62449cb1119236913607f6874759247bb6de8e22f3db966b5a498b5e8ac7682e42035951125fbea4
  languageName: node
  linkType: hard

"semver@npm:^6.3.0":
  version: 6.3.0
  resolution: "semver@npm:6.3.0"
  bin:
    semver: ./bin/semver.js
  checksum: 1b26ecf6db9e8292dd90df4e781d91875c0dcc1b1909e70f5d12959a23c7eebb8f01ea581c00783bbee72ceeaad9505797c381756326073850dc36ed284b21b9
  languageName: node
  linkType: hard

"semver@npm:^7.3.2, semver@npm:^7.3.5, semver@npm:^7.3.6, semver@npm:^7.3.7":
  version: 7.3.7
  resolution: "semver@npm:7.3.7"
  dependencies:
    lru-cache: ^6.0.0
  bin:
    semver: bin/semver.js
  checksum: 2fa3e877568cd6ce769c75c211beaed1f9fce80b28338cadd9d0b6c40f2e2862bafd62c19a6cff42f3d54292b7c623277bcab8816a2b5521cf15210d43e75232
  languageName: node
  linkType: hard

"set-blocking@npm:^2.0.0":
  version: 2.0.0
  resolution: "set-blocking@npm:2.0.0"
  checksum: 6e65a05f7cf7ebdf8b7c75b101e18c0b7e3dff4940d480efed8aad3a36a4005140b660fa1d804cb8bce911cac290441dc728084a30504d3516ac2ff7ad607b02
  languageName: node
  linkType: hard

"shebang-command@npm:^2.0.0":
  version: 2.0.0
  resolution: "shebang-command@npm:2.0.0"
  dependencies:
    shebang-regex: ^3.0.0
  checksum: 6b52fe87271c12968f6a054e60f6bde5f0f3d2db483a1e5c3e12d657c488a15474121a1d55cd958f6df026a54374ec38a4a963988c213b7570e1d51575cea7fa
  languageName: node
  linkType: hard

"shebang-regex@npm:^3.0.0":
  version: 3.0.0
  resolution: "shebang-regex@npm:3.0.0"
  checksum: 1a2bcae50de99034fcd92ad4212d8e01eedf52c7ec7830eedcf886622804fe36884278f2be8be0ea5fde3fd1c23911643a4e0f726c8685b61871c8908af01222
  languageName: node
  linkType: hard

"side-channel@npm:^1.0.3, side-channel@npm:^1.0.4":
  version: 1.0.4
  resolution: "side-channel@npm:1.0.4"
  dependencies:
    call-bind: ^1.0.0
    get-intrinsic: ^1.0.2
    object-inspect: ^1.9.0
  checksum: 351e41b947079c10bd0858364f32bb3a7379514c399edb64ab3dce683933483fc63fb5e4efe0a15a2e8a7e3c436b6a91736ddb8d8c6591b0460a24bb4a1ee245
  languageName: node
  linkType: hard

"signal-exit@npm:^3.0.2, signal-exit@npm:^3.0.3, signal-exit@npm:^3.0.7":
  version: 3.0.7
  resolution: "signal-exit@npm:3.0.7"
  checksum: a2f098f247adc367dffc27845853e9959b9e88b01cb301658cfe4194352d8d2bb32e18467c786a7fe15f1d44b233ea35633d076d5e737870b7139949d1ab6318
  languageName: node
  linkType: hard

"sirv@npm:^2.0.2":
  version: 2.0.2
  resolution: "sirv@npm:2.0.2"
  dependencies:
    "@polka/url": ^1.0.0-next.20
    mrmime: ^1.0.0
    totalist: ^3.0.0
  checksum: 6982f8ecee9392d246d7eeea8144e50334fe1b46a4fa942995a844ea88c2d518b17cce781bb09926c9a5692a7002a207d18dfd67af2aa538a15e733dc2042298
  languageName: node
  linkType: hard

"slash@npm:^3.0.0":
  version: 3.0.0
  resolution: "slash@npm:3.0.0"
  checksum: 94a93fff615f25a999ad4b83c9d5e257a7280c90a32a7cb8b4a87996e4babf322e469c42b7f649fd5796edd8687652f3fb452a86dc97a816f01113183393f11c
  languageName: node
  linkType: hard

"slice-ansi@npm:^3.0.0":
  version: 3.0.0
  resolution: "slice-ansi@npm:3.0.0"
  dependencies:
    ansi-styles: ^4.0.0
    astral-regex: ^2.0.0
    is-fullwidth-code-point: ^3.0.0
  checksum: 5ec6d022d12e016347e9e3e98a7eb2a592213a43a65f1b61b74d2c78288da0aded781f665807a9f3876b9daa9ad94f64f77d7633a0458876c3a4fdc4eb223f24
  languageName: node
  linkType: hard

"slice-ansi@npm:^4.0.0":
  version: 4.0.0
  resolution: "slice-ansi@npm:4.0.0"
  dependencies:
    ansi-styles: ^4.0.0
    astral-regex: ^2.0.0
    is-fullwidth-code-point: ^3.0.0
  checksum: 4a82d7f085b0e1b070e004941ada3c40d3818563ac44766cca4ceadd2080427d337554f9f99a13aaeb3b4a94d9964d9466c807b3d7b7541d1ec37ee32d308756
  languageName: node
  linkType: hard

"smart-buffer@npm:^4.2.0":
  version: 4.2.0
  resolution: "smart-buffer@npm:4.2.0"
  checksum: b5167a7142c1da704c0e3af85c402002b597081dd9575031a90b4f229ca5678e9a36e8a374f1814c8156a725d17008ae3bde63b92f9cfd132526379e580bec8b
  languageName: node
  linkType: hard

"socks-proxy-agent@npm:^6.1.1":
  version: 6.2.0
  resolution: "socks-proxy-agent@npm:6.2.0"
  dependencies:
    agent-base: ^6.0.2
    debug: ^4.3.3
    socks: ^2.6.2
  checksum: 6723fd64fb50334e2b340fd0a80fd8488ffc5bc43d85b7cf1d25612044f814dd7d6ea417fd47602159941236f7f4bd15669fa5d7e1f852598a31288e1a43967b
  languageName: node
  linkType: hard

"socks@npm:^2.6.2":
  version: 2.6.2
  resolution: "socks@npm:2.6.2"
  dependencies:
    ip: ^1.1.5
    smart-buffer: ^4.2.0
  checksum: dd9194293059d737759d5c69273850ad4149f448426249325c4bea0e340d1cf3d266c3b022694b0dcf5d31f759de23657244c481fc1e8322add80b7985c36b5e
  languageName: node
  linkType: hard

"source-map-js@npm:>=0.6.2 <2.0.0, source-map-js@npm:^1.0.2":
  version: 1.0.2
  resolution: "source-map-js@npm:1.0.2"
  checksum: c049a7fc4deb9a7e9b481ae3d424cc793cb4845daa690bc5a05d428bf41bf231ced49b4cf0c9e77f9d42fdb3d20d6187619fc586605f5eabe995a316da8d377c
  languageName: node
  linkType: hard

"source-map@npm:^0.5.0":
  version: 0.5.7
  resolution: "source-map@npm:0.5.7"
  checksum: 5dc2043b93d2f194142c7f38f74a24670cd7a0063acdaf4bf01d2964b402257ae843c2a8fa822ad5b71013b5fcafa55af7421383da919752f22ff488bc553f4d
  languageName: node
  linkType: hard

"source-map@npm:^0.6.1, source-map@npm:~0.6.1":
  version: 0.6.1
  resolution: "source-map@npm:0.6.1"
  checksum: 59ce8640cf3f3124f64ac289012c2b8bd377c238e316fb323ea22fbfe83da07d81e000071d7242cad7a23cd91c7de98e4df8830ec3f133cb6133a5f6e9f67bc2
  languageName: node
  linkType: hard

"sourcemap-codec@npm:^1.4.8":
  version: 1.4.8
  resolution: "sourcemap-codec@npm:1.4.8"
  checksum: b57981c05611afef31605732b598ccf65124a9fcb03b833532659ac4d29ac0f7bfacbc0d6c5a28a03e84c7510e7e556d758d0bb57786e214660016fb94279316
  languageName: node
  linkType: hard

"split@npm:0.3":
  version: 0.3.3
  resolution: "split@npm:0.3.3"
  dependencies:
    through: 2
  checksum: 2e076634c9637cfdc54ab4387b6a243b8c33b360874a25adf6f327a5647f07cb3bf1c755d515248eb3afee4e382278d01f62c62d87263c118f28065b86f74f02
  languageName: node
  linkType: hard

"sshpk@npm:^1.14.1":
  version: 1.17.0
  resolution: "sshpk@npm:1.17.0"
  dependencies:
    asn1: ~0.2.3
    assert-plus: ^1.0.0
    bcrypt-pbkdf: ^1.0.0
    dashdash: ^1.12.0
    ecc-jsbn: ~0.1.1
    getpass: ^0.1.1
    jsbn: ~0.1.0
    safer-buffer: ^2.0.2
    tweetnacl: ~0.14.0
  bin:
    sshpk-conv: bin/sshpk-conv
    sshpk-sign: bin/sshpk-sign
    sshpk-verify: bin/sshpk-verify
  checksum: ba109f65c8e6c35133b8e6ed5576abeff8aa8d614824b7275ec3ca308f081fef483607c28d97780c1e235818b0f93ed8c8b56d0a5968d5a23fd6af57718c7597
  languageName: node
  linkType: hard

"ssri@npm:^9.0.0":
  version: 9.0.0
  resolution: "ssri@npm:9.0.0"
  dependencies:
    minipass: ^3.1.1
  checksum: bf33174232d07cc64e77ab1c51b55d28352273380c503d35642a19627e88a2c5f160039bb0a28608a353485075dda084dbf0390c7070f9f284559eb71d01b84b
  languageName: node
  linkType: hard

"start-server-and-test@npm:^1.14.0":
  version: 1.14.0
  resolution: "start-server-and-test@npm:1.14.0"
  dependencies:
    bluebird: 3.7.2
    check-more-types: 2.24.0
    debug: 4.3.2
    execa: 5.1.1
    lazy-ass: 1.6.0
    ps-tree: 1.2.0
    wait-on: 6.0.0
  bin:
    server-test: src/bin/start.js
    start-server-and-test: src/bin/start.js
    start-test: src/bin/start.js
  checksum: 8437f5fc39bb47dd684b94023bab654703abc4890d08f005c3d86df620b2cdaac03f6e3bb21792a93209f1a70c8bb500d82fe4025a356da45fc060f2a80374e1
  languageName: node
  linkType: hard

"stream-combiner@npm:~0.0.4":
  version: 0.0.4
  resolution: "stream-combiner@npm:0.0.4"
  dependencies:
    duplexer: ~0.1.1
  checksum: 844b622cfe8b9de45a6007404f613b60aaf85200ab9862299066204242f89a7c8033b1c356c998aa6cfc630f6cd9eba119ec1c6dc1f93e245982be4a847aee7d
  languageName: node
  linkType: hard

"string-width@npm:^1.0.2 || 2 || 3 || 4, string-width@npm:^4.1.0, string-width@npm:^4.2.0, string-width@npm:^4.2.3":
  version: 4.2.3
  resolution: "string-width@npm:4.2.3"
  dependencies:
    emoji-regex: ^8.0.0
    is-fullwidth-code-point: ^3.0.0
    strip-ansi: ^6.0.1
  checksum: e52c10dc3fbfcd6c3a15f159f54a90024241d0f149cf8aed2982a2d801d2e64df0bf1dc351cf8e95c3319323f9f220c16e740b06faecd53e2462df1d2b5443fb
  languageName: node
  linkType: hard

"string.prototype.trimend@npm:^1.0.5":
  version: 1.0.5
  resolution: "string.prototype.trimend@npm:1.0.5"
  dependencies:
    call-bind: ^1.0.2
    define-properties: ^1.1.4
    es-abstract: ^1.19.5
  checksum: d44f543833112f57224e79182debadc9f4f3bf9d48a0414d6f0cbd2a86f2b3e8c0ca1f95c3f8e5b32ae83e91554d79d932fc746b411895f03f93d89ed3dfb6bc
  languageName: node
  linkType: hard

"string.prototype.trimstart@npm:^1.0.5":
  version: 1.0.5
  resolution: "string.prototype.trimstart@npm:1.0.5"
  dependencies:
    call-bind: ^1.0.2
    define-properties: ^1.1.4
    es-abstract: ^1.19.5
  checksum: a4857c5399ad709d159a77371eeaa8f9cc284469a0b5e1bfe405de16f1fd4166a8ea6f4180e55032f348d1b679b1599fd4301fbc7a8b72bdb3e795e43f7b1048
  languageName: node
  linkType: hard

"string_decoder@npm:^1.1.1":
  version: 1.3.0
  resolution: "string_decoder@npm:1.3.0"
  dependencies:
    safe-buffer: ~5.2.0
  checksum: 8417646695a66e73aefc4420eb3b84cc9ffd89572861fe004e6aeb13c7bc00e2f616247505d2dbbef24247c372f70268f594af7126f43548565c68c117bdeb56
  languageName: node
  linkType: hard

"strip-ansi@npm:^6.0.0, strip-ansi@npm:^6.0.1":
  version: 6.0.1
  resolution: "strip-ansi@npm:6.0.1"
  dependencies:
    ansi-regex: ^5.0.1
  checksum: f3cd25890aef3ba6e1a74e20896c21a46f482e93df4a06567cebf2b57edabb15133f1f94e57434e0a958d61186087b1008e89c94875d019910a213181a14fc8c
  languageName: node
  linkType: hard

"strip-bom@npm:^3.0.0":
  version: 3.0.0
  resolution: "strip-bom@npm:3.0.0"
  checksum: 8d50ff27b7ebe5ecc78f1fe1e00fcdff7af014e73cf724b46fb81ef889eeb1015fc5184b64e81a2efe002180f3ba431bdd77e300da5c6685d702780fbf0c8d5b
  languageName: node
  linkType: hard

"strip-final-newline@npm:^2.0.0":
  version: 2.0.0
  resolution: "strip-final-newline@npm:2.0.0"
  checksum: 69412b5e25731e1938184b5d489c32e340605bb611d6140344abc3421b7f3c6f9984b21dff296dfcf056681b82caa3bb4cc996a965ce37bcfad663e92eae9c64
  languageName: node
  linkType: hard

"strip-json-comments@npm:^3.1.0, strip-json-comments@npm:^3.1.1":
  version: 3.1.1
  resolution: "strip-json-comments@npm:3.1.1"
  checksum: 492f73e27268f9b1c122733f28ecb0e7e8d8a531a6662efbd08e22cccb3f9475e90a1b82cab06a392f6afae6d2de636f977e231296400d0ec5304ba70f166443
  languageName: node
  linkType: hard

"strip-literal@npm:^0.3.0":
  version: 0.3.0
  resolution: "strip-literal@npm:0.3.0"
  dependencies:
    acorn: ^8.7.1
  checksum: efa3b393275395051003c20471e3df99821e18f547eb92617fb41f3644c299d23658c7bbc7140ad11090ee0f05ba81f54deee5d690bb2dd1fb2f2556696bfb48
  languageName: node
  linkType: hard

"supports-color@npm:^5.3.0":
  version: 5.5.0
  resolution: "supports-color@npm:5.5.0"
  dependencies:
    has-flag: ^3.0.0
  checksum: 95f6f4ba5afdf92f495b5a912d4abee8dcba766ae719b975c56c084f5004845f6f5a5f7769f52d53f40e21952a6d87411bafe34af4a01e65f9926002e38e1dac
  languageName: node
  linkType: hard

"supports-color@npm:^7.1.0":
  version: 7.2.0
  resolution: "supports-color@npm:7.2.0"
  dependencies:
    has-flag: ^4.0.0
  checksum: 3dda818de06ebbe5b9653e07842d9479f3555ebc77e9a0280caf5a14fb877ffee9ed57007c3b78f5a6324b8dbeec648d9e97a24e2ed9fdb81ddc69ea07100f4a
  languageName: node
  linkType: hard

"supports-color@npm:^8.1.1":
  version: 8.1.1
  resolution: "supports-color@npm:8.1.1"
  dependencies:
    has-flag: ^4.0.0
  checksum: c052193a7e43c6cdc741eb7f378df605636e01ad434badf7324f17fb60c69a880d8d8fcdcb562cf94c2350e57b937d7425ab5b8326c67c2adc48f7c87c1db406
  languageName: node
  linkType: hard

"supports-preserve-symlinks-flag@npm:^1.0.0":
  version: 1.0.0
  resolution: "supports-preserve-symlinks-flag@npm:1.0.0"
  checksum: 53b1e247e68e05db7b3808b99b892bd36fb096e6fba213a06da7fab22045e97597db425c724f2bbd6c99a3c295e1e73f3e4de78592289f38431049e1277ca0ae
  languageName: node
  linkType: hard

"svg-path-parser@npm:^1.1.0":
  version: 1.1.0
  resolution: "svg-path-parser@npm:1.1.0"
  checksum: bab42996b17151ee7ec40d199fa980f58492b1d662297a017eea1f5f85a0e3bbb78cdc0620bbd37d4fff7146854ef0c9ddbba7143a2fe58e1bd1e6accf48c613
  languageName: node
  linkType: hard

"symbol-tree@npm:^3.2.4":
  version: 3.2.4
  resolution: "symbol-tree@npm:3.2.4"
  checksum: 6e8fc7e1486b8b54bea91199d9535bb72f10842e40c79e882fc94fb7b14b89866adf2fd79efa5ebb5b658bc07fb459ccce5ac0e99ef3d72f474e74aaf284029d
  languageName: node
  linkType: hard

"tailwindcss@npm:^3.0.24":
  version: 3.0.24
  resolution: "tailwindcss@npm:3.0.24"
  dependencies:
    arg: ^5.0.1
    chokidar: ^3.5.3
    color-name: ^1.1.4
    detective: ^5.2.0
    didyoumean: ^1.2.2
    dlv: ^1.1.3
    fast-glob: ^3.2.11
    glob-parent: ^6.0.2
    is-glob: ^4.0.3
    lilconfig: ^2.0.5
    normalize-path: ^3.0.0
    object-hash: ^3.0.0
    picocolors: ^1.0.0
    postcss: ^8.4.12
    postcss-js: ^4.0.0
    postcss-load-config: ^3.1.4
    postcss-nested: 5.0.6
    postcss-selector-parser: ^6.0.10
    postcss-value-parser: ^4.2.0
    quick-lru: ^5.1.1
    resolve: ^1.22.0
  peerDependencies:
    postcss: ^8.0.9
  bin:
    tailwind: lib/cli.js
    tailwindcss: lib/cli.js
  checksum: 52a21192b70ab90678d6cec24ca6f93b3a396599e2d842f6077b670be14e577b1e3fbae8776e64505d383118746287353ed99d2a047258254f4ce3879b996b58
  languageName: node
  linkType: hard

"tar@npm:^6.1.11, tar@npm:^6.1.2":
  version: 6.1.11
  resolution: "tar@npm:6.1.11"
  dependencies:
    chownr: ^2.0.0
    fs-minipass: ^2.0.0
    minipass: ^3.0.0
    minizlib: ^2.1.1
    mkdirp: ^1.0.3
    yallist: ^4.0.0
  checksum: a04c07bb9e2d8f46776517d4618f2406fb977a74d914ad98b264fc3db0fe8224da5bec11e5f8902c5b9bcb8ace22d95fbe3c7b36b8593b7dfc8391a25898f32f
  languageName: node
  linkType: hard

"text-table@npm:^0.2.0":
  version: 0.2.0
  resolution: "text-table@npm:0.2.0"
  checksum: b6937a38c80c7f84d9c11dd75e49d5c44f71d95e810a3250bd1f1797fc7117c57698204adf676b71497acc205d769d65c16ae8fa10afad832ae1322630aef10a
  languageName: node
  linkType: hard

"throttleit@npm:^1.0.0":
  version: 1.0.0
  resolution: "throttleit@npm:1.0.0"
  checksum: 1b2db4d2454202d589e8236c07a69d2fab838876d370030ebea237c34c0a7d1d9cf11c29f994531ebb00efd31e9728291042b7754f2798a8352ec4463455b659
  languageName: node
  linkType: hard

"through@npm:2, through@npm:^2.3.8, through@npm:~2.3, through@npm:~2.3.1":
  version: 2.3.8
  resolution: "through@npm:2.3.8"
  checksum: a38c3e059853c494af95d50c072b83f8b676a9ba2818dcc5b108ef252230735c54e0185437618596c790bbba8fcdaef5b290405981ffa09dce67b1f1bf190cbd
  languageName: node
  linkType: hard

"timonlukas.github.io@workspace:.":
  version: 0.0.0-use.local
  resolution: "timonlukas.github.io@workspace:."
  dependencies:
    "@iconify-json/feather": ^1.1.1
    "@iconify-json/vscode-icons": ^1.1.6
    "@prettier/plugin-pug": ^2.0.0
    "@rushstack/eslint-patch": ^1.1.0
    "@swan-io/boxed": ^0.9.0
    "@tailwindcss/forms": ^0.5.1
    "@tailwindcss/typography": ^0.5.2
    "@trivago/prettier-plugin-sort-imports": ^3.2.0
    "@types/chroma-js": ^2
    "@types/glob": ^7.2.0
    "@types/jsdom": ^16.2.14
    "@types/lodash": ^4
    "@types/marked": ^4
    "@types/node": ^16.11.26
    "@types/offscreencanvas": ^2019.7.0
    "@types/prettier": ^2.6.3
    "@types/prismjs": ^1
    "@types/svg-path-parser": ^1
    "@types/ungap__structured-clone": ^0.3.0
    "@types/uuid": ^8
    "@types/vue": ^2.0.0
    "@typescript-eslint/eslint-plugin": ^5.27.1
    "@typescript-eslint/parser": ^5.27.1
    "@ungap/structured-clone": ^1.0.1
    "@vitejs/plugin-vue": ^2.3.1
    "@vue/compiler-sfc": ^3.2.33
    "@vue/eslint-config-prettier": ^7.0.0
    "@vue/eslint-config-typescript": ^10.0.0
    "@vue/runtime-core": ^3.2.33
    "@vue/runtime-dom": ^3.2.33
    "@vue/test-utils": ^2.0.0-rc.18
    "@vue/tsconfig": ^0.1.3
    "@vueuse/core": ^8.4.2
    "@vueuse/router": ^8.5.0
    autoprefixer: ^10.4.7
    chroma-js: ^2.4.2
    comlink: ^4.3.1
    cypress: ^9.5.3
    dynamics.js: ^1.1.5
    eslint: ^8.5.0
    eslint-plugin-cypress: ^2.12.1
    eslint-plugin-vue: ^8.2.0
    glob: ^8.0.3
    iwanthue: ^2.0.0
    jsdom: ^19.0.0
    lodash: ^4.17.21
    marked: ^4.0.17
    mlly: ^0.5.3
    naive-ui: ^2.29.0
    pinia: ^2.0.13
    postcss: ^8.4.13
    prettier: ^2.5.1
    prismjs: ^1.28.0
    pug: ^3.0.2
    sass: ^1.51.0
    start-server-and-test: ^1.14.0
    svg-path-parser: ^1.1.0
    tailwindcss: ^3.0.24
    ts-deepmerge: ^2.0.1
    type-fest: ^2.13.0
    typescript: ~4.6.3
    unplugin-auto-import: ^0.8.7
    unplugin-icons: ^0.14.3
    unplugin-vue-components: ^0.19.6
    uuid: ^8.3.2
    vite: ^2.9.1
    vite-plugin-comlink: ^3.0.3
    vite-plugin-inspect: ^0.5.0
    vite-plugin-pages: ^0.23.0
    vite-plugin-static-copy: ^0.5.0
    vite-tsconfig-paths: ^3.4.1
    vitest: ^0.8.1
    vue: ^3.2.31
    vue-eslint-parser: ^9.0.2
    vue-router: ^4.0.14
    vue-tsc: ^0.33.9
  languageName: unknown
  linkType: soft

"tinypool@npm:^0.1.2":
  version: 0.1.3
  resolution: "tinypool@npm:0.1.3"
  checksum: 13ac687a23c03b02c2bf0b9711a3bb191d2c37941775a001b9617aac541c11ba144fb08de74f3f9723ec2649410f5d4fa7f0398fedd462b39fe3b30d19615ad8
  languageName: node
  linkType: hard

"tinyspy@npm:^0.3.0":
  version: 0.3.2
  resolution: "tinyspy@npm:0.3.2"
  checksum: 674d238c9b879a9d7acee3c30cfbc94334016d15a43b9db2f750aa74f107fa7096821d3866603576ea8efda9f2ec0683ffbd960f83de166f250ed583e68f25b3
  languageName: node
  linkType: hard

"tmp@npm:~0.2.1":
  version: 0.2.1
  resolution: "tmp@npm:0.2.1"
  dependencies:
    rimraf: ^3.0.0
  checksum: 8b1214654182575124498c87ca986ac53dc76ff36e8f0e0b67139a8d221eaecfdec108c0e6ec54d76f49f1f72ab9325500b246f562b926f85bcdfca8bf35df9e
  languageName: node
  linkType: hard

"to-fast-properties@npm:^2.0.0":
  version: 2.0.0
  resolution: "to-fast-properties@npm:2.0.0"
  checksum: be2de62fe58ead94e3e592680052683b1ec986c72d589e7b21e5697f8744cdbf48c266fa72f6c15932894c10187b5f54573a3bcf7da0bfd964d5caf23d436168
  languageName: node
  linkType: hard

"to-regex-range@npm:^5.0.1":
  version: 5.0.1
  resolution: "to-regex-range@npm:5.0.1"
  dependencies:
    is-number: ^7.0.0
  checksum: f76fa01b3d5be85db6a2a143e24df9f60dd047d151062d0ba3df62953f2f697b16fe5dad9b0ac6191c7efc7b1d9dcaa4b768174b7b29da89d4428e64bc0a20ed
  languageName: node
  linkType: hard

"token-stream@npm:1.0.0":
  version: 1.0.0
  resolution: "token-stream@npm:1.0.0"
  checksum: e8adb56f31b813b6157130e7fc2fe14eb60e7cbf7b746e70e8293c7e55664d8e7ad5d93d7ae3aa4cad7fcb2b0aaf59dad6f2fd4ee0269204e55af5b05bc369e2
  languageName: node
  linkType: hard

"totalist@npm:^3.0.0":
  version: 3.0.0
  resolution: "totalist@npm:3.0.0"
  checksum: ec499bddfc73d5b6c73f8ff68afd7bed286705797f928a11177fee5d1ee80e9052ffcb434638437702e16864bd5490f437a54f79bfea9564e875d34ed3254bca
  languageName: node
  linkType: hard

"tough-cookie@npm:^4.0.0":
  version: 4.0.0
  resolution: "tough-cookie@npm:4.0.0"
  dependencies:
    psl: ^1.1.33
    punycode: ^2.1.1
    universalify: ^0.1.2
  checksum: 0891b37eb7d17faa3479d47f0dce2e3007f2583094ad272f2670d120fbcc3df3b0b0a631ba96ecad49f9e2297d93ff8995ce0d3292d08dd7eabe162f5b224d69
  languageName: node
  linkType: hard

"tough-cookie@npm:~2.5.0":
  version: 2.5.0
  resolution: "tough-cookie@npm:2.5.0"
  dependencies:
    psl: ^1.1.28
    punycode: ^2.1.1
  checksum: 16a8cd090224dd176eee23837cbe7573ca0fa297d7e468ab5e1c02d49a4e9a97bb05fef11320605eac516f91d54c57838a25864e8680e27b069a5231d8264977
  languageName: node
  linkType: hard

"tr46@npm:^3.0.0":
  version: 3.0.0
  resolution: "tr46@npm:3.0.0"
  dependencies:
    punycode: ^2.1.1
  checksum: 44c3cc6767fb800490e6e9fd64fd49041aa4e49e1f6a012b34a75de739cc9ed3a6405296072c1df8b6389ae139c5e7c6496f659cfe13a04a4bff3a1422981270
  languageName: node
  linkType: hard

"treemate@npm:^0.3.11":
  version: 0.3.11
  resolution: "treemate@npm:0.3.11"
  checksum: 0c6ccbc6c5ce7faf27f5f48669c4734aa93ba4064a77f1324af02779aab6333986f6b32748aafe8de1ba99da8f8d9a027fe9c7c1d5389b4768edb5fc6a77fca2
  languageName: node
  linkType: hard

"ts-deepmerge@npm:^2.0.1":
  version: 2.0.1
  resolution: "ts-deepmerge@npm:2.0.1"
  checksum: 1d41981364192b521ce375740646ac2e00d7e3815c066624159309d3a2e43100449bc05c56d51938a1e5be444b0ca88ad9ce599fc489719805b9a2e9d4153194
  languageName: node
  linkType: hard

"tsconfig-paths@npm:^3.9.0":
  version: 3.14.1
  resolution: "tsconfig-paths@npm:3.14.1"
  dependencies:
    "@types/json5": ^0.0.29
    json5: ^1.0.1
    minimist: ^1.2.6
    strip-bom: ^3.0.0
  checksum: 8afa01c673ebb4782ba53d3a12df97fa837ce524f8ad38ee4e2b2fd57f5ac79abc21c574e9e9eb014d93efe7fe8214001b96233b5c6ea75bd1ea82afe17a4c6d
  languageName: node
  linkType: hard

"tslib@npm:^1.8.1, tslib@npm:^1.9.3":
  version: 1.14.1
  resolution: "tslib@npm:1.14.1"
  checksum: dbe628ef87f66691d5d2959b3e41b9ca0045c3ee3c7c7b906cc1e328b39f199bb1ad9e671c39025bd56122ac57dfbf7385a94843b1cc07c60a4db74795829acd
  languageName: node
  linkType: hard

"tslib@npm:^2.1.0":
  version: 2.4.0
  resolution: "tslib@npm:2.4.0"
  checksum: 8c4aa6a3c5a754bf76aefc38026134180c053b7bd2f81338cb5e5ebf96fefa0f417bff221592bf801077f5bf990562f6264fecbc42cd3309b33872cb6fc3b113
  languageName: node
  linkType: hard

"tsutils@npm:^3.21.0":
  version: 3.21.0
  resolution: "tsutils@npm:3.21.0"
  dependencies:
    tslib: ^1.8.1
  peerDependencies:
    typescript: ">=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta"
  checksum: 1843f4c1b2e0f975e08c4c21caa4af4f7f65a12ac1b81b3b8489366826259323feb3fc7a243123453d2d1a02314205a7634e048d4a8009921da19f99755cdc48
  languageName: node
  linkType: hard

"tunnel-agent@npm:^0.6.0":
  version: 0.6.0
  resolution: "tunnel-agent@npm:0.6.0"
  dependencies:
    safe-buffer: ^5.0.1
  checksum: 05f6510358f8afc62a057b8b692f05d70c1782b70db86d6a1e0d5e28a32389e52fa6e7707b6c5ecccacc031462e4bc35af85ecfe4bbc341767917b7cf6965711
  languageName: node
  linkType: hard

"tweetnacl@npm:^0.14.3, tweetnacl@npm:~0.14.0":
  version: 0.14.5
  resolution: "tweetnacl@npm:0.14.5"
  checksum: 6061daba1724f59473d99a7bb82e13f211cdf6e31315510ae9656fefd4779851cb927adad90f3b488c8ed77c106adc0421ea8055f6f976ff21b27c5c4e918487
  languageName: node
  linkType: hard

"type-check@npm:^0.4.0, type-check@npm:~0.4.0":
  version: 0.4.0
  resolution: "type-check@npm:0.4.0"
  dependencies:
    prelude-ls: ^1.2.1
  checksum: ec688ebfc9c45d0c30412e41ca9c0cdbd704580eb3a9ccf07b9b576094d7b86a012baebc95681999dd38f4f444afd28504cb3a89f2ef16b31d4ab61a0739025a
  languageName: node
  linkType: hard

"type-check@npm:~0.3.2":
  version: 0.3.2
  resolution: "type-check@npm:0.3.2"
  dependencies:
    prelude-ls: ~1.1.2
  checksum: dd3b1495642731bc0e1fc40abe5e977e0263005551ac83342ecb6f4f89551d106b368ec32ad3fb2da19b3bd7b2d1f64330da2ea9176d8ddbfe389fb286eb5124
  languageName: node
  linkType: hard

"type-detect@npm:^4.0.0, type-detect@npm:^4.0.5":
  version: 4.0.8
  resolution: "type-detect@npm:4.0.8"
  checksum: 62b5628bff67c0eb0b66afa371bd73e230399a8d2ad30d852716efcc4656a7516904570cd8631a49a3ce57c10225adf5d0cbdcb47f6b0255fe6557c453925a15
  languageName: node
  linkType: hard

"type-fest@npm:^0.20.2":
  version: 0.20.2
  resolution: "type-fest@npm:0.20.2"
  checksum: 4fb3272df21ad1c552486f8a2f8e115c09a521ad7a8db3d56d53718d0c907b62c6e9141ba5f584af3f6830d0872c521357e512381f24f7c44acae583ad517d73
  languageName: node
  linkType: hard

"type-fest@npm:^0.21.3":
  version: 0.21.3
  resolution: "type-fest@npm:0.21.3"
  checksum: e6b32a3b3877f04339bae01c193b273c62ba7bfc9e325b8703c4ee1b32dc8fe4ef5dfa54bf78265e069f7667d058e360ae0f37be5af9f153b22382cd55a9afe0
  languageName: node
  linkType: hard

"type-fest@npm:^2.13.0":
  version: 2.13.0
  resolution: "type-fest@npm:2.13.0"
  checksum: 3492384f759fdeaec7eaa07e79f70e777bf825cf8892690642fa9350818df4a8c50fd697fd1239ae7026064af4dd94e4d5eca27e781e0952ff302af0708a2e69
  languageName: node
  linkType: hard

"typescript@npm:~4.6.3":
  version: 4.6.4
  resolution: "typescript@npm:4.6.4"
  bin:
    tsc: bin/tsc
    tsserver: bin/tsserver
  checksum: e7bfcc39cd4571a63a54e5ea21f16b8445268b9900bf55aee0e02ad981be576acc140eba24f1af5e3c1457767c96cea6d12861768fb386cf3ffb34013718631a
  languageName: node
  linkType: hard

"typescript@patch:typescript@~4.6.3#~builtin<compat/typescript>":
  version: 4.6.4
  resolution: "typescript@patch:typescript@npm%3A4.6.4#~builtin<compat/typescript>::version=4.6.4&hash=bda367"
  bin:
    tsc: bin/tsc
    tsserver: bin/tsserver
  checksum: 1cb434fbc637d347be90e3a0c6cd05e33c38f941713c8786d3031faf1842c2c148ba91d2fac01e7276b0ae3249b8633f1660e32686cc7a8c6a8fd5361dc52c66
  languageName: node
  linkType: hard

"ufo@npm:^0.8.3":
  version: 0.8.4
  resolution: "ufo@npm:0.8.4"
  checksum: a2ebef6f64b9cc4114fc65405837eeb83eb8975edd6d54c7f37abb6905da6fd1f63524e4a02c8b087e7b0b3db6e6f4f798a3d86a96500410ff590b405f807dc9
  languageName: node
  linkType: hard

"unbox-primitive@npm:^1.0.2":
  version: 1.0.2
  resolution: "unbox-primitive@npm:1.0.2"
  dependencies:
    call-bind: ^1.0.2
    has-bigints: ^1.0.2
    has-symbols: ^1.0.3
    which-boxed-primitive: ^1.0.2
  checksum: b7a1cf5862b5e4b5deb091672ffa579aa274f648410009c81cca63fed3b62b610c4f3b773f912ce545bb4e31edc3138975b5bc777fc6e4817dca51affb6380e9
  languageName: node
  linkType: hard

"unimport@npm:^0.2.5":
  version: 0.2.6
  resolution: "unimport@npm:0.2.6"
  dependencies:
    "@rollup/pluginutils": ^4.2.1
    escape-string-regexp: ^5.0.0
    fast-glob: ^3.2.11
    local-pkg: ^0.4.1
    magic-string: ^0.26.2
    mlly: ^0.5.2
    pathe: ^0.3.0
    scule: ^0.2.1
    strip-literal: ^0.3.0
    unplugin: ^0.6.3
  checksum: 54589515e85f7f2e4c55875a4e09024c07a9e17627faca28bdf970a271bcaeaa6d2592532d37cf349113f8a97a1933e0fb5322dcf58406b0cfd715413c5156a6
  languageName: node
  linkType: hard

"unique-filename@npm:^1.1.1":
  version: 1.1.1
  resolution: "unique-filename@npm:1.1.1"
  dependencies:
    unique-slug: ^2.0.0
  checksum: cf4998c9228cc7647ba7814e255dec51be43673903897b1786eff2ac2d670f54d4d733357eb08dea969aa5e6875d0e1bd391d668fbdb5a179744e7c7551a6f80
  languageName: node
  linkType: hard

"unique-slug@npm:^2.0.0":
  version: 2.0.2
  resolution: "unique-slug@npm:2.0.2"
  dependencies:
    imurmurhash: ^0.1.4
  checksum: 5b6876a645da08d505dedb970d1571f6cebdf87044cb6b740c8dbb24f0d6e1dc8bdbf46825fd09f994d7cf50760e6f6e063cfa197d51c5902c00a861702eb75a
  languageName: node
  linkType: hard

"universalify@npm:^0.1.2":
  version: 0.1.2
  resolution: "universalify@npm:0.1.2"
  checksum: 40cdc60f6e61070fe658ca36016a8f4ec216b29bf04a55dce14e3710cc84c7448538ef4dad3728d0bfe29975ccd7bfb5f414c45e7b78883567fb31b246f02dff
  languageName: node
  linkType: hard

"universalify@npm:^2.0.0":
  version: 2.0.0
  resolution: "universalify@npm:2.0.0"
  checksum: 2406a4edf4a8830aa6813278bab1f953a8e40f2f63a37873ffa9a3bc8f9745d06cc8e88f3572cb899b7e509013f7f6fcc3e37e8a6d914167a5381d8440518c44
  languageName: node
  linkType: hard

"unplugin-auto-import@npm:^0.8.7":
  version: 0.8.7
  resolution: "unplugin-auto-import@npm:0.8.7"
  dependencies:
    "@antfu/utils": ^0.5.2
    "@rollup/pluginutils": ^4.2.1
    local-pkg: ^0.4.1
    magic-string: ^0.26.2
    unimport: ^0.2.5
    unplugin: ^0.6.3
  peerDependencies:
    "@vueuse/core": "*"
  peerDependenciesMeta:
    "@vueuse/core":
      optional: true
  checksum: 575a2344e39bdb4da3380c00e67678fd932852bdbe26865dac260e7180e3d35f7a4e666b710781d5233e183aedfad18ae6fbcc82966ecae62616051f63d337e3
  languageName: node
  linkType: hard

"unplugin-icons@npm:^0.14.3":
  version: 0.14.3
  resolution: "unplugin-icons@npm:0.14.3"
  dependencies:
    "@antfu/install-pkg": ^0.1.0
    "@antfu/utils": ^0.5.1
    "@iconify/utils": ^1.0.32
    debug: ^4.3.4
    kolorist: ^1.5.1
    local-pkg: ^0.4.1
    unplugin: ^0.6.2
  peerDependencies:
    "@svgr/core": ">=5.5.0"
    "@vue/compiler-sfc": ^3.0.2
    vue-template-compiler: ^2.6.12
    vue-template-es2015-compiler: ^1.9.0
  peerDependenciesMeta:
    "@svgr/core":
      optional: true
    "@vue/compiler-sfc":
      optional: true
    vue-template-compiler:
      optional: true
    vue-template-es2015-compiler:
      optional: true
  checksum: fca212fd52ee069af4f32c2164e9f6c742256910094d981324181ea3a743bbbde9974971a6895f23abf3578aeaa5f12d7f3bb18831d98a5ff1d2684877306c63
  languageName: node
  linkType: hard

"unplugin-vue-components@npm:^0.19.6":
  version: 0.19.6
  resolution: "unplugin-vue-components@npm:0.19.6"
  dependencies:
    "@antfu/utils": ^0.5.1
    "@rollup/pluginutils": ^4.2.1
    chokidar: ^3.5.3
    debug: ^4.3.4
    fast-glob: ^3.2.11
    local-pkg: ^0.4.1
    magic-string: ^0.26.1
    minimatch: ^5.0.1
    resolve: ^1.22.0
    unplugin: ^0.6.3
  peerDependencies:
    "@babel/parser": ^7.15.8
    "@babel/traverse": ^7.15.4
    vue: 2 || 3
  peerDependenciesMeta:
    "@babel/parser":
      optional: true
    "@babel/traverse":
      optional: true
  checksum: 05ad70451e85dfdd6777b41be2d58aadf5689a5f32321c187d8741f45084c6945617dc633f6356f61deff398f90ee8e722c2f12f063e18fc6a1a3dfd0071040d
  languageName: node
  linkType: hard

"unplugin@npm:^0.6.2":
  version: 0.6.2
  resolution: "unplugin@npm:0.6.2"
  dependencies:
    chokidar: ^3.5.3
    webpack-sources: ^3.2.3
    webpack-virtual-modules: ^0.4.3
  peerDependencies:
    esbuild: ">=0.13"
    rollup: ^2.50.0
    vite: ^2.3.0
    webpack: 4 || 5
  peerDependenciesMeta:
    esbuild:
      optional: true
    rollup:
      optional: true
    vite:
      optional: true
    webpack:
      optional: true
  checksum: 0ad0b290c00a528196f9af95cb31872d92221f1cd4a3b3ee7c72d6b1cf2130c1c342aca97ccee44e5c911b59cdf996c095c8188802d7ff7a002a98b84eafc4eb
  languageName: node
  linkType: hard

"unplugin@npm:^0.6.3":
  version: 0.6.3
  resolution: "unplugin@npm:0.6.3"
  dependencies:
    chokidar: ^3.5.3
    webpack-sources: ^3.2.3
    webpack-virtual-modules: ^0.4.3
  peerDependencies:
    esbuild: ">=0.13"
    rollup: ^2.50.0
    vite: ^2.3.0
    webpack: 4 || 5
  peerDependenciesMeta:
    esbuild:
      optional: true
    rollup:
      optional: true
    vite:
      optional: true
    webpack:
      optional: true
  checksum: 14e1f9c941e87e97fdda3efc745183e027de7d8b88eed8be5fa0708c2ec5dd114cc10e569c4b9dd2dafc89ba84d8bf90935d01e02cef510b7faedaa8af2b081f
  languageName: node
  linkType: hard

"untildify@npm:^4.0.0":
  version: 4.0.0
  resolution: "untildify@npm:4.0.0"
  checksum: 39ced9c418a74f73f0a56e1ba4634b4d959422dff61f4c72a8e39f60b99380c1b45ed776fbaa0a4101b157e4310d873ad7d114e8534ca02609b4916bb4187fb9
  languageName: node
  linkType: hard

"upath@npm:^2.0.1":
  version: 2.0.1
  resolution: "upath@npm:2.0.1"
  checksum: 2db04f24a03ef72204c7b969d6991abec9e2cb06fb4c13a1fd1c59bc33b46526b16c3325e55930a11ff86a77a8cbbcda8f6399bf914087028c5beae21ecdb33c
  languageName: node
  linkType: hard

"uri-js@npm:^4.2.2":
  version: 4.4.1
  resolution: "uri-js@npm:4.4.1"
  dependencies:
    punycode: ^2.1.0
  checksum: 7167432de6817fe8e9e0c9684f1d2de2bb688c94388f7569f7dbdb1587c9f4ca2a77962f134ec90be0cc4d004c939ff0d05acc9f34a0db39a3c797dada262633
  languageName: node
  linkType: hard

"util-deprecate@npm:^1.0.1, util-deprecate@npm:^1.0.2":
  version: 1.0.2
  resolution: "util-deprecate@npm:1.0.2"
  checksum: 474acf1146cb2701fe3b074892217553dfcf9a031280919ba1b8d651a068c9b15d863b7303cb15bd00a862b498e6cf4ad7b4a08fb134edd5a6f7641681cb54a2
  languageName: node
  linkType: hard

"uuid@npm:^8.3.2":
  version: 8.3.2
  resolution: "uuid@npm:8.3.2"
  bin:
    uuid: dist/bin/uuid
  checksum: 5575a8a75c13120e2f10e6ddc801b2c7ed7d8f3c8ac22c7ed0c7b2ba6383ec0abda88c905085d630e251719e0777045ae3236f04c812184b7c765f63a70e58df
  languageName: node
  linkType: hard

"v8-compile-cache@npm:^2.0.3":
  version: 2.3.0
  resolution: "v8-compile-cache@npm:2.3.0"
  checksum: adb0a271eaa2297f2f4c536acbfee872d0dd26ec2d76f66921aa7fc437319132773483344207bdbeee169225f4739016d8d2dbf0553913a52bb34da6d0334f8e
  languageName: node
  linkType: hard

"vdirs@npm:^0.1.4, vdirs@npm:^0.1.8":
  version: 0.1.8
  resolution: "vdirs@npm:0.1.8"
  dependencies:
    evtd: ^0.2.2
  peerDependencies:
    vue: ^3.0.11
  checksum: a7be8ccad3e72f2891150d53085b8f924cc9d9a9e474cd58827e81417e8feef7f5a8ecbb00efa7631592bf5b3be0a0fa40da41789fcf18dab2cec2bddd01ea47
  languageName: node
  linkType: hard

"verror@npm:1.10.0":
  version: 1.10.0
  resolution: "verror@npm:1.10.0"
  dependencies:
    assert-plus: ^1.0.0
    core-util-is: 1.0.2
    extsprintf: ^1.2.0
  checksum: c431df0bedf2088b227a4e051e0ff4ca54df2c114096b0c01e1cbaadb021c30a04d7dd5b41ab277bcd51246ca135bf931d4c4c796ecae7a4fef6d744ecef36ea
  languageName: node
  linkType: hard

"vite-plugin-comlink@npm:^3.0.3":
  version: 3.0.3
  resolution: "vite-plugin-comlink@npm:3.0.3"
  dependencies:
    json5: 2.2.1
    magic-string: 0.26.2
  peerDependencies:
    comlink: ^4.3.1
    vite: ">=2.9.6"
  checksum: 28a6a08f520247974067bf39f7610c78c034c1df7b474db1bc236bfca214130f496592d82ed7669e3ceb236bdd745d61e747d48654a57032a223be9a95e53803
  languageName: node
  linkType: hard

"vite-plugin-inspect@npm:^0.5.0":
  version: 0.5.0
  resolution: "vite-plugin-inspect@npm:0.5.0"
  dependencies:
    "@rollup/pluginutils": ^4.2.1
    debug: ^4.3.4
    kolorist: ^1.5.1
    sirv: ^2.0.2
    ufo: ^0.8.3
  peerDependencies:
    vite: ^2.9.0
  checksum: 41c0fccb9389e9aac07315b121252aa5037c6a98b2bcc4285cf69e9e973608c023ad180396df42f922b9f1f4e275cb60414e32f4d0f711d8199159df441a0056
  languageName: node
  linkType: hard

"vite-plugin-pages@npm:^0.23.0":
  version: 0.23.0
  resolution: "vite-plugin-pages@npm:0.23.0"
  dependencies:
    "@types/debug": ^4.1.7
    debug: ^4.3.4
    deep-equal: ^2.0.5
    fast-glob: ^3.2.11
    json5: ^2.2.1
    local-pkg: ^0.4.1
    picocolors: ^1.0.0
    yaml: ^2.0.1
  peerDependencies:
    "@vue/compiler-sfc": ^3.0.0
    vite: ^2.0.0
  peerDependenciesMeta:
    "@vue/compiler-sfc":
      optional: true
  checksum: a63b15194895bbdc020af4fcabc1505977a7746f15cc1d595fb4cb1b2140136446c37fee97661b39ffec6fb6b7127a24c39c57959c11ba55d97fa4e432a9769d
  languageName: node
  linkType: hard

"vite-plugin-static-copy@npm:^0.5.0":
  version: 0.5.0
  resolution: "vite-plugin-static-copy@npm:0.5.0"
  dependencies:
    chokidar: ^3.5.3
    fast-glob: ^3.2.11
    fs-extra: ^10.0.1
    picocolors: ^1.0.0
  peerDependencies:
    vite: ^2.6.14
  checksum: d496d82301bb829796bfa56389f7cd843e751747133675996131f303ec4a4fcf2876b8945145b24dcd88bb22d7e9fab5b8ad011b77300aca0ea1165b6528c7f8
  languageName: node
  linkType: hard

"vite-tsconfig-paths@npm:^3.4.1":
  version: 3.4.1
  resolution: "vite-tsconfig-paths@npm:3.4.1"
  dependencies:
    debug: ^4.1.1
    globrex: ^0.1.2
    recrawl-sync: ^2.0.3
    tsconfig-paths: ^3.9.0
  peerDependencies:
    vite: ">2.0.0-0"
  checksum: 76928e00adda8537f7371736d261cea8893c5fb959380704eccb5df08f2fbb2cb8f5b1f3911ef24f0ebc3864845c48bb887916b1ad1560e2e8af82679ac57752
  languageName: node
  linkType: hard

"vite@npm:^2.9.1":
  version: 2.9.8
  resolution: "vite@npm:2.9.8"
  dependencies:
    esbuild: ^0.14.27
    fsevents: ~2.3.2
    postcss: ^8.4.13
    resolve: ^1.22.0
    rollup: ^2.59.0
  peerDependencies:
    less: "*"
    sass: "*"
    stylus: "*"
  dependenciesMeta:
    fsevents:
      optional: true
  peerDependenciesMeta:
    less:
      optional: true
    sass:
      optional: true
    stylus:
      optional: true
  bin:
    vite: bin/vite.js
  checksum: 7de3450bec4caa06f4540d1d252563ef0b7e1bdd167d04abf03db72cfd8c9a93879e18861283bc7d075e1d094b78b71770ca36f9b965bdf28c66665eafdc29dc
  languageName: node
  linkType: hard

"vitest@npm:^0.8.1":
  version: 0.8.5
  resolution: "vitest@npm:0.8.5"
  dependencies:
    "@types/chai": ^4.3.0
    "@types/chai-subset": ^1.3.3
    chai: ^4.3.6
    local-pkg: ^0.4.1
    tinypool: ^0.1.2
    tinyspy: ^0.3.0
    vite: ^2.9.1
  peerDependencies:
    "@vitest/ui": "*"
    c8: "*"
    happy-dom: "*"
    jsdom: "*"
  peerDependenciesMeta:
    "@vitest/ui":
      optional: true
    c8:
      optional: true
    happy-dom:
      optional: true
    jsdom:
      optional: true
  bin:
    vitest: vitest.mjs
  checksum: 28d3d0fb66cb195fcbadd5a05dbc65c55d0e0aaefaf51b2eeabf1b6b6ae5b6b9c26f3d94c72ec2b89a22e2764c2e93c1fd8915da1ca748eb2a5ccedbc9f80da3
  languageName: node
  linkType: hard

"void-elements@npm:^3.1.0":
  version: 3.1.0
  resolution: "void-elements@npm:3.1.0"
  checksum: 0390f818107fa8fce55bb0a5c3f661056001c1d5a2a48c28d582d4d847347c2ab5b7f8272314cac58acf62345126b6b09bea623a185935f6b1c3bbce0dfd7f7f
  languageName: node
  linkType: hard

"vooks@npm:^0.2.12, vooks@npm:^0.2.4":
  version: 0.2.12
  resolution: "vooks@npm:0.2.12"
  dependencies:
    evtd: ^0.2.2
  peerDependencies:
    vue: ^3.0.0
  checksum: e6841ec5b6cb3938ce3ba0822a209fc4fd9cbb18af7e5034a979f3a80a6f6cfcdadc402bf8992ddffe09a5796c746731b7f6c3366c4a2e8309278f657ae8ea18
  languageName: node
  linkType: hard

"vscode-jsonrpc@npm:^8.0.0-next.5":
  version: 8.0.0-next.8
  resolution: "vscode-jsonrpc@npm:8.0.0-next.8"
  checksum: 162458b00971c2470e6b50fc232cc8d1e9a961b2097b33eb8d1be596bcb63e8da343a4c312ea1ce5f632b1e117418a2ac60930ec000b94b06b89f4b3b3d0f9b0
  languageName: node
  linkType: hard

"vscode-languageserver-textdocument@npm:^1.0.3":
  version: 1.0.4
  resolution: "vscode-languageserver-textdocument@npm:1.0.4"
  checksum: d0b63abb9d22c1177c26df15807b028129fb966f0dfd01c9ae1d114f1c2a1262d8588bea3e6f6f2e400ada3836da844553d8bc21c64122242a212502ccf5f702
  languageName: node
  linkType: hard

"vscode-languageserver-types@npm:^3.17.0-next.6":
  version: 3.17.0-next.12
  resolution: "vscode-languageserver-types@npm:3.17.0-next.12"
  checksum: 687f83239469dc3e8be48cacbfaf742c338e4f995e05b65ec43a77c9b9b5705a2f87412b23c7a85035a333fe01c20741abceb31c893d360eff5e54ba117cdbdb
  languageName: node
  linkType: hard

"vscode-uri@npm:^3.0.3":
  version: 3.0.3
  resolution: "vscode-uri@npm:3.0.3"
  checksum: 683bf9de835c3cef0b51c104a4949bf746148ded7c2287ebafcc506d20aa0e90b99385a972dba8132903420dba67fc33a5e146e30212c4a6b3ca5d74d1f95702
  languageName: node
  linkType: hard

"vue-demi@npm:*":
  version: 0.12.5
  resolution: "vue-demi@npm:0.12.5"
  peerDependencies:
    "@vue/composition-api": ^1.0.0-rc.1
    vue: ^3.0.0-0 || ^2.6.0
  peerDependenciesMeta:
    "@vue/composition-api":
      optional: true
  bin:
    vue-demi-fix: bin/vue-demi-fix.js
    vue-demi-switch: bin/vue-demi-switch.js
  checksum: 40a0470caea8312e0d4df2541f141c36c768dfc7f2f7d41f0f28ba29df11d3119e2f09b94c815f13b7c7f3f45dbc247b0e9e0c02a1800e2823e241c1d771e39b
  languageName: node
  linkType: hard

"vue-eslint-parser@npm:^8.0.0, vue-eslint-parser@npm:^8.0.1":
  version: 8.3.0
  resolution: "vue-eslint-parser@npm:8.3.0"
  dependencies:
    debug: ^4.3.2
    eslint-scope: ^7.0.0
    eslint-visitor-keys: ^3.1.0
    espree: ^9.0.0
    esquery: ^1.4.0
    lodash: ^4.17.21
    semver: ^7.3.5
  peerDependencies:
    eslint: ">=6.0.0"
  checksum: 8cc751e9fc2bfba93664ad8945732ab1c97791f9123e703de8669b65670d1e01906d80436bf4932d7ee6fa6174ed4545e8abb059206c88f4bd71957ca6cf7ba8
  languageName: node
  linkType: hard

"vue-eslint-parser@npm:^9.0.2":
  version: 9.0.2
  resolution: "vue-eslint-parser@npm:9.0.2"
  dependencies:
    debug: ^4.3.4
    eslint-scope: ^7.1.1
    eslint-visitor-keys: ^3.3.0
    espree: ^9.3.1
    esquery: ^1.4.0
    lodash: ^4.17.21
    semver: ^7.3.6
  peerDependencies:
    eslint: ">=6.0.0"
  checksum: 0160bb4dc742f3fea410223074d813969eae87825afe536a4b7de7a9d3ca35169cdee2d821494805e1c5dd337aae3178e1485d945a26432a69a281180887fb4d
  languageName: node
  linkType: hard

"vue-router@npm:^4.0.14":
  version: 4.0.15
  resolution: "vue-router@npm:4.0.15"
  dependencies:
    "@vue/devtools-api": ^6.0.0
  peerDependencies:
    vue: ^3.2.0
  checksum: 9fcfcd05db32b565059af8e70499e5f7c9f81d555aa9d95f2e8ef306fba941a288985037874e184e6212e8c49d509ad61d12e6c4bd94f3e4fbf578934293ec51
  languageName: node
  linkType: hard

"vue-tsc@npm:^0.33.9":
  version: 0.33.9
  resolution: "vue-tsc@npm:0.33.9"
  dependencies:
    "@volar/vue-typescript": 0.33.9
  peerDependencies:
    typescript: "*"
  bin:
    vue-tsc: bin/vue-tsc.js
  checksum: b9e9704dbd42146015bb593ca4dd9cecfeb333b6638fa5ef9b600692deaf525d0e8f60f4872731554bca19c439668049a5bddadfdedc7575928a54b17704b61f
  languageName: node
  linkType: hard

"vue@npm:*, vue@npm:^3.2.31":
  version: 3.2.33
  resolution: "vue@npm:3.2.33"
  dependencies:
    "@vue/compiler-dom": 3.2.33
    "@vue/compiler-sfc": 3.2.33
    "@vue/runtime-dom": 3.2.33
    "@vue/server-renderer": 3.2.33
    "@vue/shared": 3.2.33
  checksum: 878a63cc19dc6b2e255929cee3a47ea416668446d44d7c7f61ba785836a112a3814fd014e9472f92183ed05c8113946c4c83c831f2ec142d0c975a84976a2de9
  languageName: node
  linkType: hard

"vueuc@npm:^0.4.33":
  version: 0.4.37
  resolution: "vueuc@npm:0.4.37"
  dependencies:
    "@css-render/vue3-ssr": ^0.15.10
    "@juggle/resize-observer": ^3.3.1
    css-render: ^0.15.10
    evtd: ^0.2.2
    seemly: ^0.3.1
    vdirs: ^0.1.4
    vooks: ^0.2.4
  peerDependencies:
    vue: ^3.0.11
  checksum: cb0859fca93aa8f814b5bbf785931bf9cc59d16eb4f7d8f7350c0bf7378cf1cdc9dcbe2b737344573c3035d29c58043ba4d8686d2ab807518dd9f0e9a65e5979
  languageName: node
  linkType: hard

"w3c-hr-time@npm:^1.0.2":
  version: 1.0.2
  resolution: "w3c-hr-time@npm:1.0.2"
  dependencies:
    browser-process-hrtime: ^1.0.0
  checksum: ec3c2dacbf8050d917bbf89537a101a08c2e333b4c19155f7d3bedde43529d4339db6b3d049d9610789cb915f9515f8be037e0c54c079e9d4735c50b37ed52b9
  languageName: node
  linkType: hard

"w3c-xmlserializer@npm:^3.0.0":
  version: 3.0.0
  resolution: "w3c-xmlserializer@npm:3.0.0"
  dependencies:
    xml-name-validator: ^4.0.0
  checksum: 0af8589942eeb11c9fe29eb31a1a09f3d5dd136aea53a9848dfbabff79ac0dd26fe13eb54d330d5555fe27bb50b28dca0715e09f9cc2bfa7670ccc8b7f919ca2
  languageName: node
  linkType: hard

"wait-on@npm:6.0.0":
  version: 6.0.0
  resolution: "wait-on@npm:6.0.0"
  dependencies:
    axios: ^0.21.1
    joi: ^17.4.0
    lodash: ^4.17.21
    minimist: ^1.2.5
    rxjs: ^7.1.0
  bin:
    wait-on: bin/wait-on
  checksum: 6ae7bd2a933715c3b2f1c49f033d97c576b2c6a0257420d4c83964d2846c3967bfce33bc9af9a1a631ef38dfa6185be03cef57d2867c8c30c523278f964ac9e3
  languageName: node
  linkType: hard

"webidl-conversions@npm:^7.0.0":
  version: 7.0.0
  resolution: "webidl-conversions@npm:7.0.0"
  checksum: f05588567a2a76428515333eff87200fae6c83c3948a7482ebb109562971e77ef6dc49749afa58abb993391227c5697b3ecca52018793e0cb4620a48f10bd21b
  languageName: node
  linkType: hard

"webpack-sources@npm:^3.2.3":
  version: 3.2.3
  resolution: "webpack-sources@npm:3.2.3"
  checksum: 989e401b9fe3536529e2a99dac8c1bdc50e3a0a2c8669cbafad31271eadd994bc9405f88a3039cd2e29db5e6d9d0926ceb7a1a4e7409ece021fe79c37d9c4607
  languageName: node
  linkType: hard

"webpack-virtual-modules@npm:^0.4.3":
  version: 0.4.3
  resolution: "webpack-virtual-modules@npm:0.4.3"
  checksum: 158d30633e0d9be3cfcde10fe959b28df5d5adb1068e0f057fcfb10b0b16ede6c892eba438f6ced089c7c442087748c2fcd1e3f035e4e2dc6760517a8c227714
  languageName: node
  linkType: hard

"whatwg-encoding@npm:^2.0.0":
  version: 2.0.0
  resolution: "whatwg-encoding@npm:2.0.0"
  dependencies:
    iconv-lite: 0.6.3
  checksum: 7087810c410aa9b689cbd6af8773341a53cdc1f3aae2a882c163bd5522ec8ca4cdfc269aef417a5792f411807d5d77d50df4c24e3abb00bb60192858a40cc675
  languageName: node
  linkType: hard

"whatwg-mimetype@npm:^3.0.0":
  version: 3.0.0
  resolution: "whatwg-mimetype@npm:3.0.0"
  checksum: ce08bbb36b6aaf64f3a84da89707e3e6a31e5ab1c1a2379fd68df79ba712a4ab090904f0b50e6693b0dafc8e6343a6157e40bf18fdffd26e513cf95ee2a59824
  languageName: node
  linkType: hard

"whatwg-url@npm:^10.0.0":
  version: 10.0.0
  resolution: "whatwg-url@npm:10.0.0"
  dependencies:
    tr46: ^3.0.0
    webidl-conversions: ^7.0.0
  checksum: a21ec309c5cc743fe9414509408bedf65eaf0fb5c17ac66baa08ef12fce16da4dd30ce90abefbd5a716408301c58a73666dabfd5042cf4242992eb98b954f861
  languageName: node
  linkType: hard

"whatwg-url@npm:^11.0.0":
  version: 11.0.0
  resolution: "whatwg-url@npm:11.0.0"
  dependencies:
    tr46: ^3.0.0
    webidl-conversions: ^7.0.0
  checksum: ed4826aaa57e66bb3488a4b25c9cd476c46ba96052747388b5801f137dd740b73fde91ad207d96baf9f17fbcc80fc1a477ad65181b5eb5fa718d27c69501d7af
  languageName: node
  linkType: hard

"which-boxed-primitive@npm:^1.0.1, which-boxed-primitive@npm:^1.0.2":
  version: 1.0.2
  resolution: "which-boxed-primitive@npm:1.0.2"
  dependencies:
    is-bigint: ^1.0.1
    is-boolean-object: ^1.1.0
    is-number-object: ^1.0.4
    is-string: ^1.0.5
    is-symbol: ^1.0.3
  checksum: 53ce774c7379071729533922adcca47220228405e1895f26673bbd71bdf7fb09bee38c1d6399395927c6289476b5ae0629863427fd151491b71c4b6cb04f3a5e
  languageName: node
  linkType: hard

"which-collection@npm:^1.0.1":
  version: 1.0.1
  resolution: "which-collection@npm:1.0.1"
  dependencies:
    is-map: ^2.0.1
    is-set: ^2.0.1
    is-weakmap: ^2.0.1
    is-weakset: ^2.0.1
  checksum: c815bbd163107ef9cb84f135e6f34453eaf4cca994e7ba85ddb0d27cea724c623fae2a473ceccfd5549c53cc65a5d82692de418166df3f858e1e5dc60818581c
  languageName: node
  linkType: hard

"which-typed-array@npm:^1.1.2":
  version: 1.1.7
  resolution: "which-typed-array@npm:1.1.7"
  dependencies:
    available-typed-arrays: ^1.0.5
    call-bind: ^1.0.2
    es-abstract: ^1.18.5
    foreach: ^2.0.5
    has-tostringtag: ^1.0.0
    is-typed-array: ^1.1.7
  checksum: 147837cf5866e36b6b2e427731709e02f79f1578477cbde68ed773a5307520a6cb6836c73c79c30690a473266ee59010b83b6d9b25d8d677a40ff77fb37a8a84
  languageName: node
  linkType: hard

"which@npm:^2.0.1, which@npm:^2.0.2":
  version: 2.0.2
  resolution: "which@npm:2.0.2"
  dependencies:
    isexe: ^2.0.0
  bin:
    node-which: ./bin/node-which
  checksum: 1a5c563d3c1b52d5f893c8b61afe11abc3bab4afac492e8da5bde69d550de701cf9806235f20a47b5c8fa8a1d6a9135841de2596535e998027a54589000e66d1
  languageName: node
  linkType: hard

"wide-align@npm:^1.1.5":
  version: 1.1.5
  resolution: "wide-align@npm:1.1.5"
  dependencies:
    string-width: ^1.0.2 || 2 || 3 || 4
  checksum: d5fc37cd561f9daee3c80e03b92ed3e84d80dde3365a8767263d03dacfc8fa06b065ffe1df00d8c2a09f731482fcacae745abfbb478d4af36d0a891fad4834d3
  languageName: node
  linkType: hard

"with@npm:^7.0.0":
  version: 7.0.2
  resolution: "with@npm:7.0.2"
  dependencies:
    "@babel/parser": ^7.9.6
    "@babel/types": ^7.9.6
    assert-never: ^1.2.1
    babel-walk: 3.0.0-canary-5
  checksum: a00fe87b736e434bd8b9d3e62ddcd664bde7d3990a011a0f1bdeb499db0d6c28e6d2ef921dcc47650b8d436eee55459bcae8fab4ce1ed89f4926ddda407ab755
  languageName: node
  linkType: hard

"word-wrap@npm:^1.2.3, word-wrap@npm:~1.2.3":
  version: 1.2.3
  resolution: "word-wrap@npm:1.2.3"
  checksum: 30b48f91fcf12106ed3186ae4fa86a6a1842416df425be7b60485de14bec665a54a68e4b5156647dec3a70f25e84d270ca8bc8cd23182ed095f5c7206a938c1f
  languageName: node
  linkType: hard

"wrap-ansi@npm:^6.2.0":
  version: 6.2.0
  resolution: "wrap-ansi@npm:6.2.0"
  dependencies:
    ansi-styles: ^4.0.0
    string-width: ^4.1.0
    strip-ansi: ^6.0.0
  checksum: 6cd96a410161ff617b63581a08376f0cb9162375adeb7956e10c8cd397821f7eb2a6de24eb22a0b28401300bf228c86e50617cd568209b5f6775b93c97d2fe3a
  languageName: node
  linkType: hard

"wrap-ansi@npm:^7.0.0":
  version: 7.0.0
  resolution: "wrap-ansi@npm:7.0.0"
  dependencies:
    ansi-styles: ^4.0.0
    string-width: ^4.1.0
    strip-ansi: ^6.0.0
  checksum: a790b846fd4505de962ba728a21aaeda189b8ee1c7568ca5e817d85930e06ef8d1689d49dbf0e881e8ef84436af3a88bc49115c2e2788d841ff1b8b5b51a608b
  languageName: node
  linkType: hard

"wrappy@npm:1":
  version: 1.0.2
  resolution: "wrappy@npm:1.0.2"
  checksum: 159da4805f7e84a3d003d8841557196034155008f817172d4e986bd591f74aa82aa7db55929a54222309e01079a65a92a9e6414da5a6aa4b01ee44a511ac3ee5
  languageName: node
  linkType: hard

"ws@npm:^8.2.3":
  version: 8.6.0
  resolution: "ws@npm:8.6.0"
  peerDependencies:
    bufferutil: ^4.0.1
    utf-8-validate: ^5.0.2
  peerDependenciesMeta:
    bufferutil:
      optional: true
    utf-8-validate:
      optional: true
  checksum: e2fca82059f1e087d0c78e2f37135e1b8332bc804fce46f83c2db1cb8571685abf9d2c99b964bab3752536ad90b99b46fb8d1428899aed3e560684ab4641bffd
  languageName: node
  linkType: hard

"xml-name-validator@npm:^4.0.0":
  version: 4.0.0
  resolution: "xml-name-validator@npm:4.0.0"
  checksum: af100b79c29804f05fa35aa3683e29a321db9b9685d5e5febda3fa1e40f13f85abc40f45a6b2bf7bee33f68a1dc5e8eaef4cec100a304a9db565e6061d4cb5ad
  languageName: node
  linkType: hard

"xmlchars@npm:^2.2.0":
  version: 2.2.0
  resolution: "xmlchars@npm:2.2.0"
  checksum: 8c70ac94070ccca03f47a81fcce3b271bd1f37a591bf5424e787ae313fcb9c212f5f6786e1fa82076a2c632c0141552babcd85698c437506dfa6ae2d58723062
  languageName: node
  linkType: hard

"xtend@npm:^4.0.2":
  version: 4.0.2
  resolution: "xtend@npm:4.0.2"
  checksum: ac5dfa738b21f6e7f0dd6e65e1b3155036d68104e67e5d5d1bde74892e327d7e5636a076f625599dc394330a731861e87343ff184b0047fef1360a7ec0a5a36a
  languageName: node
  linkType: hard

"yallist@npm:^4.0.0":
  version: 4.0.0
  resolution: "yallist@npm:4.0.0"
  checksum: 343617202af32df2a15a3be36a5a8c0c8545208f3d3dfbc6bb7c3e3b7e8c6f8e7485432e4f3b88da3031a6e20afa7c711eded32ddfb122896ac5d914e75848d5
  languageName: node
  linkType: hard

"yaml@npm:^1.10.2":
  version: 1.10.2
  resolution: "yaml@npm:1.10.2"
  checksum: ce4ada136e8a78a0b08dc10b4b900936912d15de59905b2bf415b4d33c63df1d555d23acb2a41b23cf9fb5da41c256441afca3d6509de7247daa062fd2c5ea5f
  languageName: node
  linkType: hard

"yaml@npm:^2.0.1":
  version: 2.0.1
  resolution: "yaml@npm:2.0.1"
  checksum: 23f95ff0d646c894048ac5072b5b6d393a398af1b2553916f0de276d62dbb3279ae3c969d7fcefe7a213be4efc9b4aa3ae1439c97095d3d3765fc6bc424807ac
  languageName: node
  linkType: hard

"yauzl@npm:^2.10.0":
  version: 2.10.0
  resolution: "yauzl@npm:2.10.0"
  dependencies:
    buffer-crc32: ~0.2.3
    fd-slicer: ~1.1.0
  checksum: 7f21fe0bbad6e2cb130044a5d1d0d5a0e5bf3d8d4f8c4e6ee12163ce798fee3de7388d22a7a0907f563ac5f9d40f8699a223d3d5c1718da90b0156da6904022b
  languageName: node
  linkType: hard

"yocto-queue@npm:^0.1.0":
  version: 0.1.0
  resolution: "yocto-queue@npm:0.1.0"
  checksum: f77b3d8d00310def622123df93d4ee654fc6a0096182af8bd60679ddcdfb3474c56c6c7190817c84a2785648cdee9d721c0154eb45698c62176c322fb46fc700
  languageName: node
  linkType: hard
`,"/cypress/tsconfig.json":`{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["./integration/**/*", "./support/**/*"],
  "compilerOptions": {
    "isolatedModules": false,
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress"]
  }
}
`,"/.github/workflows/main.yml":`name: Build and deploy to pages

on:
  push:
    branches: [ "main" ]

  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js LTS
        uses: actions/setup-node@v3.3.0
        with:
          node-version: "*"
      - name: Install dependencies
        run: yarn
      - name: Build project
        run: yarn build
      - name: Build redbean executable
        uses: TimonLukas/action-static-redbean@v1.0.2
      - run: mv redbean.com dist/server.com
      - run: cp dist/index.html dist/404.html
      - run: touch dist/.nojekyll
      - name: Deploy \u{1F680}
        uses: JamesIves/github-pages-deploy-action@v4.3.3
        with:
          branch: gh-pages
          folder: dist
`,"/cypress/fixtures/example.json":`{
  "name": "Using fixtures to represent data",
  "email": "hello@cypress.io",
  "body": "Fixtures are a great way to mock data for responses to routes"
}
`,"/cypress/integration/example.spec.ts":`// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/")
    cy.contains("h1", "You did it!")
  })
})
`,"/cypress/plugins/index.ts":`/* eslint-env node */
// ***********************************************************
// This example plugins/index.ts can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

export default ((on, config) => {
  // \`on\` is used to hook into various events Cypress emits
  // \`config\` is the resolved Cypress config
  return config
}) as Cypress.PluginConfig
`,"/cypress/plugins/tsconfig.json":`{
  "extends": "@vue/tsconfig/tsconfig.node.json",
  "include": ["./**/*"],
  "compilerOptions": {
    "module": "CommonJS",
    "preserveValueImports": false,
    "types": ["node", "cypress/types/cypress"]
  }
}
`,"/cypress/support/commands.ts":`// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
`,"/cypress/support/index.ts":`// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:
import "./commands"

// Alternatively you can use CommonJS syntax:
// require('./commands')
`,"/packages/about/project.ts":`import { NIcon } from "naive-ui"
import { getFileIcon } from "./icons/file"
import { getFolderIcon } from "./icons/folder"

const sourceWorker = new ComlinkWorker<typeof import("./source.worker")>(
  new URL("./source.worker.ts", import.meta.url)
)

export async function fetchFileSource(file: string): Promise<any> {
  return sourceWorker.fetchSource(file)
}

function fetchProjectFiles(): Promise<string[]> {
  return sourceWorker.fetchProjectFiles()
}

export function createRenderer(
  kind: "file" | "folder",
  key: string
): () => ReturnType<typeof h> {
  const icon = kind === "file" ? getFileIcon(key) : getFolderIcon(key)
  return () => h(NIcon, { size: "1.25rem" }, { default: () => h(icon) })
}

type TreeFile = {
  key: string
  label: string
  prefix: () => ReturnType<typeof h>
}
type TreeFolder = TreeFile & {
  children: (TreeFile | TreeFolder)[]
}
export type TreeNode = TreeFile | TreeFolder
export type Tree = TreeNode[]

export async function fetchProjectTree(): Promise<Tree> {
  const allFiles = await fetchProjectFiles()

  const tree = allFiles.reduce(
    (acc, val) => {
      const parts = val.split("/").slice(1)
      const ancestorParts = parts.slice(0, -1)

      const parent = ancestorParts.reduce((container, name, index) => {
        const key = \`/\${ancestorParts.slice(0, index + 1).join("/")}\`
        const entry = container.find((value) => value.key === key)

        if (typeof entry === "undefined" || !("children" in entry)) {
          const newEntry = {
            key,
            label: \`\${name}/\`,
            children: [],
            prefix: createRenderer("folder", key),
          }
          container.push(newEntry)
          return newEntry.children
        }

        return entry.children
      }, acc)

      const label = parts.at(-1) ?? val
      parent.push({
        key: val,
        label,
        prefix: createRenderer("file", val),
      })

      return acc
    },
    [
      {
        key: "/.yarn",
        label: ".yarn",
        children: [],
        prefix: createRenderer("folder", "/.yarn"),
      },
    ] as Tree
  )
  sortTree(tree)

  return tree
}

function sortTree(tree: Tree): void {
  tree.sort((a, b) => {
    if (isFile(a) && isFolder(b)) {
      return 1
    }

    if (isFolder(a) && isFile(b)) {
      return -1
    }

    return a.label.localeCompare(b.label)
  })

  tree.forEach((node) => {
    if (!isFolder(node)) {
      return
    }

    sortTree(node.children)
  })
}

function flattenTree(tree: Tree): TreeNode[] {
  return tree.flatMap((node) =>
    isFolder(node) ? [...flattenTree(node.children), node] : node
  )
}

export function findSubtreeByKey(key: string, tree: Tree): Tree {
  const parts = key.split("/").slice(1)
  return parts.reduce((acc, val, index) => {
    const currentKey = "/" + parts.slice(0, index + 1).join("/")
    const entry = acc.find((value) => value.key === currentKey)

    if (typeof entry === "undefined" || !("children" in entry)) {
      return acc
    }

    return entry.children
  }, tree)
}

export function isFolder(node: TreeNode): node is TreeFolder {
  return "children" in node
}

export function isFile(node: TreeNode): node is TreeFile {
  return !isFolder(node)
}
`,"/packages/about/source.worker.ts":`const allProjectFiles = import.meta.glob<string>(
  "/(!(dist|.git|.idea|.yarn)|.github)/**",
  {
    as: "raw",
  }
) as unknown as Record<string, string>

export async function fetchProjectFiles(): Promise<string[]> {
  return Object.keys(allProjectFiles)
}

export async function fetchSource(filename: string): Promise<string | null> {
  return allProjectFiles[filename] ?? null
}
`,"/packages/fairytome/entries.ts":`import { markRaw, reactive, resolveDynamicComponent } from "vue"
import type { Entry } from "@/fairytome/entry"

const entryFiles = Object.assign(
  {},
  import.meta.glob("/packages/**/*.entry.ts"),
  import.meta.glob("/packages/**/*.entry.vue")
)

type Entries = { entries: Entry[]; entriesByName: Map<string, Entry> }

export function pathToEntryMeta(
  path: string
): Pick<Entry, "name" | "package" | "path"> {
  const parts = path.replace("/packages/", "").split("/")
  const packageName = parts[0]
  const name = parts.at(-1) ?? path
  const rest =
    parts.length > 2 ? parts.slice(1, parts.length - 1).join("/") : ""

  return {
    name: name.includes(".entry.")
      ? name.slice(0, name.indexOf(".entry."))
      : name,
    package: packageName,
    path: rest,
  }
}

export async function fetchEntries(): Promise<Entries> {
  const entries = (
    await Promise.all(
      Object.entries(entryFiles).map(async ([filename, importer]) => {
        const meta = pathToEntryMeta(filename)

        const component = await importer()
        const { entry } = component

        if (typeof entry === "undefined") {
          return null
        }

        return {
          ...entry,
          component: resolveDynamicComponent(
            markRaw(
              "default" in component ? component.default : entry.component
            )
          ),
          ...meta,
        }
      })
    )
  ).filter((value) => value !== null) as Entry[]

  const entriesByName = entries.reduce(
    (acc, val) => acc.set(val.name, val),
    new Map<string, Entry>()
  )

  return {
    entries,
    entriesByName,
  }
}

export function useEntries(): Entries {
  const refs = reactive<Entries>({
    entries: [],
    entriesByName: new Map<string, Entry>(),
  })

  fetchEntries().then(({ entries, entriesByName }) => {
    refs.entries = entries
    refs.entriesByName = entriesByName
  })

  return refs
}
`,"/packages/fairytome/entry.ts":`import type { Component } from "vue"

type BaseOption<InitialType> = {
  type: string
  label: string
  initial: InitialType
  amount?: {
    min: number
    max?: number
  }
}

type OptionTypes = {
  Range: BaseOption<number> & {
    type: "range"
    min: number
    max: number
    step: number
  }
  Text: BaseOption<string> & {
    type: "text"
    length?: {
      min?: number
      max?: number
    }
  }
  Color: BaseOption<string> & {
    type: "color"
  }
  Checkbox: BaseOption<boolean> & {
    type: "checkbox"
  }
}

export type EntryOption = OptionTypes[keyof OptionTypes]

type ComponentProps<C extends Component> = C extends Component<infer Props>
  ? Props
  : never
export type Entry<C extends Component = Component> = {
  name: string
  package: string
  path: string
  component: Component
  controls: Record<keyof ComponentProps<C>, EntryOption>
  overrides?: { [Key in keyof ComponentProps<C>]: ComponentProps<C>[Key] }
  stage?: Component
}

export function createEntry<T extends Component>(
  entry: Omit<Entry<T>, "name" | "package" | "path">
) {
  return entry as Entry<T>
}
`,"/packages/framework/App.vue":`<template lang="pug">
palette(seed="abcdefghi" :offset="paletteOffset + manualPaletteOffset")
  .app.w-screen.h-screen.overflow-hidden(:class="{ loaded }")
    .content.absolute.w-full.h-full(class="z-[5]")
      router-view(v-slot="{ Component }")
        transition(name="fade")
          component(:is="Component")
    background.absolute.top-0.left-0.w-full.h-full.z-0(:blob-amount="0")
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import Background from "@/framework/components/Background.vue"
import Palette from "./components/Palette.vue"

let loaded = $ref(false)
onMounted(() =>
  setTimeout(() => {
    loaded = true
  }, 50)
)

const route = useRoute()
const manualPaletteOffset = ref(0)
const paletteOffset = computed(() => {
  if (route.fullPath.includes("fairytome")) {
    return 1
  }

  if (route.fullPath.includes("about")) {
    return 2
  }

  return 0
})
<\/script>

<style lang="sass" scoped>
.app.loaded
  transition: 1s
  transition-property: var(--theme-colors)

  .content
    > *
      position: absolute
      top: 0
      left: 0

      &.fade
        &-enter-active, &-leave-active
          transition: opacity .5s

        &-enter-from, &-leave-to
          opacity: 0
</style>
`,"/packages/framework/constants.ts":`export const PALETTE_COLOR_COUNT = 8
`,"/packages/framework/main.ts":`import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import routes from "~pages"
import App from "./App.vue"
import "./assets/style.css"

createApp(App)
  .use(createRouter({ history: createWebHistory(), routes }))
  .mount("#app")
`,"/packages/utilities/glob.ts":`const REGEX_GLOB_TO_FILENAME = /\\.\\/(.+)\\.ts/

type FilenameGlob = \`./\${string}.ts\`
type GlobToFilename<GlobString extends FilenameGlob> =
  GlobString extends \`./\${infer Filename}.ts\` ? Filename : never

export function globToFilename<GlobString extends FilenameGlob>(
  glob: GlobString
): GlobToFilename<GlobString> {
  const result = REGEX_GLOB_TO_FILENAME.exec(glob)

  if (result === null) {
    throw new Error(
      \`Input must have format \${REGEX_GLOB_TO_FILENAME.source}, given: \${glob}\`
    )
  }

  return result[1] as GlobToFilename<GlobString>
}
`,"/packages/utilities/math.ts":`export function randomBetween(start = 0, end = 1): number {
  return start + Math.random() * (end - start)
}

export type RandomJitter = number | Readonly<[number, number]>
export function randomAround(center: number, jitter: RandomJitter): number {
  if (Array.isArray(jitter)) {
    return randomBetween(center - jitter[0], center + jitter[1])
  }

  const jitterNumber = jitter as number
  return randomBetween(center - jitterNumber, center + jitterNumber)
}
`,"/packages/about/components/ProjectFileViewer.vue":`<template lang="pug">
.project-file-viewer.flex.items-center.justify-center.min-w-0
  n-card.relative.h-full.w-full.min-w-0(v-if="file !== null" :title="filename")
    template(#cover)
      n-breadcrumb.path
        n-breadcrumb-item
          n-icon(:component="getIconForFolder('/')" class="mr-[.5rem]")
        n-breadcrumb-item(
          v-for="(part, index) in pathParts"
          @click="model = '/' + pathParts.slice(0, index + 1).join('/')"
        )
          n-icon(class="mr-[.5rem]"): component(
            :is="getIconForFolder('/' + pathParts.slice(0, index + 1).join('/'))"
          )
          | {{ part }}
        n-breadcrumb-item
      n-icon.absolute(
        size="24px"
        class="top-[3.2rem] left-[1rem]"
        :component="entry === null ? getIconForFolder(modelValue) : getIcon(entry)"
      )
    .flex.h-full
      .code.relative.flex-1.h-full.line-numbers.match-braces.rainbow-braces(
        v-if="source !== null"
        class="pb-[.25rem] mt-[-.5rem]"
        :class="[\`language-\${language}\`, { 'show-invisible': showInvisible }]"
      )
        n-switch.absolute.right-0(
          class="top-[-2rem]"
          v-model:value="showInvisible"
          v-if="!isImage"
        )
          template(#checked) Show invisibles
          template(#unchecked) Hide invisibles
        fade.h-full
          pre.w-full.h-full(v-if="!isImage" v-show="!isHighlighting")
            code(ref="code") {{ source }}
          .flex.flex-col.h-full.w-full.items-center.justify-center.relative.overflow-hidden(
            v-else
          )
            .controls.absolute.top-4(class="w-1/2 z-[1]")
              n-slider(
                v-model:value="imageZoom"
                :min="-10"
                :max="10"
                :step="0.01"
                :format-tooltip="(value) => \`x\${(1.2 ** value).toFixed(2)}\`"
              )
            img.img-preview.border-solid.border-black.origin-center(
              :src="file"
              :style="{ '--scale': imageScale }"
            )
      fade.h-full.flex-1(v-else)
        suspense(v-if="!isImage")
          .h-full
            project-tree.h-full(v-model="model" :entries="subtree" class="m-l-[-1rem]")
          template(#fallback)
            .absolute.w-full.h-full.top-0.left-0.flex.items-center.justify-center
              n-spin
      .flex-1.ml-4(v-if="structureEntry !== null")
        project-structure-entry(:markdown-source="structureEntry")
  .flex.flex-col.items-center.opacity-50(v-else)
    n-icon(size="4rem"): i-feather-file-text
    n-h2 No file selected
</template>

<script lang="ts" setup>
import { getLanguageFromExtension, usePrism } from "@/about/composables/prism"
import { useSource } from "@/about/composables/source"
import { getIcon, getIconForFolder } from "@/about/icons"
import { fetchEntry } from "@/about/structure"
import { Fade } from "@/framework/components/transitions"
import type { Tree } from "../project"
import ProjectStructureEntry from "./ProjectStructureEntry.vue"

const ProjectTree = defineAsyncComponent(() => import("./ProjectTree.vue"))

const { Prism, loadLanguage } = usePrism()

const props = defineProps<{ modelValue: string | null; subtree: Tree }>()
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void
}>()
const model = useVModel(props, "modelValue", emit)
const source = useSource(model)

const entry = $computed(
  () => props.subtree.find((node) => node.key === model.value) ?? null
)

let showInvisible = $ref(false)

const file = $(model)
const filename = $computed(() => file?.split("/").at(-1))
const extension = $computed(() => filename?.split(".").at(-1))
const pathParts = $computed(() => file?.split("/").slice(1, -1))

let structureEntry = $ref(null)
watch(
  model,
  async (value) => {
    structureEntry = null

    if (value !== null) {
      structureEntry = await fetchEntry(value)
    }
  },
  { immediate: true }
)

const isImage = $computed(
  () =>
    typeof extension !== "undefined" &&
    ["ico", "png", "jpg"].includes(extension)
)
const imageZoom = ref(0)
const debouncedZoom = refDebounced(imageZoom, 100)
const imageScale = $computed(() => 1.2 ** debouncedZoom.value)

const language = $computed((): string =>
  typeof extension === "undefined"
    ? "none"
    : getLanguageFromExtension(extension)
)

let isHighlighting = $ref(false)
const code = ref()
watch(source, async () => {
  if (source.value === null || isImage) {
    return
  }

  isHighlighting = true
  if (typeof extension !== "undefined") {
    await loadLanguage(extension)
  }

  setTimeout(
    () =>
      Prism.highlightElement(code.value, false, () => {
        isHighlighting = false
      }),
    50
  )
})
<\/script>

<style lang="sass" scoped>
.project-file-viewer
  :deep(*)
    min-width: 0
    min-height: 0

  :deep(.n-card-cover)
    overflow: visible

  :deep(.n-card-header__main)
    padding-left: 1.75rem

  .path
    transform: translate(calc(var(--n-padding-left) - 6px), .6rem)
    padding-top: 0.5rem

    :deep(.n-breadcrumb-item:first-child)
      pointer-events: none

  .code
    &:not(.show-invisible)
      :deep(.token)
        &.lf, &.space, &.tab, &.cr, &.crlf
          opacity: 0

    :deep(.token)
      transition: opacity .5s

  .img-preview
    border: 1px solid black
    transform: scale(var(--scale, 1))
    transition: transform .5s
</style>
`,"/packages/about/components/ProjectStructureEntry.vue":`<template lang="pug">
.prose(v-html="rendered")
</template>

<script lang="ts" setup>
import { marked } from "marked"

const props = defineProps<{ markdownSource: string }>()
const rendered = $computed(() => marked(props.markdownSource))
<\/script>

<style lang="sass" scoped>
.prose
  :deep(h2)
    code
      &::before, &::after
        content: ""
</style>
`,"/packages/about/components/ProjectStructureExplorer.vue":`<template lang="pug">
.explorer.flex.h-full.w-full
  .flex-none.border-solid.mr-4(class="border-r-[1px] ml-[-1rem] min-w-[20rem]")
    project-tree(:entries="tree" v-model="selectedKey" root)
  .flex-1.min-w-0.relative
    .spinner.absolute.w-full.h-full.top-0.flex.justify-center.items-center(
      v-if="selectedKey !== null"
    )
      n-spin(size="large")
    fade.h-full(duration="250ms" :transition="{ mode: 'out-in' }")
      project-file-viewer.w-full.h-full(
        v-model="selectedKey"
        :key="selectedKey"
        :subtree="subtree"
      )
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import { Fade } from "@/framework/components/transitions"
import { fetchProjectTree, findSubtreeByKey } from "../project"
import ProjectFileViewer from "./ProjectFileViewer.vue"
import ProjectTree from "./ProjectTree.vue"

const tree = await fetchProjectTree()
const selectedKey = useRouteQuery<string | null>("path", null)

onBeforeUnmount(() => {
  selectedKey.value = null
})

const subtree = $computed(() =>
  selectedKey.value === null ? tree : findSubtreeByKey(selectedKey.value, tree)
)
<\/script>

<style lang="sass" scoped>
.explorer
  background: var(--n-color)
  z-index: 1
</style>
`,"/packages/about/components/ProjectTree.vue":`<template lang="pug">
.pb-4.h-full.flex.flex-col
  .controls.pl-7.pr-2.pt-1.mb-2.relative.flex-none(class="z-[1]")
    n-input(placeholder="Search..." clearable @update:value="handleInput")
    fade.absolute.top-3.left-0
      n-spin(:size="20" v-if="isLoading")
    n-switch.absolute.right-6(class="bottom-[-2rem]" v-model:value="showDotEntries")
      template(#checked) Show dots
      template(#unchecked) Hide dots
  .flex-1.overflow-y-scroll.min-h-0
    n-tree.project-tree(
      :class="{ root, 'dot-shown': showDotEntries, empty: entries.length === 0 }"
      :data="tree"
      :node-props="generateProps"
      :show-irrelevant-nodes="true"
      v-model:expanded-keys="currentExpandedKeys.value"
      :pattern="pattern"
      v-model:selected-keys="selectedKeys"
      v-bind="$attrs"
    )
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import { NIcon } from "naive-ui"
import type { Ref } from "vue"
import { getFolderIcon } from "@/about/icons/folder"
import { Fade } from "@/framework/components/transitions/index"
import type { Tree, TreeNode } from "../project"
import { isFolder } from "../project"

const expandedKeys = ref<string[]>(["/"])
let selectedKeys = $ref<string[]>([])
watch(
  () => selectedKeys,
  () => {
    if (selectedKeys.length === 0 || selectedKeys[0] === props.modelValue) {
      return
    }

    model.value = selectedKeys[0]
  }
)

const props = defineProps<{
  entries: Readonly<Tree>
  modelValue: string | null
  root?: boolean
}>()
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void
}>()
const model = useVModel(props, "modelValue", emit)
watch(
  model,
  () => {
    if (model.value === null) {
      selectedKeys = []
      return
    }

    selectedKeys = [model.value]
  },
  { immediate: true }
)

const currentExpandedKeys = $computed(
  (): Ref<string[]> =>
    pattern.value.length > 0
      ? ref(["/", ...subtree.map((node) => node.key)])
      : expandedKeys
)

function filterSubtree(tree: Readonly<Tree>): Tree {
  return tree
    .map((node) =>
      isFolder(node)
        ? {
            ...node,
            children: filterSubtree(node.children),
          }
        : node
    )
    .filter(
      (node) =>
        ((isFolder(node) && node.children.length > 0) ||
          node.key.includes(pattern.value)) &&
        (showDotEntries || !node.label.startsWith("."))
    )
}
const subtree = $computed(() => {
  return filterSubtree(props.entries)
})

const tree = $computed(() => {
  if (props.root && subtree.length > 0) {
    return [
      {
        key: "/",
        label: "/",
        children: subtree,
        prefix: () =>
          h(
            NIcon,
            { size: "1.25rem" },
            { default: () => h(getFolderIcon("/")) }
          ),
      },
    ]
  }

  return subtree
})

watch(
  () => props.entries,
  (entries) => {
    if (props.root) {
      return
    }

    expandedKeys.value = entries.map(({ key }) => key)
  },
  { immediate: true }
)

function generateProps({ option: node }: { option: TreeNode }) {
  const { key, label } = node
  const isDotEntry = label.startsWith(".")

  return {
    class: {
      empty: !isFolder(node) || node.children.length === 0,
      dot: isDotEntry,
      "is-package-root":
        isFolder(node) &&
        key.startsWith("/packages/") &&
        key.split("/").length === 3,
    },
  }
}

let isLoading = $ref(false)
const query = ref("")
const pattern = refDebounced(query, 500)

watch(pattern, () =>
  setTimeout(() => {
    isLoading = false
  }, 50)
)

function handleInput(value: string) {
  query.value = value
  isLoading = true
}
let showDotEntriesQuery = $(useRouteQuery<"true" | "false">("dot", "false"))
let showDotEntries = $computed({
  get(): boolean {
    return showDotEntriesQuery === "true"
  },
  set(value: boolean) {
    showDotEntriesQuery = value ? "true" : "false"
  },
})
<\/script>

<style lang="sass" scoped>
.project-tree
  &.root
    :deep(> .n-tree-node-wrapper)
      &:first-child
        pointer-events: none

        .n-tree-node-switcher
          visibility: hidden

    :deep(.n-tree-node)
      margin-left: -1rem

  :deep(.n-tree-node-wrapper)
    margin-left: 1.5rem
    padding: 0

    &:nth-child(even)
      background: rgba(0, 0, 0, 0.05)
      --n-node-color-hover: rgba(0, 0, 0, 0.075)

    > .n-tree-node
      padding: 3px 0

      &.empty
        > .n-tree-node-switcher
          visibility: hidden
          pointer-events: none

      &.dot .n-tree-node-content__text
        opacity: .75

      &.even.visible
        background: rgba(0, 0, 0, 0.1)

      &.is-package-root .n-tree-node-content__prefix
        opacity: .75

  :deep(.n-empty)
    margin-top: 4rem
</style>
`,"/packages/about/components/SelfHost.vue":`<template lang="pug">
.block-self-host.mx-auto.mt-4(class="md:w-5/6 lg:w-3/4 xl:w-1/2")
  n-h1 Self hosting this page
  n-p Self-hosting this page is very easy thanks to the amazing #[n-a(href="https://redbean.dev/" target="_blank") redbean server],&nbsp;
    | which itself is based on the even greater #[n-a(href="https://justine.lol/cosmopolitan/index.html" target="_blank") cosmopolitan libc]. It brings the following features:
  n-ul.list-disc
    n-li The same binary works on Linux, Mac, Windows, FreeBSD, OpenBSD, NetBSD, and can even be booted from BIOS!
      n-ul.list-disc
        n-li For more details on this, check out the #[n-a(href="https://justine.lol/ape.html" target="_blank") \u03B1c\u03C4\xB5\u03B1lly p\u03B4r\u03C4\u03B1bl\u03B5 \u03B5x\u03B5c\xB5\u03C4\u03B1bl\u03B5] blog post.
    n-li The server has #[n-a(href="https://redbean.dev/#benchmark" target="_blank") great performance] and can be used just as well in a desktop application as in a very complex internet-facing scalable platform. No need for nginx or similar!
    n-li If you're up for it, the whole thing is even extendable and programmable through a #[n-a(href="https://redbean.dev/#lua" target="_blank") LUA interface]. And all of this is just the beginning!
  n-p You can download a finished executable with this exact build of my website through this button:
  .download-container.py-12.text-center
    a(href="/server.com")
      .download-link
        n-button.download(type="primary" size="large")
          i-feather-download
          | Download
          i-feather-download
  n-p It's automatically generated during the #[n-a(href="https://github.com/TimonLukas/timonlukas.github.io/blob/main/.github/workflows/main.yml" target="_blank") build workflow], after the Vite project is generated, but before the pages are uploaded.&nbsp;
    | In case you're interested in implementing something similar, check out my Github Action #[n-a(href="https://github.com/TimonLukas/action-static-redbean" target="_blank") for generating a redbean executable]! It's pretty easy to add.
</template>

<style lang="sass" scoped>
@keyframes logo-rotate
  0%
    transform: rotate(20deg)
  50%
    transform: rotate(-20deg)
  100%
    transform: rotate(20deg)

@keyframes logo-scale
  0%
    transform: scale(1.65)
  50%
    transform: scale(1.35)
  100%
    transform: scale(1.65)

.block-self-host
  .n-button
    background: var(--n-color)

  .download-link
    animation: logo-scale 1s infinite

  .download
    animation: logo-rotate 3s infinite

    svg:first-child
      margin-right: 1rem

    svg:last-child
      margin-left: 1rem
</style>
`,"/packages/about/components/index.ts":`export { default as ProjectFileViewer } from "./ProjectFileViewer.vue"
export { default as ProjectStructureEntry } from "./ProjectStructureEntry.vue"
export { default as ProjectStructureExplorer } from "./ProjectStructureExplorer.vue"
export { default as ProjectTree } from "./ProjectTree.vue"
export { default as SelfHost } from "./SelfHost.vue"
`,"/packages/about/composables/prism.ts":`import Prism from "prismjs"
import "prismjs/plugins/inline-color/prism-inline-color"
import "prismjs/plugins/inline-color/prism-inline-color.css"
import "prismjs/plugins/line-numbers/prism-line-numbers"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/match-braces/prism-match-braces"
import "prismjs/plugins/match-braces/prism-match-braces.css"
import "prismjs/plugins/previewers/prism-previewers"
import "prismjs/plugins/previewers/prism-previewers.css"
import "prismjs/plugins/show-invisibles/prism-show-invisibles"
import "prismjs/plugins/show-invisibles/prism-show-invisibles.css"
import "prismjs/themes/prism.css"

Prism.manual = true

const EXTENSION_TO_LANGUAGE: Record<string, string> = {
  md: "markdown",
  ts: "typescript",
  html: "vue",
  cjs: "js",
  yml: "yaml",
  gitignore: "ignore",
  gitattributes: "ignore",
  prettierignore: "ignore",
  prettierrc: "json",
  eslintcache: "json",
}

export function getLanguageFromExtension(extension: string): string {
  return EXTENSION_TO_LANGUAGE[extension] ?? extension
}

const loadedLanguages = new Set()
const languageGlob = import.meta.glob(
  "/node_modules/prismjs/components/prism-*.js"
)
export function usePrism(): {
  Prism: typeof Prism
  loadLanguage(name: string): Promise<void>
} {
  async function loadLanguage(extension: string): Promise<void> {
    const language = getLanguageFromExtension(extension)
    if (loadedLanguages.has(language)) {
      return
    }

    loadedLanguages.add(language)

    if (language === "vue") {
      Prism.languages.vue = Prism.languages.extend("markup", {})
    }

    const key = Object.keys(languageGlob).find((key) => key.includes(language))

    if (typeof key === "undefined") {
      return
    }

    await languageGlob[key]()
  }

  return { Prism, loadLanguage }
}
`,"/packages/about/composables/source.ts":`import type { Ref } from "vue"
import { fetchFileSource } from "../project"

export function useSource(
  file: Ref<string | null>
): Readonly<Ref<string | null>> {
  const source = ref<string | null>(null)

  watch(
    file,
    async () => {
      if (file.value === null) {
        source.value = ""
        return
      }

      source.value = (await fetchFileSource(file.value)) ?? null
    },
    { immediate: true }
  )

  return source
}
`,"/packages/about/icons/CustomFolder.vue":`<template lang="pug">
span.icon.relative
  n-icon(v-bind="$attrs" :color="baseColor")
    i-vscode-icons-default-folder.folder
  n-icon-wrapper.absolute.top-3.left-2(
    :size="14"
    :border-radius="radius ?? 0"
    v-if="typeof backgroundColor !== 'undefined'"
    :color="backgroundColor"
  )
    n-icon(size="0.75rem" :color="topColor")
      component.top(
        :is="icon"
        :class="{ 'custom-color': typeof topColor !== 'undefined' }"
      )
  n-icon.absolute.top-2.left-2(size="1rem" :color="topColor" v-else)
    component.top(
      :is="icon"
      :class="{ 'custom-color': typeof topColor !== 'undefined' }"
    )
</template>

<script lang="ts" setup>
import type { Component } from "vue"

const props = defineProps<{
  baseColor: string
  topColor?: string
  icon: Component
  backgroundColor?: string
  radius?: number
}>()
<\/script>

<style lang="sass" scoped>
.icon
  .folder
    :deep(path)
      fill: currentColor

  .top.custom-color
    :deep(path)
      fill: currentColor
</style>
`,"/packages/about/icons/file.ts":`import * as icons from "./imports"
import type { Icon } from "./types"

const fileIconsByExtension: Record<string, Icon> = {
  ts: icons.IconTypescriptOfficial,
  cts: icons.IconTypescriptOfficial,
  mts: icons.IconTypescriptOfficial,
  js: icons.IconJavascriptOfficial,
  cjs: icons.IconJavascriptOfficial,
  mjs: icons.IconJavascriptOfficial,
  json: icons.IconJson,
  lock: icons.IconYarn,
  LICENSE: icons.IconText,
  md: icons.IconMarkdown,
  html: icons.IconXml,
  css: icons.IconCss,
  sass: icons.IconScss,
  vue: icons.IconVue,
  yml: icons.IconYaml,
  ico: icons.IconImage,
  png: icons.IconImage,
  jpg: icons.IconImage,
}

function getFileIconByExtension(extension?: string): Icon {
  if (typeof extension === "undefined") {
    return icons.IconDefaultFile
  }

  return fileIconsByExtension[extension] ?? icons.IconDefaultFile
}

const testHasParent = (parentKey: string) => (_: string, key: string) =>
  key.startsWith(parentKey)
const testRegex = (regex: RegExp) => (filename: string) => regex.test(filename)
const testFilename = (name: string) => (filename: string) => name === filename
const testStartsWith = (prefix: string) => (filename: string) =>
  filename.startsWith(prefix)
const testEndsWith = (suffix: string) => (filename: string) =>
  filename.endsWith(suffix)
const specialFileIcons: [
  test: (filename: string, key: string) => boolean,
  icon: Icon
][] = [
  [testHasParent("/.github/workflows"), icons.IconFeatherCpu],
  [testRegex(/tsconfig(\\..+)?\\.json/m), icons.IconTsconfig],
  [testFilename("package.json"), icons.IconNpm],
  [testStartsWith("vite.config."), icons.IconVite],
  [testStartsWith("cypress."), icons.IconCypress],
  [testRegex(/.+\\.spec\\..+/m), icons.IconCypressSpec],
  [testEndsWith(".d.ts"), icons.IconTsconfigOfficial],
  [testStartsWith("postcss.config."), icons.IconPostcssConfig],
  [testStartsWith("tailwind.config."), icons.IconTailwind],
  [testStartsWith(".prettier"), icons.IconPrettier],
  [testStartsWith(".git"), icons.IconGit],
  [testStartsWith(".eslint"), icons.IconEslint],
  [testStartsWith(".yarn"), icons.IconYarn],
]

function getSpecialIcon(filename: string, key: string): Icon | null {
  const entry = specialFileIcons.find(([test]) => test(filename, key))

  if (typeof entry === "undefined") {
    return null
  }

  return entry[1]
}

export function getFileIcon(key: string) {
  const name = key.split("/").at(-1)

  if (typeof name === "undefined") {
    return icons.IconDefaultFile
  }

  const specialIcon = getSpecialIcon(name, key)
  if (specialIcon !== null) {
    return specialIcon
  }

  const extension = name.split(".").at(-1)
  return getFileIconByExtension(extension)
}
`,"/packages/about/icons/folder.ts":`import CustomFolder from "./CustomFolder.vue"
import * as icons from "./imports"
import { IconDefaultFolder } from "./imports"
import type { Icon } from "./types"

type IconTest = (name: string, key: string) => boolean

function createCustomRenderer(
  baseColor: string,
  icon: Icon,
  options: {
    topColor?: string
    backgroundColor?: string
    radius?: number
  } = {}
): Icon {
  return () => h(CustomFolder, { baseColor, icon, ...options })
}

const testIsKey =
  (value: string): IconTest =>
  (_, key) =>
    key === value
const testHasParent =
  (parent: string): IconTest =>
  (_, key) =>
    key.includes(parent)
const specialFolderIcons: [test: IconTest, icon: Icon][] = [
  [testIsKey("/"), icons.IconRootFolder],
  [testHasParent("cypress"), icons.IconFolderCypress],
  [testHasParent("dist"), icons.IconFolderBinary],
  [testIsKey("/packages"), icons.IconFolderApp],
  [testIsKey("/.yarn"), icons.IconFolderYarn],
  [testIsKey("/.github"), icons.IconFolderGithub],
  [testHasParent("types"), icons.IconFolderTypescript],
  [testHasParent("assets"), icons.IconFolderAsset],
  [testHasParent("icons"), icons.IconFolderImages],
  [testIsKey("/packages/about"), icons.IconFeatherInfo],
  [testIsKey("/packages/fairytome"), icons.IconFeatherBookOpen],
  [testIsKey("/packages/framework"), icons.IconFeatherCode],
  [testIsKey("/packages/home"), icons.IconFeatherHome],
  [testIsKey("/packages/utilities"), icons.IconFeatherTool],
  [
    testHasParent(".github/workflows"),
    createCustomRenderer("grey", icons.IconFeatherCpu, {
      topColor: "black",
      backgroundColor: "white",
      radius: 6,
    }),
  ],
  [testHasParent("components"), createCustomRenderer("#14622a", icons.IconVue)],
  [
    testHasParent("composables"),
    createCustomRenderer("#14622a", icons.IconVueConfig),
  ],
  [
    testHasParent("pages"),
    createCustomRenderer("#14622a", icons.IconDefaultFile, {
      topColor: "white",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }),
  ],
  [testHasParent("vite"), createCustomRenderer("#14622a", icons.IconVite)],
]

function getSpecialFolderIcon(key: string): Icon | null {
  const name = key.split("/").at(-1)

  if (typeof name === "undefined") {
    return IconDefaultFolder
  }

  const entry = specialFolderIcons.find(([test]) => test(name, key))

  if (typeof entry === "undefined") {
    return null
  }

  return entry[1]
}

export function getFolderIcon(key: string): Icon {
  return getSpecialFolderIcon(key) ?? icons.IconDefaultFolder
}
`,"/packages/about/icons/imports.ts":`export { default as IconDefaultFile } from "~icons/vscode-icons/default-file"
export { default as IconTypescriptOfficial } from "~icons/vscode-icons/file-type-typescript-official"
export { default as IconTsconfig } from "~icons/vscode-icons/file-type-tsconfig"
export { default as IconTsconfigOfficial } from "~icons/vscode-icons/file-type-tsconfig-official"
export { default as IconJavascriptOfficial } from "~icons/vscode-icons/file-type-js-official"
export { default as IconXquery } from "~icons/vscode-icons/file-type-xquery"
export { default as IconJson } from "~icons/vscode-icons/file-type-json"
export { default as IconYarn } from "~icons/vscode-icons/file-type-yarn"
export { default as IconText } from "~icons/vscode-icons/file-type-text"
export { default as IconMarkdown } from "~icons/vscode-icons/file-type-markdown"
export { default as IconXml } from "~icons/vscode-icons/file-type-xml"
export { default as IconNpm } from "~icons/vscode-icons/file-type-npm"
export { default as IconVite } from "~icons/vscode-icons/file-type-vite"
export { default as IconCypress } from "~icons/vscode-icons/file-type-cypress"
export { default as IconCypressSpec } from "~icons/vscode-icons/file-type-cypress-spec"
export { default as IconCss } from "~icons/vscode-icons/file-type-css"
export { default as IconScss } from "~icons/vscode-icons/file-type-scss"
export { default as IconVue } from "~icons/vscode-icons/file-type-vue"
export { default as IconPostcssConfig } from "~icons/vscode-icons/file-type-postcssconfig"
export { default as IconTailwind } from "~icons/vscode-icons/file-type-tailwind"
export { default as IconYaml } from "~icons/vscode-icons/file-type-yaml"
export { default as IconPrettier } from "~icons/vscode-icons/file-type-prettier"
export { default as IconGit } from "~icons/vscode-icons/file-type-git"
export { default as IconEslint } from "~icons/vscode-icons/file-type-eslint"
export { default as IconVueConfig } from "~icons/vscode-icons/file-type-vueconfig"
export { default as IconImage } from "~icons/vscode-icons/file-type-image"

export { default as IconFeatherInfo } from "~icons/feather/info"
export { default as IconFeatherBookOpen } from "~icons/feather/book-open"
export { default as IconFeatherCode } from "~icons/feather/code"
export { default as IconFeatherHome } from "~icons/feather/home"
export { default as IconFeatherTool } from "~icons/feather/tool"
export { default as IconFeatherCpu } from "~icons/feather/cpu"

export { default as IconDefaultFolder } from "~icons/vscode-icons/default-folder"
export { default as IconRootFolder } from "~icons/vscode-icons/default-root-folder"
export { default as IconFolderCypress } from "~icons/vscode-icons/folder-type-cypress"
export { default as IconFolderBinary } from "~icons/vscode-icons/folder-type-binary"
export { default as IconFolderApp } from "~icons/vscode-icons/folder-type-app"
export { default as IconFolderYarn } from "~icons/vscode-icons/folder-type-yarn"
export { default as IconFolderTypescript } from "~icons/vscode-icons/folder-type-typescript"
export { default as IconFolderAsset } from "~icons/vscode-icons/folder-type-asset"
export { default as IconFolderImages } from "~icons/vscode-icons/folder-type-images"
export { default as IconFolderGithub } from "~icons/vscode-icons/folder-type-github"
`,"/packages/about/icons/index.ts":`import { isFile, isFolder } from "../project"
import type { TreeNode } from "../project"
import { getFileIcon } from "./file"
import { getFolderIcon } from "./folder"
import { IconXquery } from "./imports"
import type { Icon } from "./types"

const ICON_UNKNOWN = IconXquery

export function getIcon(node: TreeNode): Icon {
  const { key } = node

  if (isFile(node)) {
    return getFileIcon(key)
  }

  if (isFolder(node)) {
    return getFolderIcon(key)
  }

  return ICON_UNKNOWN
}

export const getIconForFolder = getFolderIcon
export const getIconForFile = getFileIcon
`,"/packages/about/icons/types.ts":`export type Icon = typeof import("~icons/*").default
`,"/packages/about/pages/index.vue":`<template lang="pug">
.about-index.p-4.flex.w-full.h-full.overflow-hidden
  n-card.flex.flex-1.h-full.overflow-hidden(title="About this page")
    template(#header-extra)
      n-breadcrumb
        breadcrumb-item(href="/")
          template(#icon): i-feather-home
          | Home
        n-breadcrumb-item
          n-icon.mr-1: i-feather-info
          | About
    n-tabs.tabs.h-full.flex.flex-col(
      type="line"
      animated
      v-model:value="activeTab"
    )
      n-tab-pane.h-full(
        :tab="TABS['general-structure']"
        name="general-structure"
        @transitionend.self="transitionEndHandler('general-structure', $event)"
      )
        fade.flex.h-full(duration=".5s" :transition="{ mode: 'out-in' }")
          suspense(v-if="explorer !== null")
            component(:is="explorer" :key="activeTab")
        .flex.items-center.justify-center.w-full.h-full.absolute.top-0
          n-spin(size="large")
      n-tab-pane.h-full(
        :tab="TABS['vite-config']"
        name="vite-config"
        @transitionend.self="transitionEndHandler('vite-config', $event)"
      )
      n-tab-pane.h-full(
        :tab="TABS['custom-plugins']"
        name="custom-plugins"
        @transitionend.self="transitionEndHandler('custom-plugins', $event)"
      )
      n-tab-pane.h-full(
        :tab="TABS['self-host']"
        name="self-host"
        @transitionend.self="transitionEndHandler('self-host', $event)"
      )
        self-host
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import type { Component } from "vue"
import { SelfHost } from "@/about/components"
import { Fade } from "@/framework/components/transitions/index"
import { BreadcrumbItem } from "@/framework/components/ui"

const TABS = {
  "general-structure": "General structure",
  "vite-config": "Vite config",
  "custom-plugins": "Custom plugins",
  "self-host": "Self hosting this page",
}
type TabId = keyof typeof TABS

let transitionDone = $ref(true)
const activeTab = useRouteQuery<TabId>("tab", "general-structure")
watch(activeTab, () => {
  transitionDone = false
})

const explorer = shallowRef<Component | null>(null)

watch(
  () => [transitionDone, activeTab],
  () => {
    explorer.value =
      activeTab.value === "general-structure" && transitionDone
        ? defineAsyncComponent(
            () => import("@/about/components/ProjectStructureExplorer.vue")
          )
        : null
  },
  { immediate: true }
)

function transitionEndHandler(name: TabId, event: TransitionEvent): void {
  if (name === activeTab.value) {
    transitionDone = true
  }
}
<\/script>

<style lang="sass" scoped>
.about-index
  > :deep(.n-card > .n-card__content)
    height: calc(100% - 4rem)

  :deep(.tabs > .n-tabs-pane-wrapper)
    height: calc(100% - 3rem)
    overflow: visible
</style>
`,"/packages/about/structure/glob.worker.ts":`const entryImports = import.meta.globEager<string>("./entries/(*|.*)/**", {
  as: "raw",
})

export async function fetchSource(filename: string): Promise<string | null> {
  return entryImports[\`./entries\${filename}.md\`] ?? null
}
`,"/packages/about/structure/index.ts":`const globWorker = new ComlinkWorker<typeof import("./glob.worker")>(
  new URL("./glob.worker.ts", import.meta.url)
)

export function fetchEntry(key: string): Promise<any> | null {
  return globWorker.fetchSource(key)
}
`,"/packages/fairytome/components/Control.vue":`<template lang="pug">
.control
  n-form-item(v-if="control.type === 'text'" :label="label")
    n-input(v-model:value="model")
  n-form-item(
    v-if="control.type === 'range'"
    :label="\`\${label}: \${modelValue}\`"
  )
    n-slider.w-full(
      v-model:value="model"
      :min="control.min"
      :max="control.max"
      :step="control.step"
    )
  n-form-item(v-if="control.type === 'color'" :label="label")
    n-color-picker(v-model:value="model")
  n-checkbox(v-if="control.type === 'checkbox'" v-model:checked="model") {{ label }}
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core"
import { computed } from "vue"
import type { EntryOption } from "@/fairytome/entry"

const props = withDefaults(
  defineProps<{
    title: string
    control: EntryOption
    index?: number | null
    modelValue: EntryOption["initial"]
  }>(),
  { index: null }
)
const emit = defineEmits<{
  (event: "update:modelValue", value: EntryOption["initial"]): void
}>()

const model = useVModel(props, "modelValue", emit)

const label = computed(() =>
  props.index !== null
    ? \`\${props.control.label} #\${props.index}\`
    : props.control.label
)
<\/script>
`,"/packages/fairytome/components/ControlBar.vue":`<template lang="pug">
.control-bar
  template(v-for="(control, prop) in entry.controls")
    .flex.flex-row.relative(v-for="(_, index) in model[prop]" :key="index")
      control.flex-1(
        :control="control"
        :title="\`\${prop} #\${index + 1}\`"
        :index="model[prop].length > 1 ? index : null"
        :class="{ 'rounded-br-none': index === model[prop].length - 1, 'rounded-r-none': model[prop].length > 1 }"
        v-model="model[prop][index]"
      )
      template(v-if="'amount' in control")
        n-button.self-end(
          v-if="model[prop].length > 1"
          class="mb-[1.5rem]"
          @click="model[prop].splice(index, 1)"
        )
          i-feather-minus-circle.text-red-500
        n-button.absolute.right-0.bottom-0.add.rounded-t-none(
          v-if="index === model[prop].length - 1"
          @click="addControlPropEntry(prop)"
        )
          i-feather-plus-circle.text-green-600
</template>

<script lang="ts" setup>
import type { Entry } from "@/fairytome/entry"
import Control from "./Control.vue"

const props = defineProps<{
  entry: Entry
  modelValue: Record<string, any[]>
}>()
const emit = defineEmits<{
  (event: "update:modelValue", value: Record<string, unknown>): void
}>()

const model = $(useVModel(props, "modelValue", emit))
watch(
  () => props.entry,
  (current) => {
    const storedKeys = Object.keys(model)
    const currentKeys = Object.keys(current.controls)

    const keys = {
      toBeDeleted: storedKeys.filter((key) => !currentKeys.includes(key)),
      toBeAdded: currentKeys.filter((key) => !storedKeys.includes(key)),
    }

    keys.toBeDeleted.forEach((key) => {
      delete model[key]
    })

    keys.toBeAdded.forEach((key) => {
      model[key] = [current.controls[key].initial]
    })
  },
  { immediate: true }
)

function addControlPropEntry(prop: string) {
  model[prop].push(props.entry.controls[prop].initial)
}
<\/script>

<style lang="sass" scoped>
.control-bar
  button.add
    transform: translateY(.55rem)
</style>
`,"/packages/fairytome/components/Explorer.vue":`<template lang="pug">
n-form
  n-form-item(label="Package")
    n-select(
      v-model:value="currentPackage"
      :options="packages.length > 0 ? packages.map((name) => ({ label: name, value: name })) : [{ label: 'Loading...', disabled: true, value: '' }]"
      :disabled="packages.length === 0"
    )
  n-form-item(label="Entry")
    n-select(
      v-model:value="currentName"
      :options="names.length > 0 ? names.map((name) => ({ label: name, value: name })) : [{ label: 'Loading...', disabled: true, value: '' }]"
      :disabled="names.length === 0"
    )
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import { pathToEntryMeta } from "@/fairytome/entries"
import type { Entry } from "@/fairytome/entry"

const props = defineProps<{ entries: Entry[]; modelValue: Entry | null }>()
const emit = defineEmits<{
  (event: "update:modelValue", value: Entry): void
}>()
let model = $(useVModel(props, "modelValue", emit))

let currentPackage = $ref("")
let currentName = $ref("")
const routeQuery = $(useRouteQuery<string>("entry", ""))

watch(
  () => [currentPackage, currentName],
  () => {
    const newEntry = props.entries.find(
      (entry) => entry.package === currentPackage && entry.name === currentName
    )

    if (typeof newEntry === "undefined") {
      return
    }

    model = newEntry
  }
)

const packages = $computed(() => [
  ...new Set(props.entries.map((entry) => entry.package)),
])
const names = $computed(() =>
  props.entries
    .filter((entry) => entry.package === currentPackage)
    .map((entry) => entry.name)
)

watch(
  () => props.entries,
  () => {
    if (model !== null) {
      currentPackage = model.package
      currentName = model.name
    } else {
      if (props.entries.length > 0) {
        if (routeQuery.length > 0) {
          const meta = pathToEntryMeta(routeQuery)
          currentPackage = meta.package
          currentName = meta.name
        } else {
          currentPackage = props.entries[0].package
          currentName = props.entries[0].name
        }
      }
    }
  },
  { immediate: true }
)
<\/script>
`,"/packages/fairytome/components/index.ts":`export { default as Control } from "./Control.vue"
export { default as ControlBar } from "./ControlBar.vue"
export { default as Explorer } from "./Explorer.vue"
`,"/packages/fairytome/pages/index.vue":`<template lang="pug">
.fairytome-index.flex.p-4.gap-4.text-white.w-full.h-full
  .flex.flex-1.flex-col.gap-4(class="min-w-[20rem]")
    n-card(title="Fairytome")
      template(#header-extra)
        n-breadcrumb
          breadcrumb-item(href="/")
            template(#icon): i-feather-home
            | Home
          breadcrumb-item
            template(#icon): i-feather-book-open
      explorer(:entries="entries" v-model="chosenEntry")
    n-card.flex-1.flex.flex-col.overflow-hidden
      control-bar(
        v-if="chosenEntry !== null"
        :entry="chosenEntry"
        v-model="controlProps.value"
      )
      .placeholder.w-full.h-full.flex.justify-center.align-center(v-else)
        n-spin(size="large")
  n-card.stage.overflow-hidden.flex.flex-col.align-center.justify-center(
    class="flex-[3]"
  )
    component(
      v-if="chosenEntry !== null"
      :is="chosenEntry.component"
      v-bind="controlPropsUnpacked"
    )
    .placeholder.w-full.h-full.flex.justify-center.align-center(v-else)
      n-spin(size="large")
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import { ControlBar, Explorer } from "@/fairytome/components"
import { useEntries } from "@/fairytome/entries"
import type { Entry } from "@/fairytome/entry"
import { BreadcrumbItem } from "@/framework/components/ui"

const { entries } = toRefs(useEntries())
const packages = computed(() => [
  ...new Set(entries.value.map((entry) => entry.package)),
])

const options = computed(() =>
  entries.value.map((entry) => ({ label: entry.name, value: entry.name }))
)

let chosenEntry = $ref<Entry | null>(null)
let entryRouteQuery = $(useRouteQuery<string>("entry", ""))

watch(
  () => chosenEntry,
  () => {
    entryRouteQuery = \`\${chosenEntry?.package}/\${chosenEntry?.path}/\${chosenEntry?.name}\`
  }
)

const controlProps = computed(() =>
  useLocalStorage(
    \`FAIRYTOME_\${chosenEntry?.package}_\${chosenEntry?.path}_\${chosenEntry?.name}\`,
    {} as Record<string, any[]>
  )
)
const controlPropsUnpacked = computed(() =>
  Object.fromEntries([
    ...Object.entries(controlProps.value.value).map(([prop, value]) => {
      if (chosenEntry === null) {
        return [prop, value]
      }

      const control = chosenEntry.controls[prop]

      if (
        typeof control !== "undefined" &&
        "amount" in control &&
        value.length > 1
      ) {
        return [prop, value]
      }

      return [prop, value[0]]
    }),
    ...Object.entries(chosenEntry?.overrides ?? {}),
  ])
)
<\/script>

<style lang="sass" scoped>
.fairytome-index
  .placeholder
    background: rgba(0, 0, 0, 0.3)
    transform: scale(1.5)

  .stage
    > :deep(.p-4)
      height: 100%

    > :deep(.n-card__content)
      max-height: 100%

      > *
        max-height: 100%
</style>
`,"/packages/framework/assets/style.css":`@tailwind base;
@tailwind components;
@tailwind utilities;
`,"/packages/framework/assets/transitions.sass":`.fade
  &-enter-active, &-leave-active
    transition: opacity var(--transition-fade-duration, 1s)

  &-enter-from, &-leave-to
    opacity: 0
`,"/packages/framework/components/Background.entry.ts":`import { createEntry } from "@/fairytome/entry"
import Background from "./Background.vue"

export const entry = createEntry<Background>({
  component: Background,
  controls: {
    blobAmount: {
      label: "Number of blobs",
      type: "range",
      min: 1,
      max: 20,
      initial: 1,
    },
    velocityCoefficient: {
      label: "Velocity coefficient",
      type: "range",
      min: 0,
      max: 10,
      step: 0.01,
      initial: 1,
    },
  },
})
`,"/packages/framework/components/Background.vue":`<template lang="pug">
.background.w-full.h-full.overflow-hidden
  background-blob.blob(
    v-if="blobs.length > 0"
    v-for="({ scaledPosition, outOfFrame }, index) in blobs"
    :class="{ 'out-of-frame': outOfFrame }"
    :color="[palette[index % palette.length][1], palette[index % palette.length][0], palette[index % palette.length][2]]"
    :rotation-speed="1"
    :style="{ '--left': \`\${scaledPosition[0]}\`, '--top': \`\${scaledPosition[1]}\`, '--size': BLOB_SIZE_PERCENTAGE }"
  )
</template>

<script lang="ts" setup>
import { randomAround, randomBetween } from "@/utilities/math"
import BackgroundBlob from "./background/SvgBlob.vue"
import { PALETTE } from "./provide"

const props = withDefaults(
  defineProps<{ blobAmount: number; velocityCoefficient?: number }>(),
  {
    velocityCoefficient: 1,
  }
)
let blobs = $ref<
  {
    position: [x: number, y: number]
    velocity: [x: number, y: number]
    scaledPosition: [x: number, y: number]
  }[]
>([])

const palette = $(inject(PALETTE))

const BLOB_SIZE_PERCENTAGE = 0.2
watch(
  () => props.blobAmount,
  (length) => {
    blobs = Array.from({ length }, (_, i) => ({
      position: [randomBetween(), randomBetween()],
      velocity: [randomAround(-0.01, 0.005), randomAround(-0.012, 0.005)],
      scaledPosition: reactiveComputed(() => [
        (blobs[i]?.position ?? [0, 0])[0] * (1 + BLOB_SIZE_PERCENTAGE * 2.5) -
          BLOB_SIZE_PERCENTAGE * 1.25,
        (blobs[i]?.position ?? [0, 0])[1] * (1 + BLOB_SIZE_PERCENTAGE * 2.5) -
          BLOB_SIZE_PERCENTAGE * 1.25,
      ]),
      outOfFrame: computed(
        () =>
          blobs[i].scaledPosition[0] < -BLOB_SIZE_PERCENTAGE ||
          blobs[i].scaledPosition[0] > 1 ||
          blobs[i].scaledPosition[1] < -BLOB_SIZE_PERCENTAGE ||
          blobs[i].scaledPosition[1] > 1
      ),
    }))
  },
  { immediate: true }
)

const DELTA_COEFFICIENT = 1 / 1e3
let lastTimestamp = 0
function render() {
  const now = Date.now()
  const delta = lastTimestamp === 0 ? 0 : now - lastTimestamp
  lastTimestamp = now

  blobs.forEach((blob) => {
    blob.position[0] +=
      blob.velocity[0] * (delta * DELTA_COEFFICIENT) * props.velocityCoefficient
    if (blob.position[0] < 0) {
      blob.position[0] = 1
    }
    if (blob.position[0] > 1) {
      blob.position[0] = 0
    }

    blob.position[1] +=
      blob.velocity[1] * (delta * DELTA_COEFFICIENT) * props.velocityCoefficient
    if (blob.position[1] < 0) {
      blob.position[1] = 1
    }
    if (blob.position[1] > 1) {
      blob.position[1] = 0
    }
  })
}

useRafFn(render)
<\/script>

<style lang="sass" scoped>
.background
  background: linear-gradient(240deg, var(--theme-color0-lighter), var(--theme-color0), var(--theme-color0-darker))

  .blob
    position: absolute
    top: 0
    left: 0
    width: calc(100% * var(--size))
    height: calc(100% * var(--size))
    transform: translate(calc(var(--left, 0) * 100vw), calc(var(--top, 0) * 100vh))

    &:not(.out-of-frame)
      transition: transform linear 0.1s
</style>
`,"/packages/framework/components/Palette.entry.vue":`<template lang="pug">
palette(v-slot="{ colors }")
  n-table
    thead
      tr
        th Index
        th Color
        th Lighter
        th Darker
    tbody
      tr(
        v-for="([normal, lighter, darker], index) in colors"
        :key="index"
        :data-index="index"
      )
        td(class="w-[3rem]") \\#{{ index }}
        td(:style="{ background: normal }")
        td(:style="{ background: lighter }")
        td(:style="{ background: darker }")
</template>

<script lang="ts" setup>
import Palette from "./Palette.vue"
<\/script>

<script lang="ts">
import { createEntry } from "@/fairytome/entry"
import PaletteComponent from "./Palette.vue"

export const entry = createEntry<PaletteComponent>({
  component: PaletteComponent,
  controls: {
    seed: {
      type: "text",
      label: "Seed",
      initial: Date.now().toString(),
    },
    saturate: {
      type: "range",
      label: "Post: Saturation",
      min: -5,
      max: 5,
      initial: 0,
    },
  },
})
<\/script>
`,"/packages/framework/components/Palette.vue":`<template lang="pug">
slot(:colors="palette")
</template>

<script lang="ts" setup>
import chroma from "chroma-js"
import hue from "iwanthue"
import { PALETTE_COLOR_COUNT } from "@/framework/constants"
import { PALETTE } from "./provide"

const props = withDefaults(
  defineProps<{ seed: string; saturate?: number; offset?: number }>(),
  {
    saturate: 0,
    offset: 0,
  }
)

const totalOffset = $computed(() => props.offset % PALETTE_COLOR_COUNT)

const palette = $computed(() => {
  const colors = hue(PALETTE_COLOR_COUNT, {
    colorSpace: "pimp",
    seed: props.seed,
  }).map((color) => [
    chroma(color).saturate(props.saturate).hex(),
    chroma(color).brighten().saturate(props.saturate).hex(),
    chroma(color).darken().saturate(props.saturate).hex(),
  ])

  return [...colors.slice(totalOffset), ...colors.slice(0, totalOffset)]
})

provide(PALETTE, $$(palette))

onMounted(() => {
  const element = useCurrentElement<HTMLElement>()
  const container = computed(() => {
    if (element.value.nodeType === Node.TEXT_NODE) {
      return element.value.parentElement
    }

    return element.value
  })

  const themeColorsVariable = useCssVar("--theme-colors", container)
  themeColorsVariable.value = Array.from(
    { length: PALETTE_COLOR_COUNT },
    (_, i) => [
      \`--theme-color\${i}\`,
      \`--theme-color\${i}-lighter\`,
      \`--theme-color\${i}-darker\`,
    ]
  )
    .flat()
    .join(", ")

  const styleVariables = Array.from(
    { length: PALETTE_COLOR_COUNT },
    (_, index) => [
      useCssVar(\`--theme-color\${index}\`, container),
      useCssVar(\`--theme-color\${index}-lighter\`, container),
      useCssVar(\`--theme-color\${index}-darker\`, container),
    ]
  )

  watch(
    $$(palette),
    () =>
      palette.forEach(([normal, lighter, darker], index) => {
        styleVariables[index][0].value = normal
        styleVariables[index][1].value = lighter
        styleVariables[index][2].value = darker
      }),
    { immediate: true }
  )
})
<\/script>

<style>
@property --theme-color0-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color0 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color0-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color1-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color1 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color1-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color2-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color2 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color2-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color3-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color3 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color3-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color4-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color4 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color4-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color5-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color5 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color5-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color6-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color6 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color6-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color7-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color7 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color7-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}
</style>
`,"/packages/framework/components/index.ts":`export { default as Background } from "./Background.vue"
export { default as Palette } from "./Palette.vue"
export * as provide from "./provide"
`,"/packages/framework/components/provide.ts":`export const PALETTE = Symbol("palette provider")
`,"/packages/framework/composables/background.ts":`import type { MaybeRef } from "@vueuse/core"
import merge from "ts-deepmerge"
import type { PartialDeep } from "type-fest"
import { randomAround } from "@/utilities/math"
import type { RandomJitter } from "@/utilities/math"

type Point = [x: number, y: number]
export type BezierControl = Point
export type BezierControls = [start: BezierControl, end: BezierControl]

export type BezierControlPointsOptions = {
  jitter: {
    offset: RandomJitter
    coefficient: RandomJitter
  }
  amplitude: MaybeRef<number>
  segments: MaybeRef<number>
}

const POINTS_PER_SEGMENT = 2
const BEZIER_OFFSET = 1.157
const bezierControlPointOptions = readonly<BezierControlPointsOptions>({
  jitter: {
    offset: 0.1,
    coefficient: 0.05,
  },
  amplitude: 0.1,
  segments: 4,
})
export function useBezierControlPoints(
  time: MaybeRef<number>,
  options: PartialDeep<BezierControlPointsOptions> = {}
): Readonly<BezierControls[]> {
  const { jitter, amplitude, segments } = merge(
    {},
    bezierControlPointOptions,
    options
  )

  const baseControlPoints: Readonly<[Point, Point][]> = reactiveComputed(() => {
    const angle = (2 * Math.PI) / (unref(segments) * (POINTS_PER_SEGMENT + 1))

    return Array.from(
      { length: unref(segments) },
      (_, i) =>
        Array.from({ length: POINTS_PER_SEGMENT }, (_, j) => [
          Math.cos(angle * (i * (POINTS_PER_SEGMENT + 1) + j + 1)) *
            BEZIER_OFFSET,
          Math.sin(angle * (i * (POINTS_PER_SEGMENT + 1) + j + 1)) *
            BEZIER_OFFSET,
        ]) as [Point, Point]
    )
  })

  const offsets: typeof baseControlPoints = reactiveComputed(() =>
    Array.from({ length: unref(segments) }, (_, index) => {
      const baseValue = (index + 1) / (unref(segments) + 1)
      return [
        [
          randomAround(baseValue - 0.05, jitter.offset),
          randomAround(baseValue - 0.05, jitter.offset),
        ],
        [
          randomAround(baseValue + 0.05, jitter.offset),
          randomAround(baseValue + 0.05, jitter.offset),
        ],
      ]
    })
  )

  const coefficients: typeof baseControlPoints = reactiveComputed(() =>
    Array.from({ length: unref(segments) }, () => [
      [
        randomAround(1, jitter.coefficient),
        randomAround(1, jitter.coefficient),
      ],
      [
        randomAround(1, jitter.coefficient),
        randomAround(1, jitter.coefficient),
      ],
    ])
  )

  return reactiveComputed(() =>
    baseControlPoints
      .map(([start, end], index) => [
        [
          start[0] +
            Math.sin(
              unref(time) * coefficients[index][0][0] + offsets[index][0][0]
            ) *
              unref(amplitude),
          start[1] +
            Math.sin(
              unref(time) * coefficients[index][0][1] + offsets[index][0][1]
            ) *
              unref(amplitude),
        ],
        [
          end[0] +
            Math.sin(
              unref(time) * coefficients[index][1][0] + offsets[index][1][0]
            ) *
              unref(amplitude),
          end[1] +
            Math.sin(
              unref(time) * coefficients[index][1][1] + offsets[index][1][1]
            ) *
              unref(amplitude),
        ],
      ])
      .map(([start, end]) => [
        [(start[0] + 1) / 2, (start[1] + 1) / 2],
        [(end[0] + 1) / 2, (end[1] + 1) / 2],
      ])
  )
}
`,"/packages/framework/types/auto-import.d.ts":`// Generated by 'unplugin-auto-import'
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const asyncComputed: typeof import('@vueuse/core')['asyncComputed']
  const autoResetRef: typeof import('@vueuse/core')['autoResetRef']
  const computed: typeof import('vue')['computed']
  const computedAsync: typeof import('@vueuse/core')['computedAsync']
  const computedEager: typeof import('@vueuse/core')['computedEager']
  const computedInject: typeof import('@vueuse/core')['computedInject']
  const computedWithControl: typeof import('@vueuse/core')['computedWithControl']
  const controlledComputed: typeof import('@vueuse/core')['controlledComputed']
  const controlledRef: typeof import('@vueuse/core')['controlledRef']
  const createApp: typeof import('vue')['createApp']
  const createEventHook: typeof import('@vueuse/core')['createEventHook']
  const createGlobalState: typeof import('@vueuse/core')['createGlobalState']
  const createInjectionState: typeof import('@vueuse/core')['createInjectionState']
  const createReactiveFn: typeof import('@vueuse/core')['createReactiveFn']
  const createSharedComposable: typeof import('@vueuse/core')['createSharedComposable']
  const createUnrefFn: typeof import('@vueuse/core')['createUnrefFn']
  const customRef: typeof import('vue')['customRef']
  const debouncedRef: typeof import('@vueuse/core')['debouncedRef']
  const debouncedWatch: typeof import('@vueuse/core')['debouncedWatch']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const eagerComputed: typeof import('@vueuse/core')['eagerComputed']
  const effectScope: typeof import('vue')['effectScope']
  const extendRef: typeof import('@vueuse/core')['extendRef']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const h: typeof import('vue')['h']
  const ignorableWatch: typeof import('@vueuse/core')['ignorableWatch']
  const inject: typeof import('vue')['inject']
  const isDefined: typeof import('@vueuse/core')['isDefined']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const logicAnd: typeof import('@vueuse/core')['logicAnd']
  const logicNot: typeof import('@vueuse/core')['logicNot']
  const logicOr: typeof import('@vueuse/core')['logicOr']
  const makeDestructurable: typeof import('@vueuse/core')['makeDestructurable']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onClickOutside: typeof import('@vueuse/core')['onClickOutside']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onKeyStroke: typeof import('@vueuse/core')['onKeyStroke']
  const onLongPress: typeof import('@vueuse/core')['onLongPress']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onStartTyping: typeof import('@vueuse/core')['onStartTyping']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const pausableWatch: typeof import('@vueuse/core')['pausableWatch']
  const provide: typeof import('vue')['provide']
  const reactify: typeof import('@vueuse/core')['reactify']
  const reactifyObject: typeof import('@vueuse/core')['reactifyObject']
  const reactive: typeof import('vue')['reactive']
  const reactiveComputed: typeof import('@vueuse/core')['reactiveComputed']
  const reactiveOmit: typeof import('@vueuse/core')['reactiveOmit']
  const reactivePick: typeof import('@vueuse/core')['reactivePick']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const refAutoReset: typeof import('@vueuse/core')['refAutoReset']
  const refDebounced: typeof import('@vueuse/core')['refDebounced']
  const refDefault: typeof import('@vueuse/core')['refDefault']
  const refThrottled: typeof import('@vueuse/core')['refThrottled']
  const refWithControl: typeof import('@vueuse/core')['refWithControl']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const syncRef: typeof import('@vueuse/core')['syncRef']
  const syncRefs: typeof import('@vueuse/core')['syncRefs']
  const templateRef: typeof import('@vueuse/core')['templateRef']
  const throttledRef: typeof import('@vueuse/core')['throttledRef']
  const throttledWatch: typeof import('@vueuse/core')['throttledWatch']
  const toRaw: typeof import('vue')['toRaw']
  const toReactive: typeof import('@vueuse/core')['toReactive']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const triggerRef: typeof import('vue')['triggerRef']
  const tryOnBeforeMount: typeof import('@vueuse/core')['tryOnBeforeMount']
  const tryOnBeforeUnmount: typeof import('@vueuse/core')['tryOnBeforeUnmount']
  const tryOnMounted: typeof import('@vueuse/core')['tryOnMounted']
  const tryOnScopeDispose: typeof import('@vueuse/core')['tryOnScopeDispose']
  const tryOnUnmounted: typeof import('@vueuse/core')['tryOnUnmounted']
  const unref: typeof import('vue')['unref']
  const unrefElement: typeof import('@vueuse/core')['unrefElement']
  const until: typeof import('@vueuse/core')['until']
  const useActiveElement: typeof import('@vueuse/core')['useActiveElement']
  const useAsyncQueue: typeof import('@vueuse/core')['useAsyncQueue']
  const useAsyncState: typeof import('@vueuse/core')['useAsyncState']
  const useAttrs: typeof import('vue')['useAttrs']
  const useBase64: typeof import('@vueuse/core')['useBase64']
  const useBattery: typeof import('@vueuse/core')['useBattery']
  const useBreakpoints: typeof import('@vueuse/core')['useBreakpoints']
  const useBroadcastChannel: typeof import('@vueuse/core')['useBroadcastChannel']
  const useBrowserLocation: typeof import('@vueuse/core')['useBrowserLocation']
  const useCached: typeof import('@vueuse/core')['useCached']
  const useClamp: typeof import('@vueuse/core')['useClamp']
  const useClipboard: typeof import('@vueuse/core')['useClipboard']
  const useColorMode: typeof import('@vueuse/core')['useColorMode']
  const useConfirmDialog: typeof import('@vueuse/core')['useConfirmDialog']
  const useCounter: typeof import('@vueuse/core')['useCounter']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVar: typeof import('@vueuse/core')['useCssVar']
  const useCssVars: typeof import('vue')['useCssVars']
  const useCurrentElement: typeof import('@vueuse/core')['useCurrentElement']
  const useCycleList: typeof import('@vueuse/core')['useCycleList']
  const useDark: typeof import('@vueuse/core')['useDark']
  const useDateFormat: typeof import('@vueuse/core')['useDateFormat']
  const useDebounce: typeof import('@vueuse/core')['useDebounce']
  const useDebounceFn: typeof import('@vueuse/core')['useDebounceFn']
  const useDebouncedRefHistory: typeof import('@vueuse/core')['useDebouncedRefHistory']
  const useDeviceMotion: typeof import('@vueuse/core')['useDeviceMotion']
  const useDeviceOrientation: typeof import('@vueuse/core')['useDeviceOrientation']
  const useDevicePixelRatio: typeof import('@vueuse/core')['useDevicePixelRatio']
  const useDevicesList: typeof import('@vueuse/core')['useDevicesList']
  const useDisplayMedia: typeof import('@vueuse/core')['useDisplayMedia']
  const useDocumentVisibility: typeof import('@vueuse/core')['useDocumentVisibility']
  const useDraggable: typeof import('@vueuse/core')['useDraggable']
  const useElementBounding: typeof import('@vueuse/core')['useElementBounding']
  const useElementByPoint: typeof import('@vueuse/core')['useElementByPoint']
  const useElementHover: typeof import('@vueuse/core')['useElementHover']
  const useElementSize: typeof import('@vueuse/core')['useElementSize']
  const useElementVisibility: typeof import('@vueuse/core')['useElementVisibility']
  const useEventBus: typeof import('@vueuse/core')['useEventBus']
  const useEventListener: typeof import('@vueuse/core')['useEventListener']
  const useEventSource: typeof import('@vueuse/core')['useEventSource']
  const useEyeDropper: typeof import('@vueuse/core')['useEyeDropper']
  const useFavicon: typeof import('@vueuse/core')['useFavicon']
  const useFetch: typeof import('@vueuse/core')['useFetch']
  const useFileSystemAccess: typeof import('@vueuse/core')['useFileSystemAccess']
  const useFocus: typeof import('@vueuse/core')['useFocus']
  const useFocusWithin: typeof import('@vueuse/core')['useFocusWithin']
  const useFps: typeof import('@vueuse/core')['useFps']
  const useFullscreen: typeof import('@vueuse/core')['useFullscreen']
  const useGamepad: typeof import('@vueuse/core')['useGamepad']
  const useGeolocation: typeof import('@vueuse/core')['useGeolocation']
  const useIdle: typeof import('@vueuse/core')['useIdle']
  const useInfiniteScroll: typeof import('@vueuse/core')['useInfiniteScroll']
  const useIntersectionObserver: typeof import('@vueuse/core')['useIntersectionObserver']
  const useInterval: typeof import('@vueuse/core')['useInterval']
  const useIntervalFn: typeof import('@vueuse/core')['useIntervalFn']
  const useKeyModifier: typeof import('@vueuse/core')['useKeyModifier']
  const useLastChanged: typeof import('@vueuse/core')['useLastChanged']
  const useLocalStorage: typeof import('@vueuse/core')['useLocalStorage']
  const useMagicKeys: typeof import('@vueuse/core')['useMagicKeys']
  const useManualRefHistory: typeof import('@vueuse/core')['useManualRefHistory']
  const useMediaControls: typeof import('@vueuse/core')['useMediaControls']
  const useMediaQuery: typeof import('@vueuse/core')['useMediaQuery']
  const useMemoize: typeof import('@vueuse/core')['useMemoize']
  const useMemory: typeof import('@vueuse/core')['useMemory']
  const useMounted: typeof import('@vueuse/core')['useMounted']
  const useMouse: typeof import('@vueuse/core')['useMouse']
  const useMouseInElement: typeof import('@vueuse/core')['useMouseInElement']
  const useMousePressed: typeof import('@vueuse/core')['useMousePressed']
  const useMutationObserver: typeof import('@vueuse/core')['useMutationObserver']
  const useNavigatorLanguage: typeof import('@vueuse/core')['useNavigatorLanguage']
  const useNetwork: typeof import('@vueuse/core')['useNetwork']
  const useNow: typeof import('@vueuse/core')['useNow']
  const useOffsetPagination: typeof import('@vueuse/core')['useOffsetPagination']
  const useOnline: typeof import('@vueuse/core')['useOnline']
  const usePageLeave: typeof import('@vueuse/core')['usePageLeave']
  const useParallax: typeof import('@vueuse/core')['useParallax']
  const usePermission: typeof import('@vueuse/core')['usePermission']
  const usePointer: typeof import('@vueuse/core')['usePointer']
  const usePointerSwipe: typeof import('@vueuse/core')['usePointerSwipe']
  const usePreferredColorScheme: typeof import('@vueuse/core')['usePreferredColorScheme']
  const usePreferredDark: typeof import('@vueuse/core')['usePreferredDark']
  const usePreferredLanguages: typeof import('@vueuse/core')['usePreferredLanguages']
  const useRafFn: typeof import('@vueuse/core')['useRafFn']
  const useRefHistory: typeof import('@vueuse/core')['useRefHistory']
  const useResizeObserver: typeof import('@vueuse/core')['useResizeObserver']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useScreenOrientation: typeof import('@vueuse/core')['useScreenOrientation']
  const useScreenSafeArea: typeof import('@vueuse/core')['useScreenSafeArea']
  const useScriptTag: typeof import('@vueuse/core')['useScriptTag']
  const useScroll: typeof import('@vueuse/core')['useScroll']
  const useScrollLock: typeof import('@vueuse/core')['useScrollLock']
  const useSessionStorage: typeof import('@vueuse/core')['useSessionStorage']
  const useShare: typeof import('@vueuse/core')['useShare']
  const useSlots: typeof import('vue')['useSlots']
  const useSpeechRecognition: typeof import('@vueuse/core')['useSpeechRecognition']
  const useSpeechSynthesis: typeof import('@vueuse/core')['useSpeechSynthesis']
  const useStorage: typeof import('@vueuse/core')['useStorage']
  const useStorageAsync: typeof import('@vueuse/core')['useStorageAsync']
  const useStyleTag: typeof import('@vueuse/core')['useStyleTag']
  const useSwipe: typeof import('@vueuse/core')['useSwipe']
  const useTemplateRefsList: typeof import('@vueuse/core')['useTemplateRefsList']
  const useTextSelection: typeof import('@vueuse/core')['useTextSelection']
  const useThrottle: typeof import('@vueuse/core')['useThrottle']
  const useThrottleFn: typeof import('@vueuse/core')['useThrottleFn']
  const useThrottledRefHistory: typeof import('@vueuse/core')['useThrottledRefHistory']
  const useTimeAgo: typeof import('@vueuse/core')['useTimeAgo']
  const useTimeout: typeof import('@vueuse/core')['useTimeout']
  const useTimeoutFn: typeof import('@vueuse/core')['useTimeoutFn']
  const useTimeoutPoll: typeof import('@vueuse/core')['useTimeoutPoll']
  const useTimestamp: typeof import('@vueuse/core')['useTimestamp']
  const useTitle: typeof import('@vueuse/core')['useTitle']
  const useToggle: typeof import('@vueuse/core')['useToggle']
  const useTransition: typeof import('@vueuse/core')['useTransition']
  const useUrlSearchParams: typeof import('@vueuse/core')['useUrlSearchParams']
  const useUserMedia: typeof import('@vueuse/core')['useUserMedia']
  const useVModel: typeof import('@vueuse/core')['useVModel']
  const useVModels: typeof import('@vueuse/core')['useVModels']
  const useVibrate: typeof import('@vueuse/core')['useVibrate']
  const useVirtualList: typeof import('@vueuse/core')['useVirtualList']
  const useWakeLock: typeof import('@vueuse/core')['useWakeLock']
  const useWebNotification: typeof import('@vueuse/core')['useWebNotification']
  const useWebSocket: typeof import('@vueuse/core')['useWebSocket']
  const useWebWorker: typeof import('@vueuse/core')['useWebWorker']
  const useWebWorkerFn: typeof import('@vueuse/core')['useWebWorkerFn']
  const useWindowFocus: typeof import('@vueuse/core')['useWindowFocus']
  const useWindowScroll: typeof import('@vueuse/core')['useWindowScroll']
  const useWindowSize: typeof import('@vueuse/core')['useWindowSize']
  const watch: typeof import('vue')['watch']
  const watchAtMost: typeof import('@vueuse/core')['watchAtMost']
  const watchDebounced: typeof import('@vueuse/core')['watchDebounced']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchIgnorable: typeof import('@vueuse/core')['watchIgnorable']
  const watchOnce: typeof import('@vueuse/core')['watchOnce']
  const watchPausable: typeof import('@vueuse/core')['watchPausable']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
  const watchThrottled: typeof import('@vueuse/core')['watchThrottled']
  const watchWithFilter: typeof import('@vueuse/core')['watchWithFilter']
  const whenever: typeof import('@vueuse/core')['whenever']
}
`,"/packages/framework/types/components.d.ts":`// generated by unplugin-vue-components
// We suggest you to commit this file into source control
// Read more: https://github.com/vuejs/vue-next/pull/3399
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    IFeatherBookOpen: typeof import('~icons/feather/book-open')['default']
    IFeatherDownload: typeof import('~icons/feather/download')['default']
    IFeatherFileText: typeof import('~icons/feather/file-text')['default']
    IFeatherHome: typeof import('~icons/feather/home')['default']
    IFeatherInfo: typeof import('~icons/feather/info')['default']
    IFeatherMinusCircle: typeof import('~icons/feather/minus-circle')['default']
    IFeatherPlusCircle: typeof import('~icons/feather/plus-circle')['default']
    IVscodeIconsDefaultFolder: typeof import('~icons/vscode-icons/default-folder')['default']
    NA: typeof import('naive-ui')['NA']
    NBreadcrumb: typeof import('naive-ui')['NBreadcrumb']
    NBreadcrumbItem: typeof import('naive-ui')['NBreadcrumbItem']
    NButton: typeof import('naive-ui')['NButton']
    NCard: typeof import('naive-ui')['NCard']
    NCheckbox: typeof import('naive-ui')['NCheckbox']
    NColorPicker: typeof import('naive-ui')['NColorPicker']
    NForm: typeof import('naive-ui')['NForm']
    NFormItem: typeof import('naive-ui')['NFormItem']
    NH1: typeof import('naive-ui')['NH1']
    NH2: typeof import('naive-ui')['NH2']
    NIcon: typeof import('naive-ui')['NIcon']
    NIconWrapper: typeof import('naive-ui')['NIconWrapper']
    NInput: typeof import('naive-ui')['NInput']
    NLi: typeof import('naive-ui')['NLi']
    NP: typeof import('naive-ui')['NP']
    NSelect: typeof import('naive-ui')['NSelect']
    NSlider: typeof import('naive-ui')['NSlider']
    NSpin: typeof import('naive-ui')['NSpin']
    NSwitch: typeof import('naive-ui')['NSwitch']
    NTable: typeof import('naive-ui')['NTable']
    NTabPane: typeof import('naive-ui')['NTabPane']
    NTabs: typeof import('naive-ui')['NTabs']
    NTree: typeof import('naive-ui')['NTree']
    NUl: typeof import('naive-ui')['NUl']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}

export {}
`,"/packages/home/components/AppTile.vue":`<template lang="pug">
router-link.inline-block(:to="href")
  n-card.app-tile.w-min(:title="title" :hoverable="true")
    template(#header-extra v-if="$slots.icon")
      n-icon.ml-4(size="24")
        slot(name="icon")
    slot
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  href: string
}>()
<\/script>

<style lang="sass" scoped>
.app-tile
  min-width: 15rem
</style>
`,"/packages/home/components/index.ts":`export { default as AppTile } from "./AppTile.vue"
`,"/packages/home/pages/index.vue":`<template lang="pug">
.index.p-4.w-full
  .apps
    app-tile(title="Fairytome" href="/fairytome")
      template(#icon): i-feather-book-open
      | Storybook-like component playground
    app-tile(title="About" href="/about")
      template(#icon): i-feather-info
      | Information about this page
</template>

<script lang="ts" setup>
import { AppTile } from "@/home/components"
<\/script>

<style lang="sass" scoped>
.apps
  > *
    margin-right: 1rem
    margin-bottom: 1rem
</style>
`,"/packages/utilities/composables/component.ts":`import { ref, onMounted, onBeforeUnmount, type Ref } from "vue"

export function useIsAlive(): Ref<boolean> {
  const isAlive = ref(false)

  onMounted(() => {
    isAlive.value = true
  })

  onBeforeUnmount(() => {
    isAlive.value = false
  })

  return isAlive
}
`,"/packages/utilities/vite/index.ts":`import * as pages from "./pages"
import * as plugins from "./plugins"

export default { pages, plugins }
`,"/packages/utilities/vite/pages.ts":`import glob from "glob"

export function fetchDirs(basePackage = "home") {
  const pageFolders = glob.sync("packages/*/pages")
  return pageFolders.map((folder: string) => {
    const packageName = folder.split("/")[1]

    return {
      dir: folder,
      baseRoute: packageName === basePackage ? "" : packageName,
    }
  })
}
`,"/packages/about/structure/entries/index.html.md":`## \`index.html\`

Entry point for all processes:
* dev
* build
* more examples
`,"/packages/framework/assets/public/favicon.ico":"\0\0\0\0  \0\0\0 \0\uFFFD\0\0\0\0\0(\0\0\0 \0\0\0@\0\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA3\uFFFD\uFFFDA3\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\v\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\v\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAZ\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAZ\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\u0243\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u0243\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAz\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAz\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA.\uFFFD\uFFFDA\u07C3\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u07C3\uFFFDA.\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAH\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAH\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAf\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAf\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA \uFFFD\uFFFDA\u0483\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u0483\uFFFDA \uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD|\uFFFD?\uFFFD|\uFFFD?\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA7\uFFFD\uFFFDA\u60F8A\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDjl9\uFFFDjl9\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u60F8A7\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA	\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDw\uFFFD=\uFFFD_L5\uFFFD_L5\uFFFDw\uFFFD=\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA	\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAR\uFFFD\uFFFDA\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFD@\uFFFDfa8\uFFFD^H5\uFFFD^H5\uFFFDfa8\uFFFD\uFFFD\uFFFD@\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDAR\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\x83\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDr\uFFFD<\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFDr\uFFFD<\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\x83\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAq\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD}\uFFFD?\uFFFDcW7\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDcW7\uFFFD}\uFFFD?\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAq\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA(\uFFFD\uFFFDA\u0683\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDmv:\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDmv:\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u0683\uFFFDA(\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDy\uFFFD>\uFFFD`P6\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFD`P6\uFFFDy\uFFFD>\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA@\uFFFD\uFFFDA\uC0F8A\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFD@\uFFFDii9\uFFFD]G5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD]G5\uFFFDii9\uFFFD\uFFFD\uFFFD@\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uC0F8A@\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\r\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDu\uFFFD=\uFFFD_K5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_K5\uFFFDu\uFFFD=\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\r\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA]\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\x7F\uFFFD@\uFFFDe]7\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^J5\uFFFD^J5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDe]7\uFFFD\x7F\uFFFD@\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA]\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\x1B\uFFFD\uFFFDA\u0303\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDp\x7F;\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_L5n_L5n^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFDp\x7F;\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u0303\uFFFDA\x1B\uFFFD\uFFFDA\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA}\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD|\uFFFD?\uFFFDbT6\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_J5\uFFFDaP6aP6_J5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDbT6\uFFFD|\uFFFD?\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA}\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA/\uFFFD\uFFFDA\u10F8A\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDlq9\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_L5P^H5\0^H5\0_L5P^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDlq9\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u10F8A/\uFFFD\uFFFDA\0\uFFFD\uFFFDA\x07\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDx\uFFFD=\uFFFD`N6\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_K5\uFFFDbT7\baQ6\0aQ6\0bT7\b_K5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD`N6\uFFFDx\uFFFD=\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\x07\uFFFD\uFFFDAW\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFD@\uFFFDgd8\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^J5\uFFFD`M65_K5\0jf9\0jf9\0_K5\0`M65^J5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDgd8\uFFFD\uFFFD\uFFFD@\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAW\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u0203\uFFFDA\u0183\uFFFDA\u0183\uFFFDA\u0184\uFFFDA\uFFFDv\uFFFD=\uFFFD_K5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_K5uha9bS7\0\0\0\0\0\0\0\0\0bS7\0ha9_K5u^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_K5\uFFFDv\uFFFD=\u0184\uFFFDA\u0183\uFFFDA\u0183\uFFFDA\u0183\uFFFDA\u0183\uFFFDA\u0203\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\rlr:\r\\D4\r^I5\r^I5\r^I5\r^I5\r`M6^H5\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0^H5\0`M6^I5\r^I5\r^I5\r^I5\r\\D4\rlr9\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\x7F\uFFFD\uFFFD\uFFFD?\uFFFD\uFFFD\uFFFD?\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\x07\uFFFD\uFFFD\uFFFD\x07\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\uFFFD\uFFFD\0\0\uFFFD\uFFFD\0\0\x7F\uFFFD\0\0\x7F\uFFFD\0\0?\uFFFD\0\0?\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\x07\uFFFD\0\0\x07\uFFFD\0\0\uFFFD\0\0\uFFFD\uFFFD\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\x07\uFFFD\0\uFFFD\uFFFD\uFFFD\uFFFD","/packages/framework/components/background/SvgBlob.entry.vue":`<template lang="pug">
svg-blob(:color="colors")
</template>

<script lang="ts" setup>
import SvgBlob from "./SvgBlob.vue"

const props = defineProps<{ themeColorIndexOffset: number }>()
const index = $computed(() => props.themeColorIndexOffset % PALETTE_COLOR_COUNT)

const colors = $computed(() => [
  \`var(--theme-color\${index}-lighter\`,
  \`var(--theme-color\${index}\`,
  \`var(--theme-color\${index}-darker\`,
])
<\/script>

<script lang="ts">
import { createEntry } from "@/fairytome/entry"
import { PALETTE_COLOR_COUNT } from "@/framework/constants"
import SvgBlobComponent from "./SvgBlob.vue"

export const entry = createEntry<SvgBlobComponent>({
  component: SvgBlobComponent,
  controls: {
    themeColorIndexOffset: {
      type: "range",
      label: "Theme color index offset",
      min: 0,
      max: PALETTE_COLOR_COUNT,
      step: 1,
      initial: 0,
    },
    speedFactor: {
      type: "range",
      label: "Speed factor",
      min: -5,
      max: 5,
      step: 0.05,
      initial: 1,
    },
    rotationSpeed: {
      type: "range",
      label: "Rotation speed",
      min: 0,
      max: 10,
      step: 0.05,
      initial: 0,
    },
    amplitudeModifier: {
      type: "range",
      label: "Amplitude modifier",
      min: 0,
      max: 10,
      step: 0.05,
      initial: 1,
    },
    segments: {
      type: "range",
      label: "Segments",
      min: 2,
      max: 32,
      step: 1,
      initial: 4,
    },
    showDebug: {
      type: "checkbox",
      label: "Show debug utilities",
      initial: false,
    },
  },
})
<\/script>
`,"/packages/framework/components/background/SvgBlob.vue":`<template lang="pug">
svg.overflow-visible(viewBox="0 0 1 1" :class="{ debug: showDebug }")
  defs(v-if="Array.isArray(color)")
    linearGradient(:id="\`gradient-\${id}\`")
      stop(
        v-for="(stop, index) in color"
        :offset="index / (color.length - 1)"
        :stop-color="stop"
      )
  defs(v-else)
    linearGradient(:id="\`gradient-\${id}\`")
      stop(:stop-color="color")
  g.blob(:transform="\`scale(\${scale}) rotate(\${rotation})\`")
    path(stroke-width="0.05" :d="pathDefinition")
  g(v-if="showDebug" stroke-width="0.0025")
    g(:transform="\`scale(\${scale})\`")
      svg-debugger(:path="pathDefinition")
    foreignObject(width="1" height="1")
      equation-plotter(:points="controlPoints.flat(1)" :scale="scale")
    svg-ruler
</template>

<script lang="ts" setup>
import { useTimestamp } from "@vueuse/core"
import { v4 as uuid } from "uuid"
import { computed, ref, watch } from "vue"
import { useBezierControlPoints } from "@/framework/composables/background"
import {
  EquationPlotter,
  SvgDebugger,
  SvgRuler,
} from "@/utilities/components/svg"
import { useIsAlive } from "@/utilities/composables/component"

const id = uuid()
const isAlive = useIsAlive()
const scale = ref(0.75)

const props = withDefaults(
  defineProps<{
    timestamp?: number
    speedFactor?: number
    rotationSpeed?: number
    amplitudeModifier?: number
    showDebug?: boolean
    segments?: number
    color: string | string[]
  }>(),
  {
    speedFactor: 1,
    rotationSpeed: 0,
    amplitudeModifier: 1,
    segments: 4,
    showDebug: false,
  }
)

const timestamp = computed<number>(() => {
  if (!isAlive.value) {
    return 0
  }

  if (typeof props.timestamp === "number") {
    return props.timestamp
  }

  return useTimestamp().value
})
const progress = ref(0)
const rotation = ref(0)
const controlPoints = useBezierControlPoints(progress, {
  jitter: { offset: Math.PI * 2, coefficient: 0.3 },
  amplitude: computed(() => 0.05 * props.amplitudeModifier),
  segments: toRef(props, "segments"),
})

watch(timestamp, (current, previous) => {
  progress.value +=
    ((current - previous) / 1000) * Math.pow(2, props.speedFactor - 1)
  rotation.value += ((current - previous) / 1000) * props.rotationSpeed ** 2
})

const segmentPoints = $computed(() =>
  controlPoints.map((controls, index) => {
    const previous =
      controlPoints[index === 0 ? controlPoints.length - 1 : index - 1]
    return [
      (controls[0][0] + previous[1][0]) / 2,
      (controls[0][1] + previous[1][1]) / 2,
    ]
  })
)

const start = $computed(() => segmentPoints[0])
const pathDefinition = $computed(() => [
  \`M \${start[0]} \${start[1]}\`,
  ...controlPoints.map(
    (controls, index) =>
      \`C \${controls[0][0]} \${controls[0][1]} \${controls[1][0]} \${
        controls[1][1]
      } \${segmentPoints[(index + 1) % segmentPoints.length][0]} \${
        segmentPoints[(index + 1) % segmentPoints.length][1]
      }\`
  ),
])

const fill = computed(() => \`url(#gradient-\${id})\`)
let angle = $ref(0)
const pos = $computed(() => ({
  sin: Math.sin((angle * Math.PI * 2) / 360) * 1.15,
  cos: Math.cos((angle * Math.PI * 2) / 360) * 1.15,
}))

defineExpose({ angle, pos })
<\/script>

<style lang="sass" scoped>
svg
  filter: blur(var(--blur, 0))

  *
    transform-origin: center center

  &.debug
    border: 1px solid black

    .blob
      &:not(.debug)
        opacity: .25

      &.debug
        fill: none

        .bottom.right
          stroke: red

        .bottom.left
          stroke: blue

        .top.left
          stroke: green

        .top.right
          stroke: yellow

  > .blob
    transition: opacity .5s

    path
      fill: v-bind(fill)
</style>
`,"/packages/framework/components/background/index.ts":`export { default as SvgBlob } from "./SvgBlob.vue"
`,"/packages/framework/components/transitions/Fade.vue":`<template lang="pug">
.transition-fade(
  :style="{ '--transition-fade-duration': duration }"
  v-bind="$attrs"
)
  transition(name="fade" v-bind="transition")
    slot
</template>

<script lang="ts" setup>
import type { BaseTransitionProps } from "vue"

defineProps<{ duration?: string; transition?: BaseTransitionProps }>()
<\/script>

<style lang="sass" scoped>
.transition-fade
  > :deep(.fade-enter-active), :deep(.fade-leave-active)
    transition: opacity var(--transition-fade-duration, 1s)

  > :deep(.fade-enter-from), > :deep(.fade-leave-to)
    opacity: 0
</style>
`,"/packages/framework/components/transitions/index.ts":`export { default as Fade } from "./Fade.vue"
`,"/packages/framework/components/ui/BreadcrumbItem.vue":`<template lang="pug">
n-breadcrumb-item(
  :clickable="typeof href !== 'undefined'"
  @click="$router.push(href)"
)
  n-icon.mr-1: slot(name="icon")
  slot
</template>

<script lang="ts" setup>
defineProps<{ href?: string }>()
<\/script>
`,"/packages/framework/components/ui/index.ts":`export { default as BreadcrumbItem } from "./BreadcrumbItem.vue"
`,"/packages/utilities/components/svg/Debugger.vue":`<template lang="pug">
g
  curve(v-for="curve in curves" v-bind="curve")
</template>

<script lang="ts" setup>
import { parseSVG } from "svg-path-parser"
import { PALETTE } from "@/framework/components/provide"
import { Curve } from "./debug"

const props = defineProps<{ path: string | string[] }>()
const palette = $(inject<[string, string, string][]>(PALETTE))

const commands = $computed(() =>
  parseSVG(Array.isArray(props.path) ? props.path.join(" ") : props.path)
)

const curves = $computed(() =>
  commands.flatMap((command, index) => {
    if (command.command !== "curveto") {
      return []
    }

    const previous = commands[index - 1]

    if (!("x" in previous) || !("y" in previous)) {
      return []
    }

    return [
      {
        start: [previous.x, previous.y],
        end: [command.x, command.y],
        controlPoints: [
          [command.x1, command.y1],
          [command.x2, command.y2],
        ],
        themeColorIndex: index % palette.length,
      },
    ]
  })
)
<\/script>
`,"/packages/utilities/components/svg/EquationPlotter.vue":`<template lang="pug">
canvas.w-full.h-full(ref="canvas" :width="width" :height="height")
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ points: [number, number][]; scale?: number }>(),
  { scale: 1 }
)
const { points, scale } = $(props)
const canvas = ref<HTMLCanvasElement>()

const { width, height } = $(useElementBounding(canvas))
const backup = $computed(() => new OffscreenCanvas(width, height))

let ctx: CanvasRenderingContext2D | null = null
let backupCtx: OffscreenCanvasRenderingContext2D | null = null
function render() {
  if (ctx === null) {
    if (typeof canvas.value === "undefined") {
      return
    }

    ctx = canvas.value.getContext("2d")
    backupCtx = backup.getContext("2d")
  }

  if (
    ctx === null ||
    backupCtx === null ||
    typeof canvas.value === "undefined"
  ) {
    return
  }

  backupCtx.clearRect(0, 0, width, height)
  backupCtx.drawImage(canvas.value, 0, 0)

  ctx.save()
  ctx.clearRect(0, 0, width, height)
  ctx.globalAlpha = 0.975
  ctx.drawImage(backup, 0, 0)

  ctx.translate(width / 2, height / 2)
  ctx.scale(scale, scale)
  ctx.translate(-width / 2, -height / 2)

  ctx.globalAlpha = 1
  ctx.fillStyle = "#000"
  points.forEach(([x, y]) => {
    ctx?.fillRect(x * width, y * height, 1, 1)
  })
  ctx.restore()
}

watch(
  () => points.length,
  () => {
    ctx?.clearRect(0, 0, width, height)
  }
)

useRafFn(render)
<\/script>
`,"/packages/utilities/components/svg/Ruler.vue":`<template lang="pug">
g(stroke-width=".25%" stroke="black" opacity=".5")
  g.top
    g(v-for="index in 9" :transform="\`translate(\${index / 10}, 0)\`")
      line(x1="0" x2="0" y1="0" y2="0.01")
      text(transform="translate(-0.02, 0.04) scale(0.002)") {{ index / 10 }}
  g.bottom
    g(v-for="index in 9" :transform="\`translate(\${index / 10}, 0.99)\`")
      line(x1="0" x2="0" y1="0" y2="0.01")
      text(transform="translate(-0.02, -0.01) scale(0.002)") {{ index / 10 }}
  g.left
    g(v-for="index in 9" :transform="\`translate(0, \${index / 10})\`")
      line(x1="0" x2="0.01" y1="0" y2="0")
      text(transform="translate(0.015, 0.01) scale(0.002)") {{ index / 10 }}
  g.right
    g(v-for="index in 9" :transform="\`translate(0.99, \${index / 10})\`")
      line(x1="0" x2="0.01" y1="0" y2="0")
      text(transform="translate(-0.04, 0.01) scale(0.002)") {{ index / 10 }}
</template>
`,"/packages/utilities/components/svg/index.ts":`export { default as SvgDebugger } from "./Debugger.vue"
export { default as EquationPlotter } from "./EquationPlotter.vue"
export { default as SvgRuler } from "./Ruler.vue"
`,"/packages/utilities/vite/plugins/index.ts":`export { ViteGenerateIndex } from "./vite-generate-index/plugin"
`,"/packages/utilities/components/svg/debug/Curve.vue":`<template lang="pug">
defs
  linearGradient(
    :id="\`gradient-\${id}\`"
    :x1="start[0]"
    :x2="end[0]"
    :y1="start[1]"
    :y2="end[1]"
  )
    stop(offset="0%" :stop-color="colors.lighter")
    stop(offset="50%" :stop-color="colors.base")
    stop(offset="100%" :stop-color="colors.darker")
g(fill="none")
  line(
    :x1="start[0] - POINT_CROSS_LINE_DISTANCE"
    :x2="start[0] + POINT_CROSS_LINE_DISTANCE"
    :y1="start[1] - POINT_CROSS_LINE_DISTANCE"
    :y2="start[1] + POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.darker"
  )
  line(
    :x1="end[0] - POINT_CROSS_LINE_DISTANCE"
    :x2="end[0] + POINT_CROSS_LINE_DISTANCE"
    :y1="end[1] + POINT_CROSS_LINE_DISTANCE"
    :y2="end[1] - POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.lighter"
  )
  path(:d="path" :stroke="\`url(#gradient-\${id})\`")
  path(
    :d="[path, \`L 0.5 0.5\`]"
    :fill="\`url(#gradient-\${id})\`"
    fill-opacity="0.2"
  )
  circle(
    :cx="controlPoints[0][0]"
    :cy="controlPoints[0][1]"
    :r="POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.darker"
  )
  circle(
    :cx="controlPoints[1][0]"
    :cy="controlPoints[1][1]"
    :r="POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.lighter"
  )
  line(
    :x1="start[0]"
    :y1="start[1]"
    :x2="controlPoints[0][0]"
    :y2="controlPoints[0][1]"
    :stroke="colors.darker"
  )
  line(
    :x1="end[0]"
    :y1="end[1]"
    :x2="controlPoints[1][0]"
    :y2="controlPoints[1][1]"
    :stroke="colors.lighter"
  )
</template>

<script lang="ts" setup>
import { v4 as uuid } from "uuid"

const id = uuid()

const props = defineProps<{
  start: [number, number]
  end: [number, number]
  controlPoints: [[number, number], [number, number]]
  themeColorIndex: number
}>()

const POINT_CROSS_LINE_DISTANCE = 0.01

const path = $computed(() => [
  \`M \${props.start[0]} \${props.start[1]}\`,
  \`C \${props.controlPoints[0][0]} \${props.controlPoints[0][1]}\`,
  \`\${props.controlPoints[1][0]} \${props.controlPoints[1][1]}\`,
  \`\${props.end[0]} \${props.end[1]}\`,
])

const colors = $computed(() => ({
  base: \`var(--theme-color\${props.themeColorIndex})\`,
  lighter: \`var(--theme-color\${props.themeColorIndex}-lighter)\`,
  darker: \`var(--theme-color\${props.themeColorIndex}-darker)\`,
}))
<\/script>
`,"/packages/utilities/components/svg/debug/index.ts":`export { default as Curve } from "./Curve.vue"
`,"/packages/utilities/vite/plugins/vite-generate-index/format.ts":`import prettier from "prettier"

const prettierConfig = prettier
  .resolveConfigFile()
  .then((path) => (path === null ? null : prettier.resolveConfig(path)))

export async function format(source: string) {
  const options = await prettierConfig

  if (options === null) {
    throw new Error("Couldn't fetch prettier config")
  }

  return prettier.format(source, { ...options, parser: "typescript" })
}
`,"/packages/utilities/vite/plugins/vite-generate-index/generate.ts":`import camelCase from "lodash/camelCase"
import fs from "node:fs/promises"
import { basename } from "node:path"
import { format } from "./format"
import type { PluginOptions } from "./options"
import {
  fetchFileInformation,
  fetchFilesForDir,
  fetchRelevantDirs,
} from "./scan"
import type { FileInformation } from "./scan"

export async function generateIndexFiles(
  options: PluginOptions
): Promise<void> {
  const dirs = await fetchRelevantDirs(options.dirs)
  dirs.forEach((dir) => generateIndexFile(dir, options))
}

async function generateIndexFile(
  dir: string,
  options: Omit<PluginOptions, "dirs">
): Promise<void> {
  const indexFilename = \`index.\${options.extension}\`

  const files = await fetchFilesForDir(
    dir,
    options.includeGlobPattern,
    options.excludeFiles
  )

  const relevantFiles = files.filter(
    (file) => ![indexFilename].includes(basename(file))
  )

  const filesWithExports = await Promise.all(
    relevantFiles.map((file) => fetchFileInformation(file))
  )

  if (
    filesWithExports.length === 0 ||
    !(await shouldUpdate(
      \`\${dir}/\${indexFilename}\`,
      filesWithExports.map((file) => file.path)
    ))
  ) {
    return
  }

  const source = filesWithExports.map(fileInformationToExport).join("\\n")
  const formattedSource = await format(source)

  await fs.writeFile(\`\${dir}/index.\${options.extension}\`, formattedSource)
}

function fileInformationToExport({ exports, file }: FileInformation): string {
  if (exports.length === 1 && exports[0].type === "default") {
    return \`export { default as \${file.name} } from "./\${file.basename}"\`
  }

  const importPath = file.extension.includes("ts") ? file.name : file.basename

  return \`export * as \${camelCase(file.name)} from "./\${importPath}"\`
}

async function shouldUpdate(
  indexPath: string,
  relevantFiles: string[]
): Promise<boolean> {
  try {
    const indexStat = await fs.stat(indexPath)

    const fileStats = await Promise.all(
      relevantFiles.map((path) => fs.stat(path))
    )

    return fileStats.some((fileStat) => fileStat.mtimeMs > indexStat.mtimeMs)
  } catch {
    return true
  }
}
`,"/packages/utilities/vite/plugins/vite-generate-index/options.ts":`export type PluginOptions = {
  dirs: string[]
  extension: "js" | "ts" | string
  includeGlobPattern: string
  excludeFiles: RegExp[]
}

export const defaults: PluginOptions = {
  dirs: [],
  extension: "ts",
  includeGlobPattern: "*.*",
  excludeFiles: [],
}
`,"/packages/utilities/vite/plugins/vite-generate-index/plugin.ts":`import merge from "ts-deepmerge"
import type { Plugin } from "vite"
import { generateIndexFiles } from "./generate"
import type { PluginOptions } from "./options"
import { defaults } from "./options"

const NAME = "vite-generate-index"

export function ViteGenerateIndex(options?: Partial<PluginOptions>): Plugin {
  const mergedOptions = merge(defaults, options ?? {})

  return {
    name: NAME,
    buildStart() {
      generateIndexFiles(mergedOptions)
    },
    handleHotUpdate(): void {
      generateIndexFiles(mergedOptions)
    },
  }
}
`,"/packages/utilities/vite/plugins/vite-generate-index/scan.ts":`import glob from "glob"
import { findExports } from "mlly"
import type { ESMExport } from "mlly"
import fs from "node:fs/promises"
import { basename } from "node:path"
import { extname } from "path"
import type { PluginOptions } from "./options"

function globAsync(pattern: string): Promise<string[]> {
  return new Promise((resolve, reject) =>
    glob(pattern, (error, files) => {
      if (error !== null) {
        return reject(error)
      }

      return resolve(files)
    })
  )
}

export async function fetchRelevantDirs(
  dirs: PluginOptions["dirs"]
): Promise<string[]> {
  const results = await Promise.all(dirs.map((pattern) => globAsync(pattern)))
  return results.flat()
}

export async function fetchFilesForDir(
  path: string,
  pattern: PluginOptions["includeGlobPattern"],
  exclude: PluginOptions["excludeFiles"]
): Promise<string[]> {
  const globResult = await globAsync(\`\${path}/\${pattern}\`)
  return globResult.filter(
    (result) => !exclude.some((regex) => regex.test(result))
  )
}

function getAdditionalExports(filename: string): ESMExport[] {
  if (extname(filename) === ".vue") {
    return [{ type: "default", code: "", start: -1, end: -1, names: [] }]
  }

  return []
}

export async function scanExports(filepath: string): Promise<ESMExport[]> {
  const code = await fs
    .readFile(filepath)
    .then((buffer) => buffer.toString("utf-8"))
  const exports = findExports(code)

  return [...exports, ...getAdditionalExports(filepath)]
}

export type FileInformation = {
  path: string
  exports: ESMExport[]
  file: {
    basename: string
    name: string
    extension: string
  }
}
export async function fetchFileInformation(
  file: string
): Promise<FileInformation> {
  const exports = await scanExports(file)
  const extension = extname(file)

  return {
    path: file,
    exports,
    file: {
      basename: basename(file),
      name: basename(file, extension),
      extension: extension.slice(1),
    },
  }
}
`};async function _(){return Object.keys(I)}async function L(e){var n;return(n=I[e])!=null?n:null}var B=Object.freeze({__proto__:null,fetchProjectFiles:_,fetchSource:L});y(B);
