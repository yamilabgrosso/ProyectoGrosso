import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { ProductsDetail} from "./pages/ProductsDetail";
import {Products} from "../src/pages/Products"
import {Store} from "../src/pages/Store"
import {Cart} from "../src/pages/Cart"
import {CartContextProvider} from "../src/context/cartContext"


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
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
        <Route path="/cart">
          <Cart/>
        </Route>

      </Switch>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
