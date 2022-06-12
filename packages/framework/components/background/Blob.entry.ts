import { createEntry } from "@/fairytome/entry"
import BackgroundBlob from "./Blob.vue"

export const entry = createEntry<BackgroundBlob>({
  component: BackgroundBlob,
  controls: {
    color: {
      type: "color",
      label: "Fill color",
      initial: "rgba(0, 0, 0, 1)",
      amount: { min: 1, max: 10 },
    },
    speedFactor: {
      type: "range",
      label: "Speed factor",
      min: -5,
      max: 5,
      step: 0.05,
      initial: 1,
    },
    rotationSpeed: {
      type: "range",
      label: "Rotation speed",
      min: 0,
      max: 10,
      step: 0.05,
      initial: 0,
    },
    amplitudeModifier: {
      type: "range",
      label: "Amplitude modifier",
      min: 0,
      max: 10,
      step: 0.05,
      initial: 1,
    },
    showDebug: {
      type: "checkbox",
      label: "Show debug utilities",
      initial: false,
    },
  },
})
