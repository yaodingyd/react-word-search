import React from 'react'
import { Link } from 'react-router-dom'

const GridControl = ({clickReset, clickAnswer}) => {
  return (
    <div className="grid-control">
      <Link className="btn btn-info" title="Go back to words input" to="/word">
        <i className="fa fa-backward"></i>
      </Link>
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