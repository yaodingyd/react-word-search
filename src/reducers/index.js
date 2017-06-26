import * as ACTIONS from '../actions'
import { combineReducers } from 'redux'

import words from './words'
import grid from './grid'
import search from './search'

const showAnswer = (state = false, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_ANSWER:
      return !state;
    default:
      return state
  }
}

export default combineReducers({
  words,
  grid,
  search,
  showAnswer
})