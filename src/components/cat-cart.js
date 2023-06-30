import "./styles/cat.css"
import { useNavigate } from "react-router-dom";

const CatCart = ({cartID, cat, setCart, getTotalCost, setTotalCost}) => {
    let navigate = useNavigate(); 

    const routeChangeToCatPage = () =>{ 
        let path = `/cat/${cat.id}`; 
        navigate(path);
    }

    return (
        <div className="item" id="cart">
            <h1>{cat.name}</h1>
            <img src={cat.image} onClick={routeChangeToCatPage}/>
            <h4>{cat.breed}</h4>
            <p>£{cat.price}</p>
            <button onClick={() => {
                setCart(old => {
                    return old.filter((_, i) => i !== cartID)
                })
                setTotalCost(getTotalCost-cat.price)
            }}>Remove from Cart</button>
        </div>
    )
}

export default CatCart