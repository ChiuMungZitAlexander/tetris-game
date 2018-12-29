import { action, computed, observable } from 'mobx'

import { generateData, toDisplayData } from 'utils/index'

export default class AppState {
  public HEIGHT = 20
  public WIDTH = 10

  @observable public data: number[][] = generateData(this.HEIGHT, this.WIDTH) // fixed block data

  @observable public position: number[] = [4, 0] // initial block position, position[0] is colIndex
  @observable public block: number[][] = [[1, 1, 0], [0, 1, 1]] // current block shape

  @action public moveLeft = (): void => {
    console.info('%c@Action captured: left', 'color: purple; font-style: italic')
    const newPosition = [this.position[0] - 1, this.position[1]]

    // left boundry collision detect
    if (newPosition[0] < 0) {
      return
    }

    // block collision detect
    for (let row = 0; row < this.block.length; row++) {
      for (let col = 0; col < this.block[0].length; col++) {
        if (this.data[newPosition[1] + row][newPosition[0] + col] + this.block[row][col] > 1) {
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
    if (newPosition[0] + this.block[0].length > this.WIDTH) {
      return
    }

    // block collision detect
    for (let row = 0; row < this.block.length; row++) {
      for (let col = 0; col < this.block[0].length; col++) {
        if (this.data[newPosition[1] + row][newPosition[0] + col] + this.block[row][col] > 1) {
          return
        }
      }
    }

    this.position = newPosition
  }

  @action public moveDown = (): void => {
    console.info('%c@Action captured: down', 'color: purple; font-style: italic')
    // const newPosition = [this.position[0], this.position[1] + 1]

    // bottom boundry collision

  }

  @computed get toDisplayData(): number[][] {
    return toDisplayData(this.data, this.position, this.block)
  }
}
