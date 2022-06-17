<template lang="pug">
.flex.h-full.w-full
  .flex-none.overflow-y-scroll.border-solid.mr-4(
    class="border-r-[1px] ml-[-1rem] min-w-[10rem]"
  )
    project-tree(:entries="tree" v-model="selectedKey" root)
  project-file-viewer.flex-1(v-model="selectedKey" :subtree="subtree")
</template>

<script lang="ts" setup>
import { fetchProjectTree, findSubtreeByKey } from "../project"
import ProjectFileViewer from "./ProjectFileViewer.vue"
import ProjectTree from "./ProjectTree.vue"

const tree = fetchProjectTree()
const selectedKey = $ref<string | null>(null)

const subtree = $computed(() =>
  selectedKey === null ? tree : findSubtreeByKey(selectedKey, tree)
)
</script>
