import Prism from "prismjs"
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
  html: "markup",
  cjs: "js",
  yml: "yaml",
  vue: "markup",
  gitignore: "ignore",
  gitattributes: "ignore",
  prettierignore: "ignore",
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

    const key = Object.keys(languageGlob).find((key) => key.includes(language))

    if (typeof key === "undefined") {
      return
    }

    await languageGlob[key]()
  }

  return { Prism, loadLanguage }
}
