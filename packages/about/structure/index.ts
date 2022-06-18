const globWorker = new ComlinkWorker<typeof import("./glob.worker")>(
  new URL("./glob.worker.ts", import.meta.url)
)

export function fetchEntry(key: string): Promise<any> | null {
  return globWorker.fetchSource(key)
}
