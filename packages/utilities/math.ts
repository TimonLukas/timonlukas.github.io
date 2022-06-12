export function randomBetween(start = 0, end = 1): number {
  return start + Math.random() * (end - start)
}

export type RandomJitter = number | Readonly<[number, number]>
export function randomAround(center: number, jitter: RandomJitter): number {
  if (Array.isArray(jitter)) {
    return randomBetween(center - jitter[0], center + jitter[1])
  }

  const jitterNumber = jitter as number
  return randomBetween(center - jitterNumber, center + jitterNumber)
}
