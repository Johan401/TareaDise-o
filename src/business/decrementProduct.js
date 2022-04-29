import React, { useState, useEffect } from "react"



const DecreaseQty = (product) => {
    const [CartItem, setCartItem] = useState([])
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  export {DecreaseQty}