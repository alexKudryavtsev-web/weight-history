import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import reducer from './reducer/reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const app = <Provider store={store}>
  <BrowserRouter>
    <div>App</div>
  </BrowserRouter>
</Provider>

ReactDOM.render(
  app,
  document.getElementById('root')
)

reportWebVitals()
