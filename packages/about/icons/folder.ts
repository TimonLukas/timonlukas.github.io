import * as icons from "./imports"
import { IconDefaultFolder } from "./imports"
import type { Icon } from "./types"

type IconTest = (name: string, key: string) => boolean

const testIsKey =
  (value: string): IconTest =>
  (_, key) =>
    key === value
const testHasParent =
  (parent: string): IconTest =>
  (_, key) =>
    key.includes(parent)
const specialFolderIcons: [test: IconTest, icon: Icon][] = [
  [testIsKey("/"), icons.IconRootFolder],
  [testHasParent("cypress"), icons.IconFolderCypress],
  [testHasParent("dist"), icons.IconFolderBinary],
  [testIsKey("/packages"), icons.IconFolderApp],
  [testIsKey("/.yarn"), icons.IconFolderYarn],
  [testIsKey("/packages/about"), icons.IconFeatherInfo],
  [testIsKey("/packages/fairytome"), icons.IconFeatherBookOpen],
  [testIsKey("/packages/framework"), icons.IconFeatherCode],
  [testIsKey("/packages/home"), icons.IconFeatherHome],
  [testIsKey("/packages/utilities"), icons.IconFeatherTool],
]

function getSpecialFolderIcon(key: string): Icon | null {
  const name = key.split("/").at(-1)

  if (typeof name === "undefined") {
    return IconDefaultFolder
  }

  const entry = specialFolderIcons.find(([test]) => test(name, key))

  if (typeof entry === "undefined") {
    return null
  }

  return entry[1]
}

export function getFolderIcon(key: string): Icon {
  return getSpecialFolderIcon(key) ?? icons.IconDefaultFolder
}
