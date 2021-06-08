import { Fragment } from "react"
import { Footer } from "../components/Footer/Footer"
import {Navbar} from "../components/Navbar/Navbar"

export const Help = () => {

    return (
        <Fragment>
        
            <Navbar/>

            <div className="helpContainer">
            <h1>How can I contact Customer Service?</h1>
            <h2>Contacting Fan Services</h2>
            <p> Here's how to contact Customer Service!</p>
            
            <p>We're on
            <strong><a href="https://twitter.com/NBASTORESupport"> Twitter! </a></strong>
             Send us a Tweet and we'll be sure to answer any of your service questions!</p>
            <p><strong> Looking for additional ways to Contact Us? Call us 0800-333-4545</strong></p>
            <p>Customer service hours are from Monday to Friday from 9 am to 8 pm</p>
            </div>
            <Footer/>

        </Fragment>
    )

}
