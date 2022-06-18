<template lang="pug">
.pb-4.h-full.flex.flex-col
  .controls.pl-7.pr-2.pt-1.mb-2.relative.flex-none(class="z-[1]")
    n-input(placeholder="Search..." clearable @update:value="handleInput")
    fade.absolute.top-3.left-0
      n-spin(:size="20" v-if="isLoading")
    n-switch.absolute.right-6(class="bottom-[-2rem]" v-model:value="showDotEntries")
      template(#checked) Show dots
      template(#unchecked) Hide dots
  .flex-1.overflow-y-scroll.min-h-0
    n-tree.project-tree(
      :class="{ root, 'dot-shown': showDotEntries, empty: entries.length === 0 }"
      :data="tree"
      :node-props="generateProps"
      :show-irrelevant-nodes="true"
      :expanded-keys="pattern.length > 0 ? ['/', ...subtree.map((node) => node.key)] : expandedKeys"
      :pattern="pattern"
      @update:expanded-keys="(keys) => pattern.length === 0 && (expandedKeys = keys)"
      v-model:selected-keys="selectedKeys"
      v-bind="$attrs"
    )
</template>

<script lang="ts" setup>
import { NIcon } from "naive-ui"
import { getFolderIcon } from "@/about/icons/folder"
import { Fade } from "@/framework/components/transitions/index"
import type { Tree, TreeNode } from "../project"
import { isFolder } from "../project"

let expandedKeys = $ref<string[]>(["/"])
let selectedKeys = $ref<string[]>([])
watch(
  () => selectedKeys,
  () => {
    if (selectedKeys.length === 0 || selectedKeys[0] === props.modelValue) {
      return
    }

    model.value = selectedKeys[0]
  }
)

const props = defineProps<{
  entries: Readonly<Tree>
  modelValue: string | null
  root?: boolean
}>()
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void
}>()
const model = useVModel(props, "modelValue", emit)
watch(
  model,
  () => {
    if (model.value === null) {
      selectedKeys = []
      return
    }

    selectedKeys = [model.value]
  },
  { immediate: true }
)

function filterSubtree(tree: Readonly<Tree>): Tree {
  return tree
    .filter(
      (node) =>
        node.key.includes(pattern.value) &&
        (showDotEntries || !node.label.startsWith("."))
    )
    .map((node) =>
      isFolder(node)
        ? {
            ...node,
            children: filterSubtree(node.children),
          }
        : node
    )
}
const subtree = $computed(() => {
  return filterSubtree(props.entries)
})

const tree = $computed(() => {
  if (props.root && subtree.length > 0) {
    return [
      {
        key: "/",
        label: "/",
        children: subtree,
        prefix: () =>
          h(
            NIcon,
            { size: "1.25rem" },
            { default: () => h(getFolderIcon("/")) }
          ),
      },
    ]
  }

  return subtree
})

watch(
  () => props.entries,
  (entries) => {
    if (props.root) {
      return
    }

    expandedKeys = entries.map(({ key }) => key)
  },
  { immediate: true }
)

function generateProps({ option: node }: { option: TreeNode }) {
  const { key, label } = node
  const isDotEntry = label.startsWith(".")

  return {
    class: {
      empty: !isFolder(node) || node.children.length === 0,
      dot: isDotEntry,
    },
  }
}

let isLoading = $ref(false)
const query = ref("")
const pattern = refDebounced(query, 500)

watch(pattern, () =>
  setTimeout(() => {
    isLoading = false
  }, 50)
)

function handleInput(value: string) {
  query.value = value
  isLoading = true
}
let showDotEntries = $ref(true)
</script>

<style lang="sass" scoped>
.project-tree
  &.root
    :deep(> .n-tree-node-wrapper)
      &:first-child
        pointer-events: none

        .n-tree-node-switcher
          visibility: hidden

    :deep(.n-tree-node)
      margin-left: -1rem

  :deep(.n-tree-node-wrapper)
    margin-left: 1.5rem
    padding: 0

    &:nth-child(even)
      background: rgba(0, 0, 0, 0.05)

    > .n-tree-node
      padding: 3px 0

      &.empty
        > .n-tree-node-switcher
          visibility: hidden
          pointer-events: none

      &.dot .n-tree-node-content__text
        opacity: .75

      &.even.visible
        background: rgba(0, 0, 0, 0.1)

  :deep(.n-empty)
    margin-top: 4rem
</style>