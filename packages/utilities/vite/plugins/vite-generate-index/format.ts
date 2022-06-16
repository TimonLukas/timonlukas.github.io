import prettier from "prettier"

const prettierConfig = prettier
  .resolveConfigFile()
  .then((path) => (path === null ? null : prettier.resolveConfig(path)))

export async function format(source: string) {
  const options = await prettierConfig

  if (options === null) {
    throw new Error("Couldn't fetch prettier config")
  }

  return prettier.format(source, { ...options, parser: "typescript" })
}
