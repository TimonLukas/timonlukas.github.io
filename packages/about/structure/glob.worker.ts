const entryImports = import.meta.globEager<string>("./entries/**", {
  as: "raw",
})

export async function fetchSource(filename: string): Promise<string | null> {
  return entryImports[`./entries${filename}.md`] ?? null
}
