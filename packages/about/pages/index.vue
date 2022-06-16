<template lang="pug">
.about-index.p-4.w-full
  n-card(title="About this page")
    template(#header-extra)
      n-breadcrumb
        breadcrumb-item(href="/")
          template(#icon): i-feather-home
          | Home
        n-breadcrumb-item
          n-icon.mr-1: i-feather-info
          | About
    n-tabs(type="line" :animated="true")
      n-tab-pane(tab="General structure" name="general-structure")
      n-tab-pane(tab="Vite config" name="vite-config")
      n-tab-pane(tab="Custom plugins" name="custom-plugins")
</template>

<script lang="ts" setup>
import { BreadcrumbItem } from "@/framework/components/ui"
</script>
