import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Game from './containers/Game'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = createStore(
  reducer
)

ReactDOM.render(
  <Provider store={store}>
    <Game/>
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
