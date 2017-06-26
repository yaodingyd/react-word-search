import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

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
      <nav className="navbar navbar-light">
        <button className="navbar-toggler navbar-toggler-right" type="button" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand text-success" href="/react-word-search">WordSearch</a>

        <CSSTransitionGroup className={`navbar-collapse justify-content-end`} transitionName="header" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {showMenu && <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="https://yaodingyd.github.io">YD</a>
            </li>
          </ul>}
        </CSSTransitionGroup>
      </nav>
    )
  }
}

export default Header