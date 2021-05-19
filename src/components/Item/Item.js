import { Link } from "react-router-dom"

export const Item = ({ name, picture, price, productId }) => {

    return (
        <Link to={`/products/${productId}`}>
            <div className="card">
                <p className="cardTitle">{name}</p>
                <img className="cardPicture" src={picture} alt="Imagen producto" />
                <p className="cardPrice">{price}</p>
            </div>
        </Link>
    )
}