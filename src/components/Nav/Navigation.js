import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigation = props => {
  return (
    <header className='main-header'>
      <nav>
        <ul>
          <li>
            <NavLink end to='/'>
              All products
            </NavLink>
          </li>
          <li>
            <NavLink to='/favorites'>Favorite products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
