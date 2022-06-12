import { createEntry } from "@/fairytome/entry"
import Background from "./Background.vue"

export const entry = createEntry<Background>({
  component: Background,
  controls: {
    blobAmount: {
      label: "Number of blobs:",
      type: "range",
      min: 1,
      max: 20,
      initial: 1,
    },
  },
})
