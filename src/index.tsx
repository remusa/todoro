import React from 'react'
import ReactDOM from 'react-dom'
import { AppStateProvider } from '~context/AppState'
import App from './App'
import './global.css'

ReactDOM.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>,
  document.getElementById('app'),
)
