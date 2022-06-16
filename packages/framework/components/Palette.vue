<template lang="pug">
slot(:colors="palette")
</template>

<script lang="ts" setup>
import chroma from "chroma-js"
import hue from "iwanthue"
import { PALETTE_COLOR_COUNT } from "@/framework/constants"
import { PALETTE } from "./provide"

const props = withDefaults(
  defineProps<{ seed: string; saturate?: number; offset?: number }>(),
  {
    saturate: 0,
    offset: 0,
  }
)

const totalOffset = $computed(() => props.offset % PALETTE_COLOR_COUNT)

const palette = $computed(() => {
  const colors = hue(PALETTE_COLOR_COUNT, {
    colorSpace: "pimp",
    seed: props.seed,
  }).map((color) => [
    chroma(color).saturate(props.saturate).hex(),
    chroma(color).brighten().saturate(props.saturate).hex(),
    chroma(color).darken().saturate(props.saturate).hex(),
  ])

  return [...colors.slice(totalOffset), ...colors.slice(0, totalOffset)]
})

provide(PALETTE, $$(palette))

onMounted(() => {
  const element = useCurrentElement<HTMLElement>()
  const container = computed(() => {
    if (element.value.nodeType === Node.TEXT_NODE) {
      return element.value.parentElement
    }

    return element.value
  })

  const themeColorsVariable = useCssVar("--theme-colors", container)
  themeColorsVariable.value = Array.from(
    { length: PALETTE_COLOR_COUNT },
    (_, i) => [
      `--theme-color${i}`,
      `--theme-color${i}-lighter`,
      `--theme-color${i}-darker`,
    ]
  )
    .flat()
    .join(", ")

  const styleVariables = Array.from(
    { length: PALETTE_COLOR_COUNT },
    (_, index) => [
      useCssVar(`--theme-color${index}`, container),
      useCssVar(`--theme-color${index}-lighter`, container),
      useCssVar(`--theme-color${index}-darker`, container),
    ]
  )

  watch(
    $$(palette),
    () =>
      palette.forEach(([normal, lighter, darker], index) => {
        styleVariables[index][0].value = normal
        styleVariables[index][1].value = lighter
        styleVariables[index][2].value = darker
      }),
    { immediate: true }
  )
})
</script>

<style>
@property --theme-color0-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color0 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color0-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color1-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color1 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color1-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color2-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color2 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color2-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color3-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color3 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color3-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color4-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color4 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color4-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color5-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color5 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color5-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color6-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color6 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color6-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color7-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color7 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color7-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}
</style>
