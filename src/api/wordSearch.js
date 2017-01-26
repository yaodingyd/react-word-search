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

export function generateGrid1 (wordArray, size) {
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

export function generateGrid (wordArrayOriginal, size) {
  let wordArray = [...wordArrayOriginal]
  let grid = [];
  for (var i = 0; i < size; i++) {
    grid[i] = Array(size).fill(0);
  }
  wordArray.sort(function(a, b) {
    return a.length > b.length
  })

  for (let ii = 0; ii < wordArray.length; ii++) {
    let word = wordArray[ii];
    let len = word.length;
    let unique = false;
    let r, c, rr, cc;

    if (ii % 2 === 0) {
      while(!unique) {
        r = rr = Math.floor(Math.random() * (size - len));
        c = Math.floor(Math.random() * size);
        unique = true;
        while(r < len && unique === true) {
          if (grid[r][c] === '0' ) {
            r++;
          } else {
            unique = false
          }
        }
      }
      for(let k = 0; k < len; k++) {
        grid[rr+k][c] = word[k].toUpperCase();
      }
    } else {
      while(!unique) {
        r = Math.floor(Math.random() * size);
        cc = c = Math.floor(Math.random() * (size - len));
        unique = true;
        while(c < len && unique === true) {
          if (grid[r][c] === '0' ) {
            c++;
          } else {
            unique = false
          }
        }
      }
      for(let kk = 0; kk < len; kk++) {
        grid[r][cc+kk] = word[kk].toUpperCase();
      }
    }   
  }

  for (let i = 0; i < size; i++) {
    grid[i] = grid[i].join('')
  }
  return grid;

}

export function generateGridData (wordArray, size) {
  let grid = generateGrid(wordArray, size)
  return grid.map((string)=>{
    return string.split('').map((char) => {
      return {
        character: char === '0' ? generateRandomString(1) : char,
        selected: false,
        available: false,
        success: false,
        answer: char === '0' ? false: true
      }
    })
  })
}

