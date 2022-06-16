<template lang="pug">
.background.w-full.h-full.overflow-hidden
  background-blob.blob(
    v-if="blobs.length > 0"
    v-for="({ scaledPosition, outOfFrame }, index) in blobs"
    :class="{ 'out-of-frame': outOfFrame }"
    :color="[palette[index % palette.length][1], palette[index % palette.length][0], palette[index % palette.length][2]]"
    :rotation-speed="1"
    :style="{ '--left': `${scaledPosition[0]}`, '--top': `${scaledPosition[1]}`, '--size': BLOB_SIZE_PERCENTAGE }"
  )
</template>

<script lang="ts" setup>
import { randomAround, randomBetween } from "@/utilities/math"
import BackgroundBlob from "./background/SvgBlob.vue"
import { PALETTE } from "./provide"

const props = withDefaults(
  defineProps<{ blobAmount: number; velocityCoefficient?: number }>(),
  {
    velocityCoefficient: 1,
  }
)
let blobs = $ref<
  {
    position: [x: number, y: number]
    velocity: [x: number, y: number]
    scaledPosition: [x: number, y: number]
  }[]
>([])

const palette = $(inject(PALETTE))

const BLOB_SIZE_PERCENTAGE = 0.2
watch(
  () => props.blobAmount,
  (length) => {
    blobs = Array.from({ length }, (_, i) => ({
      position: [randomBetween(), randomBetween()],
      velocity: [randomAround(-0.01, 0.005), randomAround(-0.012, 0.005)],
      scaledPosition: reactiveComputed(() => [
        (blobs[i]?.position ?? [0, 0])[0] * (1 + BLOB_SIZE_PERCENTAGE * 2.5) -
          BLOB_SIZE_PERCENTAGE * 1.25,
        (blobs[i]?.position ?? [0, 0])[1] * (1 + BLOB_SIZE_PERCENTAGE * 2.5) -
          BLOB_SIZE_PERCENTAGE * 1.25,
      ]),
      outOfFrame: computed(
        () =>
          blobs[i].scaledPosition[0] < -BLOB_SIZE_PERCENTAGE ||
          blobs[i].scaledPosition[0] > 1 ||
          blobs[i].scaledPosition[1] < -BLOB_SIZE_PERCENTAGE ||
          blobs[i].scaledPosition[1] > 1
      ),
    }))
  },
  { immediate: true }
)

const DELTA_COEFFICIENT = 1 / 1e3
let lastTimestamp = 0
function render() {
  const now = Date.now()
  const delta = lastTimestamp === 0 ? 0 : now - lastTimestamp
  lastTimestamp = now

  blobs.forEach((blob) => {
    blob.position[0] +=
      blob.velocity[0] * (delta * DELTA_COEFFICIENT) * props.velocityCoefficient
    if (blob.position[0] < 0) {
      blob.position[0] = 1
    }
    if (blob.position[0] > 1) {
      blob.position[0] = 0
    }

    blob.position[1] +=
      blob.velocity[1] * (delta * DELTA_COEFFICIENT) * props.velocityCoefficient
    if (blob.position[1] < 0) {
      blob.position[1] = 1
    }
    if (blob.position[1] > 1) {
      blob.position[1] = 0
    }
  })
}

useRafFn(render)
</script>

<style lang="sass" scoped>
.background
  background: linear-gradient(240deg, var(--theme-color0-lighter), var(--theme-color0), var(--theme-color0-darker))

  .blob
    position: absolute
    top: 0
    left: 0
    width: calc(100% * var(--size))
    height: calc(100% * var(--size))
    transform: translate(calc(var(--left, 0) * 100vw), calc(var(--top, 0) * 100vh))

    &:not(.out-of-frame)
      transition: transform linear 0.1s
</style>
