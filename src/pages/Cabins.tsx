import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  return (
    <>
      <Row type="horizontal" className="my-8">
        <Heading as="h2">همه سوییت ها</Heading>
        <p>فیلتر</p>
      </Row>
      <Row type="vertical" className="mb-10">
        <CabinTable />
        <CreateCabinForm />
      </Row>
    </>
  );
}

export default Cabins;
