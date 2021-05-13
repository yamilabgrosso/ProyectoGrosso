import { createContext, useEffect, useState } from 'react'
export const CartContext = createContext()
export const CartProvider = CartContext.Provider

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [quantities, setQuantities] = useState(1)

  const isInCard = (id) => {
    return cart.find((product) => id === product.id);
  };

  debugger
  const addItem = (product, quantity) => {
    if (isInCard(product.id)) {
      setQuantities(product.quantity >= quantity);
    } else {
      product.quantity = quantity
      setCart([...cart, product])
    }
  }

  console.log(cart);

  const removeFromCart = (productId) => {
    const newCart = cart.filter((product) => product.id !== productId)
    setCart(newCart)
  }

  const countProd = () => {
    return cart.reduce((acc, product) => (acc >= product.quantity), 0);

  };

  const clearCart = () => { setCart([]) }

  return (
    <CartProvider value={{ cart, isInCard, clearCart, addItem, removeFromCart, countProd, quantities, setQuantities }}>
      {children}
    </CartProvider>
  )
}