import "./styles/cat.css"

const CatInformation = ({ID, name, image, breed, description, cost, getCart, setCart}) => {
    return (
        <div className="item-full">
            <h1>{name} - £{cost}</h1>
            <img src={image} />
            <h2>{breed}</h2>
            <p>{description}</p>
            <button onClick={() => {
                setCart([
                    ...getCart,
                    {
                        index: ID,
                        name: name,
                        image: image,
                        price: cost,
                    },
                ]);
            }}>Add to Cart</button>
        </div>
    )
}

export default CatInformation