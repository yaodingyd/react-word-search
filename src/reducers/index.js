import * as ACTIONS from '../actions'
import { combineReducers } from 'redux'

import words from './words'
import grid from './grid'
import search from './search'

const showAnswer = (state = false, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_ANSWER:
      return !state
    case ACTIONS.RESET_GRID:
      return false
    default:
      return state
  }
}

const lang = (state = 'en', action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_LANG:
      return state = state === 'en' ? 'ch' : 'en'
    default:
      return state
  }
}

export default combineReducers({
  words,
  grid,
  search,
  showAnswer,
  lang
})