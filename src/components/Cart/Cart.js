import { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../../src/context/cartContext"
import { Link } from "react-router-dom"
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from "../Firebase/Index";
import "./Cart.css"
import React from 'react';
import LottieAnimation from '../Animaciones/Animaciones';
import home from '../Animaciones/47781-empty-cart.json';
import { Form } from "../Form/Form"

export const Cart = () => {

    const { cart, clear, removeItem, price, setCart } = useContext(CartContext)

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        card: "",
        expiration: "",
        code: ""
    })
    const [isDisabledButton, setIsDisabledbutton] = useState(true)

    const formFields = [
        {
            id: "name",
            label: "Name",
            value: form.name,
            required: true
        },
        {
            id: "phone",
            label: "Phone",
            value: form.phone,
            required: true
            
        },
        {
            id: "email",
            label: "Email",
            value: form.email,
            required: true

        },
        {
            id: "card",
            label: "Card",
            value: form.card,
            required: true
        },
        {
            id: "expiration",
            label: "Expiration",
            value: form.expiration,
            required: true
        },
        {
            id: "code",
            label: "Code",
            value: form.code,
            required: true
        },
    ]

    const handleForm = (id, value) => {
        const newForm = { ...form, [id]: value }
        setForm(newForm)
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
            buyer: form,
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
                    alert("no hay stock")
                }


            })
            batch.commit()
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect( () => {
        const requiredFields = formFields.filter(({required}) => required)
        const isSomeRequiredFieldEmpty = requiredFields.some(({value}) => !value )
       setIsDisabledbutton(isSomeRequiredFieldEmpty)
        }, [form])

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

            <h4 className="formTitle">You need to complete the form to finish shopping</h4>

            <form className="form">

                {formFields.map(({ id, label, value, type }) => (
                    <Form
                        key={id}
                        id={id}
                        label={label}
                        value={value}
                        onChange={handleForm}
                        type= {type}
                    />
                )
                )}

                <Link to="/">
                    <button className="finishShoppingButton" disabled= {isDisabledButton} onClick={handleFinishShopping}>Finish shopping</button>
                </Link>
            </form>
        </Fragment>
    )
}