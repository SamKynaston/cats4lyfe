import Cats from "../components/cats";

const Catalogue = ({cats}) => {
  return (
    <>
      <Cats listOfCats={cats} />
    </>
  );
}

export default Catalogue;
