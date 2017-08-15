import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './style.css'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      showMenu: false
    }
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    })) 
  }

  render () {
    const { showMenu } = this.state
    return (  
      <nav className="navbar navbar-inverse bg-success">
        <button className="navbar-toggler navbar-toggler-right" type="button" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="/react-word-search">React-Word-Search</a>

        <TransitionGroup className={`navbar-collapse justify-content-end`}>
          {showMenu && 
            <CSSTransition classNames="header" timeout={500}>
              <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link pull-right" href="https://yaodingyd.github.io">YD</a>
              </li>
            </ul>
            </CSSTransition>
          }
        </TransitionGroup>
      </nav>
    )
  }
}

export default Header