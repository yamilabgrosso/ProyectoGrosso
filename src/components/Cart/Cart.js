import { Fragment, useContext } from "react";
import { CartContext } from "../../../src/context/cartContext"
import { Link } from "react-router-dom"

export const Cart = () => {

    const { cart, clear, removeItem, price } = useContext(CartContext)

    return (
        <Fragment>
            <h3>Carrito de compras</h3>
            {cart.length === 0 ? (
                <Fragment>
                    <h5>Aún no hay productos en tu carrito</h5>
                    <Link to="/products">Volver al Menú principal</Link>
                </Fragment>
            ) : (

                cart.map((itemInCart) => {
                    return (

                        <div
                            key={itemInCart}
                            id={itemInCart.id}>
                            <h3>{itemInCart.name}</h3>
                            <img src={itemInCart.image} alt="Imagen detalle" />
                            <p>Cantidad : {itemInCart.quantity}</p>
                            <p>Precio   :${itemInCart.price * itemInCart.quantity}</p>
                            <button onClick={() => removeItem(itemInCart.id)}>Eliminar producto</button>
                        </div>
                    )
                })
            )}
            <p>Total ${price()}</p>
            <button onClick={clear}>Vaciar Carrito</button>

        </Fragment>
    )
}