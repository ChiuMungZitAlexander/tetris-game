import { action, observable } from 'mobx'

import { generateData } from './utils'

export default class AppState {
  @observable public inProgress: boolean = false
  @observable public data: boolean[][] = generateData()

  @action public fall = () => {
    const randomNum = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 10)]
    this.data = this.data.map((row, r) => (
      r === randomNum[0]
        ? row.map((col, c) => (
          c === randomNum[1]
            ? true
            : col
        ))
        : row
    ))
    
  }
}
