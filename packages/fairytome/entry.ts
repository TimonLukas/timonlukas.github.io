import { reactive, resolveDynamicComponent, markRaw, type Component } from "vue"

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
  },
  Checkbox: BaseOption<boolean> & {
    type: "checkbox"
  }
}

const entryFiles = Object.assign(
  {},
  import.meta.glob("/packages/**/*.entry.ts"),
  import.meta.glob("/packages/**/*.entry.vue")
)

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

type Entries = { entries: Entry[]; entriesByName: Map<string, Entry> }

export function pathToEntryMeta(path: string): Pick<Entry, "name" | "package" | "path"> {
  const parts = path.replace("/packages/", "").split("/")
  const packageName = parts[0]
  const name = parts.at(-1) ?? path
  const rest = parts.length > 2 ? parts.slice(1, parts.length - 1).join("/") : ""

  return {
    name: name.includes(".entry.") ? name.slice(0, name.indexOf(".entry.")) : name,
    package: packageName,
    path: rest,
  }
}

export async function fetchEntries(): Promise<Entries> {
  const entries = (
    await Promise.all(
      Object.entries(entryFiles).map(async ([filename, importer]) => {
        const meta = pathToEntryMeta(filename)

        const component = await importer()
        const { entry } = component

        if (typeof entry === "undefined") {
          return null
        }

        return {
          ...entry,
          component: resolveDynamicComponent(
            markRaw("default" in component ? component.default : entry.component)
          ),
          ...meta,
        }
      })
    )
  ).filter((value) => value !== null) as Entry[]

  const entriesByName = entries.reduce(
    (acc, val) => acc.set(val.name, val),
    new Map<string, Entry>()
  )

  return {
    entries,
    entriesByName,
  }
}

export function useEntries(): Entries {
  const refs = reactive<Entries>({
    entries: [],
    entriesByName: new Map<string, Entry>(),
  })

  fetchEntries().then(({ entries, entriesByName }) => {
    refs.entries = entries
    refs.entriesByName = entriesByName
  })

  return refs
}
