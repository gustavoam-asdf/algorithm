const productOfArray = (a: number[]): number =>
  a.reduce((acc: number, curr: number) => (curr *= acc))

const contiguousSubArrays = (a: number[]): number[][] => {
  const subArrays: number[][] = []

  for (let i = 1; i <= a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (i + j > a.length) continue
      subArrays.push(a.slice(j, j + i))
    }
  }

  return subArrays
}

const largestProductSubArray = (a: number[]) => {
  const subArrays: number[][] = contiguousSubArrays(a)
  const productArrayValues: Map<number, number[]> = new Map()
  let maxValue: number = Number.MIN_VALUE
  subArrays.forEach(subArray => {
    const product = productOfArray(subArray)
    product > maxValue ? (maxValue = product) : 0
    return productArrayValues.set(product, subArray)
  })
  return productArrayValues.get(maxValue)
}

console.log(largestProductSubArray([-3.2, 4.2, 7, 5.4, -2.2, -2.5]))
