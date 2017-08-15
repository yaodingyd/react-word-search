import React from 'react'
import { Link } from 'react-router-dom'

class Welcome extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="jumbotron bg-success pt-5">
          <h1>React Word Search</h1>
          <p>Build with React and Redux.</p>
          <p>
            <Link className="btn btn-info" to="/lang">Go Next</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default Welcome