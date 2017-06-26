import * as ACTIONS from '../actions'

const search = (state = [], action) => {
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
    case ACTIONS.RESET_GRID:
      return []
    default:
      return state
  }
}

export default search