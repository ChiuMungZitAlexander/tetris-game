const DOT = [[true]]
const I = [[true], [true], [true], [true]]
const O = [[true, true], [true, true]]

const TETRIS = [
  DOT, I, O,
]

export const generateData = (): boolean[][] => (
  [...Array(20)].map(() => (
    [...Array(10)].map(() => false)
  ))
)

export const generateTetris = (): boolean[][] => (
  // TETRIS[Math.floor(Math.random() * TETRIS.length)]
  TETRIS[0]
)



