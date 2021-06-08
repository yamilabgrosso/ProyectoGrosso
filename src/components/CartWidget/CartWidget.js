import { NavLink } from "react-router-dom"
import { Fragment, useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import logoCart from "../../multimedia/logoCart.ico";
import "./CartWidget.css"

export const CartWidget = () => {
    const { countProd, cart } = useContext(CartContext)

    return (
        <Fragment>
        {cart.length !== 0 ? (
                <Fragment>
                    <NavLink activeClassName="activeCart" className="cart" exact to='/cart'>
                        <img src={logoCart} className="logoCart" alt="logo cart" />
                        {countProd()}
                    </NavLink>   
                </Fragment>
            ) : ("")
        }   
     </Fragment> )}

    
