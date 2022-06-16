export type PluginOptions = {
  dirs: string[]
  extension: "js" | "ts" | string
  includeGlobPattern: string
  excludeFiles: RegExp[]
}

export const defaults: PluginOptions = {
  dirs: [],
  extension: "ts",
  includeGlobPattern: "*.*",
  excludeFiles: [],
}
