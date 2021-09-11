const LSD = (n: number, digitPos: number = 1): number => {
  if (digitPos <= 0)
    throw new Error('Digit position must be an integer positive')
  return Math.floor(n / 10 ** (digitPos - 1)) % 10
}

const assignByLSD = (numbers: number[], digitPos: number): number[][] => {
  const positions: number[][] = [[], [], [], [], [], [], [], [], [], []]
  numbers.forEach((n: number) => {
    const lessSignificantDigit = LSD(n, digitPos)
    positions[lessSignificantDigit].push(n)
  })
  return positions
}

const radixLSD = (numbers: number[]): number[] => {
  let digitPos = 1
  let numbersByLSD: number[][] = assignByLSD(numbers, digitPos)
  let reorderNumbers: number[] = numbersByLSD.flat(1)
  while (!reorderNumbers.every((n: number) => LSD(n, digitPos) === 0)) {
    numbersByLSD = assignByLSD(reorderNumbers, ++digitPos)
    reorderNumbers = numbersByLSD.flat(1)
  }
  return reorderNumbers
}

const radixMSD = (numbers: number[]): number[] => {
  return numbers
}

const array = [
  32, 24, 1234555, 12, 245, 3234, 2342, 1231, 9, 123532, 5, 7, 33, 46, 74, 79,
  323, 457, 23214, 123455, 12356
]

const shortArray = [32, 24, 12, 245]

console.log(radixLSD(shortArray))
console.log(radixLSD(array))
