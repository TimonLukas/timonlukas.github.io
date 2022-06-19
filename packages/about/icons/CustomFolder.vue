<template lang="pug">
span.icon.relative
  n-icon(v-bind="$attrs" :color="baseColor")
    i-vscode-icons-default-folder.folder
  n-icon-wrapper.absolute.top-3.left-2(
    :size="14"
    :border-radius="radius ?? 0"
    v-if="typeof backgroundColor !== 'undefined'"
    :color="backgroundColor"
  )
    n-icon(size="0.75rem" :color="topColor")
      component.top(
        :is="icon"
        :class="{ 'custom-color': typeof topColor !== 'undefined' }"
      )
  n-icon.absolute.top-2.left-2(size="1rem" :color="topColor" v-else)
    component.top(
      :is="icon"
      :class="{ 'custom-color': typeof topColor !== 'undefined' }"
    )
</template>

<script lang="ts" setup>
import type { Component } from "vue"

const props = defineProps<{
  baseColor: string
  topColor?: string
  icon: Component
  backgroundColor?: string
  radius?: number
}>()
</script>

<style lang="sass" scoped>
.icon
  .folder
    :deep(path)
      fill: currentColor

  .top.custom-color
    :deep(path)
      fill: currentColor
</style>
