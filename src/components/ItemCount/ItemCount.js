import "./ItemCount.css"
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext"


export const ItemCount = ({add, substract, count, onAdd}) => {
    const { addItem } = useContext(CartContext)
    return (
      
        <div className="itemCount">
            <div className="countProducts">
                <button className="subtractProducts" onClick={substract}>-</button>
                <p className="quantity">{count}</p>
                <button className="addProducts" onClick={add}>+</button>
            </div>
            <div className="botonAddToCart">
            <button className="addToCart" onClick={onAdd}>Add to Cart</button>
            {addItem}
        </div>
        </div>
       
    )





}