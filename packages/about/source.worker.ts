const allProjectFiles = import.meta.glob("/(*|!(dist|.git|.idea|.yarn)/**)", {
  as: "raw",
}) as unknown as Record<string, Promise<string>>

export async function fetchSource(filename: string): Promise<string | null> {
  return allProjectFiles[filename] ?? null
}
