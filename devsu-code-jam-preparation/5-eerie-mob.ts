const guy = Object.freeze({
  complete: '(-_-)',
  partial: {
    left: '(-_-',
    right: '-_-)'
  },
  side: {
    left: '(-_',
    right: '_-)'
  },
  final: {
    left: '(-',
    right: '-)'
  }
})

const leftMobGenerator = ({
  amount,
  final = true
}: {
  amount: number
  final?: boolean
}): string => {
  const leftMob: string[] = []
  for (let i = amount; i >= 1; i--) {
    i % 3 === 0 ? leftMob.push(guy.partial.left) : leftMob.push(guy.side.left)
  }
  if (final) {
    leftMob[0] = guy.final.left
  }
  return leftMob.join('')
}

const rightMobGenerator = ({
  amount,
  final = true
}: {
  amount: number
  final?: boolean
}): string => {
  const rightMob: string[] = []
  for (let i = 1; i <= amount; i++) {
    i % 3 === 0
      ? rightMob.push(guy.partial.right)
      : rightMob.push(guy.side.right)
  }
  if (final) {
    rightMob[rightMob.length - 1] = guy.final.right
  }
  return rightMob.join('')
}

const createMob = (amount: number): string => {
  if (!amount) return 'O_o'
  if (amount < 1 && amount > 255) return 'O_o'
  const length = {
    left: Math.ceil((amount - 1) / 2),
    right: Math.floor((amount - 1) / 2)
  }
  if (amount <= 7) {
    return `${leftMobGenerator({ amount: length.left, final: false })}${
      guy.complete
    }${rightMobGenerator({ amount: length.right, final: false })}`
  }
  return `${leftMobGenerator({ amount: length.left })}${
    guy.complete
  }${rightMobGenerator({ amount: length.right })}`
}

console.log(createMob(11))
console.log(createMob(4))
console.log(createMob(14))
