import { observable } from 'mobx'

import { generateData } from './utils'

export default class AppState {
  @observable public inProgress: boolean = false
  @observable public data: boolean[][] = generateData()
}