const compare = (first: number, second: number) => {
  if (first === second) {
    return 0
  }
  const arrNumbers: {
    first: string[]
    second: string[]
  } = {
    first: first.toString().split('').reverse(),
    second: second.toString().split('').reverse()
  }
  for (let i = 0; i < arrNumbers.first.length; i++) {
    if (Number(arrNumbers.first[i]) > Number(arrNumbers.second[i])) {
      return 1
    } else if (Number(arrNumbers.first[i]) < Number(arrNumbers.second[i])) {
      return -1
    } else {
      continue
    }
  }
  return 0
}

const sortArray = (arrNumbers: number[]): number[] => arrNumbers.sort(compare)

console.log(sortArray([1, 10, 20, 33, 13, 60, 92, 100, 21]))
