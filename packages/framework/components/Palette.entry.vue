<template lang="pug">
palette(v-slot="{ colors }")
  n-table
    thead
      tr
        th Index
        th Color
        th Lighter
        th Darker
    tbody
      tr(
        v-for="([normal, lighter, darker], index) in colors"
        :key="index"
        :data-index="index"
      )
        td(class="w-[3rem]") \#{{ index }}
        td(:style="{ background: normal }")
        td(:style="{ background: lighter }")
        td(:style="{ background: darker }")
</template>

<script lang="ts" setup>
import Palette from "./Palette.vue"
</script>

<script lang="ts">
import { createEntry } from "@/fairytome/entry"
import PaletteComponent from "./Palette.vue"

export const entry = createEntry<PaletteComponent>({
  component: PaletteComponent,
  controls: {
    seed: {
      type: "text",
      label: "Seed",
      initial: Date.now().toString(),
    },
    saturate: {
      type: "range",
      label: "Post: Saturation",
      min: -5,
      max: 5,
      initial: 0,
    },
  },
})
</script>
