import Empty from "../../components/ui/Empty";
import Pagination from "../../components/ui/Pagination";
import Spinner from "../../components/ui/Spinner";
import Table from "../../components/ui/Table";
import BookingRow from "./BookingRow";
import { useBookings } from "./useBookings";

const BookingTable: React.FC = () => {
  const { bookings, isLoading, count } = useBookings();

  const headerData = ["نام سوییت", "نام مهمان", "تاریخ", "وضعیت", "مبلغ", ""];

  if (isLoading) return <Spinner />;
  if (!bookings?.length) return <Empty resourceName="رزورها" />;
  return (
    <Table headerData={headerData}>
      {bookings?.map((booking) => {
        return (
          <tr key={`key-${booking.id}`}>
            <BookingRow booking={booking} />
          </tr>
        );
      })}
      <tr>
        <th scope="row" colSpan={10} className="px-10">
          <Pagination count={count ?? 0} />
        </th>
      </tr>
    </Table>
  );
};

export default BookingTable;
