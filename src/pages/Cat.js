import { useParams } from "react-router-dom";
import CatInformation from "../components/catInformation";

const Cat = ({ cats, getCart, setCart, getTotalCost, setTotalCost }) => {
    const { ID } = useParams()
    const cat = cats[ID-1]

    if (!cat) {
        return (
            <h1>NOT FOUND!</h1>
        )
    }

    return (
        <CatInformation id={ID} name={cat.name} image={cat.image} breed={cat.breed} description={cat.description} cost={cat.price} getCart={getCart} setCart={setCart} getTotalCost={getTotalCost} setTotalCost={setTotalCost}/>
    )
}

export default Cat;