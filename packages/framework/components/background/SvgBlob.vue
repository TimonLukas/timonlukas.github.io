<template lang="pug">
svg.overflow-visible(viewBox="0 0 1 1" :class="{ debug: showDebug }")
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
  g.blob(:transform="`scale(${scale}) rotate(${rotation})`")
    path(stroke-width="0.05" :d="pathDefinition")
  g(v-if="showDebug" stroke-width="0.0025")
    g(:transform="`scale(${scale})`")
      svg-debugger(:path="pathDefinition")
    foreignObject(width="1" height="1")
      equation-plotter(:points="controlPoints.flat(1)" :scale="scale")
    svg-ruler
</template>

<script lang="ts" setup>
import { useTimestamp } from "@vueuse/core"
import { v4 as uuid } from "uuid"
import { computed, ref, watch } from "vue"
import { useBezierControlPoints } from "@/framework/composables/background"
import {
  EquationPlotter,
  SvgDebugger,
  SvgRuler,
} from "@/utilities/components/svg"
import { useIsAlive } from "@/utilities/composables/component"

const id = uuid()
const isAlive = useIsAlive()
const scale = ref(0.75)

const props = withDefaults(
  defineProps<{
    timestamp?: number
    speedFactor?: number
    rotationSpeed?: number
    amplitudeModifier?: number
    showDebug?: boolean
    segments?: number
    color: string | string[]
  }>(),
  {
    speedFactor: 1,
    rotationSpeed: 0,
    amplitudeModifier: 1,
    segments: 4,
    showDebug: false,
  }
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
  segments: toRef(props, "segments"),
})

watch(timestamp, (current, previous) => {
  progress.value +=
    ((current - previous) / 1000) * Math.pow(2, props.speedFactor - 1)
  rotation.value += ((current - previous) / 1000) * props.rotationSpeed ** 2
})

const segmentPoints = $computed(() =>
  controlPoints.map((controls, index) => {
    const previous =
      controlPoints[index === 0 ? controlPoints.length - 1 : index - 1]
    return [
      (controls[0][0] + previous[1][0]) / 2,
      (controls[0][1] + previous[1][1]) / 2,
    ]
  })
)

const start = $computed(() => segmentPoints[0])
const pathDefinition = $computed(() => [
  `M ${start[0]} ${start[1]}`,
  ...controlPoints.map(
    (controls, index) =>
      `C ${controls[0][0]} ${controls[0][1]} ${controls[1][0]} ${
        controls[1][1]
      } ${segmentPoints[(index + 1) % segmentPoints.length][0]} ${
        segmentPoints[(index + 1) % segmentPoints.length][1]
      }`
  ),
])

const fill = computed(() => `url(#gradient-${id})`)
let angle = $ref(0)
const pos = $computed(() => ({
  sin: Math.sin((angle * Math.PI * 2) / 360) * 1.15,
  cos: Math.cos((angle * Math.PI * 2) / 360) * 1.15,
}))

defineExpose({ angle, pos })
</script>

<style lang="sass" scoped>
svg
  filter: blur(var(--blur, 0))

  *
    transform-origin: center center

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
