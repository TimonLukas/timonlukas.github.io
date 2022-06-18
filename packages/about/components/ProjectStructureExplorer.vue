<template lang="pug">
.flex.h-full.w-full
  .flex-none.border-solid.mr-4(class="border-r-[1px] ml-[-1rem] min-w-[20rem]")
    project-tree(:entries="tree" v-model="selectedKey" root)
  .flex-1.min-w-0.relative
    .spinner.absolute.w-full.h-full.top-0.flex.justify-center.items-center(
      v-if="selectedKey !== null"
    )
      n-spin(size="large")
    fade.h-full(duration="250ms" :transition="{ mode: 'out-in' }")
      project-file-viewer.w-full.h-full(
        v-model="selectedKey"
        :key="selectedKey"
        :subtree="subtree"
      )
</template>

<script lang="ts" setup>
import { Fade } from "@/framework/components/transitions"
import { fetchProjectTree, findSubtreeByKey } from "../project"
import ProjectFileViewer from "./ProjectFileViewer.vue"
import ProjectTree from "./ProjectTree.vue"

const tree = fetchProjectTree()
const selectedKey = $ref<string | null>(null)

const subtree = $computed(() =>
  selectedKey === null ? tree : findSubtreeByKey(selectedKey, tree)
)
</script>
