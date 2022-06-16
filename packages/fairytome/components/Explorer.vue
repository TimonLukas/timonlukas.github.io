<template lang="pug">
n-form
  n-form-item(label="Package")
    n-select(
      v-model:value="currentPackage"
      :options="packages.length > 0 ? packages.map((name) => ({ label: name, value: name })) : [{ label: 'Loading...', disabled: true, value: '' }]"
      :disabled="packages.length === 0"
    )
  n-form-item(label="Entry")
    n-select(
      v-model:value="currentName"
      :options="names.length > 0 ? names.map((name) => ({ label: name, value: name })) : [{ label: 'Loading...', disabled: true, value: '' }]"
      :disabled="names.length === 0"
    )
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import { pathToEntryMeta } from "@/fairytome/entries"
import type { Entry } from "@/fairytome/entry"

const props = defineProps<{ entries: Entry[]; modelValue: Entry | null }>()
const emit = defineEmits<{
  (event: "update:modelValue", value: Entry): void
}>()
let model = $(useVModel(props, "modelValue", emit))

let currentPackage = $ref("")
let currentName = $ref("")
const routeQuery = $(useRouteQuery<string>("entry", ""))

watch(
  () => [currentPackage, currentName],
  () => {
    const newEntry = props.entries.find(
      (entry) => entry.package === currentPackage && entry.name === currentName
    )

    if (typeof newEntry === "undefined") {
      return
    }

    model = newEntry
  }
)

const packages = $computed(() => [
  ...new Set(props.entries.map((entry) => entry.package)),
])
const names = $computed(() =>
  props.entries
    .filter((entry) => entry.package === currentPackage)
    .map((entry) => entry.name)
)

watch(
  () => props.entries,
  () => {
    if (model !== null) {
      currentPackage = model.package
      currentName = model.name
    } else {
      if (props.entries.length > 0) {
        if (routeQuery.length > 0) {
          const meta = pathToEntryMeta(routeQuery)
          currentPackage = meta.package
          currentName = meta.name
        } else {
          currentPackage = props.entries[0].package
          currentName = props.entries[0].name
        }
      }
    }
  },
  { immediate: true }
)
</script>
