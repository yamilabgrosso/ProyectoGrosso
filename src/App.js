import './App.css';
import {Navbar} from "./components/CartWidget/CartWidget"
import {ItemListConteiner} from "./components/ItemListConteiner/ItemListConteiner"

function App() {

  const greeting = [
    {
      saludo: "Bienvenidos",
    }
  ]
  return (
    <div className="App">
      <Navbar/>
      <ItemListConteiner
      saludo = {greeting[0].saludo}
      
      
      />
    </div>
  );
}

export default App;
