import { inject, observer } from 'mobx-react'
import * as React from 'react'

import AppState from '../../AppState'

interface ITetrisProps {
  store?: AppState,
}

@inject('store')
@observer
export default class Tetris extends React.Component<ITetrisProps, {}> {
  public componentDidMount = () => {
    window.addEventListener('keydown', this.onKeyPress)
  }

  public render() {
    const { store } = this.props
    const data = store ? store.toDisplayData : [[]]
    return (
      <div className="tetris-container">
        {
          data.map((row, rowIndex) => (
            <div key={rowIndex} className='row'>
              {
                row.map((col, colIndex) => (
                  <span key={colIndex} className='col'>{col}</span>
                ))
              }
            </div>
          ))
        }
      </div>
    )
  }

  private onKeyPress = (e: KeyboardEvent): void => {
    const { store } = this.props
    if (store) {
      switch (e.keyCode) {
        case 37:
          store.moveLeft()
          break
        case 39:
          store.moveRight()
          break
        case 40:
          store.moveDown()
          break
      }
    }
  }
}
