/**
 * @param {height} 
 * @param {width} 
 */
export const generateData = (
  height: number, width: number
): number[][] => (
  [...Array(height)].map(() => (
    [0,1,0,0,0,0,0,0,1,0]
  ))
)

/**
 * @param {data} fixed blocks
 * @param {position} 
 * @param {block} 
 */
export const toDisplayData = (
  data: number[][],
  position: number[],
  block: number[][]
): number[][] => {
  return data.map((row, rowIndex) => row.map((col, colIndex) => {
    if (rowIndex >= position[1]
      && rowIndex <= position[1] + block.length - 1
      && colIndex >= position[0]
      && colIndex <= position[0] + block[0].length - 1
    ) {
      return col + block[rowIndex - position[1]][colIndex - position[0]]
    }
    return col
  }))
}
