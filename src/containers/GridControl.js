import React, { Component } from 'react'
import { connect } from 'react-redux'
import WordGrid from '../components/WordGrid'
import { tryToAddCharacter, tryToRemoveCharacter, toggleAnswer, resetGrid } from '../actions'

//const wordGrid = ['test', 'test', 'test', 'test' ]

class GridControl extends Component {

  componentDidMount () {
    // this.props.produceGrid()
  }

  render () {
    const { wordGrid, handleTileClick, showAnswer, clickReset, clickAnswer} = this.props
    return (
      <div>
        <div className="container-fluid mt-4">
          <WordGrid wordGrid={wordGrid} handleTileClick={handleTileClick} showAnswer={showAnswer} clickAnswer={clickAnswer} clickReset={clickReset}/>
        </div>
      </div>
    )
  }
}

// ownProps means props actually passed into your component in JSX
function mapDispatchToProps (dispatch) {
  return {
    handleTileClick: (character, id, selected) => {
      if (!selected) {
        dispatch(tryToAddCharacter(character, id))
      } else {
        dispatch(tryToRemoveCharacter(character, id))
      }
    },
    clickAnswer: () => {
      dispatch(toggleAnswer())
    },
    clickReset: () => {
      dispatch(resetGrid())
    }
  }
}

function mapStateToProps (state) {
  return {
    wordGrid: state.grid,
    showAnswer: state.showAnswer
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

export default connect(mapStateToProps, mapDispatchToProps)(GridControl)
