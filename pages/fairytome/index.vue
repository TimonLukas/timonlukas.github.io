<template lang="pug">
.fairytome-index.flex.p-4.gap-4.text-white.w-full.h-full
  .flex.flex-1.flex-col.gap-4(class="min-w-[20rem]")
    n-card
      n-h1.mb-0 Fairytome
      n-h5.mt-0.opacity-50 (like Storybook, but homemade)
      explorer(:entries="entries" v-model="chosenEntry")
    n-card.flex-1.flex.flex-col.overflow-hidden
      control-bar(
        v-if="chosenEntry !== null"
        :entry="chosenEntry"
        v-model="controlProps.value"
      )
      .placeholder.w-full.h-full.flex.justify-center.align-center(v-else)
        n-spin(size="large")
  n-card.stage.overflow-hidden.flex.flex-col.align-center.justify-center(
    class="flex-[3]"
  )
    component(
      v-if="chosenEntry !== null"
      :is="chosenEntry.component"
      v-bind="controlPropsUnpacked"
    )
    .placeholder.w-full.h-full.flex.justify-center.align-center(v-else)
      n-spin(size="large")
</template>

<script lang="ts" setup>
import ControlBar from "@/fairytome/ControlBar.vue"
import Explorer from "@/fairytome/Explorer.vue"
import { useEntries, type Entry } from "@/fairytome/entry"
import { useRouteQuery } from "@vueuse/router"

const { entries } = toRefs(useEntries())
const packages = computed(() => [...new Set(entries.value.map((entry) => entry.package))])

const options = computed(() =>
  entries.value.map((entry) => ({ label: entry.name, value: entry.name }))
)

let chosenEntry = $ref<Entry | null>(null)
let entryRouteQuery = $(useRouteQuery<string>("entry", ""))

watch(() => chosenEntry, () => {
  entryRouteQuery = `${chosenEntry?.package}/${chosenEntry?.path}/${chosenEntry?.name}`
})

const controlProps = computed(() =>
  useLocalStorage(
    `FAIRYTOME_${chosenEntry?.package}_${chosenEntry?.path}_${chosenEntry?.name}`,
    {} as Record<string, any[]>
  )
)
const controlPropsUnpacked = computed(() => Object.fromEntries([...Object.entries(controlProps.value.value).map(([prop, value]) => {
  if (chosenEntry === null) {
    return [prop, value]
  }

  const control = chosenEntry.controls[prop]

  if (typeof control !== "undefined" && "amount" in control && value.length > 1) {
    return [prop, value]
  }

  return [prop, value[0]]
}), ...Object.entries(chosenEntry?.overrides ?? {})]))
</script>

<style lang="sass" scoped>
.fairytome-index
  .placeholder
    background: rgba(0, 0, 0, 0.3)
    transform: scale(1.5)

  .stage
    > :deep(.p-4)
      height: 100%

    > :deep(.n-card__content)
      max-height: 100%

      > *
        max-height: 100%
</style>
