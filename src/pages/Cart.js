import CartList from "../components/cart";

const Cart = ({getCart, setCart}) => {
    if (!getCart || getCart.length < 1) {
        return (
            <>
                <h1>This is looking a little empty...</h1>
            </>
        );
    }

    return (
        <>
            <CartList cart={getCart} setCart={setCart}/>
        </>
    );
}

export default Cart;
