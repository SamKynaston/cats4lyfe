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
        <CatInformation ID={ID} cat={cat} getCart={getCart} setCart={setCart} getTotalCost={getTotalCost} setTotalCost={setTotalCost}/>
    )
}

export default Cat;
