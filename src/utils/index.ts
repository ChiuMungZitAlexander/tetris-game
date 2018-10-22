export const generateData = () => (
  [...Array(20)].map(() => (
    [...Array(10)].map(() => false)
  ))
)