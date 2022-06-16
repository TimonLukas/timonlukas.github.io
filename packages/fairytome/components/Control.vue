<template lang="pug">
.control
  n-form-item(v-if="control.type === 'text'" :label="label")
    n-input(v-model:value="model")
  n-form-item(
    v-if="control.type === 'range'"
    :label="`${label}: ${modelValue}`"
  )
    n-slider.w-full(
      v-model:value="model"
      :min="control.min"
      :max="control.max"
      :step="control.step"
    )
  n-form-item(v-if="control.type === 'color'" :label="label")
    n-color-picker(v-model:value="model")
  n-checkbox(v-if="control.type === 'checkbox'" v-model:checked="model") {{ label }}
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core"
import { computed } from "vue"
import type { EntryOption } from "@/fairytome/entry"

const props = withDefaults(
  defineProps<{
    title: string
    control: EntryOption
    index?: number | null
    modelValue: EntryOption["initial"]
  }>(),
  { index: null }
)
const emit = defineEmits<{
  (event: "update:modelValue", value: EntryOption["initial"]): void
}>()

const model = useVModel(props, "modelValue", emit)

const label = computed(() =>
  props.index !== null
    ? `${props.control.label} #${props.index}`
    : props.control.label
)
</script>
