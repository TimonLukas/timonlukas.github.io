<template lang="pug">
palette(seed="abcdefghi" :offset="paletteOffset + manualPaletteOffset")
  .app.w-screen.h-screen.overflow-hidden(:class="{ loaded }")
    .content.absolute.w-full.h-full(class="z-[5]")
      router-view(v-slot="{ Component }")
        transition(name="fade")
          component(:is="Component")
    background.absolute.top-0.left-0.w-full.h-full.z-0(:blob-amount="0")
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import Background from "@/framework/components/Background.vue"
import Palette from "./components/Palette.vue"

let loaded = $ref(false)
onMounted(() =>
  setTimeout(() => {
    loaded = true
  }, 50)
)

const route = useRoute()
const manualPaletteOffset = ref(0)
const paletteOffset = computed(() => {
  if (route.fullPath.includes("fairytome")) {
    return 1
  }

  if (route.fullPath.includes("about")) {
    return 2
  }

  return 0
})
</script>

<style lang="sass" scoped>
.app.loaded
  transition: 1s
  transition-property: var(--theme-colors)

  .content
    > *
      position: absolute
      top: 0
      left: 0

      &.fade
        &-enter-active, &-leave-active
          transition: opacity .5s

        &-enter-from, &-leave-to
          opacity: 0
</style>
