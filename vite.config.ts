import { defineConfig } from "vite"
import vitePluginVue from "@vitejs/plugin-vue"
import vitePluginPages from "vite-plugin-pages"
import vitePluginTsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    vitePluginTsconfigPaths({ projects: ["tsconfig.app.json"] }),
    vitePluginVue(),
    vitePluginPages({ dirs: "pages" }),
  ],
})
