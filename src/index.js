import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { combineReducers, createStore } from 'redux'
//import productReducer from './store/reducers/productsReducers'

import App from './App'
import ProductsProvider from './context/products-context'

import './index.css'

// const rootReducer = combineReducers({
//   shop: productReducer,
// })

// const store = createStore(rootReducer)

ReactDOM.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
  document.getElementById('root')
)
