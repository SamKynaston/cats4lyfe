import { useParams } from "react-router-dom";
import CatInformation from "./components/catInformation";

const Cat = (cats) => {
    const { ID } = useParams()
    const cat = cats.cats[ID-1]

    if (!cat) {
        return (
            <h1>NOT FOUND!</h1>
        )
    }

    return (
        <CatInformation name={cat.name} image={cat.image} breed={cat.breed} description={cat.description}/>
    )
}

export default Cat;
