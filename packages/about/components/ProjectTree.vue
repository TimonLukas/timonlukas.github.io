<template lang="pug">
n-tree.project-tree(
  :class="{ root }"
  :data="root ? [{ key: '/', label: '/', children: entries }] : entries"
  :default-expand-all="true"
  v-model:selected-keys="selectedKeys"
  v-bind="$attrs"
)
</template>

<script lang="ts" setup>
import type { Tree } from "../project"

let selectedKeys = ref<string[]>([])
watch(selectedKeys, () => {
  if (
    selectedKeys.value.length === 0 ||
    selectedKeys.value[0] === props.modelValue
  ) {
    return
  }

  model.value = selectedKeys.value[0]
})

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
      selectedKeys.value = []
      return
    }

    selectedKeys.value = [model.value]
  },
  { immediate: true }
)
</script>

<style lang="sass" scoped>
.project-tree
  &.root > :deep(.n-tree-node-wrapper:first-child)
    pointer-events: none

    svg
      display: none
</style>
