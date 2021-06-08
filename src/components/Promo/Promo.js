import nba from  "../../multimedia/nba.jpg"
import headwear from  "../../multimedia/gap.jpg"
import tshirts from  "../../multimedia/tshirts.jpg"
import  jersey from  "../../multimedia/jersey.jpg"
import "./Promo.css"
import { Link } from "react-router-dom"
import { Fragment } from "react"

export const Promo = () => {

    return(
        <Fragment>
       <Link to= "/products"> <img src={nba} className="nba" alt="nba" /></Link>
       <Link to= "/categories/headwear"> <img src={headwear} className="nba" alt="nba" /></Link>
       <Link to= "/categories/t-shirts"> <img src={tshirts} className="nba" alt="nba" /></Link>
       <Link to= "/categories/jersey"> <img src={jersey} className="nba" alt="nba" /></Link>
       </Fragment>
    )
}