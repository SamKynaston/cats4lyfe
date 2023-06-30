import "./styles/cat.css"

const CatCart = ({name, image, breed, cost}) => {
    return (
        <div className="item">
            <h1>{name}</h1>
            <img src={image} />
            <h4>{breed}</h4>
            <p>£{cost}</p>
        </div>
    )
}

export default CatCart