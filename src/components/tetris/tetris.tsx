import { inject, observer } from 'mobx-react'
import * as React from 'react'

import AppState from '../../AppState'
/* 
  Tetris: 20 rows, 10 cols
*/
const ROW: number[] = [...Array(20).keys()]
const COL: number[] = [...Array(10).keys()]

interface ITetrisProps {
  store?: AppState
}

@inject('store')
@observer
export default class Tetris extends React.Component<ITetrisProps, {}> {
  public render() {
    return (
      <div className="tetris-container">
        {
          ROW.map(r => (
            <ul key={r} className="row">
              {
                COL.map(c => (
                  <li key={c} className="grid" />
                ))
              }
            </ul>
          ))
        }
      </div>
    )
  }
}