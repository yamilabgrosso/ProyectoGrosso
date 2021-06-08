import {Navbar} from "../../src/components/Navbar/Navbar"
import {ItemDetailConteiner} from "../../src/components/ItemDetailConteiner/ItemDetailConteiner"
import {Footer} from "../../src/components/Footer/Footer"
import { Fragment } from "react"

export function ProductsDetail() {

return(

    <Fragment>
        <Navbar/>
        <ItemDetailConteiner/>
        <Footer/>   
    </Fragment>
)

}