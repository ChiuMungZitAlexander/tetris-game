import { observable } from 'mobx'

import { HEIGHT, WIDTH } from '../lib/board'
import { newBoard } from '../utils'

export default class TetrisBoard {
  @observable public board: boolean[][] = newBoard(HEIGHT, WIDTH)
}
