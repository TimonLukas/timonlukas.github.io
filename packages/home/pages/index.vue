<template lang="pug">
.index.p-4.w-full
  .apps
    app-tile(title="Fairytome" href="/fairytome")
      template(#icon): i-feather-book-open
      | Storybook-like component playground
    app-tile(title="About" href="/about")
      template(#icon): i-feather-info
      | Information about this page
</template>

<script lang="ts" setup>
import { AppTile } from "@/home/components"
</script>

<style lang="sass" scoped>
.apps
  > *
    margin-right: 1rem
    margin-bottom: 1rem
</style>
