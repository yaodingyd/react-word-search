import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

class Flash extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    message: PropTypes.string
  }

  render() {
    const { children, message } = this.props
    return (
      <div className="flash">
        { children }
        <CSSTransition in={ message.length !== 0 } classNames="expanded" timeout={ 300 } mountOnEnter={ false } unmountOnExit={ false }>
          <div>{ message }</div>
        </CSSTransition>
      </div>
    )
  }

}

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  setMessage = () => {
    this.setState({
      message: 'this is a message'
    })
  }

  emptyMessage = () => {
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <div>
        <Flash message={this.state.message}/>
        <button onClick={this.setMessage}>set message</button>
        <button onClick={this.emptyMessage}>empty message</button>
      </div>
    )
  }
}

export default Welcome