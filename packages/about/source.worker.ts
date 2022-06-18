const allProjectFiles = import.meta.globEager<string>(
  "/(*|!(dist|.git|.idea|.yarn)/**)",
  {
    as: "raw",
  }
)

export async function fetchSource(filename: string): Promise<string | null> {
  return allProjectFiles[filename] ?? null
}
