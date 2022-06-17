import type { Ref } from "vue"
import { fetchFileSource } from "../project"

export function useSource(
  file: Ref<string | null>
): Readonly<Ref<string | null>> {
  const source = ref<string | null>(null)

  watch(
    file,
    async () => {
      if (file.value === null) {
        source.value = ""
        return
      }

      source.value = (await fetchFileSource(file.value)) ?? null
    },
    { immediate: true }
  )

  return source
}
