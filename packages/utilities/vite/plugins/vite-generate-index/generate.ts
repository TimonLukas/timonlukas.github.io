import camelCase from "lodash/camelCase"
import fs from "node:fs/promises"
import { basename } from "node:path"
import { format } from "./format"
import type { PluginOptions } from "./options"
import {
  fetchFileInformation,
  fetchFilesForDir,
  fetchRelevantDirs,
} from "./scan"
import type { FileInformation } from "./scan"

export async function generateIndexFiles(
  options: PluginOptions
): Promise<void> {
  const dirs = await fetchRelevantDirs(options.dirs)
  dirs.forEach((dir) => generateIndexFile(dir, options))
}

async function generateIndexFile(
  dir: string,
  options: Omit<PluginOptions, "dirs">
): Promise<void> {
  const indexFilename = `index.${options.extension}`

  const files = await fetchFilesForDir(
    dir,
    options.includeGlobPattern,
    options.excludeFiles
  )

  const relevantFiles = files.filter(
    (file) => ![indexFilename].includes(basename(file))
  )

  const filesWithExports = await Promise.all(
    relevantFiles.map((file) => fetchFileInformation(file))
  )

  if (
    filesWithExports.length === 0 ||
    !(await shouldUpdate(
      `${dir}/${indexFilename}`,
      filesWithExports.map((file) => file.path)
    ))
  ) {
    return
  }

  const source = filesWithExports.map(fileInformationToExport).join("\n")
  const formattedSource = await format(source)

  await fs.writeFile(`${dir}/index.${options.extension}`, formattedSource)
}

function fileInformationToExport({ exports, file }: FileInformation): string {
  if (exports.length === 1 && exports[0].type === "default") {
    return `export { default as ${file.name} } from "./${file.basename}"`
  }

  const importPath = file.extension.includes("ts") ? file.name : file.basename

  return `export * as ${camelCase(file.name)} from "./${importPath}"`
}

async function shouldUpdate(
  indexPath: string,
  relevantFiles: string[]
): Promise<boolean> {
  try {
    const indexStat = await fs.stat(indexPath)

    const fileStats = await Promise.all(
      relevantFiles.map((path) => fs.stat(path))
    )

    return fileStats.some((fileStat) => fileStat.mtimeMs > indexStat.mtimeMs)
  } catch {
    return true
  }
}
