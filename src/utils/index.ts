export const newBoard = (height: number, width: number): boolean[][] => (
  [...Array(height)].map(() => (
    [...Array(width)].map(() => false)
  ))
)
