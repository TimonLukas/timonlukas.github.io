const REGEX_GLOB_TO_FILENAME = /\.\/(.+)\.ts/

type FilenameGlob = `./${string}.ts`
type GlobToFilename<GlobString extends FilenameGlob> =
  GlobString extends `./${infer Filename}.ts` ? Filename : never

export function globToFilename<GlobString extends FilenameGlob>(
  glob: GlobString
): GlobToFilename<GlobString> {
  const result = REGEX_GLOB_TO_FILENAME.exec(glob)

  if (result === null) {
    throw new Error(
      `Input must have format ${REGEX_GLOB_TO_FILENAME.source}, given: ${glob}`
    )
  }

  return result[1] as GlobToFilename<GlobString>
}
