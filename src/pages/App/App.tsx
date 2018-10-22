import * as React from 'react'

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
      </div>
    )
  }
}

export default App
