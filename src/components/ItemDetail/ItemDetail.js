import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext"
import "./ItemDetail.css"

export const ItemDetail = ({ product }) => {
  const [buttonAddToCart, setButtonAddToCart] = useState(false)
  const [stock, setStock] = useState(1)


  const addQuantity = () => {
    if (stock < product.stock) {
      setStock(stock + 1)
    }
  }

  const substractQuantity = () => {
    if (stock >= 1) {
      setStock(stock - 1)
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


  return (
    <div key={product.id} className="detailContainer">
      <div className="bodyDetail col-1">
        <img className="imageDetail" src={product.image} alt="Imagen detalle" />
        <p className="titleDetail">{product.name}</p>
      </div>
      <div className="col-2">
        <div className="areaDetail">
          <p className="priceDetail">Price: ${product.price}</p>
          <p className="descriptionDetail">{product.description}</p>
        </div>
        <div className="counter">
          {(buttonAddToCart) === false ? (
            <ItemCount
              add={addQuantity}
              substract={substractQuantity}
              count={stock}
              onAdd={buyThisQuantity}
            />
          ) : (
            <Link to="/cart" ><button className='addCart' >Buy</button></Link>
          )}

        </div>
      </div>
    </div>
  )
}
