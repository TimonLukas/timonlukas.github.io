<template lang="pug">
svg-blob(:color="colors")
</template>

<script lang="ts" setup>
import SvgBlob from "./SvgBlob.vue"

const props = defineProps<{ themeColorIndexOffset: number }>()
const index = $computed(() => props.themeColorIndexOffset % PALETTE_COLOR_COUNT)

const colors = $computed(() => [
  `var(--theme-color${index}-lighter`,
  `var(--theme-color${index}`,
  `var(--theme-color${index}-darker`,
])
</script>

<script lang="ts">
import { createEntry } from "@/fairytome/entry"
import { PALETTE_COLOR_COUNT } from "@/framework/constants"
import SvgBlobComponent from "./SvgBlob.vue"

export const entry = createEntry<SvgBlobComponent>({
  component: SvgBlobComponent,
  controls: {
    themeColorIndexOffset: {
      type: "range",
      label: "Theme color index offset",
      min: 0,
      max: PALETTE_COLOR_COUNT,
      step: 1,
      initial: 0,
    },
    speedFactor: {
      type: "range",
      label: "Speed factor",
      min: -5,
      max: 5,
      step: 0.05,
      initial: 1,
    },
    rotationSpeed: {
      type: "range",
      label: "Rotation speed",
      min: 0,
      max: 10,
      step: 0.05,
      initial: 0,
    },
    amplitudeModifier: {
      type: "range",
      label: "Amplitude modifier",
      min: 0,
      max: 10,
      step: 0.05,
      initial: 1,
    },
    segments: {
      type: "range",
      label: "Segments",
      min: 2,
      max: 32,
      step: 1,
      initial: 4,
    },
    showDebug: {
      type: "checkbox",
      label: "Show debug utilities",
      initial: false,
    },
  },
})
</script>
