import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './Veggies/components/Home';
import Login from './Veggies/components/Login';
import Register from './Veggies/components/Register';
import Services from './Veggies/components/Service';
import Items from './Veggies/components/Items';
import Cart from './Veggies/components/Cart';
import { CartProvider } from "react-use-cart";


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <CartProvider>
        <Route  exact path="/" component={Home}/>
        <Route exact path="/login"  component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/services"  component={Services}/>
        <Route exact path="/itemcard"  component={Items}/>
        <Route exact path="/cart"  component={Cart}/>
        </CartProvider>
        
      </Switch>
    </Router>
  </div>
);
}

export default App;



