import { Fragment } from "react"
import { Footer } from "../components/Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"
import { Helpyou} from "../components/Help/Help"


export const Help = () => {

    return (
        <Fragment>
            <Navbar />
            <Helpyou/>
            <Footer />
        </Fragment>
    )

}
