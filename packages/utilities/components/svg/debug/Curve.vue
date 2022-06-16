<template lang="pug">
defs
  linearGradient(
    :id="`gradient-${id}`"
    :x1="start[0]"
    :x2="end[0]"
    :y1="start[1]"
    :y2="end[1]"
  )
    stop(offset="0%" :stop-color="colors.lighter")
    stop(offset="50%" :stop-color="colors.base")
    stop(offset="100%" :stop-color="colors.darker")
g(fill="none")
  line(
    :x1="start[0] - POINT_CROSS_LINE_DISTANCE"
    :x2="start[0] + POINT_CROSS_LINE_DISTANCE"
    :y1="start[1] - POINT_CROSS_LINE_DISTANCE"
    :y2="start[1] + POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.darker"
  )
  line(
    :x1="end[0] - POINT_CROSS_LINE_DISTANCE"
    :x2="end[0] + POINT_CROSS_LINE_DISTANCE"
    :y1="end[1] + POINT_CROSS_LINE_DISTANCE"
    :y2="end[1] - POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.lighter"
  )
  path(:d="path" :stroke="`url(#gradient-${id})`")
  path(
    :d="[path, `L 0.5 0.5`]"
    :fill="`url(#gradient-${id})`"
    fill-opacity="0.2"
  )
  circle(
    :cx="controlPoints[0][0]"
    :cy="controlPoints[0][1]"
    :r="POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.darker"
  )
  circle(
    :cx="controlPoints[1][0]"
    :cy="controlPoints[1][1]"
    :r="POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.lighter"
  )
  line(
    :x1="start[0]"
    :y1="start[1]"
    :x2="controlPoints[0][0]"
    :y2="controlPoints[0][1]"
    :stroke="colors.darker"
  )
  line(
    :x1="end[0]"
    :y1="end[1]"
    :x2="controlPoints[1][0]"
    :y2="controlPoints[1][1]"
    :stroke="colors.lighter"
  )
</template>

<script lang="ts" setup>
import { v4 as uuid } from "uuid"

const id = uuid()

const props = defineProps<{
  start: [number, number]
  end: [number, number]
  controlPoints: [[number, number], [number, number]]
  themeColorIndex: number
}>()

const POINT_CROSS_LINE_DISTANCE = 0.01

const path = $computed(() => [
  `M ${props.start[0]} ${props.start[1]}`,
  `C ${props.controlPoints[0][0]} ${props.controlPoints[0][1]}`,
  `${props.controlPoints[1][0]} ${props.controlPoints[1][1]}`,
  `${props.end[0]} ${props.end[1]}`,
])

const colors = $computed(() => ({
  base: `var(--theme-color${props.themeColorIndex})`,
  lighter: `var(--theme-color${props.themeColorIndex}-lighter)`,
  darker: `var(--theme-color${props.themeColorIndex}-darker)`,
}))
</script>
