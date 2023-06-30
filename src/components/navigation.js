import "./styles/nav.css"
import { Link } from "react-router-dom"

const Navigation = ({getCart}) => {
    console.log(getCart)
    return (
        <nav>
            <Link to="/cart">{getCart.length}</Link>
        </nav>
    )
}
export default Navigation