import { useState} from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext"


export const ItemDetail = ({ props, product }) => {
  const [buttonAddToCart, setButtonAddToCart] = useState(false)
  const [stock, setStock] = useState(0)


  const addQuantity = () => {
    if (stock <= 4) {
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
  }}




  const {addItem, quantities} = useContext(CartContext)  
  console.log(quantities)

  return (
    <div className="detailContainer">
      <div className="bodyDetail">
        <p className="titleDetail">{props.name}</p>
        <img className="imageDetail" src={props.image} alt="Imagen detalle" />
      </div>
      <div className="areaDetail">
        <p className="descriptionDetail">Soy un buen producto</p>
        <p className="priceDetail">$ {props.price}</p>

        {(buttonAddToCart) === false  ? (
          <ItemCount
            add={addQuantity}
            substract={substractQuantity}
            count={stock}
            onAdd={buyThisQuantity}
          />
        ) : (
         <Link to= "/cart" ><button className='addCart' >Finalizar compra</button></Link>
        )}


      </div>
    </div>
  )
}
