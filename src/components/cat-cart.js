import "./styles/cat.css"

const CatCart = ({id, name, image, breed, cost, getCart, setCart}) => {
    return (
        <div className="item">
            <h1>{name}</h1>
            <img src={image} />
            <h4>{breed}</h4>
            <p>£{cost}</p>
            <button onClick={() => {
                setCart(old => {
                    return old.filter((_, i) => i !== id)
                })
            }}>Remove from Cart</button>
        </div>
    )
}

export default CatCart