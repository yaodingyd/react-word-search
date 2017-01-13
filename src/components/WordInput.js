import React, { Component, PropTypes } from 'react'
// OK, controlled form it is since using ref is such a bad thing to do
class WordInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  changeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  updateInputValue = (e) => {
    if ((e.charCode === undefined || e.charCode === 13) 
          && this.state.inputValue !== ''){
      this.setState({
        inputValue: ''
      })
      this.props.updateWordList(this.state.inputValue)
    }
  }

  produceGrid = () => {
    this.props.produceGrid()
  }

  render () {
    const {inputValue} = this.state
    return (
      <div>
        <h2 className="wordinput-title">Please input your word</h2>
        <input autoFocus className="wordinput-input" value={inputValue} onChange={this.changeInputValue} onKeyPress={this.updateInputValue}/>
        <button className="wordinput-add" onClick={this.updateInputValue}>Add word</button>
        <button className="wordinput-generate" onClick={this.produceGrid}>Generate Grid</button>
      </div>
    )
  }
}

WordInput.propTypes = {
  updateWordList: PropTypes.func,
  produceGird: PropTypes.func
}

export default WordInput
