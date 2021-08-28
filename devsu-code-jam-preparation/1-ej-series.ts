const seriesGenerator = (seriesLength: number): number[] => {
  const odd = { init: 7, inc: 1, amount: 0 }
  const even = { init: 6, inc: -2, amount: 0 }
  const series: number[] = Array(seriesLength).fill(0)
  for (let i = 0; i < seriesLength; i++) {
    if (i % 2 === 0) {
      series[i] = odd.init + odd.inc * odd.amount++
    } else {
      series[i] = even.init + even.inc * even.amount++
    }
  }
  return series
}

const addElementsOfSeries = (x: number, y: number): number => {
  const series = seriesGenerator(x > y ? x : y)
  return series[x - 1] + series[y - 1]
}

const result: number = addElementsOfSeries(1, 3)

console.log({ result })
