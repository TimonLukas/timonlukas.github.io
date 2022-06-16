import type { MaybeRef } from "@vueuse/core"
import merge from "ts-deepmerge"
import type { PartialDeep } from "type-fest"
import { randomAround } from "@/utilities/math"
import type { RandomJitter } from "@/utilities/math"

type Point = [x: number, y: number]
export type BezierControl = Point
export type BezierControls = [start: BezierControl, end: BezierControl]

export type BezierControlPointsOptions = {
  jitter: {
    offset: RandomJitter
    coefficient: RandomJitter
  }
  amplitude: MaybeRef<number>
  segments: MaybeRef<number>
}

const POINTS_PER_SEGMENT = 2
const BEZIER_OFFSET = 1.157
const bezierControlPointOptions = readonly<BezierControlPointsOptions>({
  jitter: {
    offset: 0.1,
    coefficient: 0.05,
  },
  amplitude: 0.1,
  segments: 4,
})
export function useBezierControlPoints(
  time: MaybeRef<number>,
  options: PartialDeep<BezierControlPointsOptions> = {}
): Readonly<BezierControls[]> {
  const { jitter, amplitude, segments } = merge(
    {},
    bezierControlPointOptions,
    options
  )

  const baseControlPoints: Readonly<[Point, Point][]> = reactiveComputed(() => {
    const angle = (2 * Math.PI) / (unref(segments) * (POINTS_PER_SEGMENT + 1))

    return Array.from(
      { length: unref(segments) },
      (_, i) =>
        Array.from({ length: POINTS_PER_SEGMENT }, (_, j) => [
          Math.cos(angle * (i * (POINTS_PER_SEGMENT + 1) + j + 1)) *
            BEZIER_OFFSET,
          Math.sin(angle * (i * (POINTS_PER_SEGMENT + 1) + j + 1)) *
            BEZIER_OFFSET,
        ]) as [Point, Point]
    )
  })

  const offsets: typeof baseControlPoints = reactiveComputed(() =>
    Array.from({ length: unref(segments) }, (_, index) => {
      const baseValue = (index + 1) / (unref(segments) + 1)
      return [
        [
          randomAround(baseValue - 0.05, jitter.offset),
          randomAround(baseValue - 0.05, jitter.offset),
        ],
        [
          randomAround(baseValue + 0.05, jitter.offset),
          randomAround(baseValue + 0.05, jitter.offset),
        ],
      ]
    })
  )

  const coefficients: typeof baseControlPoints = reactiveComputed(() =>
    Array.from({ length: unref(segments) }, () => [
      [
        randomAround(1, jitter.coefficient),
        randomAround(1, jitter.coefficient),
      ],
      [
        randomAround(1, jitter.coefficient),
        randomAround(1, jitter.coefficient),
      ],
    ])
  )

  return reactiveComputed(() =>
    baseControlPoints
      .map(([start, end], index) => [
        [
          start[0] +
            Math.sin(
              unref(time) * coefficients[index][0][0] + offsets[index][0][0]
            ) *
              unref(amplitude),
          start[1] +
            Math.sin(
              unref(time) * coefficients[index][0][1] + offsets[index][0][1]
            ) *
              unref(amplitude),
        ],
        [
          end[0] +
            Math.sin(
              unref(time) * coefficients[index][1][0] + offsets[index][1][0]
            ) *
              unref(amplitude),
          end[1] +
            Math.sin(
              unref(time) * coefficients[index][1][1] + offsets[index][1][1]
            ) *
              unref(amplitude),
        ],
      ])
      .map(([start, end]) => [
        [(start[0] + 1) / 2, (start[1] + 1) / 2],
        [(end[0] + 1) / 2, (end[1] + 1) / 2],
      ])
  )
}
