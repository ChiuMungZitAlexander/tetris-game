let data = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [1, 1, 1, 0, 0]
]

let p = [2, 0]

let b = [
  [1, 1, 0],
  [0, 1, 1]
]

const moveHorizontally = d => {
  if (d === 'l') {
    p[0]--
  } else {
    p[0]++
  }

  // left collision
  if (p[0] < 0) {
    p[0] = 0
    return data.map((row, rowIndex) => row.map((col, colIndex) => {
      if (rowIndex >= p[1]
        && rowIndex <= p[1] + b.length - 1
        && colIndex >= p[0]
        && colIndex <= p[0] + b[0].length - 1
      ) {
        return col + b[rowIndex - p[1]][colIndex - p[0]]
      }
      return col
    }))
  }

  // right collision
  if (p[0] + b[0].length > 5) {
    p[0] = 5 - b[0].length
    return data.map((row, rowIndex) => row.map((col, colIndex) => {
      if (rowIndex >= p[1]
        && rowIndex <= p[1] + b.length - 1
        && colIndex >= p[0]
        && colIndex <= p[0] + b[0].length - 1
      ) {
        return col + b[rowIndex - p[1]][colIndex - p[0]]
      }
      return col
    }))
  }

  // block collision detect
  for (let row = 0; row < b.length; row++) {
    for (let col = 0; col < b[0].length; col++) {
      if (data[p[1] + row][p[0] + col] + b[row][col] > 1) {
        if (d === 'l') {
          p[0]++
        } else {
          p[0]--
        }
      }
    }
  }

  return data.map((row, rowIndex) => row.map((col, colIndex) => {
    if (rowIndex >= p[1]
      && rowIndex <= p[1] + b.length - 1
      && colIndex >= p[0]
      && colIndex <= p[0] + b[0].length - 1
    ) {
      return col + b[rowIndex - p[1]][colIndex - p[0]]
    }
    return col
  }))
}

const moveDown = () => {
  p[1]++

  // bottom collision
  if (p[1] + b.length > 5) {
    p[1]--
    data = data.map((row, rowIndex) => row.map((col, colIndex) => {
      if (rowIndex >= p[1]
        && rowIndex <= p[1] + b.length - 1
        && colIndex >= p[0]
        && colIndex <= p[0] + b[0].length - 1
      ) {
        return col + b[rowIndex - p[1]][colIndex - p[0]]
      }
      return col
    }))

    p = [2, 0]
    return data.map((row, rowIndex) => row.map((col, colIndex) => {
      if (rowIndex >= p[1]
        && rowIndex <= p[1] + b.length - 1
        && colIndex >= p[0]
        && colIndex <= p[0] + b[0].length - 1
      ) {
        return col + b[rowIndex - p[1]][colIndex - p[0]]
      }
      return col
    }))
  }

  // block collision detect
  for (let row = 0; row < b.length; row++) {
    for (let col = 0; col < b[0].length; col++) {
      if (data[p[1] + row][p[0] + col] + b[row][col] > 1) {
        p[1]--
        data = data.map((row, rowIndex) => row.map((col, colIndex) => {
          if (rowIndex >= p[1]
            && rowIndex <= p[1] + b.length - 1
            && colIndex >= p[0]
            && colIndex <= p[0] + b[0].length - 1
          ) {
            return col + b[rowIndex - p[1]][colIndex - p[0]]
          }
          return col
        }))
        data.map

        p = [2, 0]
        for (let row = 0; row < b.length; row++) {
          for (let col = 0; col < b[0].length; col++) {
            if (data[p[1] + row][p[0] + col] + b[row][col] > 1) {
              return 'gameover'
            }
          }
        }
        return data.map((row, rowIndex) => row.map((col, colIndex) => {
          if (rowIndex >= p[1]
            && rowIndex <= p[1] + b.length - 1
            && colIndex >= p[0]
            && colIndex <= p[0] + b[0].length - 1
          ) {
            return col + b[rowIndex - p[1]][colIndex - p[0]]
          }
          return col
        }))
      }
    }
  }

  return data.map((row, rowIndex) => row.map((col, colIndex) => {
    if (rowIndex >= p[1]
      && rowIndex <= p[1] + b.length - 1
      && colIndex >= p[0]
      && colIndex <= p[0] + b[0].length - 1
    ) {
      return col + b[rowIndex - p[1]][colIndex - p[0]]
    }
    return col
  }))
}

document.addEventListener('keydown', e => {
  e = e || window.event
  switch (e.keyCode) {
    case 37:
      console.log(moveHorizontally('l'))
      break
    case 39:
      console.log(moveHorizontally('r'))
      break
    case 40:
      console.log(moveDown())
    default:
      break
  }
})
