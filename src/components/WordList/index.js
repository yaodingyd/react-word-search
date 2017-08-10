import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

class WordList extends Component {
  render () {
    let { wordList, removeWord } = this.props
    return (
      <ul className="list-group mt-3">
        <TransitionGroup>
          {wordList.map(word => (
            <CSSTransition key={word.id} classNames="word" timeout={500}>
              <li className="list-group-item word-item" onClick={removeWord.bind(this, word.id)}>{word.text}</li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    )
  }
} 

WordList.propTypes = {
  wordList: PropTypes.arrayOf(PropTypes.object),
  removeWord: PropTypes.func
}

export default WordList
