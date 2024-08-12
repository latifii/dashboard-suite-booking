import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <>
      <Row type="horizontal" className="my-8">
        <Heading as="h2">همه سوییت ها</Heading>
        <p>فیلتر</p>
      </Row>
      <Row type="vertical" className="mb-10">
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
