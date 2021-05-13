import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
// import { Link } from "react-router-dom"
// import { useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext"


export const ItemDetail = ({ props, product }) => {
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
    if (stock !== 0) {
      setButtonAddToCart(true)
      addItem(product, stock)
      setStock(stock)
    }
  }

  const { addItem } = useContext(CartContext)

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

        {(buttonAddToCart) === false ? (
          <ItemCount
            add={addQuantity}
            substract={substractQuantity}
            count={stock}
            onAdd={buyThisQuantity}
          />
        ) : (
          // <Link to={`/cart`}><button>Finalizar compra</button></Link>
          <button className='addCart' onClick={() => addItem(product, setStock)}>Finalizar compra</button>

        )}

      </div>
    </div>
  )
}
