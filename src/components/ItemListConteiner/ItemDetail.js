

export const ItemDetail = (props) => {

    return(
    <div className="detail">
    <p className="detailTitle">{props.title}</p>
    <img className="detailPicture" src = {props.picture}/>
    <p className="detailDescription">Soy un buen producto</p>
    <p className="detailPrice">$ {props.price}</p>
</div>
    )
}