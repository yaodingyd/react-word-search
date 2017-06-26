import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import word from './reducers'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

const loggerMiddleware = createLogger()

const store = createStore(
  word,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware 
  )
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
