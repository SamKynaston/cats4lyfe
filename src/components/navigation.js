import "./styles/nav.css"
import { Link } from "react-router-dom"
import Logo from "../img/Cats4Life.png"

const Navigation = ({getCart}) => {
    console.log(getCart)
    return (
        <nav>
            <span className="left">
                <Link className="nav-item" to="/"><img src={Logo} height={25}/></Link>
            </span>
            <span className="right">
                <Link className="nav-item" to="/cart">{getCart.length}</Link>
            </span>
        </nav>
    )
}
export default Navigation