import Cat from "./cat"
import "./styles/cats.css"

const Cats = ({listOfCats}) => {
    return (
        <div className="items">
            {listOfCats.map((cat, x) => {
                return (
                    <Cat id={x+1} name={cat.name} image={cat.image} breed={cat.breed}/>
                )
            })}
        </div>
    )
}
export default Cats