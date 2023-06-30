import CartList from "../components/cart";

const Cart = ({getCart}) => {
    return (
        <>
            <CartList cart={getCart}/>
        </>
    );
}

export default Cart;
