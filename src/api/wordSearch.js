function generateRandomString (length) {
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let text = ''
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text
}

function generateRow (word, rowLength) {
  let fillStringLength = rowLength - word.length
  let fillString = generateRandomString(fillStringLength)
  let breakPoint = Math.floor(Math.random() * fillStringLength)
  let firstPart = fillString.substring(0, breakPoint - 1)
  let secondPart = fillString.substring(breakPoint - 1)
  return firstPart.concat(word, secondPart)
}

export function generateGrid (wordArray, size) {
  let grid = []
  for (let i = 0; i < size; i++) {
    if (i < wordArray.length) {
      grid[i] = generateRow(wordArray[i], size)
    } else {
      grid[i] = generateRow('', size)
    }
  }
  return grid
}

export function generateGridData (wordArray, size) {
  let grid = generateGrid(wordArray, size)
  return grid.map((string)=>{
    return string.split('').map((char) => {
      return {
        character: char,
        selected: false,
        available: false,
        success: false
      }
    })
  })
}

