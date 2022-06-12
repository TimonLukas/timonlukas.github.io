<template lang="pug">
g(stroke-width=".25%" stroke="black" opacity=".5")
  g.top
    g(v-for="index in 9" :transform="`translate(${index / 10}, 0)`")
      line(x1="0" x2="0" y1="0" y2="0.01")
      text(transform="translate(-0.02, 0.04) scale(0.002)") {{ index / 10 }}
  g.bottom
    g(v-for="index in 9" :transform="`translate(${index / 10}, 0.99)`")
      line(x1="0" x2="0" y1="0" y2="0.01")
      text(transform="translate(-0.02, -0.01) scale(0.002)") {{ index / 10 }}
  g.left
    g(v-for="index in 9" :transform="`translate(0, ${index / 10})`")
      line(x1="0" x2="0.01" y1="0" y2="0")
      text(transform="translate(0.015, 0.01) scale(0.002)") {{ index / 10 }}
  g.right
    g(v-for="index in 9" :transform="`translate(0.99, ${index / 10})`")
      line(x1="0" x2="0.01" y1="0" y2="0")
      text(transform="translate(-0.04, 0.01) scale(0.002)") {{ index / 10 }}
</template>
