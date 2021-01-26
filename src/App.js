import './App.css'
import Home from "./pages/home/Home"
import Header from "./components/header/Header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './pages/checkout/Checkout'
import Login from './pages/login/Login'

function App() {
  return (
    <Router>
       <div className="app">
          <Switch>

            <Route path="/login">
              <Login/>
            </Route>
              
              <Route path="/checkout">
                <Header/>
                <Checkout/>
              </Route>

              <Route path="/">
                <Header/>
                <Home/>
              </Route>   

          </Switch>
        </div> 
    </Router>
    
  )
}

export default App;
