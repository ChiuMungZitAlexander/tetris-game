import { inject, observer } from 'mobx-react'
import * as React from 'react'

import TetrisBoardStore from '../../store/tetrisStore'

interface ITetrisProps {
  tetrisBoardStore?: TetrisBoardStore
}

@inject('tetrisBoardStore')
@observer
export default class Tetris extends React.Component<ITetrisProps, {}> {
  public componentDidMount = () => {
    window.addEventListener('keydown', this.onKeyPress)
  }

  public render() {
    const { tetrisBoardStore } = this.props
    return (
      <div className="tetris-container">
        {tetrisBoardStore && tetrisBoardStore.board.length}
      </div>
    )
  }

  private onKeyPress = (e: KeyboardEvent): void => {
    console.log(e.keyCode)
  }
}
