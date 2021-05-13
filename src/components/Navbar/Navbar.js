import "./Navbar.css"
import logo from "../../logostore2.png";
import lupa from "../../lupa.png";
import {NavLink} from "react-router-dom"
import {CartMade} from "../CartMade/CartMade"

export const Navbar = (props) => {
  return (
    <header className="container">

      <div className="topbar">
        <nav className="navigation">
          <ul className="links">
            <li className="link">
            <NavLink activeClassName="linkCategories" className="linkCategories" exact to='/'>Home</NavLink> 
            </li>
            <li className="link">
            <NavLink activeClassName="linkCategories" className="linkCategories" exact to='/products'>Store</NavLink>
            </li>
            <li className="link">
              <a className="textLink" href=" ">Help</a>
            </li>
            <li className="link">
              <CartMade/>
            </li>
          </ul>
        </nav>
      </div>

      <div className="logoandseeker">
      <div className="topbarIntro">
        <img src={logo} className="logo" alt="logo" />
        <h4 className="name">LEBRONSTORE</h4>
        </div>
        <div className="seeker">
          <input className="search"></input>
          <img src={lupa} className="lupa" alt="lupa" />
        </div>
      </div>


      <div className="topbarCategories">
        <nav className="navigation">
          <ul className="links">
            <li className="linkCategories">
              <NavLink activeClassName="linkCategories" className="linkCategories" exact to='/categories/jersey'>JERSEYS</NavLink>
            </li>
            <li className="linkCategories">
            <NavLink activeClassName="linkCategories" className="linkCategories" exact to='/categories/gap'>GAP</NavLink>
            </li>
            <li className="linkCategories">
            <NavLink activeClassName="linkCategories" className="linkCategories" exact to='/categories/t-shirts'>T-SHIRTS</NavLink>
            </li>
          </ul>
        </nav>
      </div>

    </header>

  )
}