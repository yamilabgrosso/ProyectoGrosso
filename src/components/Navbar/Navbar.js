import "./Navbar.css"
import logo from "../../logostore2.png";
import { NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import { Search } from "../Search/Search"
export const Navbar = (props) => {

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
              <NavLink activeClassName="activeLinkToPage" className="linkToPage" exact to='/'>Help</NavLink>
            </li>
            <li className="link">
              <CartWidget />
            </li>
          </ul>
        </nav>
      </div>

      <div className="logoandseeker">
        <div className="topbarIntro">
          <img src={logo} className="logo" alt="logo" />
          <h4 className="name">LEBRONSTORE</h4>
        </div>
        <Search />
      </div>


      <div className="topbarCategories">
        <nav className="navigation">
          <ul className="links">
            <li className="linkCategories">
              <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/categories/jersey'>JERSEYS</NavLink>
            </li>
            <li className="linkCategories">
              <NavLink activeClassName="activeLinkToCategories" className="linkToCategories" exact to='/categories/gap'>GAP</NavLink>
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