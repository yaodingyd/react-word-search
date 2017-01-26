import React, { Component, PropTypes } from 'react'
import GridControl from './GridControl'
import './app.css'

class WordGrid extends Component {
  handleClick = (character, id, charObj) => {
    this.props.handleTileClick(character, id, charObj.selected);
  }

  render () {
    let row = 0
    let column = 0
    const { wordGrid } = this.props
    return (
      <div className="word-grid">
        { wordGrid.length > 0 &&
          <GridControl clickAnswer={this.props.clickAnswer} clickReset={this.props.clickReset}/>}
        <table className="table table-bordered">
          <tbody>
          { wordGrid.map( wordRow => {
            column = 0
            return (
            <tr key={row++} className="word-row">
            { wordRow.map( charObj => {
                let id = (row - 1) + '-' + column++
                let classname = 'word-tile' + (charObj.selected ? ' selected' : '') + (charObj.success ? ' success' : '') + (charObj.available ? ' available' : '') + (charObj.answer && this.props.showAnswer ? ' answer' : '')
                return (
                  <td key={id} className={classname} onClick={this.handleClick.bind(this, charObj.character, id, charObj)}>{charObj.character}</td>
                )
              })}
            </tr>
          )})}
          </tbody>
        </table>
      </div>
    )
  }
}

WordGrid.propTypes = {
  wordGrid: PropTypes.arrayOf(PropTypes.array),
  handleTileClick: PropTypes.func,
  showAnswer: PropTypes.bool,
  clickAnswer: PropTypes.func,
  clickReset: PropTypes.func
}

export default WordGrid