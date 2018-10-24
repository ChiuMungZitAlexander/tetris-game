import { inject, observer } from 'mobx-react'
import * as React from 'react'

import AppState from '../../AppState'

const ROW: number[] = [...Array(20).keys()]
const COL: number[] = [...Array(10).keys()]

interface ITetrisProps {
  store?: AppState
}

@inject('store')
@observer
export default class Tetris extends React.Component<ITetrisProps, {}> {
  public componentDidMount = () => {
    window.addEventListener('keydown', this.onKeyPress)
  }

  public render() {
    const { store } = this.props
    return (
      <div className="tetris-container"
        // onClick={this.onClick}
      >
        {
          ROW.map(r => (
            <ul key={r} className="row">
              {
                COL.map(c => (
                  <li key={c} className={store && store.data[r][c]
                    ? 'grid active'
                    : 'grid'
                  } />
                ))
              }
            </ul>
          ))
        }
      </div>
    )
  }

  /* private onClick = (): void => {
    const { store } = this.props
    if (store) {
      setInterval(() => {
        store.fall()
      }, 200)
    }
  } */

  private onKeyPress = (e: KeyboardEvent): void => {
    const { store } = this.props
    if (store) {
      store.move(e.keyCode)
    }
  }
}
