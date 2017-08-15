import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Header from './components/Header'
import WordControl from './containers/WordControl'
import GridControl from './containers/GridControl'
import Lang from './components/Lang'
import Welcome from './components/Welcome'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Route render={({ location }) => (
          <TransitionGroup className="pt-5">
            <CSSTransition key={location.key} classNames="route" timeout={500}>
              <Switch location={location}>
                <Route exact path="/" component={Welcome} />
                <Route path="/lang" component={Lang} />
                <Route path="/word" component={WordControl} />
                <Route path="/grid" component={GridControl} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    )
  }
}

export default App