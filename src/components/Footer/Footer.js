import "./Footer.css"
import { useState } from "react";
import 'firebase/firestore';
import { getFirestore } from "../Firebase/Index";
import { Link } from "react-router-dom"


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
            <ul className="list-unstyled">
              <li>Point of Sale</li>
              <li>About us</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          {/* Column2 */}
          <div className="col">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li><i>Hola</i></li>
              <li><i>Hola</i></li>
              <li><i>Hola</i></li>
            </ul>
          </div>

          {/* Column3 */}
          <div className="col">
            <h4>Stay updated on sales, new items and more</h4>
            <input className="inputSuscription" required  type="text" onChange={(e) => setEmail(e.target.value)} />
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
