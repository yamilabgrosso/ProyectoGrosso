import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
// import { useEffect } from 'react';


export const ItemDetail = (props) => {
  const [buttonAddToCart, setButtonAddToCart] = useState(false)
  const [stock, setStock] = useState(0)
 

  const addQuantity = () => {
    if (stock <= 4) {
      setStock(stock + 1)
    } else {
      alert("no hay mas")
    }
  }

  const substractQuantity = () => {
    if (stock >= 1) {
      setStock(stock - 1)
    } else {
      alert("no")
    }
  }

  const buyThisQuantity = () => {
    if (stock >= 1) {
      setButtonAddToCart(true)
    }
  }

  // useEffect(() => {
 
  //   setButtonAddToCart(buttonAddToCart)
  
  // })

  return (
    <div className="detailContainer">
      <div className="bodyDetail">
        <p className="titleDetail">{props.name}</p>
        <img className="imageDetail" src={props.image} alt="Imagen detalle" />
      </div>
      <div className="areaDetail">
        <p className="descriptionDetail">Soy un buen producto</p>
        <p className="priceDetail">$ {props.price}</p>
        <ItemCount
          add={addQuantity}
          substract={substractQuantity}
          count={stock}
          onAdd={buyThisQuantity}
        />
        {(buttonAddToCart) === true ? (
          <Link to={`/cart`}><button>Finalizar compra</button></Link>
        ) : (<h6>Gracias por elegir nuestros productos</h6>)}
          
      </div>
    </div>
  )
}