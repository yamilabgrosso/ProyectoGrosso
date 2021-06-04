import { Fragment, useContext, useState } from "react";
import { CartContext } from "../../../src/context/cartContext"
import { Link } from "react-router-dom"
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from "../Firebase/Index";
import "./Cart.css"
import React from 'react';
import LottieAnimation from '../Animaciones/Animaciones';
import home from '../Animaciones/47781-empty-cart.json';

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
            <h3 className="title">My Cart</h3>
            {cart.length === 0 ? (
                <Fragment>
                    <h5 className="emptyCart">There are no products in your shopping cart</h5>
                    <LottieAnimation lotti={home} height={400} width={400} />
                </Fragment>
            ) : (
                cart.map((itemInCart) => {
                    return (
                        <div className="productsInCart"
                            key={itemInCart.id}
                            id={itemInCart.id}>
                            <img className="productImage" src={itemInCart.image} alt="Imagen detalle" />
                            <h4 className="productName">{itemInCart.name}</h4>
                            <p className="productQuantity">{itemInCart.quantity}</p>
                            {/* <p className="productStock">Stock disponible : {itemInCart.stock}</p> */}
                            <p className="productPrice">${itemInCart.price * itemInCart.quantity}</p>
                            <p className="removeProduct" onClick={() => removeItem(itemInCart.id)}>X</p>
                        </div>
                    )
                })
                
            )}
            <div className="endCart">
                <p className="totalPrice">Total ${price()}</p>
                <button className="clearCart" onClick={clear}>Clear cart</button>
                <Link to="/products"><button className="backToStore">Back to Store</button></Link>
            </div>

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