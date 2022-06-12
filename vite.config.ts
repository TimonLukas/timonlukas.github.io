import vitePluginVue from "@vitejs/plugin-vue"
import unpluginAutoImport from "unplugin-auto-import/vite"
import IconsResolver from "unplugin-icons/resolver"
import unpluginIcons from "unplugin-icons/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
import unpluginComponents from "unplugin-vue-components/vite"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import vitePluginPages from "vite-plugin-pages"

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./packages", import.meta.url)),
    },
  },
  plugins: [
    unpluginAutoImport({
      dts: fileURLToPath(
        new URL("./packages/framework/types/auto-import.d.ts", import.meta.url)
      ),
      imports: ["vue", "@vueuse/core"],
      eslintrc: {
        enabled: true,
      },
    }),
    unpluginIcons(),
    vitePluginVue({
      reactivityTransform: true,
    }),
    vitePluginPages({ dirs: "pages" }),
    unpluginComponents({
      resolvers: [NaiveUiResolver(), IconsResolver()],
      dts: fileURLToPath(
        new URL("./packages/framework/types/components.d.ts", import.meta.url)
      ),
    }),
  ],
})
