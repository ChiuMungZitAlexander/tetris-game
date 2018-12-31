import { action, computed, observable } from 'mobx'

import Tetromino from 'lib/Tetromino'
import { generateData, generateTetronimo, toDisplayData } from 'utils'

export default class AppState {
  public HEIGHT: number = 20
  public WIDTH: number = 10
  public INIT_POSITION: number[] = [4, 0]
  public TETROMINO: Tetromino = generateTetronimo()

  @observable public data: number[][] = generateData(this.HEIGHT, this.WIDTH) // fixed tetromino data

  @observable public position: number[] = this.INIT_POSITION // initial tetromino position, position[0] is colIndex
  @observable public tetromino: number[][] = this.TETROMINO.getShape() // current tetromino shape
  @observable public nextTetromino: number[][] = [[1, 1], [1, 1]] // current tetromino shape

  @observable public gameStatus: string = 'stop' // 1.stop 2.playing 3.over

  @action public moveLeft = (): void => {
    console.info('%c@Action captured: left', 'color: purple; font-style: italic')
    const newPosition = [this.position[0] - 1, this.position[1]]

    // left boundry collision detect
    if (newPosition[0] < 0) {
      return
    }

    // tetromino collision detect
    for (let row = 0; row < this.tetromino.length; row++) {
      for (let col = 0; col < this.tetromino[0].length; col++) {
        if (this.data[newPosition[1] + row][newPosition[0] + col] + this.tetromino[row][col] > 1) {
          return
        }
      }
    }

    this.position = newPosition
  }

  @action public moveRight = (): void => {
    console.info('%c@Action captured: right', 'color: purple; font-style: italic')
    const newPosition = [this.position[0] + 1, this.position[1]]

    // right boundry collision detect
    if (newPosition[0] + this.tetromino[0].length > this.WIDTH) {
      return
    }

    // tetromino collision detect
    for (let row = 0; row < this.tetromino.length; row++) {
      for (let col = 0; col < this.tetromino[0].length; col++) {
        if (this.data[newPosition[1] + row][newPosition[0] + col] + this.tetromino[row][col] > 1) {
          return
        }
      }
    }

    this.position = newPosition
  }

  @action public moveDown = (): void => {
    console.info('%c@Action captured: down', 'color: purple; font-style: italic')

    const resetPosition = (): void => {
      this.position = this.INIT_POSITION
      this.TETROMINO = generateTetronimo()
      this.tetromino = this.TETROMINO.getShape()

      // overlap detect to test game over
      for (let row = 0; row < this.tetromino.length; row++) {
        for (let col = 0; col < this.tetromino[0].length; col++) {
          if (this.data[this.position[1] + row][this.position[0] + col] + this.tetromino[row][col] > 1) {
            this.gameStatus = 'over'
            this.tetromino = [[]]
            return
          }
        }
      }
    }

    const newPosition = [this.position[0], this.position[1] + 1]

    // bottom boundry collision
    if (newPosition[1] + this.tetromino.length > this.HEIGHT) {
      // make tetromino fixed if collide to bottom bountry
      const accumulatedData = this.data.map((row, rowIndex) => row.map((col, colIndex) => {
        if (rowIndex >= this.position[1]
          && rowIndex <= this.position[1] + this.tetromino.length - 1
          && colIndex >= this.position[0]
          && colIndex <= this.position[0] + this.tetromino[0].length - 1
        ) {
          return col + this.tetromino[rowIndex - this.position[1]][colIndex - this.position[0]]
        }
        return col
      }))

      // erase the all-is-1 row and append empty row to the top
      const erasedData = accumulatedData.filter(row => !row.every(col => col === 1))
      this.data = [...Array(this.HEIGHT - erasedData.length)]
        .map(() => [...Array(this.WIDTH)].map(() => 0))
        .concat(erasedData)

      resetPosition()
      return
    }

    // tetromino collision detect
    for (let row = 0; row < this.tetromino.length; row++) {
      for (let col = 0; col < this.tetromino[0].length; col++) {
        if (this.data[newPosition[1] + row][newPosition[0] + col] + this.tetromino[row][col] > 1) {
          // make tetromino fixed if collide to any tetromino
          const accumulatedData = this.data.map((r, rIndex) => r.map((c, cIndex) => {
            if (rIndex >= this.position[1]
              && rIndex <= this.position[1] + this.tetromino.length - 1
              && cIndex >= this.position[0]
              && cIndex <= this.position[0] + this.tetromino[0].length - 1
            ) {
              return c + this.tetromino[rIndex - this.position[1]][cIndex - this.position[0]]
            }
            return c
          }))

          // erase the all-is-1 row and append empty row to the top
          const erasedData = accumulatedData.filter(r => !r.every(c => c === 1))
          this.data = [...Array(this.HEIGHT - erasedData.length)]
            .map(() => [...Array(this.WIDTH)].map(() => 0))
            .concat(erasedData)

          resetPosition()
          return
        }
      }
    }

    this.position = newPosition
  }

  @computed get toDisplayData(): number[][] {
    return toDisplayData(this.data, this.position, this.tetromino)
  }
}
