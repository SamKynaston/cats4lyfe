import "./styles/cat.css"
import { useNavigate } from "react-router-dom";

const CatCart = ({id, name, image, breed, cost, setCart, getTotalCost, setTotalCost}) => {
    let navigate = useNavigate(); 

    const routeChangeToCatPage = () =>{ 
        let path = `/cat/${id}`; 
        navigate(path);
    }

    return (
        <div className="item">
            <h1>{name}</h1>
            <img src={image} onClick={routeChangeToCatPage}/>
            <h4>{breed}</h4>
            <p>£{cost}</p>
            <button onClick={() => {
                setCart(old => {
                    return old.filter((_, i) => i !== id)
                })
                setTotalCost(getTotalCost-cost)
            }}>Remove from Cart</button>
        </div>
    )
}

export default CatCart