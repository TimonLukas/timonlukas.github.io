<template lang="pug">
.project-file-viewer.flex.items-center.justify-center.min-w-0
  n-card.h-full.w-full.min-w-0(v-if="file !== null" :title="filename")
    template(#cover)
      n-breadcrumb.path
        n-breadcrumb-item
        n-breadcrumb-item(
          v-for="(part, index) in pathParts"
          @click="model = '/' + pathParts.slice(0, index + 1).join('/')"
        ) {{ part }}
        n-breadcrumb-item
    .code.h-full(v-if="source !== null")
      pre.w-full.h-full
        code(ref="code" :class="`language-${language}`") {{ source }}
    project-tree(v-else v-model="model" :entries="subtree" class="m-l-[-1rem]")
  n-spin(v-else)
</template>

<script lang="ts" setup>
import { getLanguageFromExtension, usePrism } from "@/about/composables/prism"
import { useSource } from "@/about/composables/source"
import type { Tree } from "../project"
import ProjectTree from "./ProjectTree.vue"

const { Prism, loadLanguage } = usePrism()

const props = defineProps<{ modelValue: string | null; subtree: Tree }>()
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void
}>()
const model = useVModel(props, "modelValue", emit)
const source = useSource(model)

const file = $(model)
const filename = $computed(() => file?.split("/").at(-1))
const extension = $computed(() => filename?.split(".").at(-1))
const pathParts = $computed(() => file?.split("/").slice(1, -1))

const language = $computed(() =>
  typeof extension === "undefined"
    ? "none"
    : getLanguageFromExtension(extension)
)

const code = ref()
watch(source, async () => {
  if (source.value === null) {
    return
  }

  if (typeof extension !== "undefined") {
    await loadLanguage(extension)
  }

  Prism.highlightElement(code.value)
})
</script>

<style lang="sass" scoped>
.project-file-viewer
  :deep(*)
    min-height: 0

  :deep(.n-card-cover)
    overflow: visible

  .path
    transform: translate(calc(var(--n-padding-left) - 6px), 1rem)
</style>
