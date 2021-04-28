import './App.css';
import {Navbar} from "./components/Navbar/Navbar"
import {ItemListConteiner} from "./components/ItemListConteiner/ItemListConteiner"
import {ItemCount} from "./components/ItemCount/ItemCount"


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
      <ItemCount/>
    </div>
  );
}

export default App;
