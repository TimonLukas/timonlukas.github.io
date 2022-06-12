import { randomAround, type RandomJitter } from "@/utilities/math"
import { readonly, unref } from "vue"
import { reactiveComputed, type MaybeRef } from "@vueuse/core"
import type { PartialDeep } from "type-fest"
import merge from "ts-deepmerge"

export type BezierControl = [x: number, y: number]
export type BezierControls = [start: BezierControl, end: BezierControl]

export const BEZIER_POINTS_BASE: [[number, number], [number, number]][] = [
  [
    [1, 0.78],
    [0.78, 1],
  ],
  [
    [0.22, 1],
    [0, 0.78],
  ],
  [
    [0, 0.22],
    [0.22, 0],
  ],
  [
    [0.78, 0],
    [1, 0.22],
  ],
]

export type BezierControlPointsOptions = {
  jitter: {
    offset: RandomJitter
    coefficient: RandomJitter
  }
  amplitude: MaybeRef<number>
}

const bezierControlPointOptions = readonly<BezierControlPointsOptions>({
  jitter: {
    offset: .1,
    coefficient: .05
  },
  amplitude: .1,
})
export function useBezierControlPoints(time: MaybeRef<number>, options: PartialDeep<BezierControlPointsOptions> = {}): Readonly<BezierControls[]> {
  const { jitter, amplitude } = merge({}, bezierControlPointOptions, options)

  const offsets: typeof BEZIER_POINTS_BASE = Array.from(
    { length: BEZIER_POINTS_BASE.length },
    (_, index) => {
      const baseValue = (index + 1) / (BEZIER_POINTS_BASE.length + 1)
      return [[randomAround(baseValue - .05, jitter.offset), randomAround(baseValue - .05, jitter.offset)],
        [randomAround(baseValue + .05, jitter.offset), randomAround(baseValue + .05, jitter.offset)]]
    }
  )

  const coefficients: typeof BEZIER_POINTS_BASE = Array.from({ length: BEZIER_POINTS_BASE.length }, () => [[randomAround(1, jitter.coefficient), randomAround(1, jitter.coefficient)], [randomAround(1, jitter.coefficient), randomAround(1, jitter.coefficient)]])

  return reactiveComputed(() => BEZIER_POINTS_BASE.map(([start, end], index) => [
    [
      start[0] + Math.sin(unref(time) * coefficients[index][0][0] + offsets[index][0][0]) * unref(amplitude),
      start[1] + Math.sin(unref(time) * coefficients[index][0][1] + offsets[index][0][1]) * unref(amplitude),
    ],
    [
      end[0] + Math.sin(unref(time) * coefficients[index][1][0] + offsets[index][1][0]) * unref(amplitude),
      end[1] + Math.sin(unref(time) * coefficients[index][1][1] + offsets[index][1][1]) * unref(amplitude),
    ]
  ]))
}
