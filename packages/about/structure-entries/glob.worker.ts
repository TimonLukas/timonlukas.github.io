const entryImports = import.meta.globEager<string>("./**/*.md", {
  as: "raw",
})

export async function fetchSource(filename: string): Promise<string | null> {
  return entryImports[filename] ?? null
}
