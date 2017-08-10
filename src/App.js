import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Header from './components/Header'
import WordControl from './containers/WordControl'
import GridControl from './containers/GridControl'
import Welcome from './components/Welcome'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <nav>
          <Link to="/word">word</Link>
          <Link to="/test">test</Link>
        </nav>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="route" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={Welcome} />
                <Route path="/word" component={WordControl} />
                <Route path="/test" component={Welcome} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    )
  }
}

export default App