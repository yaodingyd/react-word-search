import React, { Component } from 'react'
import { connect } from 'react-redux'
import WordList from '../components/WordList'
import WordInput from '../components/WordInput'
import { addWord, removeWord } from '../actions'

class WordControl extends Component {
  render () {
    const { updateWord, removeWord, wordList } = this.props
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-sm-10 offset-sm-1">
            <WordInput wordList={wordList} addWord={updateWord}/>
            <WordList wordList={wordList} removeWord={removeWord}/>
          </div>
        </div>
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
    removeWord: (word) => {
      dispatch(removeWord(word))
    }
  }
}

function mapStateToProps (state) {
  return {
    wordList: state.words,
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WordControl)
