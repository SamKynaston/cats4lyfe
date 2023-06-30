import Cat from "./cat"
import "./styles/cats.css"

const Cats = ({listOfCats}) => {
    return (
        <div className="items">
            {listOfCats.map((cat, x) => {
                return (
                    <Cat key={x} id={x+1} name={cat.name} image={cat.image} breed={cat.breed} cost={cat.price}/>
                )
            })}
        </div>
    )
}
export default Cats