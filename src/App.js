import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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

      </header>
    </div>
  );
}

export default App;
