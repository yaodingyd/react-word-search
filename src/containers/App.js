import React, { Component } from 'react'
import { connect } from 'react-redux'
import WordList from '../components/WordList'
import WordInput from '../components/WordInput'
import WordGrid from '../components/WordGrid'
import { addWord, produceGrid, tryToAddCharacter, removeCharacter } from '../actions'

//const wordGrid = ['test', 'test', 'test', 'test' ]

class App extends Component {

  render () {
    const { updateWord, wordList, produceGrid, wordGrid, handleTileClick} = this.props
    return (
      <div>
        <WordInput updateWordList={updateWord} produceGrid={produceGrid}/>
        <WordList wordList={wordList}/>
        <WordGrid wordGrid={wordGrid} handleTileClick={handleTileClick}/>
      </div>
    )
  }
}

// ownProps means props actually passed into your component in JSX
function mapDispatchToProps (dispatch) {
  return {
    updateWord: (word) => {
      dispatch(addWord(word))
    },
    produceGrid: (wordList) => {
      dispatch(produceGrid(wordList))
    },
    handleTileClick: (character, id, selected) => {
      if (!selected) {
        dispatch(tryToAddCharacter(character, id))
      } else {
        dispatch(removeCharacter(character, id))
      }
    }
  }
}

function mapStateToProps (state) {
  return {
    wordList: state.wordList,
    wordGrid: state.wordGrid
  }
}

// Use mergeProps to get stateProps
function mergeProps (stateProps, dispatchProps) {
  return {
    ...stateProps,
    ...dispatchProps,
    produceGrid: () => {
      dispatchProps.produceGrid(stateProps.wordList)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App)
