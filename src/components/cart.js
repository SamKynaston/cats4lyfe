import CatCart from "./cat-cart"
import "./styles/cats.css"

const CartList = ({cart}) => {
    return (
        <div className="items">
            {cart.map((cat, x) => {
                return (
                    <CatCart key={x} name={cat.name} image={cat.image} breed={cat.breed} cost={cat.price}/>
                )
            })}
        </div>
    )
}
export default CartList