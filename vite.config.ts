import vitePluginVue from "@vitejs/plugin-vue"
import unpluginAutoImport from "unplugin-auto-import/vite"
import IconsResolver from "unplugin-icons/resolver"
import unpluginIcons from "unplugin-icons/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
import unpluginComponents from "unplugin-vue-components/vite"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import vitePluginInspect from "vite-plugin-inspect"
import vitePluginPages from "vite-plugin-pages"
import utils from "./packages/utilities/vite"

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./packages", import.meta.url)),
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
    utils.plugins.ViteGenerateIndex({
      dirs: ["packages/*/components", "packages/framework/components/ui"],
      extension: "ts",
      excludeFiles: [/^.+(\.entry\.)/gm],
    }),
  ],
})
