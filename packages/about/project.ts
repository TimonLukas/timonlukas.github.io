const sourceWorker = new ComlinkWorker<typeof import("./source.worker")>(
  new URL("./source.worker.ts", import.meta.url)
)
const allProjectFiles = Object.keys(import.meta.glob("/**/*"))

function fetchProjectFiles(): string[] {
  return allProjectFiles
}

export async function fetchFileSource(file: string): Promise<any> {
  return sourceWorker.fetchSource(file)
}

type TreeFile = {
  key: string
  label: string
}
type TreeFolder = {
  key: string
  label: string
  children: (TreeFile | TreeFolder)[]
}
export type Tree = (TreeFile | TreeFolder)[]
export function fetchProjectTree(): Tree {
  const allFiles = fetchProjectFiles()

  return allFiles.reduce((acc, val) => {
    const parts = val.split("/").slice(1)
    const ancestorParts = parts.slice(0, -1)

    const parent = ancestorParts.reduce((container, name, index) => {
      const key = `/${ancestorParts.slice(0, index + 1).join("/")}`
      const entry = container.find((value) => value.key === key)

      if (typeof entry === "undefined" || !("children" in entry)) {
        const newEntry = {
          key,
          label: `/${name}`,
          children: [],
        }
        container.push(newEntry)
        return newEntry.children
      }

      return entry.children
    }, acc)

    parent.push({
      key: val,
      label: parts.at(-1) ?? val,
    })

    return acc
  }, [] as Tree)
}

export function findSubtreeByKey(key: string, tree: Tree): Tree {
  const parts = key.split("/").slice(1)
  return parts.reduce((acc, val, index) => {
    const currentKey = "/" + parts.slice(0, index + 1).join("/")
    const entry = acc.find((value) => value.key === currentKey)

    if (typeof entry === "undefined" || !("children" in entry)) {
      return acc
    }

    return entry.children
  }, tree)
}
