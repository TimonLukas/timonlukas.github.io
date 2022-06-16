import merge from "ts-deepmerge"
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
