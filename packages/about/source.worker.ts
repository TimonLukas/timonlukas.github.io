const allProjectFiles = import.meta.glob<string>(
  "/(!(dist|.git|.idea|.yarn)|.github)/**",
  {
    as: "raw",
  }
) as unknown as Record<string, string>

export async function fetchProjectFiles(): Promise<string[]> {
  return Object.keys(allProjectFiles)
}

export async function fetchSource(filename: string): Promise<string | null> {
  return allProjectFiles[filename] ?? null
}
