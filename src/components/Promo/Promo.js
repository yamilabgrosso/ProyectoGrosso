import nba from  "../../nba.jpg"
import gap from  "../../gap.jpg"
import tshirts from  "../../tshirts.jpg"
import  jersey from  "../../jersey.jpg"
import "./Promo.css"
import { Link } from "react-router-dom"
import { Fragment } from "react"

export const Promo = () => {

    return(
        <Fragment>
       <Link to= "/products"> <img src={nba} className="nba" alt="nba" /></Link>
       <Link to= "/categories/gap"> <img src={gap} className="nba" alt="nba" /></Link>
       <Link to= "/categories/t-shirts"> <img src={tshirts} className="nba" alt="nba" /></Link>
       <Link to= "/categories/jersey"> <img src={jersey} className="nba" alt="nba" /></Link>
       </Fragment>
    )
}