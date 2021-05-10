import { Link } from "react-router-dom"
export const Item = (props) => {

    return(
        <Link to={`/products/${props.productId}`}>
    <div className="card">
    <p className="cardTitle">{props.name}</p>
    <img className="cardPicture" src = {props.picture} alt="Imagen producto"/>
    <p className="cardPrice">{props.price}</p>
</div>
</Link>
    )
}