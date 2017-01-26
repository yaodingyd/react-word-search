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
        <h1 className="wordinput-title text-success">Please input your word</h1>
        <div className="input-group">
          <input autoFocus type="text" className="wordinput-input form-control" value={inputValue} onChange={this.changeInputValue} onKeyPress={this.updateInputValue}/>
          <span className="input-group-btn">
            <button className="wordinput-add btn btn-outline-success" onClick={this.updateInputValue}>Add word</button>
          </span>
        </div>
        { this.props.wordList.length > 0 &&
        <div className="text-center">
          <button className="wordinput-generate btn btn-success" onClick={this.produceGrid}>Generate Grid</button>
        </div> } 
      </div>
    )
  }
}

WordInput.propTypes = {
  updateWordList: PropTypes.func,
  produceGird: PropTypes.func,
  wordList: PropTypes.arrayOf(PropTypes.string)
}

export default WordInput
