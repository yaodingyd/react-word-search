export function getWord (array) {
  let temp = array.sort((a, b) => {
    if (a.r === b.r) {
      return parseInt(a.col, 10) - parseInt(b.col, 10)
    } else {
      return parseInt(a.r, 10) - parseInt(b.r, 10)
    }
  }).map((a) => {
    return a.character
  })
  return temp.join('')
}