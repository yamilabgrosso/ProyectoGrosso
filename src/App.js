import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { ProductsDetail} from "./pages/ProductsDetail";
import {Products} from "../src/pages/Products"
import {Store} from "../src/pages/Store"


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
        <Route path="/categories/:categoryId">
          <Products/>
        </Route>
        <Route path="/products">
          <Store/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
