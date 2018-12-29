import * as React from 'react'

import { Tetris } from 'components/tetris/tetris'

export default class App extends React.Component<{}> {
  public render() {
    return (
      <div className="App">
        <Tetris />
      </div>
    )
  }
}
