import "./styles/cat.css"

const CatInformation = ({name, image, breed, description}) => {
    return (
        <div className="item-full">
            <h1>{name}</h1>
            <img src={image} />
            <h2>{breed}</h2>
            <p>{description}</p>
        </div>
    )
}

export default CatInformation