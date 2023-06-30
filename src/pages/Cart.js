import CartList from "../components/cart";

const Cart = ({getCart, setCart, getCost, setCost}) => {
    if (!getCart || getCart.length < 1) {
        return (
            <>
                <h1>This is looking a little empty...</h1>
            </>
        );
    }

    return (
        <>
            <CartList cart={getCart} setCart={setCart} getCartCost={getCost} setTotalCost={setCost}/>
        </>
    );
}

export default Cart;
