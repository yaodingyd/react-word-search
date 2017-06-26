import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Header from './components/Header'
import WordControl from './containers/WordControl'
import GridControl from './containers/GridControl'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <nav>
          <Link to="/word">word</Link>
          <Link to="/gird">grid</Link>
        </nav>
        <div>
          <Route path="/word" component={WordControl} />
          <Route path="/grid" component={GridControl} />
        </div>
      </div>
    )
  }
}

export default App