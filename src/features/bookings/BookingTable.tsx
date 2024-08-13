import { useBookings } from "./useBookings";

const BookingTable: React.FC = () => {
  const { bookings, isLoading } = useBookings();
  console.log(bookings);

  return <div></div>;
};

export default BookingTable;
