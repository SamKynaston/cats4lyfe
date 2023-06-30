import "./styles/cat.css"
import { useNavigate } from "react-router-dom";

const CatInformation = ({ID, name, image, breed, description, cost, getCart, setCart}) => {
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
                        index: ID,
                        name: name,
                        image: image,
                        price: cost,
                    },
                ]);
                routeChange();
            }}>Add to Cart</button>
        </div>
    )
}

export default CatInformation