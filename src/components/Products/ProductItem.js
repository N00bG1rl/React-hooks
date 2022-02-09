import React from 'react'
// import { useDispatch } from 'react-redux'

import Card from '../UI/Card'
import { useStore } from '../../hooks-store/store'
// import { toggleFav } from '../../store/actions/productsActions'
// import { ProductsContext } from '../../context/products-context'

import './ProductItem.css'

const ProductItem = React.memo(props => {
  console.log('RENDERING')
  const dispatch = useStore(false)[1]

  // Redux
  // const dispatch = useDispatch()
  // const toggleFav = useContext(ProductsContext).toggleFav

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id))
    // toggleFav(props.id)

    dispatch('TOGGLE_FAV', props.id)
  }

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className='product-item'>
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  )
})

export default ProductItem
