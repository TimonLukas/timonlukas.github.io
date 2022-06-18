import { isFile, isFolder } from "../project"
import type { TreeNode } from "../project"
import { getFileIcon } from "./file"
import { getFolderIcon } from "./folder"
import { IconXquery } from "./imports"
import type { Icon } from "./types"

const ICON_UNKNOWN = IconXquery

export function getIcon(node: TreeNode): Icon {
  const { key } = node

  if (isFile(node)) {
    return getFileIcon(key)
  }

  if (isFolder(node)) {
    return getFolderIcon(key)
  }

  return ICON_UNKNOWN
}

export const getIconForFolder = getFolderIcon
export const getIconForFile = getFileIcon
