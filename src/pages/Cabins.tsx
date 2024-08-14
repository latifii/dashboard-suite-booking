import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinFilter from "../features/cabins/CabinFilter";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <>
      <Row
        type="horizontal"
        className="my-8 flex-col items-start gap-4 lg:flex-row lg:items-center"
      >
        <Heading as="h2">همه سوییت ها</Heading>
        <CabinFilter />
      </Row>
      <Row type="vertical" className="mb-10">
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
