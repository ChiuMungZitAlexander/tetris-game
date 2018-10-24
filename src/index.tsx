import { Provider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './pages/App/App'
import TetrisBoardStore from './store/tetrisStore'

import './index.less'

import registerServiceWorker from './registerServiceWorker'

const tetrisBoardStore = new TetrisBoardStore()

ReactDOM.render(
  <Provider tetrisBoardStore={tetrisBoardStore}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
