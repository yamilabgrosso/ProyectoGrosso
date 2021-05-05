import "./Footer.css"
export const Footer = () => {


    return (
        <div className="main-footer">

        <div className="container">
          <div className="row">
            
            {/* Column1 */}
            <div className="col">
              <h4>Customer Service</h4>
              <ui className="list-unstyled">
                <li>Help</li>
                <li>Contact Us</li>
                <li>Size Chart</li>
              </ui>
            </div>
            
            {/* Column2 */}
            <div className="col">
              <h4>Information</h4>
              <ui className="list-unstyled">
                <li>My Account</li>
                <li>About us</li>
                <li>Gift Cards</li>
              </ui>
            </div>
            
            {/* Column3 */}
            <div className="col">
              <h6>Stay updated on sales, new items and more</h6>
              <button>SIGN UP & SAVE 15%</button>
              <ui className="list-unstyled">
                <li>Follow Us</li>
                <div>
                    
                    <h6>Hola</h6>
                    <h6>Hola</h6>
                </div>
              </ui>
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
    