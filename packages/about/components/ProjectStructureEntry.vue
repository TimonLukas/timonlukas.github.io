<template lang="pug">
.prose(v-html="rendered")
</template>

<script lang="ts" setup>
import { marked } from "marked"

const props = defineProps<{ markdownSource: string }>()
const rendered = $computed(() => marked(props.markdownSource))
</script>

<style lang="sass" scoped>
.prose
  :deep(h2)
    code
      &::before, &::after
        content: ""
</style>
