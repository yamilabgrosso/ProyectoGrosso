import { useState } from "react"
import "./ItemCount.css"
import { Link } from "react-router-dom"


export const ItemCount = (props) => {
    const [initial, setInitial] = useState(0)
    const [stock, setStock] = useState(5)

    const addProducts = () => {
        if (initial < stock)

            setInitial(initial + 1)
    }

    const subtractProducts = () => {
        if (initial > 0)

            setInitial(initial - 1)
    }


    return (
      
        <div className="itemCount">
            <div className="countProducts">
                <button className="subtractProducts" onClick={subtractProducts}>-</button>
                <p className="amount">{initial}</p>
                <button className="addProducts" onClick={addProducts}>+</button>
            </div>
            <div className="botonAddToCart">
             <Link to={`/products/${props.productId}`}><button className="addToCart">Add to Cart</button></Link>
        </div>
        </div>
       
    )





}