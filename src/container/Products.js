import React from 'react'
// import { useSelector } from 'react-redux'

import ProductItem from '../components/Products/ProductItem'

// Replace it with custom hook
// import { ProductsContext } from '../context/products-context'
import { useStore } from '../hooks-store/store'

import './Products.css'

const Products = props => {
  // Replace it with custom hook
  // const productList = useContext(ProductsContext).products
  const state = useStore()[0]

  // Redux
  // const productList = useSelector(state => state.shop.products)

  return (
    <ul className='products-list'>
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  )
}

export default Products
