import React from 'react'

const WordList = ({wordList}) => {
  let index = 0;
  return (
    <div>
      {wordList.map(word => (
        <div key={index++}>{word}</div>
      ))}
    </div>
  )
} 

export default WordList
