<template lang="pug">
.transition-fade(
  :style="{ '--transition-fade-duration': duration }"
  v-bind="$attrs"
)
  transition(name="fade" v-bind="transition")
    slot
</template>

<script lang="ts" setup>
import type { BaseTransitionProps } from "vue"

defineProps<{ duration?: string; transition?: BaseTransitionProps }>()
</script>

<style lang="sass" scoped>
.transition-fade
  > :deep(.fade-enter-active), :deep(.fade-leave-active)
    transition: opacity var(--transition-fade-duration, 1s)

  > :deep(.fade-enter-from), > :deep(.fade-leave-to)
    opacity: 0
</style>
