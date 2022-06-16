import type { Component } from "vue"

type BaseOption<InitialType> = {
  type: string
  label: string
  initial: InitialType
  amount?: {
    min: number
    max?: number
  }
}

type OptionTypes = {
  Range: BaseOption<number> & {
    type: "range"
    min: number
    max: number
    step: number
  }
  Text: BaseOption<string> & {
    type: "text"
    length?: {
      min?: number
      max?: number
    }
  }
  Color: BaseOption<string> & {
    type: "color"
  }
  Checkbox: BaseOption<boolean> & {
    type: "checkbox"
  }
}

export type EntryOption = OptionTypes[keyof OptionTypes]

type ComponentProps<C extends Component> = C extends Component<infer Props>
  ? Props
  : never
export type Entry<C extends Component = Component> = {
  name: string
  package: string
  path: string
  component: Component
  controls: Record<keyof ComponentProps<C>, EntryOption>
  overrides?: { [Key in keyof ComponentProps<C>]: ComponentProps<C>[Key] }
  stage?: Component
}

export function createEntry<T extends Component>(
  entry: Omit<Entry<T>, "name" | "package" | "path">
) {
  return entry as Entry<T>
}
