<template lang="pug">
svg(viewBox="0 0 1 1" :class="{ debug: showDebug }")
  defs(v-if="Array.isArray(color)")
    linearGradient(:id="`gradient-${id}`")
      stop(
        v-for="(stop, index) in color"
        :offset="index / (color.length - 1)"
        :stop-color="stop"
      )
  defs(v-else)
    linearGradient(:id="`gradient-${id}`")
      stop(:stop-color="color")
  g.blob.origin-center(transform="scale(0.8, 0.8)")
    path(stroke-width="0.05" :d="pathDefinition")
  g(v-if="showDebug")
    foreignObject(width="1" height="1")
      equation-plotter(:points="controlPoints.flat(1)" :scale="0.8")
    svg-ruler
    g.debug.blob.origin-center(
      transform="scale(0.8, 0.8)"
      stroke-width="0.0025"
    )
      g(
        v-for="([current, next], index) in [ ['right', 'bottom'], ['bottom', 'left'], ['left', 'top'], ['top', 'right'], ]"
        :class="[current, next]"
      )
        path(
          :d="`M ${wallPoints[current][0]} ${wallPoints[current][1]} ${pathDefinition[index + 1]}`"
        )
        line(
          :x1="wallPoints[current][0] - 0.01"
          :x2="wallPoints[current][0] + 0.01"
          :y1="wallPoints[current][1] - 0.01"
          :y2="wallPoints[current][1] + 0.01"
        )
        line(
          :x1="wallPoints[current][0] - 0.01"
          :x2="wallPoints[current][0] + 0.01"
          :y1="wallPoints[current][1] + 0.01"
          :y2="wallPoints[current][1] - 0.01"
        )
        line(
          :x1="wallPoints[current][0]"
          :y1="wallPoints[current][1]"
          :x2="controlPoints[index][0][0]"
          :y2="controlPoints[index][0][1]"
        )
        line(
          :x1="wallPoints[next][0]"
          :y1="wallPoints[next][1]"
          :x2="controlPoints[index][1][0]"
          :y2="controlPoints[index][1][1]"
        )
        circle(
          :cx="controlPoints[index][0][0]"
          :cy="controlPoints[index][0][1]"
          r="0.01"
        )
        circle(
          :cx="controlPoints[index][1][0]"
          :cy="controlPoints[index][1][1]"
          r="0.01"
        )
</template>

<script lang="ts" setup>
import { useTimestamp } from "@vueuse/core"
import { v4 as uuid } from "uuid"
import { computed, ref, watch } from "vue"
import { useBezierControlPoints } from "@/framework/composables/background"
import EquationPlotter from "@/utilities/components/EquationPlotter.vue"
import SvgRuler from "@/utilities/components/SvgRuler.vue"
import { useIsAlive } from "@/utilities/composables/component"

const id = uuid()
const isAlive = useIsAlive()

const props = withDefaults(
  defineProps<{
    timestamp?: number
    speedFactor?: number
    rotationSpeed?: number
    amplitudeModifier?: number
    showDebug?: boolean
    color: string | string[]
  }>(),
  { speedFactor: 1, rotationSpeed: 0, amplitudeModifier: 1, showDebug: false }
)

const timestamp = computed<number>(() => {
  if (!isAlive.value) {
    return 0
  }

  if (typeof props.timestamp === "number") {
    return props.timestamp
  }

  return useTimestamp().value
})
const progress = ref(0)
const rotation = ref(0)
const controlPoints = useBezierControlPoints(progress, {
  jitter: { offset: Math.PI * 2, coefficient: 0.3 },
  amplitude: computed(() => 0.05 * props.amplitudeModifier),
})

watch(timestamp, (current, previous) => {
  progress.value +=
    ((current - previous) / 1000) * Math.pow(2, props.speedFactor - 1)
  rotation.value += ((current - previous) / 1000) * props.rotationSpeed ** 2
})

const wallPoints = $computed(() => {
  const [bottom, left, top, right] = controlPoints

  return {
    right: [(bottom[0][0] + right[1][0]) / 2, (bottom[0][1] + right[1][1]) / 2],
    bottom: [(bottom[1][0] + left[0][0]) / 2, (bottom[1][1] + left[0][1]) / 2],
    left: [(left[1][0] + top[0][0]) / 2, (left[1][1] + top[0][1]) / 2],
    top: [(top[1][0] + right[0][0]) / 2, (top[1][1] + right[0][1]) / 2],
  }
})

const pathDefinition = $computed(() => {
  const [bottom, left, top, right] = controlPoints

  return [
    `M ${wallPoints.right[0]} ${wallPoints.right[1]}`,
    `C ${bottom[0][0]} ${bottom[0][1]} ${bottom[1][0]} ${bottom[1][1]} ${wallPoints.bottom[0]} ${wallPoints.bottom[1]}`,
    `C ${left[0][0]} ${left[0][1]} ${left[1][0]} ${left[1][1]} ${wallPoints.left[0]} ${wallPoints.left[1]}`,
    `C ${top[0][0]} ${top[0][1]} ${top[1][0]} ${top[1][1]} ${wallPoints.top[0]} ${wallPoints.top[1]}`,
    `C ${right[0][0]} ${right[0][1]} ${right[1][0]} ${right[1][1]} ${wallPoints.right[0]} ${wallPoints.right[1]}`,
  ]
})

const fill = computed(() => `url(#gradient-${id})`)
</script>

<style lang="sass" scoped>
svg
  filter: blur(var(--blur, 0))
  --rotation: v-bind(rotation)

  &:not(.debug)
    transform: rotate(calc(var(--rotation, 0) * 1deg))

  &.debug
    border: 1px solid black

    .blob
      &:not(.debug)
        opacity: .25

      &.debug
        fill: none

        .bottom.right
          stroke: red

        .bottom.left
          stroke: blue

        .top.left
          stroke: green

        .top.right
          stroke: yellow

  > .blob
    transition: opacity .5s

    path
      fill: v-bind(fill)
</style>
