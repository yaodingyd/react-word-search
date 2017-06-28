import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

import Header from './components/Header'
import WordControl from './containers/WordControl'
import GridControl from './containers/GridControl'
import './components/WordList/style.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <nav>
          <Link to="/word">word</Link>
          <Link to="/grid">grid</Link>
        </nav>
        <Route render={({ location }) => (
          <CSSTransitionGroup transitionName="word" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <Route exact path="/word" key={location.key} location={location} component={WordControl} />
            <Route path="/grid"  key={location.key} location={location} component={Header} />
          </CSSTransitionGroup>
        )} />
      </div>
    )
  }
}

export default App