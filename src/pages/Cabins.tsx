import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <>
      <Row type="horizontal" className="my-8">
        <Heading as="h2">همه سوییت ها</Heading>
        <p>sddd</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
