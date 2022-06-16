<template lang="pug">
n-breadcrumb-item(
  :clickable="typeof href !== 'undefined'"
  @click="$router.push(href)"
)
  n-icon.mr-1: slot(name="icon")
  slot
</template>

<script lang="ts" setup>
defineProps<{ href?: string }>()
</script>
