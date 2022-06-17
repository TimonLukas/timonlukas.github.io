import Prism from "prismjs"
import "prismjs/themes/prism.css"

Prism.manual = true

const EXTENSION_TO_LANGUAGE: Record<string, string> = {
  md: "markdown",
  ts: "typescript",
  html: "cshtml",
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
