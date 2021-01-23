import './App.css'
import Home from "./pages/home/Home"
import Header from "./components/header/Header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './pages/checkout/Checkout'

function App() {
  return (
    <Router>
       <div className="app">
          <Header/>
          <Switch>

              <Route path="/checkout">
                <Checkout/>
              </Route>

              <Route path="/">
                <Home/>
              </Route>
              
          </Switch>
        </div> 
    </Router>
    
  )
}

export default App;
