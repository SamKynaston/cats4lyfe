import { useState } from "react";

import CatCart from "./cat-cart"
import "./styles/cats.css"

const CartList = ({cart, setCart, getCartCost, setTotalCost}) => {
    return (
        <>
            <h1>£{getCartCost}</h1>
            <div className="items">
                {cart.map((cat, x) => {
                    return (
                        <CatCart key={x} cartID={x} cat={cat} setCart={setCart} getTotalCost={getCartCost} setTotalCost={setTotalCost}/>
                    )
                })}
            </div>
        </>
    )
}
export default CartList