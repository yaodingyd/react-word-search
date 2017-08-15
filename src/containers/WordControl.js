import React, { Component } from 'react'
import { connect } from 'react-redux'
import WordList from '../components/WordList'
import WordInput from '../components/WordInput'
import { addWord, removeWord, produceGrid } from '../actions'
import { withRouter } from 'react-router'

class WordControl extends Component {

  produceGrid = () => {
    this.props.produceGrid(this.props.wordList.map(word => {return word.text} ))
    this.props.history.push('/grid')
  }

  render () {
    const { updateWord, removeWord, wordList } = this.props
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-sm-10 offset-sm-1">
            <WordInput wordList={wordList} addWord={updateWord}/>
            <WordList wordList={wordList} removeWord={removeWord}/>
          </div>
        </div>
        { wordList.length > 0 &&
          <div className="row mt-2 text-center">
            <div className="col-md-6 offset-md-3 col-sm-10 offset-sm-1">
              <button className="btn btn-info" onClick={this.produceGrid}>Next</button>
            </div>
          </div>
        }
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
    },
    produceGrid: (wordList) => {
      dispatch(produceGrid(wordList))
    },
  }
}

function mapStateToProps (state) {
  return {
    wordList: state.words,
  }
}

// Use mergeProps to get stateProps
// function mergeProps (stateProps, dispatchProps) {
//   return {
//     ...stateProps,
//     ...dispatchProps,
//     produceGrid: () => {
//       dispatchProps.produceGrid(stateProps.wordList)
//     }
//   }
// }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WordControl))
