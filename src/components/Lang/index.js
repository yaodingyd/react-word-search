import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleLang } from '../../actions'

class Lang extends React.Component {
  render() {
    const { toggleLang } = this.props
    return (
      <div className="container mt-5">
        <div className="jumbotron bg-success pt-5">
          <h1>Choose language</h1>
          <div className="btn-group" data-toggle="buttons">
            <label>
              <input type="radio" name="lang" className="radio" autoComplete="off" onClick={toggleLang}/>English
            </label>
            <label>
              <input type="radio" name="lang"  className="radio" autoComplete="off" onClick={toggleLang}/>Chinese
            </label>
          </div>
          <p>
            <Link className="btn btn-info" to="/word">Go Next</Link>
          </p>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toggleLang: () => {
      dispatch(toggleLang())
    }
  }
}
export default connect(null, mapDispatchToProps)(Lang)