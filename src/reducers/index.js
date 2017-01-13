import * as ACTIONS from '../actions'
import { combineReducers } from 'redux'

const wordList = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_WORD:
      return [
        ...state,
        action.word
      ]
    default:
      return state
  }
}

const wordGrid = (state = [], action) => {
  let row, column, newState
  switch (action.type) {
    case ACTIONS.GENERATE_GRID:
      return [
        ...action.grid
      ]
    case ACTIONS.ADD_CHAR:
      row = action.id.split('-')[0]
      column = action.id.split('-')[1]
      newState = [...state]
      newState[row][column] = {
        ...newState[row][column],
        selected: true
      }
      return newState
    case ACTIONS.REMOVE_CHAR:
      row = action.id.split('-')[0]
      column = action.id.split('-')[1]
      newState = [...state]
      newState[row][column] = {
        ...newState[row][column],
        selected: false
      }
      return newState
    default:
      return state
  }
}

const searchResult = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CHAR:
      /*let addState = {...state}
      addState[action.id] = action.character*/
      return [
        ...state,
        action.character
      ]
    case ACTIONS.REMOVE_CHAR:
      return state.filter((char) => {
        return char !== action.character
      })
    default:
      return state
  }
}

export default combineReducers({
  wordList,
  wordGrid,
  searchResult
})