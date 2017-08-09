/**
 * Based on Dave Eddy's wordsearch.js
 * https://github.com/bahamas10/wordsearch.js
 */

const MAX_ATTEMPTS = 20
const LETTERS = 'abcdefghijklmnopqrstuvwxyz'

function directionInfo(word, direction, width, height) {
  // max, min are the possible start position
  let minx = 0, miny = 0
  let maxx = width - 1
  let maxy = height - 1
  // use v to denote 'velocity'
  let vx = 0, vy = 0
  switch (direction) {
    case 0: // up-right
      miny = word.length - 1
      vy = -1
      maxx = width - word.length
      vx = 1;
      break;
    case 1: // right
      maxx = width - word.length
      vx = 1;
      break;
    case 2: // down-right
      maxy = height - word.length;
      vy = 1;
      maxx = width - word.length;
      vx = 1;
      break;
    case 3: // down
      maxy = height - word.length;
      vy = 1;
      break;
    default: /* NOTREACHED */
      break;
  }
  return {
    maxx,
    maxy,
    minx,
    miny,
    vx,
    vy
  }
}


function wordSearch({words, width = 20, height = 20}) {
  words.sort((a, b) => a.length < b.length ? -1 : 1)

  let grid = new Array(height)
  for (let i = 0; i < grid.length; i++)
    grid[i] = new Array(width);

  let unplaced = []

  for (let i = 0; i < words.length; i++) {
    const word = originalWord = words[i]
    let attempts = 0
    while (attempts < MAX_ATTEMPTS) {
      const direction = Math.floor(Math.random() * 4)
      const info = directionInfo(word, direction, width, height)

      if (info.maxx < 0 || info.maxy < 0 || info.maxy < info.miny || info.maxx < info.minx) {
        unplaced.push(originalword)
        break
      }

      let x = ox = Math.round(Math.random() * (info.maxx - info.minx) + info.minx)
      let y = oy = Math.round(Math.random() * (info.maxy - info.miny) + info.miny)

      let placeable = true
      let count = 0
      for (let l = 0; l < word.length; l++) {
        let charInGrid = grid[y][x]

        if (charInGrid) {
          if (charInGrid !== word.charAt(l)) {
            placeable = false
            break
          } else {
            count++
          }
        }
        y += info.vy
        x += info.vx
      }
      // change to 'count === word.length' as I don't see a scenario where count would be larger than word.length
      if (!placeable || count === word.length) {
        attempts++
        continue
      }

      x = ox
      y = oy
      for (let l = 0; l < word.length; l++) {
        grid[y][x] = word.charAt(l)
        y += info.vy
        x += info.vx
      }
      break
    } 

    if (attempts >= 20) unplaced.push(originalword)
  } 
  
  let solved = JSON.parse(JSON.stringify(grid))
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!grid[i][j]) {
        solved[i][j] = ' '
        grid[i][j] = LETTERS.charAt(Math.floor(Math.random() * LETTERS.length))
      }
    }
  }

  return {
    solved,
    grid
  }

}


