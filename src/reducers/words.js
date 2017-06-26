import { ADD_WORD, REMOVE_WORD } from '../actions'

function wordList (state = [], action) {
  switch (action.type) {
    case ADD_WORD:
      return [
        ...state,
        {
          text: action.word,
          id: action.id
        }
      ]
    case REMOVE_WORD:
      return state.filter(word => word.id!== action.id)
    default:
      return state
  }
}

export default wordList