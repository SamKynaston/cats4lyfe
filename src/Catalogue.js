import Cats from "./components/cats";

const Catalogue = (cats) => {
  console.log(cats)
  return (
    <>
      <Cats listOfCats={cats.cats} />
    </>
  );
}

export default Catalogue;
