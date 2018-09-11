import * as React from 'react'

import ControlPanel from '../../components/controlPanel/controlPanel'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ControlPanel test="test" />
      </div>
    )
  }
}

export default App
