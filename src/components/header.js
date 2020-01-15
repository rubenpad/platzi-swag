import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { StyledHeader, MenuItem } from '../styles/components'
import { CartContext } from '../utils/context'

const Header = () => {
  const { cart } = useContext(CartContext)

  return (
    <StyledHeader>
      <Link to="/">
        <img
          src="https://i.postimg.cc/6q3pg48v/Logo.png"
          alt="logo de platzi swag"
        />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/productos">Productos</Link>
          </MenuItem>
          <MenuItem margin>
            <a href="https://platzi.com">Platzi</a>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img
                  src="https://i.postimg.cc/L6wpMxLt/cart.png"
                  alt="cart log"
                />
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
