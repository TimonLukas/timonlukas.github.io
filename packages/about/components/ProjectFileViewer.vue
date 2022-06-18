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
          n-icon(
            :component="getIconForFolder('/' + pathParts.slice(0, index + 1).join('/'))"
            class="mr-[.5rem]"
          )
          | {{ part }}
        n-breadcrumb-item
      n-icon.absolute(
        size="24px"
        class="top-[3.2rem] left-[1rem]"
        :component="entry === null ? getIconForFolder(modelValue) : getIcon(entry)"
      )
    template(#header-extra)
      n-switch(v-model:value="showInvisible")
        template(#checked) Show invisibles
        template(#unchecked) Hide invisibles
    .code.h-full.line-numbers.match-braces.rainbow-braces(
      v-if="source !== null"
      class="pb-[.25rem] mt-[-.5rem]"
      :class="[`language-${language}`, { 'show-invisible': showInvisible }]"
    )
      fade.h-full
        pre.w-full.h-full(v-show="!isHighlighting")
          code(ref="code") {{ source }}
    fade.h-full(v-else)
      suspense
        .h-full
          project-tree.h-full(v-model="model" :entries="subtree" class="m-l-[-1rem]")
        template(#fallback)
          .absolute.w-full.h-full.top-0.left-0.flex.items-center.justify-center
            n-spin
  .flex.flex-col.items-center.opacity-50(v-else)
    n-icon(size="4rem"): i-feather-file-text
    n-h2 No file selected
</template>

<script lang="ts" setup>
import { getLanguageFromExtension, usePrism } from "@/about/composables/prism"
import { useSource } from "@/about/composables/source"
import { getIcon, getIconForFolder } from "@/about/icons"
import { Fade } from "@/framework/components/transitions"
import type { Tree } from "../project"

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

const language = $computed((): string =>
  typeof extension === "undefined"
    ? "none"
    : getLanguageFromExtension(extension)
)

let isHighlighting = $ref(false)
const code = ref()
watch(source, async () => {
  if (source.value === null) {
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
</style>
