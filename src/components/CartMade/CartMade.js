import { CartContext } from '../../context/cartContext';
import { useContext } from 'react'
import logoCart from "../../logoCart.ico";
import { NavLink } from "react-router-dom"

export const CartMade = () => {
  const {quantities} = useContext(CartContext)
  
  return (
    <div>
      <NavLink activeClassName="" className="" exact to='/cart'> 
      <img src={logoCart} className="logoCart" alt="logo cart"/>
      <p>({quantities})</p>
      </NavLink>
      
    </div>
  );
  
}