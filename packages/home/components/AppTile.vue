<template lang="pug">
router-link.inline-block(:to="href")
  n-card.app-tile.w-min(:title="title" :hoverable="true")
    template(#header-extra v-if="$slots.icon")
      n-icon.ml-4(size="24")
        slot(name="icon")
    slot
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  href: string
}>()
</script>

<style lang="sass" scoped>
.app-tile
  min-width: 15rem
</style>
