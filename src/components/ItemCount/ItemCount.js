import { useState } from "react"
import "./ItemCount.css"

export const ItemCount = (props) => {
    const [initial, setInitial] = useState (0)
    const [stock, setStock] = useState (5)

    const addProducts = () => {
        if (initial < stock)

        setInitial(initial + 1)
    }

    const subtractProducts = () => {
        if (initial>0)

        setInitial(initial-1)
    }
    

return (

<div className="itemCount">
    <h6 className= "title">Zapatillas Jordan 1</h6>
    <div className= "countProducts">
    <button className="subtractProducts" onClick={subtractProducts}>-</button>
    <p className="amount">{initial}</p>
    <button className="addProducts" onClick={addProducts}>+</button>
    </div>
    <button className="addToCart">Agregar al carrito</button>
</div>
)





}