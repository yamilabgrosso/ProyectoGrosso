import "./Item.css"



export const Item = (props) => {

    return(
    <div className="card" onClick={() => console.log("Click")} >
    <p className="cardTitle">{props.title}</p>
    <img className="cardPicture" src = {props.picture}/>
    <p className="cardPrice">$ {props.price}</p>
</div>
    )
}

