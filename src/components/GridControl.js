import React from 'react'

const GridControl = ({clickReset, clickAnswer}) => {
  return (
    <div className="grid-control">
      <button className="btn btn-warning" title="Reset" onClick={clickReset}>
        <i className="fa fa-undo"></i>
      </button>
      <button className="btn btn-danger" title="Show Answers" onClick={clickAnswer}>
        <i className="fa fa-forward"></i>
      </button>
    </div>
  )
}

export default GridControl