import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { combineReducers, createStore } from 'redux'
// import productReducer from './store/reducers/productsReducers'

import App from './App'

// Replace it with custom hook
//import ProductsProvider from './context/products-context'
import configureStore from './hooks-store/products-store'

import './index.css'

configureStore()

// Redux
// const rootReducer = combineReducers({
//   shop: productReducer,
// })
// const store = createStore(rootReducer)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
