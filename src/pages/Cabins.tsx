import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinFlter from "../features/cabins/CabinFlter";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <>
      <Row type="horizontal" className="my-8">
        <Heading as="h2">همه سوییت ها</Heading>
        <CabinFlter />
      </Row>
      <Row type="vertical" className="mb-10">
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
