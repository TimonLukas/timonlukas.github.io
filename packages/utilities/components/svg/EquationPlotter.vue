<template lang="pug">
canvas.w-full.h-full(ref="canvas" :width="width" :height="height")
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ points: [number, number][]; scale?: number }>(),
  { scale: 1 }
)
const { points, scale } = $(props)
const canvas = ref<HTMLCanvasElement>()

const { width, height } = $(useElementBounding(canvas))
const backup = $computed(() => new OffscreenCanvas(width, height))

let ctx: CanvasRenderingContext2D | null = null
let backupCtx: OffscreenCanvasRenderingContext2D | null = null
function render() {
  if (ctx === null) {
    if (typeof canvas.value === "undefined") {
      return
    }

    ctx = canvas.value.getContext("2d")
    backupCtx = backup.getContext("2d")
  }

  if (
    ctx === null ||
    backupCtx === null ||
    typeof canvas.value === "undefined"
  ) {
    return
  }

  backupCtx.clearRect(0, 0, width, height)
  backupCtx.drawImage(canvas.value, 0, 0)

  ctx.save()
  ctx.clearRect(0, 0, width, height)
  ctx.globalAlpha = 0.975
  ctx.drawImage(backup, 0, 0)

  ctx.translate(width / 2, height / 2)
  ctx.scale(scale, scale)
  ctx.translate(-width / 2, -height / 2)

  ctx.globalAlpha = 1
  ctx.fillStyle = "#000"
  points.forEach(([x, y]) => {
    ctx?.fillRect(x * width, y * height, 1, 1)
  })
  ctx.restore()
}

watch(
  () => points.length,
  () => {
    ctx?.clearRect(0, 0, width, height)
  }
)

useRafFn(render)
</script>
