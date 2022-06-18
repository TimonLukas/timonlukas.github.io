const entryImports = import.meta.glob("./**/*.md", {
  as: "raw",
}) as unknown as Record<string, Promise<string>>

export async function fetchSource(filename: string): Promise<string | null> {
  return entryImports[filename] ?? null
}
