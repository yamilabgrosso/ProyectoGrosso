import "./Navbar.css"
import logo from "../../logostore.jpg"; 
import logoCart from "../../logoCart.ico";

export const Navbar = () => {
    return (
        <header className="topbar">
        <img src={logo} className="logo" alt="logo" />

        <nav className="navigation">
          <ul className="links">
            <li className="link">
              <a className="textLink" href=" ">Home</a>
            </li>
            <li className="link">
              <a className="textLink" href=" ">Tienda</a>
            </li>
            <li className="link">
              <a className="textLink" href=" ">Sobre Nosotros</a>
            </li>
            <li className="link">
              <a className="textLink" href=" ">Contacto</a>
            </li>
           </ul>
        </nav>

        <img src = {logoCart} className="logoCart" alt="logo cart" />
      </header>

    )
}