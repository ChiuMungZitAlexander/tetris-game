import * as React from 'react'

import ControlPanel from '../../components/controlPanel/controlPanel'
import Tetris from '../../components/tetris/tetris'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="play-area">
          <section className="info-section">info</section>
          <section className="tetris-section">
            <Tetris />
          </section>
        </div>
        <ControlPanel test="test" />
      </div>
    )
  }
}

export default App
