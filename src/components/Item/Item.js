import { Link } from "react-router-dom"
import "./Item.css"

export const Item = ({ name, picture, price, productId }) => {

    return (
       
            <div className="card">
                <Link to={`/products/${productId}`}> 
                 <img className="cardPicture" src={picture} alt="Imagen producto" /> </Link>
                <p className="cardPrice">{price}</p>
                <p className="cardTitle">{name}</p>
            </div>
       
    )
}