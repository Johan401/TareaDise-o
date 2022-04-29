import React, { useState, useEffect } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Footer from "./common/footer/Footer"
import { Conexion } from './data/conexion';
import {getproductos} from './components/Data'
import {AddToCart} from './business/cart'

function App() {
  const [productItems, setProductItems] = useState([])

  useEffect(() => {getproductos(setProductItems)}, [])

  const [CartItem, setCartItem] = useState([])

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={AddToCart}/>
          </Route>
        </Switch> 
        <Conexion />
         <Footer />
      </Router>
    </>
  )
}

export default App


