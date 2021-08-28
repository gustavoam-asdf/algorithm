let elements: string[] = [
  'car',
  'cartouches',
  'carpet',
  'cartoonist',
  'carrot',
  'cared',
  'carton',
  'captain',
  'cartoon',
  'carter'
]

const predictor = (query: string): string[] | undefined => {
  if (query.length < 2) return
  return elements
    .filter((el: string) => el.startsWith(query))
    .sort()
    .slice(0, 3)
}

const query = 'cartoons'
let i = 0
let predictions: string[][] = []

// Interactive test
/*
const interval: NodeJS.Timer = setInterval(() => {
  const queryWritten = query.slice(0, i++)
  const prediction = predictor(queryWritten)
  if (prediction) {
    predictions.push(prediction)
  }
  console.log({ queryWritten, prediction })
  if (i - 1 === query.length) {
    clearInterval(interval)
    console.log({ predictions })
  }
}, 1000)
*/

// Fast test
for (let i = 0; i <= query.length; i++) {
  const queryWritten = query.slice(0, i)
  const prediction = predictor(queryWritten)
  if (prediction) {
    predictions.push(prediction)
  }
}
console.log(predictions)
