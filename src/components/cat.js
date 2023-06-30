import "./styles/cat.css"

const Cat = ({name, image, breed}) => {
    return (
        <div className="item">
            <h1>{name}</h1>
            <img src={image} />
            <h4>{breed}</h4>
        </div>
    )
}

export default Cat