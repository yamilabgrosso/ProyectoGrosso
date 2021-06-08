import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { ProductsDetail} from "./pages/ProductsDetail";
import {Products} from "../src/pages/Products"
import {Store} from "../src/pages/Store"
import {ShopCart} from "../src/pages/ShopCart"
import {CartContextProvider} from "../src/context/cartContext"
import {NoRoute} from "../src/components/NoRoute/NoRoute"

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
          <ShopCart/>
        </Route>
        <Route>
          <NoRoute/>
        </Route>

      </Switch>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
