const projectFiles = import.meta.glob("/**/*", { as: "raw" })
const dotFiles = import.meta.glob("/**/.*", { as: "raw" })

const allProjectFiles = Object.assign(
  {},
  projectFiles,
  dotFiles
) as unknown as Record<string, Promise<string>>

export async function fetchSource(filename: string): Promise<string | null> {
  return allProjectFiles[filename] ?? null
}
