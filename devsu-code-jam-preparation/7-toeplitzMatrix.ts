interface DiagonalInitial {
  value: number
  rowPos: number
  colPos: number
}

const existInMatrix = (
  m: number[][],
  rowPos: number,
  colPos: number
): boolean => {
  if (!m[rowPos]) return false
  if (!m[rowPos][colPos]) return false
  return true
}

const getDiagonalInitials = (matrix: number[][]): DiagonalInitial[] => {
  return matrix
    .map((row: number[], rowPos: number) => {
      if (rowPos === 0) {
        return row.map((ceil: number, i) => ({
          value: ceil,
          rowPos: 0,
          colPos: i
        }))
      }
      return {
        value: row[0],
        rowPos,
        colPos: 0
      }
    })
    .flat(1)
}

const getDiagonal = ({
  diagInit,
  matrix
}: {
  diagInit: DiagonalInitial
  matrix: number[][]
}): number[] => {
  const diagonal: number[] = []
  let rowIter: number = diagInit.rowPos,
    colIter: number = diagInit.colPos
  while (existInMatrix(matrix, rowIter, colIter)) {
    const element = matrix[rowIter++][colIter++]
    diagonal.push(element)
  }
  return diagonal
}

const isToeplitzMatrix = (diagonals: number[][]): boolean => {
  return diagonals.every((diagonal: number[]) =>
    diagonal.every((n: number) => n === diagonal[0])
  )
}

const amountOfDigits = (toeplitz: number[][]): number => {
  const diagonalInitials: DiagonalInitial[] = getDiagonalInitials(toeplitz)

  const diagonals: number[][] = diagonalInitials.map(
    (diagInit: DiagonalInitial) => getDiagonal({ diagInit, matrix: toeplitz })
  )

  if (!isToeplitzMatrix(diagonals)) {
    return -1
  }

  return diagonals.length
}

const toeplitz = [
  [1, 2, 3, 4, 8, 1],
  [5, 1, 2, 3, 4, 8],
  [4, 5, 1, 2, 3, 4],
  [7, 4, 5, 1, 2, 3]
]

console.log(amountOfDigits(toeplitz))
