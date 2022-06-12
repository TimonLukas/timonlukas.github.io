import { ref, onMounted, onBeforeUnmount, type Ref } from "vue"

export function useIsAlive(): Ref<boolean> {
  const isAlive = ref(false)

  onMounted(() => {
    isAlive.value = true
  })

  onBeforeUnmount(() => {
    isAlive.value = false
  })

  return isAlive
}
