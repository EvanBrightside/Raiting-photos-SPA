import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { name } = this.props.user
    const { year, photos } = this.props.page
    return <div>
      <p>Привет из {name}!</p>
      <p>У тебя {photos.length} фото за {year} год</p>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

export default hot(module)(connect(mapStateToProps)(App))
