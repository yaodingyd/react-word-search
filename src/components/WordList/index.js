import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import './style.css'

class WordList extends Component {
  render () {
    let { wordList, removeWord } = this.props
    return (
      <ul className="list-group mt-3">
        <CSSTransitionGroup transitionName="word" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {wordList.map(word => (
            <li className="list-group-item word-item" key={word.id} onClick={removeWord.bind(this, word.id)}>{word.text}</li>
          ))}
        </CSSTransitionGroup>
      </ul>
    )
  }
} 

WordList.propTypes = {
  wordList: PropTypes.arrayOf(PropTypes.object),
  removeWord: PropTypes.func
}

export default WordList
