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
    n-tabs.tabs.h-full.flex.flex-col(type="line" :animated="true")
      n-tab-pane.h-full(tab="General structure" name="general-structure")
        fade.flex.h-full(duration=".5s" :transition="{ mode: 'in-out' }")
          suspense
            component(:is="ProjectStructureExplorer")
            template(#fallback)
              .flex.items-center.justify-center.w-full.h-full.absolute
                n-spin(size="large")
      n-tab-pane.h-full(tab="Vite config" name="vite-config")
      n-tab-pane.h-full(tab="Custom plugins" name="custom-plugins")
</template>

<script lang="ts" setup>
import { Fade } from "@/framework/components/transitions/index"
import { BreadcrumbItem } from "@/framework/components/ui"

const ProjectStructureExplorer = defineAsyncComponent(
  () => import("@/about/components/ProjectStructureExplorer.vue")
)
</script>

<style lang="sass" scoped>
.about-index
  > :deep(.n-card > .n-card__content)
    height: calc(100% - 4rem)

  :deep(.tabs > .n-tabs-pane-wrapper)
    height: calc(100% - 3rem)
    overflow: visible
</style>