import React from 'react'

const WordList = ({wordList}) => {
  let index = 0;
  return (
    <ul>
      {wordList.map(word => (
        <li key={index++}>{word}</li>
      ))}
    </ul>
  )
} 

export default WordList
