import { CartContext } from '../../context/cartContext';
import { useContext } from 'react'
import logoCart from "../../logoCart.ico";
import { NavLink } from "react-router-dom"

export const CartMade = () => {
  const {countProd} = useContext(CartContext)
  console.log(countProd)
  return (
    <div>
      <NavLink activeClassName="" className="" exact to='/cart'> 
      <img src={logoCart} className="logoCart" alt="logo cart"/>({countProd()})
      </NavLink>
      
    </div>
  );
  
}