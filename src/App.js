import { Route, Routes } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min'

import Navigation from './components/Nav/Navigation'
import ProductsPage from './container/Products'
import FavoritesPage from './container/Favorites'

function App() {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route end path='/' element={<ProductsPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </main>
    </Fragment>
  )
}

export default App
