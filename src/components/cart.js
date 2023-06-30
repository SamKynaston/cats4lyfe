import CatCart from "./cat-cart"
import "./styles/cats.css"

const CartList = ({cart, setCart}) => {
    return (
        <div className="items">
            {cart.map((cat, x) => {
                return (
                    <CatCart key={x} id={x} name={cat.name} image={cat.image} breed={cat.breed} cost={cat.price} getCart={cart} setCart={setCart}/>
                )
            })}
        </div>
    )
}
export default CartList