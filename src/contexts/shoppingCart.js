import React, { useState, useContext, createContext } from 'react'

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  
  const addToCart = (id, quantity) => {
    const newCart = [...cart]
    
    newCart.push({id, quantity})
    setCart(newCart)
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }
  
  return (
    <ShoppingCartContext.Provider value={{cart, addToCart, removeFromCart}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useCart = () => useContext(ShoppingCartContext);
