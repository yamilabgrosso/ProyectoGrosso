import "./ItemCount.css"



export const ItemCount = ({add, substract, count, onAdd}) => {

    return (
      
        <div className="itemCount">
            <div className="counterProducts">
                <button className="subtractProducts" onClick={substract}>-</button>
                <p className="quantity">{count}</p>
                <button className="addProducts" onClick={add}>+</button>
            </div>
            <div className="botonAddToCart">
            <button className="addToCart" onClick={onAdd}>Add to Cart</button>
        </div>
        </div>
       
    )





}