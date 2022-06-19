import CustomFolder from "./CustomFolder.vue"
import * as icons from "./imports"
import { IconDefaultFolder } from "./imports"
import type { Icon } from "./types"

type IconTest = (name: string, key: string) => boolean

function createCustomRenderer(
  baseColor: string,
  icon: Icon,
  options: {
    topColor?: string
    backgroundColor?: string
    radius?: number
  } = {}
): Icon {
  return () => h(CustomFolder, { baseColor, icon, ...options })
}

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
  [testIsKey("/.github"), icons.IconFolderGithub],
  [testHasParent("types"), icons.IconFolderTypescript],
  [testHasParent("assets"), icons.IconFolderAsset],
  [testHasParent("icons"), icons.IconFolderImages],
  [testIsKey("/packages/about"), icons.IconFeatherInfo],
  [testIsKey("/packages/fairytome"), icons.IconFeatherBookOpen],
  [testIsKey("/packages/framework"), icons.IconFeatherCode],
  [testIsKey("/packages/home"), icons.IconFeatherHome],
  [testIsKey("/packages/utilities"), icons.IconFeatherTool],
  [
    testHasParent(".github/workflows"),
    createCustomRenderer("grey", icons.IconFeatherCpu, {
      topColor: "black",
      backgroundColor: "white",
      radius: 6,
    }),
  ],
  [testHasParent("components"), createCustomRenderer("#14622a", icons.IconVue)],
  [
    testHasParent("composables"),
    createCustomRenderer("#14622a", icons.IconVueConfig),
  ],
  [
    testHasParent("pages"),
    createCustomRenderer("#14622a", icons.IconDefaultFile, {
      topColor: "white",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }),
  ],
  [testHasParent("vite"), createCustomRenderer("#14622a", icons.IconVite)],
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
