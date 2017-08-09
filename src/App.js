import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
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
            <Switch  key={location.key} location={location}>
              <Route exact path="/word" component={WordControl} />
              <Route path="/grid" component={Header} />
            </Switch>
          </CSSTransitionGroup>
        )} />
      </div>
    )
  }
}

export default App