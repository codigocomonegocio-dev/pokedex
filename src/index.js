import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './styles/index.scss'
import Routes from 'routes'
import Store from 'ducks/Store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
