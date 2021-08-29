const properDivisors = (n: number): number[] => {
  const divisors: number[] = []
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisors.push(i)
    }
  }
  return divisors
}

const isPerfectNumber = (n: number): boolean => {
  const divisorSum = properDivisors(n).reduce(
    (acc: number, curr: number) => (acc += curr)
  )
  return n === divisorSum
}

const smallerPerfectNumber = (
  lowerLimit: number,
  upperLimit: number
): number => {
  let perfectNumber = -1
  for (let i = lowerLimit; i <= upperLimit; i++) {
    if (isPerfectNumber(i)) {
      perfectNumber = i
      break
    }
  }
  return perfectNumber
}

console.log(smallerPerfectNumber(5, 7))
