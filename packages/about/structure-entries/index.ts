const entryImports = import.meta.glob("./**/*.md")

export function fetchEntryKeys(): string[] {
  return Object.keys(entryImports).map((key) => key.slice(1, -3))
}

const globWorker = new ComlinkWorker<typeof import("./glob.worker")>(
  new URL("./glob.worker.ts", import.meta.url)
)

export function fetchEntry(key: string): Promise<any> | null {
  return globWorker.fetchSource(`.${key}.md`)
}
