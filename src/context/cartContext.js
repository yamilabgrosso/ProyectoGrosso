import { createContext, useState } from 'react'
import { useEffect } from 'react';

export const CartContext = createContext()
export const CartProvider = CartContext.Provider

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [quantities, setQuantities] = useState(0)

  const isInCart = (id) => {
    return cart.find((product) => id === product.id);
  };

  
  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      setQuantities(product.quantity += quantity);
    } else {
      product.quantity = quantity
      setCart([...cart, product])
    }
  }

  useEffect( () => {
    setQuantities(cart.length)
}, [cart])



const removeItem = (productId) => {
    const newCart = cart.filter((product) => product.id !== productId)
    setCart(newCart)
  }

  const countProd = () => {
    return cart.reduce((acc, product) => (acc += product.quantity), 0);

  };

  const clear = () => { setCart([]) }

  const price = () => {
    return cart.reduce((acc, product) => (acc += product.quantity * product.price), 0);
  }

  return (
    <CartProvider value={{cart, isInCart, clear, addItem, removeItem, countProd, quantities, price }}>
      {children}
    </CartProvider>
  )
}