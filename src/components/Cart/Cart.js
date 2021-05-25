import { Fragment, useContext, useState } from "react";
import { CartContext } from "../../../src/context/cartContext"
import { Link } from "react-router-dom"
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from "../Firebase/Index";


export const Cart = () => {

    const { cart, clear, removeItem, price, setCart } = useContext(CartContext)

    const [buttonDisabled, setButtonDisabled] = useState(false)

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

    const userInfo = {
        name,
        phone,
        email
    }

    let purchasedProducts = []
    cart.forEach((product) => {
        return purchasedProducts.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity
        })
    })

    const handleFinishShopping = () => {
        const db = getFirestore()
        const batch = db.batch()

        const order = db.collection("orders")
        const newOrder = {
            buyer: userInfo,
            items: purchasedProducts,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: price()
        }


        const IsPosibleToBuy = (stock, quantity) => {
            return stock >= quantity
        }

        order.add(newOrder).then(() => {
            cart.forEach((item) => {

                const docRef = db.collection("Items").doc(item.id)

                if (IsPosibleToBuy(item.stock, item.quantity)) {
                    batch.update(docRef, {
                        stock: item.stock - item.quantity
                    })
                    setCart([])
                } else {
                    console.log("ya no hay stock")
                    setButtonDisabled(true)  
                }

                    // el disabled del boton no me esta funcionando,  son casi las 23, y por las dudas entrego
                    // ahora, si mañana lo arreglo, te vuelvo a pasar el link

            })
            batch.commit()
        })
            .catch((err) => {
                console.log(err)
            })

    }
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
                            key={itemInCart.id}
                            id={itemInCart.id}>
                            <h3>{itemInCart.name}</h3>
                            <img src={itemInCart.image} alt="Imagen detalle" />
                            <p>Cantidad : {itemInCart.quantity}</p>
                            <p>Stock disponible : {itemInCart.stock}</p>
                            <p>Precio   :${itemInCart.price * itemInCart.quantity}</p>
                            <button onClick={() => removeItem(itemInCart.id)}>Eliminar producto</button>
                        </div>
                    )
                })
            )}
            <p>Total ${price()}</p>
            <button onClick={clear}>Vaciar Carrito</button>

            <form>
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Phone: </label>
                    <input type="number" onChange={(e) => setPhone(e.target.value)} />
                </div>
            </form>

            <Link to="/">
                <button onClick={handleFinishShopping} disabled={buttonDisabled} >Finish shopping</button>
            </Link>
        </Fragment>
    )
}