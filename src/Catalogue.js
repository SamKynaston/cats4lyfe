import Cats from "./components/cats";

const Catalogue = (cats) => {
  return (
    <>
      <Cats listOfCats={cats.cats} />
    </>
  );
}

export default Catalogue;
