<template lang="pug">
g
  curve(v-for="curve in curves" v-bind="curve")
</template>

<script lang="ts" setup>
import { parseSVG } from "svg-path-parser"
import { PALETTE } from "@/framework/components/provide"
import { Curve } from "./debug"

const props = defineProps<{ path: string | string[] }>()
const palette = $(inject<[string, string, string][]>(PALETTE))

const commands = $computed(() =>
  parseSVG(Array.isArray(props.path) ? props.path.join(" ") : props.path)
)

const curves = $computed(() =>
  commands.flatMap((command, index) => {
    if (command.command !== "curveto") {
      return []
    }

    const previous = commands[index - 1]

    if (!("x" in previous) || !("y" in previous)) {
      return []
    }

    return [
      {
        start: [previous.x, previous.y],
        end: [command.x, command.y],
        controlPoints: [
          [command.x1, command.y1],
          [command.x2, command.y2],
        ],
        themeColorIndex: index % palette.length,
      },
    ]
  })
)
</script>
