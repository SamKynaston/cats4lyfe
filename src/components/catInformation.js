import "./styles/cat.css"
import { useNavigate } from "react-router-dom";

const CatInformation = ({ID, name, image, breed, description, cost, getCart, setCart, getTotalCost, setTotalCost}) => {
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = `/cart`; 
        navigate(path);
    }

    return (
        <div className="item-full">
            <h1>{name} - £{cost}</h1>
            <img src={image} />
            <h2>{breed}</h2>
            <p>{description}</p>
            <button onClick={() => {
                setCart([
                    ...getCart,
                    {
                        id: ID,
                        name: name,
                        image: image,
                        price: cost,
                    },
                ]);
                setTotalCost(getTotalCost+Number(cost))
                routeChange();
            }}>Add to Cart</button>
        </div>
    )
}

export default CatInformation