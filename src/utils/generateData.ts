/**
 * @param height
 * @param width
 */
export default (
  height: number, width: number
): number[][] => (
  [...Array(height)].map(() => (
    [...Array(width)].map(() => 0)
  ))
)
