<template lang="pug">
.project-file-viewer.flex.items-center.justify-center.min-w-0
  n-card.relative.h-full.w-full.min-w-0(v-if="file !== null" :title="filename")
    template(#cover)
      n-breadcrumb.path
        n-breadcrumb-item
          n-icon(:component="getIconForFolder('/')" class="mr-[.5rem]")
        n-breadcrumb-item(
          v-for="(part, index) in pathParts"
          @click="model = '/' + pathParts.slice(0, index + 1).join('/')"
        )
          n-icon(class="mr-[.5rem]"): component(
            :is="getIconForFolder('/' + pathParts.slice(0, index + 1).join('/'))"
          )
          | {{ part }}
        n-breadcrumb-item
      n-icon.absolute(
        size="24px"
        class="top-[3.2rem] left-[1rem]"
        :component="entry === null ? getIconForFolder(modelValue) : getIcon(entry)"
      )
    .flex.h-full
      .code.relative.flex-1.h-full.line-numbers.match-braces.rainbow-braces(
        v-if="source !== null"
        class="pb-[.25rem] mt-[-.5rem]"
        :class="[`language-${language}`, { 'show-invisible': showInvisible }]"
      )
        n-switch.absolute.right-0(
          class="top-[-2rem]"
          v-model:value="showInvisible"
          v-if="!isImage"
        )
          template(#checked) Show invisibles
          template(#unchecked) Hide invisibles
        fade.h-full
          pre.w-full.h-full(v-if="!isImage" v-show="!isHighlighting")
            code(ref="code") {{ source }}
          .flex.flex-col.h-full.w-full.items-center.justify-center.relative.overflow-hidden(
            v-else
          )
            .controls.absolute.top-4(class="w-1/2 z-[1]")
              n-slider(
                v-model:value="imageZoom"
                :min="-10"
                :max="10"
                :step="0.01"
                :format-tooltip="(value) => `x${(1.2 ** value).toFixed(2)}`"
              )
            img.img-preview.border-solid.border-black.origin-center(
              :src="file"
              :style="{ '--scale': imageScale }"
            )
      fade.h-full.flex-1(v-else)
        suspense(v-if="!isImage")
          .h-full
            project-tree.h-full(v-model="model" :entries="subtree" class="m-l-[-1rem]")
          template(#fallback)
            .absolute.w-full.h-full.top-0.left-0.flex.items-center.justify-center
              n-spin
      .flex-1.ml-4(v-if="structureEntry !== null")
        project-structure-entry(:markdown-source="structureEntry")
  .flex.flex-col.items-center.opacity-50(v-else)
    n-icon(size="4rem"): i-feather-file-text
    n-h2 No file selected
</template>

<script lang="ts" setup>
import { getLanguageFromExtension, usePrism } from "@/about/composables/prism"
import { useSource } from "@/about/composables/source"
import { getIcon, getIconForFolder } from "@/about/icons"
import { fetchEntry } from "@/about/structure"
import { Fade } from "@/framework/components/transitions"
import type { Tree } from "../project"
import ProjectStructureEntry from "./ProjectStructureEntry.vue"

const ProjectTree = defineAsyncComponent(() => import("./ProjectTree.vue"))

const { Prism, loadLanguage } = usePrism()

const props = defineProps<{ modelValue: string | null; subtree: Tree }>()
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void
}>()
const model = useVModel(props, "modelValue", emit)
const source = useSource(model)

const entry = $computed(
  () => props.subtree.find((node) => node.key === model.value) ?? null
)

let showInvisible = $ref(false)

const file = $(model)
const filename = $computed(() => file?.split("/").at(-1))
const extension = $computed(() => filename?.split(".").at(-1))
const pathParts = $computed(() => file?.split("/").slice(1, -1))

let structureEntry = $ref(null)
watch(
  model,
  async (value) => {
    structureEntry = null

    if (value !== null) {
      structureEntry = await fetchEntry(value)
    }
  },
  { immediate: true }
)

const isImage = $computed(
  () =>
    typeof extension !== "undefined" &&
    ["ico", "png", "jpg"].includes(extension)
)
const imageZoom = ref(0)
const debouncedZoom = refDebounced(imageZoom, 100)
const imageScale = $computed(() => 1.2 ** debouncedZoom.value)

const language = $computed((): string =>
  typeof extension === "undefined"
    ? "none"
    : getLanguageFromExtension(extension)
)

let isHighlighting = $ref(false)
const code = ref()
watch(source, async () => {
  if (source.value === null || isImage) {
    return
  }

  isHighlighting = true
  if (typeof extension !== "undefined") {
    await loadLanguage(extension)
  }

  setTimeout(
    () =>
      Prism.highlightElement(code.value, false, () => {
        isHighlighting = false
      }),
    50
  )
})
</script>

<style lang="sass" scoped>
.project-file-viewer
  :deep(*)
    min-width: 0
    min-height: 0

  :deep(.n-card-cover)
    overflow: visible

  :deep(.n-card-header__main)
    padding-left: 1.75rem

  .path
    transform: translate(calc(var(--n-padding-left) - 6px), .6rem)
    padding-top: 0.5rem

    :deep(.n-breadcrumb-item:first-child)
      pointer-events: none

  .code
    &:not(.show-invisible)
      :deep(.token)
        &.lf, &.space, &.tab, &.cr, &.crlf
          opacity: 0

    :deep(.token)
      transition: opacity .5s

  .img-preview
    border: 1px solid black
    transform: scale(var(--scale, 1))
    transition: transform .5s
</style>
