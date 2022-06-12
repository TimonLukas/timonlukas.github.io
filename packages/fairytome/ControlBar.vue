<template lang="pug">
.control-bar
  template(v-for="(control, prop) in entry.controls")
    .flex.flex-row.relative(v-for="(_, index) in model[prop]" :key="index")
      control.flex-1(
        :control="control"
        :title="`${prop} #${index + 1}`"
        :index="model[prop].length > 1 ? index : null"
        :class="{ 'rounded-br-none': index === model[prop].length - 1, 'rounded-r-none': model[prop].length > 1 }"
        v-model="model[prop][index]"
      )
      template(v-if="'amount' in control")
        n-button.self-end(
          v-if="model[prop].length > 1"
          class="mb-[1.5rem]"
          @click="model[prop].splice(index, 1)"
        )
          i-feather-minus-circle.text-red-500
        n-button.absolute.right-0.bottom-0.add.rounded-t-none(
          v-if="index === model[prop].length - 1"
          @click="addControlPropEntry(prop)"
        )
          i-feather-plus-circle.text-green-600
</template>

<script lang="ts" setup>
import type { Entry } from "@/fairytome/entry"
import Control from "./Control.vue"

const props = defineProps<{
  entry: Entry
  modelValue: Record<string, any[]>
}>()
const emit = defineEmits<{
  (event: "update:modelValue", value: Record<string, unknown>): void
}>()

const model = $(useVModel(props, "modelValue", emit))
watch(
  () => props.entry,
  (current) => {
    const storedKeys = Object.keys(model)
    const currentKeys = Object.keys(current.controls)

    const keys = {
      toBeDeleted: storedKeys.filter((key) => !currentKeys.includes(key)),
      toBeAdded: currentKeys.filter((key) => !storedKeys.includes(key)),
    }

    keys.toBeDeleted.forEach((key) => {
      delete model[key]
    })

    keys.toBeAdded.forEach((key) => {
      model[key] = [current.controls[key].initial]
    })
  },
  { immediate: true }
)

function addControlPropEntry(prop: string) {
  model[prop].push(props.entry.controls[prop].initial)
}
</script>

<style lang="sass" scoped>
.control-bar
  button.add
    transform: translateY(.55rem)
</style>
