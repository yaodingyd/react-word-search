import React, { Component } from 'react'
import PropTypes from 'prop-types'
// OK, controlled form it is since using ref is such a bad thing to do
class WordInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  changeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  updateText = (e) => {
    if ((e.charCode === undefined || e.charCode === 13) && this.state.text !== '') {
      this.setState({
        text: ''
      })
      this.props.addWord(this.state.text)
    }
  }

  render () {
    const { text } = this.state
    return (
      <div>
        <h1 className="text-success">Please input your word</h1>
        <div className="input-group">
          <input autoFocus type="text" className="form-control" value={text} onChange={this.changeText} onKeyPress={this.updateText}/>
          <span className="input-group-btn">
            <button className="btn btn-outline-success" onClick={this.updateText}>Add word</button>
          </span>
        </div>
      </div> 
    )
  }
}

WordInput.propTypes = {
  addWord: PropTypes.func,
  wordList: PropTypes.arrayOf(PropTypes.object)
}

export default WordInput
