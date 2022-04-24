import React from "react"
import FlashDeals from "../components/flashDeals/FlashDeals"
import Annocument from "../components/annocument/Annocument"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <Annocument />
    </>
  )
}

export default Pages
