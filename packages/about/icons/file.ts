import * as icons from "./imports"
import type { Icon } from "./types"

const fileIconsByExtension: Record<string, Icon> = {
  ts: icons.IconTypescriptOfficial,
  cts: icons.IconTypescriptOfficial,
  mts: icons.IconTypescriptOfficial,
  js: icons.IconJavascriptOfficial,
  cjs: icons.IconJavascriptOfficial,
  mjs: icons.IconJavascriptOfficial,
  json: icons.IconJson,
  lock: icons.IconYarn,
  LICENSE: icons.IconText,
  md: icons.IconMarkdown,
  html: icons.IconXml,
  css: icons.IconCss,
  sass: icons.IconScss,
  vue: icons.IconVue,
  yml: icons.IconYaml,
  ico: icons.IconImage,
  png: icons.IconImage,
  jpg: icons.IconImage,
}

function getFileIconByExtension(extension?: string): Icon {
  if (typeof extension === "undefined") {
    return icons.IconDefaultFile
  }

  return fileIconsByExtension[extension] ?? icons.IconDefaultFile
}

const testHasParent = (parentKey: string) => (_: string, key: string) =>
  key.startsWith(parentKey)
const testRegex = (regex: RegExp) => (filename: string) => regex.test(filename)
const testFilename = (name: string) => (filename: string) => name === filename
const testStartsWith = (prefix: string) => (filename: string) =>
  filename.startsWith(prefix)
const testEndsWith = (suffix: string) => (filename: string) =>
  filename.endsWith(suffix)
const specialFileIcons: [
  test: (filename: string, key: string) => boolean,
  icon: Icon
][] = [
  [testHasParent("/.github/workflows"), icons.IconFeatherCpu],
  [testRegex(/tsconfig(\..+)?\.json/m), icons.IconTsconfig],
  [testFilename("package.json"), icons.IconNpm],
  [testStartsWith("vite.config."), icons.IconVite],
  [testStartsWith("cypress."), icons.IconCypress],
  [testRegex(/.+\.spec\..+/m), icons.IconCypressSpec],
  [testEndsWith(".d.ts"), icons.IconTsconfigOfficial],
  [testStartsWith("postcss.config."), icons.IconPostcssConfig],
  [testStartsWith("tailwind.config."), icons.IconTailwind],
  [testStartsWith(".prettier"), icons.IconPrettier],
  [testStartsWith(".git"), icons.IconGit],
  [testStartsWith(".eslint"), icons.IconEslint],
  [testStartsWith(".yarn"), icons.IconYarn],
]

function getSpecialIcon(filename: string, key: string): Icon | null {
  const entry = specialFileIcons.find(([test]) => test(filename, key))

  if (typeof entry === "undefined") {
    return null
  }

  return entry[1]
}

export function getFileIcon(key: string) {
  const name = key.split("/").at(-1)

  if (typeof name === "undefined") {
    return icons.IconDefaultFile
  }

  const specialIcon = getSpecialIcon(name, key)
  if (specialIcon !== null) {
    return specialIcon
  }

  const extension = name.split(".").at(-1)
  return getFileIconByExtension(extension)
}
