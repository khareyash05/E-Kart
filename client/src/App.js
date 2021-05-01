import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Cart from "./components/Cart"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import Suits from "./components/Suits"
import TShirt from "./components/TShirt"
import Sarees from "./components/Sarees"
import {Route} from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Route exact path = "/"> 
        <Home /> 
      </Route>         
      <Route path = "/register">
        <Register />
      </Route>  
      <Route path = "/login" >
        <Login /> 
      </Route>
      <Route path = "/mycart" >
        <Cart />
      </Route>
      <Route path = "/profile" >
        <Profile />
      </Route>
      <Route path = "/suits"><Suits/></Route>      
      <Route path = "/tshirts"><TShirt/></Route>   
      <Route path = "/sarees"><Sarees/></Route>   
      <Footer/>
    </>
  );
}

export default App;
