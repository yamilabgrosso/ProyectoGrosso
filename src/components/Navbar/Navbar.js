import "./Navbar.css"
import logo from "../../multimedia/1.png";
import { NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"



export const Navbar = () => {

  return (

    <header className="container">
      <div className="topbar">
        <nav className="navigation">
          <ul className="links">
            <li className="link">
              <NavLink activeClassName="activeLinkToPage" className="linkToPage" exact to='/'>Home</NavLink>
            </li>
            <li className="link">
              <NavLink activeClassName="activeLinkToPage" className="linkToPage" exact to='/products'>Store</NavLink>
            </li>
            <li className="link">
              <NavLink activeClassName="activeLinkToPage" className="linkToPage" exact to='/help'>Help</NavLink>
            </li>
            <li className="link">
              <CartWidget />
            </li>
          </ul>
        </nav>
      </div>

      <div className="logoandseeker">
          <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="topbarCategories">
        <nav className="navigation">
          <ul className="links">
            <li className="linkCategories">
              <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/categories/jersey'>JERSEYS</NavLink>
            </li>
            <li className="linkCategories">
              <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/categories/headwear'>HEADWEAR</NavLink>
            </li>
            <li className="linkCategories">
              <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/categories/t-shirts'>T-SHIRTS</NavLink>
            </li>
          </ul>
        </nav>
      </div>

    </header>

  )
}