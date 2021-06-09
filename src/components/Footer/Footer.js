import "./Footer.css"
import { useState } from "react";
import 'firebase/firestore';
import { getFirestore } from "../Firebase/Index";
import { Link } from "react-router-dom"
import facebook from "../../icon/facebook.ico"
import instagram from "../../icon/instagram.ico"
import twitter from "../../icon/twitter.ico"

export const Footer = () => {


  const [email, setEmail] = useState()

  const handleSuscription = () => {
    const db = getFirestore()
    const batch = db.batch()

    const suscription = db.collection("suscriptions")
    const newSuscription = {
      userEmail: email,
    }

    suscription.add(newSuscription)
    batch.commit()
  }


  return (
    <div className="main-footer">
      <div className="container">
        
        <div className="row">
          
          {/* Column1 */}
          <div className="col">
            <h4>Information</h4>
            <p>Point of Sale:</p>
            <p className="adress"> 545 5th Ave at 45th Street, Nueva York, NY 10017-3609.</p>
          </div>

          {/* Column2 */}
          <div className="col">
            <h4>Follow Us</h4>
            <a href="https://www.facebook.com/NBAStore">
              <i><img className="icon" src={facebook} alt="facebook" /></i></a>
            <a href="https://www.instagram.com/nbastore/">
              <i><img className="icon" src={instagram} alt="instagram" /></i></a>
            <a href="https://twitter.com/NBASTORESupport">
              <i><img className="icon" src={twitter} alt="twitter" /></i></a>
          </div>

          {/* Column3 */}
          <div className="col">
            <h4>Stay updated on sales, new items and more</h4>
            <input className="inputSuscription" required type="email" onChange={(e) => setEmail(e.target.value)} />
            <Link to="/products">
              <button className="buttonSuscription" onClick={handleSuscription}>Subscribe & save 10%</button>
            </Link>
          </div>


        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} LEBRONSTORE | All rights reserved
            </p>
        </div>
      </div>
    </div>
  );
}
