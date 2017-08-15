import { generateGridData } from '../api/wordSearch2'
import { getWord } from '../utility'

// wordlist related
export const ADD_WORD = 'ADD_WORD'
export const REMOVE_WORD = 'REMOVE_WORD'
// grid related
export const GENERATE_GRID = 'GENERATE_GRID'
export const RESET_GRID = 'RESET_GRID'
export const CLEAR_GRID = 'CLEAR_GRID'
// search related
export const ADD_CHAR = 'ADD_CHAR'
export const REMOVE_CHAR = 'REMOVE_CHAR'
export const SEARCH_SUCCEED = 'SEARCH_SUCCEED'
export const ENABLE_AVAILABLE = 'ENABLE_AVAILABLE'
export const DISABLE_AVAILABLE = 'DISABLE_AVAILABLE'
// others
export const TOGGLE_ANSWER = 'TOGGLE_ANSWER'
export const TOGGLE_LANG = 'TOGGLE_LANG'


export const addWord = (word) => {
  return {
    type: ADD_WORD,
    id: Date.now(),
    word
  }
}

export const removeWord = (id) => {
  return {
    type: REMOVE_WORD,
    id
  }
}

export const toggleAnswer = () => ({
  type: TOGGLE_ANSWER
})

export const toggleLang = () => ({
  type: TOGGLE_LANG
})

export const resetGrid = () => {
  return {
    type: RESET_GRID
  }
}

const updateGrid = (grid) => {
  return {
    type: GENERATE_GRID,
    grid
  }
}

export const produceGrid = (wordList, lang) => (dispatch) => {
  let grid = generateGridData({words: wordList, lang})
  dispatch(updateGrid(grid))
}

export const addCharacter = (character, id) => {
  return {
    type: ADD_CHAR,
    character,
    id
    //row: id.split('-')[0],
    //column: id.split('-')[1]
  }
}

export const removeCharacter = (character, id) => ({
  type: REMOVE_CHAR,
  character,
  id
})

export const enableAvailable = (ids) => ({
  type: ENABLE_AVAILABLE,
  ids
})

export const disableAvailable = (ids) => ({
  type: DISABLE_AVAILABLE,
  ids
})

export const searchSucceed = () => {
  return {
    type: SEARCH_SUCCEED
  }
}

let firstTile
let direction

export const tryToAddCharacter = (character, id) => (dispatch, getState) => {
  const wordGrid = getState().grid
  let search = getState().search
  const wordList = getState().words.map(item => (item.text))
  let r = parseInt(id.split('-')[0], 10)
  let col = parseInt(id.split('-')[1], 10)
  //if (wordGrid[r][col].available || search.length === 0){
    dispatch(addCharacter(character, id))
    // state updated, so we get to get search again
    search = getState().search
    let word = getWord(getState().search)
    if (wordList.includes(word)) {
      dispatch(searchSucceed())
      return
    } 
    // display available tiles is so complicated
  //   let ids = []
  //   if (search.length === 1) {
  //     firstTile = search[0] 
  //     if (r - 1 >= 0) {
  //       ids.push([r - 1, col])
  //     }
  //     if ( r + 1 < 15) {
  //       ids.push([r + 1, col])
  //     }
  //     if (col - 1 >= 0) {
  //       ids.push([r, col - 1])
  //     }
  //     if ( col + 1 < 15) {
  //       ids.push([r, col + 1])
  //     }
  //     dispatch(enableAvailable(ids))
  //   } else if (search.length === 2) {
  //     if (firstTile.r === r) {
  //       direction = 'r'
  //       ids = []
  //       if (firstTile.r - 1 >= 0) {
  //         ids.push([firstTile.r - 1, firstTile.col])
  //       }
  //       if (firstTile.r + 1 < 15) {
  //         ids.push([firstTile.r + 1, firstTile.col])
  //       }
  //       dispatch(disableAvailable(ids))
  //       ids = []
  //       if (col - 1 >= 0 && !wordGrid[r][col - 1].selected &&  !wordGrid[r][col - 1].success) {
  //         ids.push([r, col - 1])
  //       }
  //       if (col + 1 < 15 && !wordGrid[r][col + 1].selected &&  !wordGrid[r][col + 1].success) {
  //         ids.push([r, col + 1])
  //       }
  //       dispatch(enableAvailable(ids))
  //     } else {
  //       direction = 'col'
  //       ids = []
  //       if (firstTile.col - 1 >= 0) {
  //         ids.push([firstTile.r, firstTile.col - 1])
  //       }
  //       if (firstTile.col + 1 < 15) {
  //         ids.push([firstTile.r, firstTile.col + 1])
  //       }
  //       dispatch(disableAvailable(ids))
  //       ids = []
  //       if (r - 1 >= 0 && !wordGrid[r - 1][col].selected &&  !wordGrid[r - 1][col].success) {
  //         ids.push([r - 1, col])
  //       }
  //       if (r + 1 < 15 && !wordGrid[r + 1][col].selected &&  !wordGrid[r + 1][col].success) {
  //         ids.push([r + 1, col])
  //       }
  //       dispatch(enableAvailable(ids))
  //     }
  //   } else {
  //     if (direction === 'r') {
  //       ids = []
  //       if (col - 1 >= 0 && !wordGrid[r][col - 1].selected &&  !wordGrid[r][col - 1].success) {
  //         ids.push([r, col - 1])
  //       }
  //       if (col + 1 < 15 && !wordGrid[r][col + 1].selected &&  !wordGrid[r][col + 1].success) {
  //         ids.push([r, col + 1])
  //       }
  //       dispatch(enableAvailable(ids))
  //     } else {
  //       ids = []
  //       if (r - 1 >= 0 && !wordGrid[r - 1][col].selected &&  !wordGrid[r - 1][col].success) {
  //         ids.push([r - 1, col])
  //       }
  //       if (r + 1 < 15 && !wordGrid[r + 1][col].selected &&  !wordGrid[r + 1][col].success) {
  //         ids.push([r + 1, col])
  //       }
  //       dispatch(enableAvailable(ids))
  //     }
  //   }
  // } 
}

export const tryToRemoveCharacter = (character, id) => (dispatch, getState) => {
  let state =  getState().search
  let result = state.filter((obj, index) => {
    return obj.character === character && (index === 0 || index === state.length - 1)
  })
  if (result.length > 0) {
    dispatch(removeCharacter(character, id))
  }
}