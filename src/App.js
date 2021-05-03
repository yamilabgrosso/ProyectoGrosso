import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { ProductsDetail} from "./pages/ProductsDetail";



function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/products/:productId">
          <ProductsDetail/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
