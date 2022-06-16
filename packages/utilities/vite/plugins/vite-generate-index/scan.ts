import glob from "glob"
import { findExports } from "mlly"
import type { ESMExport } from "mlly"
import fs from "node:fs/promises"
import { basename } from "node:path"
import { extname } from "path"
import type { PluginOptions } from "./options"

function globAsync(pattern: string): Promise<string[]> {
  return new Promise((resolve, reject) =>
    glob(pattern, (error, files) => {
      if (error !== null) {
        return reject(error)
      }

      return resolve(files)
    })
  )
}

export async function fetchRelevantDirs(
  dirs: PluginOptions["dirs"]
): Promise<string[]> {
  const results = await Promise.all(dirs.map((pattern) => globAsync(pattern)))
  return results.flat()
}

export async function fetchFilesForDir(
  path: string,
  pattern: PluginOptions["includeGlobPattern"],
  exclude: PluginOptions["excludeFiles"]
): Promise<string[]> {
  const globResult = await globAsync(`${path}/${pattern}`)
  return globResult.filter(
    (result) => !exclude.some((regex) => regex.test(result))
  )
}

function getAdditionalExports(filename: string): ESMExport[] {
  if (extname(filename) === ".vue") {
    return [{ type: "default", code: "", start: -1, end: -1, names: [] }]
  }

  return []
}

export async function scanExports(filepath: string): Promise<ESMExport[]> {
  const code = await fs
    .readFile(filepath)
    .then((buffer) => buffer.toString("utf-8"))
  const exports = findExports(code)

  return [...exports, ...getAdditionalExports(filepath)]
}

export type FileInformation = {
  path: string
  exports: ESMExport[]
  file: {
    basename: string
    name: string
    extension: string
  }
}
export async function fetchFileInformation(
  file: string
): Promise<FileInformation> {
  const exports = await scanExports(file)
  const extension = extname(file)

  return {
    path: file,
    exports,
    file: {
      basename: basename(file),
      name: basename(file, extension),
      extension: extension.slice(1),
    },
  }
}
