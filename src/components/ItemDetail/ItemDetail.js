import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext"


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
    <div key= {product.id}className="detailContainer">
      <div className="bodyDetail">
        <p className="titleDetail">{product.name}</p>
        <img className="imageDetail" src={product.image} alt="Imagen detalle" />
      </div>
      <div className="areaDetail">
        <p className="descriptionDetail">Soy un buen producto</p>
        <p className="priceDetail">$ {product.price}</p>

        {(buttonAddToCart) === false ? (
          <ItemCount
            add={addQuantity}
            substract={substractQuantity}
            count={stock}
            onAdd={buyThisQuantity}
          />
        ) : (
          <Link to="/cart" ><button className='addCart' >Finalizar compra</button></Link>
        )}


      </div>
    </div>
  )
}
