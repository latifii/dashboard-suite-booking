import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import BookingTable from "../features/bookings/BookingTable";

function Bookings() {
  return (
    <>
      <Row className="my-8 flex-col items-start gap-4 lg:flex-row lg:items-center">
        <Heading as="h2">رزرو ها</Heading>
        <p>فیلتر</p>
      </Row>
      <Row type="vertical">
        <BookingTable />
      </Row>
    </>
  );
}

export default Bookings;
