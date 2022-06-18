import { NIcon } from "naive-ui"
import { getFileIcon } from "./icons/file"
import { getFolderIcon } from "./icons/folder"

const sourceWorker = new ComlinkWorker<typeof import("./source.worker")>(
  new URL("./source.worker.ts", import.meta.url)
)

export async function fetchFileSource(file: string): Promise<any> {
  return sourceWorker.fetchSource(file)
}

function fetchProjectFiles(): Promise<string[]> {
  return sourceWorker.fetchProjectFiles()
}

export function createRenderer(
  kind: "file" | "folder",
  key: string
): () => ReturnType<typeof h> {
  const icon = kind === "file" ? getFileIcon(key) : getFolderIcon(key)
  return () => h(NIcon, { size: "1.25rem" }, { default: () => h(icon) })
}

type TreeFile = {
  key: string
  label: string
  prefix: () => ReturnType<typeof h>
}
type TreeFolder = TreeFile & {
  children: (TreeFile | TreeFolder)[]
}
export type TreeNode = TreeFile | TreeFolder
export type Tree = TreeNode[]

export async function fetchProjectTree(): Promise<Tree> {
  const allFiles = await fetchProjectFiles()

  const tree = allFiles.reduce(
    (acc, val) => {
      const parts = val.split("/").slice(1)
      const ancestorParts = parts.slice(0, -1)

      const parent = ancestorParts.reduce((container, name, index) => {
        const key = `/${ancestorParts.slice(0, index + 1).join("/")}`
        const entry = container.find((value) => value.key === key)

        if (typeof entry === "undefined" || !("children" in entry)) {
          const newEntry = {
            key,
            label: `${name}/`,
            children: [],
            prefix: createRenderer("folder", key),
          }
          container.push(newEntry)
          return newEntry.children
        }

        return entry.children
      }, acc)

      const label = parts.at(-1) ?? val
      parent.push({
        key: val,
        label,
        prefix: createRenderer("file", val),
      })

      return acc
    },
    [
      {
        key: "/.yarn",
        label: ".yarn",
        children: [],
        prefix: createRenderer("folder", "/.yarn"),
      },
    ] as Tree
  )
  sortTree(tree)

  return tree
}

function sortTree(tree: Tree): void {
  tree.sort((a, b) => {
    if (isFile(a) && isFolder(b)) {
      return 1
    }

    if (isFolder(a) && isFile(b)) {
      return -1
    }

    return a.label.localeCompare(b.label)
  })

  tree.forEach((node) => {
    if (!isFolder(node)) {
      return
    }

    sortTree(node.children)
  })
}

function flattenTree(tree: Tree): TreeNode[] {
  return tree.flatMap((node) =>
    isFolder(node) ? [...flattenTree(node.children), node] : node
  )
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

export function isFolder(node: TreeNode): node is TreeFolder {
  return "children" in node
}

export function isFile(node: TreeNode): node is TreeFile {
  return !isFolder(node)
}
