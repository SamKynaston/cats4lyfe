import Cat from "./cat"
import "./styles/cats.css"

const Cats = ({listOfCats}) => {
    return (
        <div className="items">
            {listOfCats.map((cat, x) => {
                return (
                    <Cat name={cat.name} image={cat.image} breed={cat.breed}/>
                )
            })}
        </div>
    )
}
export default Cats