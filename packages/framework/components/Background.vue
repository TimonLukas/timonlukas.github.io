<template lang="pug">
.background.w-full.h-full.overflow-hidden
  background-blob.blob(
    v-for="({ position }, index) in blobs"
    class="w-[20%] h-[20%]"
    :color="[palette[index % palette.length][1], palette[index % palette.length][0], palette[index % palette.length][2]]"
    :rotation-speed="1"
    :style="{ '--left': `${position[0] * 1.4 - 0.2}`, '--top': `${position[1] * 1.4 - 0.2}` }"
  )
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue"
import { randomAround, randomBetween } from "@/utilities/math"
import { BackgroundBlob } from "./background"
import { PALETTE } from "./provide"

const props = defineProps<{ blobAmount: number }>()
const blobs = ref<
  {
    position: [x: number, y: number]
    velocity: [x: number, y: number]
  }[]
>([])

const palette = $(inject(PALETTE))

watch(
  () => props.blobAmount,
  (length) => {
    blobs.value = Array.from({ length }, () => ({
      position: [randomBetween(), randomBetween()],
      velocity: [randomAround(-0.01, 0.005), randomAround(-0.012, 0.005)],
    }))
  },
  { immediate: true }
)

const isAlive = ref(false)
onMounted(() => {
  isAlive.value = true
  render()
})
onBeforeUnmount(() => {
  isAlive.value = false
})

function render(delta = 0) {
  blobs.value.forEach((blob) => {
    blob.position[0] += blob.velocity[0] * (delta / 1e6)
    if (blob.position[0] < 0) {
      blob.position[0] = 1
    }
    if (blob.position[0] > 1) {
      blob.position[0] = 0
    }

    blob.position[1] += blob.velocity[1] * (delta / 1e6)
    if (blob.position[1] < 0) {
      blob.position[1] = 1
    }
    if (blob.position[1] > 1) {
      blob.position[1] = 0
    }
  })

  if (isAlive.value) {
    requestAnimationFrame(render)
  }
}
</script>

<style scoped>
.background {
  background: linear-gradient(
    240deg,
    var(--theme-color0-lighter),
    var(--theme-color0),
    var(--theme-color0-darker)
  );
}

.blob {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(
    calc(var(--left, 0) * 100vw),
    calc(var(--top, 0) * 100vh)
  );
}
</style>
