import { action, observable } from 'mobx'

import { generateData, generateTetris } from './utils'

export default class AppState {
  @observable public inProgress: boolean = false
  @observable public data: boolean[][] = generateData()
  @observable public currentCor: number[] = [0, 4]
  @observable public currentTetris: boolean[][] = generateTetris()

  @action public fall = (): void => {
    const newData = this.data.map(row => row.slice()) // deep clone

    if (this.currentCor[0] + 1 > 19) {
      newData[this.currentCor[0]][this.currentCor[1]] = true
      if (this.currentCor[0] > 0) {
        newData[this.currentCor[0] - 1][this.currentCor[1]] = false
      }
      this.currentCor = [0, 4]
    } else if (this.data[this.currentCor[0] + 1][this.currentCor[1]]) {
      newData[this.currentCor[0]][this.currentCor[1]] = true
      if (this.currentCor[0] > 0) {
        newData[this.currentCor[0] - 1][this.currentCor[1]] = false
      }
      this.currentCor = [0, 4]
    } else {
      newData[this.currentCor[0]][this.currentCor[1]] = true
      if (this.currentCor[0] > 0) {
        newData[this.currentCor[0] - 1][this.currentCor[1]] = false
      }
      this.currentCor = this.currentCor.map((cor, i) => i ? cor : cor + 1)
    }

    this.data = newData
  }

  @action public move = (direction: number): void => {
    const newData = generateData()
    switch (direction) {
      case 37:
        if (this.currentCor[1] > 0) {
          newData[this.currentCor[0]][this.currentCor[1]] = false
          newData[this.currentCor[0]][this.currentCor[1] - 1] = true
          this.data = newData
          this.currentCor = this.currentCor.map((cor, i) => i ? cor - 1 : cor)
        }
        break
      case 39:
        if (this.currentCor[1] < 9) {
          newData[this.currentCor[0]][this.currentCor[1]] = false
          newData[this.currentCor[0]][this.currentCor[1] + 1] = true
          this.data = newData
          this.currentCor = this.currentCor.map((cor, i) => i ? cor + 1 : cor)
        }
        break
      case 40:
        setInterval(() => {
          if (this.currentCor[0] < 19) {
            newData[this.currentCor[0]][this.currentCor[1]] = true
            newData[this.currentCor[0] + 1][this.currentCor[1]] = true
            this.data = newData
            this.currentCor = this.currentCor.map((cor, i) => i ? cor : cor + 1)
          }
        }, 500)
        break
    }
  }
}
