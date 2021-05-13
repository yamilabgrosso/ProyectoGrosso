import { useContext } from "react";
import { CartContext } from '../../src/context/cartContext';



export const Cart = () => {

const {cart, removeFromCart, clearCart} = useContext(CartContext) 

    return (
      <div>
        <h3>Carrito de compras</h3>
        <button onClick={clearCart}>Vaciar Carrito</button>
        {cart.map((itemInCart) => {
          return (
            <div id={itemInCart.id}>
              <p>{itemInCart.name}</p>
              {/* <img>{itemInCart.image}</img> */}
              <p>{itemInCart.quantity}</p>
              <button onClick={() => removeFromCart(itemInCart.id)}>Eliminar producto</button>
            </div>
          );
        })}
      </div>
    );
  }