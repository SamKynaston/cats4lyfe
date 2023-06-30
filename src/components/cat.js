import "./styles/cat.css"
import { useNavigate } from "react-router-dom";

const Cat = ({id, name, image, breed, cost}) => {
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = `/cat/${id}`; 
        navigate(path);
    }
    
    return (
        <div className="item" id="main" onClick={routeChange}>
            <h1>{name}</h1>
            <img src={image} />
            <h4>{breed}</h4>
            <p>£{cost}</p>
        </div>
    )
}

export default Cat