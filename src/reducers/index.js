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
  if (action.id) {
    row = action.id.split('-')[0]
    column = action.id.split('-')[1]
  }
  newState = [...state]
  switch (action.type) {
    case ACTIONS.GENERATE_GRID:
      return [
        ...action.grid
      ]
    case ACTIONS.ADD_CHAR:
      newState[row][column] = {
        ...newState[row][column],
        selected: true,
        available: false
      }
      return newState
    case ACTIONS.REMOVE_CHAR:
      newState[row][column] = {
        ...newState[row][column],
        selected: false,
        available: true
      }
      return newState
    case ACTIONS.SEARCH_SUCCEED:
      return state.map((row) => {
        return row.map((tile) => {
          if (tile.selected) {
            return {
              ...tile,
              selected: false,
              success: true,
              available: false
            }
          } else {
            return {
              ...tile,
              available: false
            }
          }
        })
      })
    case ACTIONS.ENABLE_AVAILABLE:
      action.ids.forEach((id) => {
        newState[id[0]][id[1]] = {
          ...newState[id[0]][id[1]],
          available: true
        }
      })
      return newState
    case ACTIONS.DISABLE_AVAILABLE:
      action.ids.forEach((id) => {
        newState[id[0]][id[1]] = {
          ...newState[id[0]][id[1]],
          available: false
        }
      })
      return newState
    default:
      return state
  }
}

const searchResult = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_CHAR:
      return [
        ...state,
        {
          character:action.character,
          r: parseInt(action.id.split('-')[0], 10),
          col: parseInt(action.id.split('-')[1], 10)
        }
      ]
    case ACTIONS.REMOVE_CHAR:
      return state.filter((char, index) => {
        return char.character !== action.character
      })
    case ACTIONS.SEARCH_SUCCEED:
      return []
    default:
      return state
  }
}

export default combineReducers({
  wordList,
  wordGrid,
  searchResult
})