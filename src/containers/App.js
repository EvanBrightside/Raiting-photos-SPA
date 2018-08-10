import React, { Component, PropTypes } from 'react'
import { hot } from 'react-hot-loader'

const App = class App extends Component {
  render() {
    return <div>Привет из App</div>
  }
}

export default hot(module)(App)
