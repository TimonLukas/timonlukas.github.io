import glob from "glob"

export function fetchDirs(basePackage = "home") {
  const pageFolders = glob.sync("packages/*/pages")
  return pageFolders.map((folder: string) => {
    const packageName = folder.split("/")[1]

    return {
      dir: folder,
      baseRoute: packageName === basePackage ? "" : packageName,
    }
  })
}
