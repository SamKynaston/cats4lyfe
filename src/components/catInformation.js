import "./styles/cat.css"
import { useNavigate } from "react-router-dom";

const CatInformation = ({ID, cat, getCart, setCart, getTotalCost, setTotalCost}) => {
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = `/cart`; 
        navigate(path);
    }

    const isInCart = () => {
        let toReturn = false

        getCart.map((catInArray, x) => {
            console.log(catInArray.breed === cat.breed)
            if (catInArray.breed === cat.breed) {toReturn = true}
        })

        return toReturn
    }

    return (
        <div className="item-full">
            <h1>{cat.name} - £{cat.price}</h1>
            <img src={cat.image} />
            <h2>{cat.breed}</h2>
            <p>{cat.description}</p>

            {isInCart() ? false : <button onClick={() => {
                setCart([
                    ...getCart,
                    {
                        id: ID,
                        name: cat.name,
                        breed: cat.breed,
                        image: cat.image,
                        price: cat.price,
                    },
                ]);
                setTotalCost(getTotalCost+Number(cat.price))
                routeChange();
            }}>Add to Cart</button>}
        </div>
    )
}

export default CatInformation