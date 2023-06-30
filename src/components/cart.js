import { useState } from "react";

import CatCart from "./cat-cart"
import "./styles/cats.css"

const CartList = ({cart, setCart, getCartCost, setTotalCost}) => {
    return (
        <>
            <h1>£{getCartCost}</h1>
            <div className="items">
                {cart.map((cat, x) => {
                    console.log(cat)
                    return (
                        <CatCart key={x} cartID={x} id={cat.id} name={cat.name} image={cat.image} breed={cat.breed} cost={cat.price} setCart={setCart} getTotalCost={getCartCost} setTotalCost={setTotalCost}/>
                    )
                })}
            </div>
        </>
    )
}
export default CartList