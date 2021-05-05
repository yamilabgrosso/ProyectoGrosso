import { ItemCount } from "../ItemCount/ItemCount"
export const ItemDetail = (props) => {

    return(
    <div className="detailContainer">
      <div className="bodyDetail">
      <p className="titleDetail">{props.name}</p>
      <img className="imageDetail" src={props.image} />
      </div>
      <div className="areaDetail">
      <p className="descriptionDetail">Soy un buen producto</p>
      <p className="priceDetail">$ {props.price}</p>
        <ItemCount/>     
      </div>
    </div>
    )}