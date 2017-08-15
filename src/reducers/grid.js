import * as ACTIONS from '../actions'

const grid = (state = [], action) => {
  let row, column, newState
  if (action.id && action.id.toString().indexOf('-') !== -1) {
    row = action.id.split('-')[0]
    column = action.id.split('-')[1]
  }
  newState = [...state]
  switch (action.type) {
    case ACTIONS.GENERATE_GRID:
      return [
        ...action.grid
      ]
    case ACTIONS.RESET_GRID:
      return state.map((row) => {
        return row.map((tile) => {
          return {
            ...tile,
            selected: false,
            success: false,
            available: false
          }
        })
      })
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
    // case ACTIONS.ENABLE_AVAILABLE:
    //   action.ids.forEach((id) => {
    //     newState[id[0]][id[1]] = {
    //       ...newState[id[0]][id[1]],
    //       available: true
    //     }
    //   })
    //   return newState
    // case ACTIONS.DISABLE_AVAILABLE:
    //   action.ids.forEach((id) => {
    //     newState[id[0]][id[1]] = {
    //       ...newState[id[0]][id[1]],
    //       available: false
    //     }
    //   })
    //   return newState
    default:
      return state
  }
}

export default grid