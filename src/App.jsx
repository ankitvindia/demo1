 
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter, Routes ,Route} from 'react-router-dom';



const App = () => {
  return (
  <> 
  <Home/>
  <ProductList/>
  <Product/>
  <Login/>
  <Register/>
  <Cart/>
  </>
   
  
  );
};

export default App;