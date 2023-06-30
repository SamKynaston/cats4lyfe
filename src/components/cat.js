import "./styles/cat.css"
import { useNavigate } from "react-router-dom";

const Cat = ({id, name, image, breed}) => {
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = `/cat/${id}`; 
        navigate(path);
    }
    
    return (
        <div className="item" onClick={routeChange}>
            <h1>{name}</h1>
            <img src={image} />
            <h4>{breed}</h4>
        </div>
    )
}

export default Cat