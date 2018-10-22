import { Provider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import AppState from './AppState'
import App from './pages/App/App'

import './index.less'

import registerServiceWorker from './registerServiceWorker'

const appState = new AppState()

ReactDOM.render(
  <Provider store={appState}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
