<template lang="pug">
.about-index.p-4.flex.w-full.h-full.overflow-hidden
  n-card.flex.flex-1.h-full.overflow-hidden(title="About this page")
    template(#header-extra)
      n-breadcrumb
        breadcrumb-item(href="/")
          template(#icon): i-feather-home
          | Home
        n-breadcrumb-item
          n-icon.mr-1: i-feather-info
          | About
    n-tabs.tabs.h-full.flex.flex-col(
      type="line"
      animated
      v-model:value="activeTab"
    )
      n-tab-pane.h-full(
        tab="General structure"
        name="general-structure"
        @transitionend.self="transitionEndHandler('general-structure', $event)"
      )
        fade.flex.h-full(duration=".5s" :transition="{ mode: 'out-in' }")
          suspense(v-if="explorer !== null")
            component(:is="explorer" :key="activeTab")
        .flex.items-center.justify-center.w-full.h-full.absolute.top-0
          n-spin(size="large")
      n-tab-pane.h-full(
        tab="Vite config"
        name="vite-config"
        @transitionend.self="transitionEndHandler('vite-config', $event)"
      )
      n-tab-pane.h-full(
        tab="Custom plugins"
        name="custom-plugins"
        @transitionend.self="transitionEndHandler('custom-plugins', $event)"
      )
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import type { Component } from "vue"
import { Fade } from "@/framework/components/transitions/index"
import { BreadcrumbItem } from "@/framework/components/ui"

const TABS = {
  "general-structure": "General structure",
  "vite-config": "Vite config",
  "custom-plugins": "Custom plugins",
}
type TabId = keyof typeof TABS

let transitionDone = $ref(true)
const activeTab = useRouteQuery<TabId>("tab", "general-structure")
watch(activeTab, () => {
  transitionDone = false
})

const explorer = shallowRef<Component | null>(null)

watch(
  () => [transitionDone, activeTab],
  () => {
    explorer.value =
      activeTab.value === "general-structure" && transitionDone
        ? defineAsyncComponent(
            () => import("@/about/components/ProjectStructureExplorer.vue")
          )
        : null
  },
  { immediate: true }
)

function transitionEndHandler(name: TabId, event: TransitionEvent): void {
  if (name === activeTab.value) {
    transitionDone = true
  }
}
</script>

<style lang="sass" scoped>
.about-index
  > :deep(.n-card > .n-card__content)
    height: calc(100% - 4rem)

  :deep(.tabs > .n-tabs-pane-wrapper)
    height: calc(100% - 3rem)
    overflow: visible
</style>
