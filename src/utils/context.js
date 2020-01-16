import React, { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = element => {
    const findElIndex = cart.findIndex(item => item.sku === element.sku)

    findElIndex !== -1
      ? (cart[findElIndex].quantity += element.quantity)
      : setCart([...cart, element])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
