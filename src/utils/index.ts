export const generateData = (): boolean[][] => (
  [...Array(20)].map(() => (
    [...Array(10)].map(() => false)
  ))
)